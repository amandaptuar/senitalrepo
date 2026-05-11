import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="section-dark bg-dark-2 text-light">
          <div className="container">
            <div className="row gx-5 gy-4">
              <div className="col-lg-4 col-md-6 col-12">
                <img src="/imgadd/image.png" className="logo-footer mb-3" alt="Senitel" />
                <p className="text-light-50 pe-lg-4" style={{ fontSize: '0.95rem' }}>At Senitel, we’re committed to delivering professional, high-quality cybersecurity solutions. From proactive threat monitoring to advanced data protection, we help keep your business secure while preserving its reputation and protecting it from evolving digital threats.</p>

                <div className="social-icons mt-4">
                  <Link to="/contact"><i className="fa-brands fa-facebook-f"></i></Link>
                  <Link to="/contact"><i className="fa-brands fa-x-twitter"></i></Link>
                  <Link to="/contact"><i className="fa-brands fa-whatsapp"></i></Link>
                  <Link to="/contact"><i className="fa-brands fa-instagram"></i></Link>
                  <Link to="/contact"><i className="fa-brands fa-youtube"></i></Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-12 mt-5 mt-lg-0">
                <div className="row gy-4">
                  <div className="col-6">
                    <div className="widget">
                      <h5 className="id-color mb-3">Company</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2"><Link to="/" className="text-light-50 hover-text-white transition-all">Home</Link></li>
                        <li className="mb-2"><Link to="/services" className="text-light-50 hover-text-white transition-all">Our Services</Link></li>
                        <li className="mb-2"><Link to="/contact" className="text-light-50 hover-text-white transition-all">Gallery</Link></li>
                        <li className="mb-2"><Link to="/about" className="text-light-50 hover-text-white transition-all">About Us</Link></li>
                        <li className="mb-2"><Link to="/contact" className="text-light-50 hover-text-white transition-all">Blog</Link></li>
                        <li className="mb-2"><Link to="/contact" className="text-light-50 hover-text-white transition-all">Contact</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="widget">
                      <h5 className="id-color mb-3">Our Services</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2"><Link to="/services/ai-cybersecurity-consulting" className="text-light-50 hover-text-white transition-all">AI Cybersecurity Consulting</Link></li>
                        <li className="mb-2"><Link to="/services/metasploit-framework" className="text-light-50 hover-text-white transition-all">Offensive Security &amp; Metasploit</Link></li>
                        <li className="mb-2"><Link to="/services/ai-security-tools-automation" className="text-light-50 hover-text-white transition-all">Security Orchestration &amp; AI (SOAR)</Link></li>
                        <li className="mb-2"><Link to="/contact" className="text-light-50 hover-text-white transition-all">Attack Simulation &amp; Breach Testing</Link></li>
                        <li className="mb-2"><Link to="/contact" className="text-light-50 hover-text-white transition-all">Data Protection &amp; Intelligent Encryption</Link></li>
                        <li className="mb-2"><Link to="/contact" className="text-light-50 hover-text-white transition-all">Security Configuration</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mt-5 mt-lg-0">
                <div className="widget bg-dark-gradient p-4 rounded-3 border-top border-color border-3 shadow-sm h-100">
                  <h5 className="id-color mb-4">Contact Us</h5>

                  <div className="d-flex align-items-start mb-3">
                    <i className="icofont-location-pin fs-4 id-color me-3 mt-1"></i>
                    <div>
                      <div className="fw-bold text-white mb-1">Head Office</div>
                      <span className="text-light-50" style={{ fontSize: '0.9rem' }}>123 Cyber Street, Los Angeles, CA</span>
                    </div>
                  </div>



                  <div className="d-flex align-items-start">
                    <i className="icofont-envelope fs-4 id-color me-3 mt-1"></i>
                    <div>
                      <div className="fw-bold text-white mb-1">Email Us</div>
                      <span className="text-light-50" style={{ fontSize: '0.9rem' }}>support@senitel.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="subfooter mt-5 border-top border-secondary border-opacity-25 pt-4 pb-4 bg-dark-3">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="de-flex d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div className="de-flex-col mb-3 mb-md-0 text-light-50 text-center text-md-start" style={{ fontSize: '0.9rem' }}>
                      &copy; 2026 Sentinel. All Rights Reserved.
                    </div>
                    <ul className="menu-simple d-flex flex-wrap justify-content-center gap-3 list-unstyled mb-0">
                      <li><Link to="/contact" className="text-light-50 hover-text-white transition-all text-decoration-none">Terms &amp; Conditions</Link></li>
                      <li><Link to="/contact" className="text-light-50 hover-text-white transition-all text-decoration-none">Privacy Policy</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    );
};

export default Footer;
