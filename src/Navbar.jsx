import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Platform', to: '/platform?tab=demo', children: [
    { label: 'Live Demo', to: '/platform?tab=demo' },
    { label: 'Dashboard', to: '/platform?tab=dashboard' },
    { label: 'AI Triage', to: '/platform?tab=triage' },
    { label: 'Investor', to: '/platform?tab=investor' },
  ]},
  { label: 'Services', to: '/services', children: [
    { label: 'All Services', to: '/services' },
    { label: 'Metasploit Framework', to: '/services/metasploit-framework' },
    { label: 'AI Consulting', to: '/services/ai-cybersecurity-consulting' },
    { label: 'AI Tools & Automation', to: '/services/ai-security-tools-automation' },
  ]},
  { label: 'About', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Single source of truth: keyed by link label
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileWindow, setIsMobileWindow] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= 50);

    const handleResize = () => {
      const mobile = window.innerWidth <= 992;
      setIsMobileWindow(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
        setOpenDropdowns({});
      }
    };

    // Tap outside header → close everything
    const handleOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
        setOpenDropdowns({});
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside, { passive: true });

    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, []);

  // ONLY source that may toggle a dropdown — mutual exclusion: one open at a time
  const toggleDropdown = (label, e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdowns(prev => {
      const isCurrentlyOpen = !!prev[label];
      // Close all, then open the tapped one (unless it was already open)
      const next = {};
      if (!isCurrentlyOpen) next[label] = true;
      return next;
    });
  };

  // Close everything when navigating
  const handleNavClose = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdowns({});
  };

  /* ── style helpers ─────────────────────────────────────────── */

  const getMenuStyles = () => {
    if (!isMobileWindow) return {};
    return {
      display: 'block',
      maxHeight: isMobileMenuOpen ? '1000px' : '0px',
      paddingTop:    isMobileMenuOpen ? '10px' : '0px',
      paddingBottom: isMobileMenuOpen ? '10px' : '0px',
      marginTop:     isMobileMenuOpen ? '10px' : '0px',
      overflow: 'hidden',
      transition: 'max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease',
      opacity:    isMobileMenuOpen ? 1 : 0,
      visibility: isMobileMenuOpen ? 'visible' : 'hidden',
      backgroundColor: 'transparent',
    };
  };

  const getSubmenuStyles = (label) => {
    if (!isMobileWindow) return {};
    const isOpen = !!openDropdowns[label];
    // Must override global style.css rules:
    //   #mainmenu li ul { visibility: hidden; opacity: 0; position: absolute; }
    //   #mainmenu li:hover > ul { visibility: visible; opacity: 1; }
    return {
      position: 'static',      // override: was absolute
      visibility: 'visible',   // override: was hidden
      opacity: 1,              // override: was 0
      display: 'block',
      height: 'auto',
      maxHeight: isOpen ? '500px' : '0px',
      overflow: 'hidden',
      transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      margin: 0,
      padding: 0,
      background: 'rgba(17,16,19,0.95)',
      border: 'none',
    };
  };

  /* ── header inline style ────────────────────────────────────── */

  const headerStyle = {
    backgroundColor: isMobileWindow && isMobileMenuOpen
      ? 'rgba(17, 16, 19, 0.98)'
      : '#111013',
    backdropFilter: isMobileWindow && isMobileMenuOpen ? 'blur(10px)' : 'none',
    transition: 'background-color 0.4s ease',
    ...(isMobileWindow && isMobileMenuOpen
      ? { height: '100vh', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999 }
      : {}),
  };

  const headerClasses = [isMobileWindow ? 'header-mobile' : '']
    .filter(Boolean)
    .join(' ');

  /* ── render ─────────────────────────────────────────────────── */

  return (
    <header
      ref={headerRef}
      className={`${isScrolled ? 'smaller' : ''} ${headerClasses}`}
      style={headerStyle}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">

              {/* Logo */}
              <div className="de-flex-col">
                <div id="logo">
                  <Link to="/" onClick={handleNavClose} style={{ display: 'inline-block', padding: '12px 0' }}>
                    <img className="logo-main"   src="/imgadd/image.png" alt="Sentinel Logo" />
                    <img className="logo-mobile" src="/imgadd/image.png" alt="Sentinel Logo" />
                  </Link>
                </div>
              </div>

              {/* Main menu */}
              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu" style={getMenuStyles()}>
                  {navLinks.map((link) => {
                    const isOpen = !!openDropdowns[link.label];

                    return (
                      <li key={link.label} className={link.children ? 'has-child' : ''}>

                        {isMobileWindow && link.children ? (
                          /*
                           * MOBILE + has children
                           * ─────────────────────
                           * Row: [label link] [chevron button]
                           * The chevron button is the ONLY toggle source.
                           * The label link navigates (and closes the menu).
                           * No duplicate onClick — the bug is gone.
                           */
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}>
                            <Link
                              className="menu-item"
                              to={link.to}
                              style={{ flex: 1 }}
                              onClick={handleNavClose}
                            >
                              {link.label}
                            </Link>

                            {/* ← single, dedicated chevron toggle button */}
                            <button
                              type="button"
                              aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${link.label}`}
                              aria-expanded={isOpen}
                              onClick={(e) => toggleDropdown(link.label, e)}
                              style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '0 14px',
                                color: '#ffffff',
                                fontSize: '14px',
                                minWidth: '44px',
                                minHeight: '44px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                                lineHeight: 1,
                              }}
                            >
                              ▾
                            </button>
                          </div>
                        ) : (
                          /*
                           * DESKTOP or links without children
                           * Desktop hover handled by style.css as before.
                           */
                          <Link
                            className="menu-item"
                            to={link.to}
                            onClick={handleNavClose}
                          >
                            {link.label}
                          </Link>
                        )}

                        {/* Submenu */}
                        {link.children && (
                          <ul style={getSubmenuStyles(link.label)}>
                            {link.children.map((child) => (
                              <li key={child.label}>
                                <Link to={child.to} onClick={handleNavClose}>
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Side area (buttons + hamburger) */}
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <Link to="/platform?tab=demo" className="btn-main fx-slide btn-line me-2">
                    <span>Start Scan</span>
                  </Link>

                  {/* Hamburger — toggles ONLY the mobile menu, never the submenu */}
                  <span
                    id="menu-btn"
                    className={isMobileMenuOpen ? 'menu-open' : ''}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMobileMenuOpen((prev) => !prev);
                    }}
                    style={{ display: isMobileWindow ? 'block' : 'none' }}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
