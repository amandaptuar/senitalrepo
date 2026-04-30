import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/contact', children: [
    { label: 'Services 1', to: '/contact' },
    { label: 'Services 2', to: '/contact' },
    { label: 'Services 3', to: '/contact' },
    { label: 'Services Single', to: '/contact' },
    { label: 'Pricing', to: '/contact' },
    { label: 'Appointment', to: '/contact' },
  ]},
  { label: 'About', to: '/about', children: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Team', to: '/contact' },
    { label: 'Careers', to: '/contact' },
    { label: 'Gallery Filter', to: '/contact' },
    { label: 'Gallery Carousel', to: '/contact' },
  ]},
  { label: 'Projects', to: '/contact', children: [
    { label: 'Projects 1', to: '/contact' },
    { label: 'Projects 2', to: '/contact' },
    { label: 'Project Single', to: '/contact' },
  ]},
  { label: 'Blog', to: '/contact' },
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
    setOpenDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const getMenuStyles = () => {
    if (isMobileWindow) {
      return { 
        display: 'block', 
        maxHeight: isMobileMenuOpen ? '600px' : '0px', 
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
        display: 'block',
        maxHeight: isOpen ? '400px' : '0px',
        paddingTop: isOpen ? '5px' : '0px',
        paddingBottom: isOpen ? '5px' : '0px',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden'
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
                      {link.to ? (
                        <Link className="menu-item" to={link.to}>{link.label}</Link>
                      ) : (
                        <a className="menu-item" href={link.href}>{link.label}</a>
                      )}
                      {link.children && (
                        <ul style={getSubmenuStyles(link.label)}>
                          {link.children.map(child => (
                            <li key={child.label}>
                              {child.to ? (
                                <Link to={child.to}>{child.label}</Link>
                              ) : (
                                <a href={child.href}>{child.label}</a>
                              )}
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
                  <Link to="/contact" className="btn-main fx-slide btn-line me-2"><span>Start Scan</span></Link>
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
