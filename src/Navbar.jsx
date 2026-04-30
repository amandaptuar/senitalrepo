import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: 'index.html', children: [
    { label: 'Homepage 1', href: 'index.html' },
    { label: 'Homepage 2', href: 'homepage-2.html' },
    { label: 'Homepage 3', href: 'homepage-3.html' },
    { label: 'Homepage 4', href: 'homepage-4.html' },
    { label: 'Homepage 5', href: 'homepage-5.html' },
    { label: 'Homepage 6', href: 'homepage-6.html' },
    { label: 'Homepage 7', href: 'homepage-7.html' },
    { label: 'New: Homepage 8', href: 'homepage-8.html' },
  ]},
  { label: 'Services', href: 'services.html', children: [
    { label: 'Services 1', href: 'services.html' },
    { label: 'Services 2', href: 'services-2.html' },
    { label: 'Services 3', href: 'services-3.html' },
    { label: 'Services Single', href: 'service-single.html' },
    { label: 'Pricing', href: 'pricing.html' },
    { label: 'Appointment', href: 'appointment.html' },
  ]},
  { label: 'About', href: 'about.html', children: [
    { label: 'About', href: 'about.html' },
    { label: 'Our Team', href: 'team.html' },
    { label: 'Careers', href: 'careers.html' },
    { label: 'Gallery Filter', href: 'gallery-filter.html' },
    { label: 'Gallery Carousel', href: 'gallery-carousel.html' },
  ]},
  { label: 'Projects', href: 'projects.html', children: [
    { label: 'Projects 1', href: 'projects.html' },
    { label: 'Projects 2', href: 'projects-2.html' },
    { label: 'Project Single', href: 'project-single.html' },
  ]},
  { label: 'Blog', href: 'blog.html' },
  { label: 'Contact Us', href: 'contact.html' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileWindow, setIsMobileWindow] = useState(false);

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
        visibility: isMobileMenuOpen ? 'visible' : 'hidden'
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
    'transparent',
    isMobileWindow ? 'header-mobile' : ''
  ].filter(Boolean).join(' ');

  return (
    <header className={headerClasses}>
      <div className="container">
          <div className="row">
              <div className="col-md-12">
                  <div className="de-flex sm-pt10">
                      <div className="de-flex-col">
                          {/* logo begin */}
                          <div id="logo">
                              <a href="index.html">
                                  <div id="custom-logo-wrapper">
                                      <img className="logo-main" src="/imgadd/senitalnewlogo.jpeg" alt="CyberGuard Logo" />
                                      <img className="logo-mobile" src="/imgadd/senitalnewlogo.jpeg" alt="CyberGuard Logo" />
                                  </div>
                              </a>
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
                                  <a className="menu-item" href={link.href}>{link.label}</a>
                                  {link.children && (
                                    <ul style={getSubmenuStyles(link.label)}>
                                      {link.children.map(child => (
                                        <li key={child.label}><a href={child.href}>{child.label}</a></li>
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
                              <a href="appointment.html" className="btn-main fx-slide btn-line me-2"><span>Start Scan</span></a>
                              <a href="pricing.html" className="btn-main fx-slide"><span>Explore Pricing</span></a>
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
