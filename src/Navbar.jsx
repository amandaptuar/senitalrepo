import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Platform', to: '/platform?tab=demo', children: [
    { label: 'Live Demo', to: '/platform?tab=demo' },
    { label: 'Dashboard', to: '/platform?tab=dashboard' },
    { label: 'AI Triage', to: '/platform?tab=triage' },
    { label: 'Investor', to: '/platform?tab=investor' },
  ]},
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about', children: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Team', to: '/team' },
  ]},
  { label: 'Contact Us', to: '/contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileWindow, setIsMobileWindow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    const handleResize = () => {
      setIsMobileWindow(window.innerWidth <= 992);
      if (window.innerWidth > 992) {
        setIsMobileMenuOpen(false); // Reset mobile menu when resizing to desktop
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Initial check
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = (label, e) => {
    e.preventDefault(); 
    e.stopPropagation();
    setOpenDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const getMenuStyles = () => {
    if (isMobileWindow) {
      return { 
        display: 'block', 
        maxHeight: isMobileMenuOpen ? '2000px' : '0px', 
        paddingTop: isMobileMenuOpen ? '10px' : '0px',
        paddingBottom: isMobileMenuOpen ? '10px' : '0px',
        marginTop: isMobileMenuOpen ? '10px' : '0px',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
        opacity: isMobileMenuOpen ? 1 : 0,
        visibility: isMobileMenuOpen ? 'visible' : 'hidden',
        backgroundColor: '#111013'
      };
    }
    return {}; 
  };

  const getSubmenuStyles = (label) => {
    if (isMobileWindow) {
      const isOpen = openDropdowns[label];
      return { 
        display: isOpen ? 'block' : 'none',
        margin: 0,
        padding: 0
      };
    }
    return {}; 
  };

  const headerClasses = [
    isMobileWindow ? 'header-mobile' : ''
  ].filter(Boolean).join(' ');

  const headerStyle = {
    backgroundColor: '#111013',
    ...(isMobileWindow && isMobileMenuOpen ? { height: '100vh' } : {})
  };

  return (
    <header className={`${isScrolled ? 'smaller' : ''} ${headerClasses}`} style={headerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                {/* logo begin */}
                <div id="logo">
                  <Link to="/">
                    <img className="logo-main" src="/imgadd/image.png" alt="Senitel Logo" />
                    <img className="logo-mobile" src="/imgadd/image.png" alt="Senitel Logo" />
                  </Link>
                </div>
                {/* logo end */}
              </div>
              <div className="de-flex-col header-col-mid">
                {/* mainmenu begin */}
                <ul id="mainmenu" style={getMenuStyles()}>
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      {link.children && isMobileWindow && (
                        <span 
                          className={`arrow ${openDropdowns[link.label] ? 'active' : ''}`} 
                          onClick={(e) => toggleDropdown(link.label, e)}
                        ></span>
                      )}
                      <Link 
                        className="menu-item" 
                        to={link.to || "/contact"}
                        onClick={(e) => {
                          if (isMobileWindow && link.children) {
                            toggleDropdown(link.label, e);
                          } else {
                            setIsMobileMenuOpen(false);
                          }
                        }}
                      >
                        {link.label}
                      </Link>
                      {link.children && (
                        <ul style={getSubmenuStyles(link.label)}>
                          {link.children.map(child => (
                            <li key={child.label}>
                              <Link 
                                to={child.to || "/contact"} 
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                {/* mainmenu end */}
              </div>
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <Link to="/platform?tab=demo" className="btn-main fx-slide btn-line me-2"><span>Start Scan</span></Link>
                  <Link to="/contact" className="btn-main fx-slide"><span>Explore Pricing</span></Link>
                  <span 
                    id="menu-btn" 
                    className={isMobileMenuOpen ? 'menu-open' : ''}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{ display: isMobileWindow ? 'block' : 'none' }}
                  ></span>
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
