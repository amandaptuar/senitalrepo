import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="section-dark">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-4 col-md-6 col-12 mb-sm-30">
                <img src="/imgadd/image.png" className="logo-footer" alt="" />
                <div className="spacer-20"></div>
                <p>At Senitel, we’re committed to delivering professional, high-quality cybersecurity solutions. From proactive threat monitoring to advanced data protection, we help keep your business secure while preserving its reputation and protecting it from evolving digital threats.</p>

                <div className="social-icons mb-sm-30">
                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#"><i className="fa-brands fa-youtube"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-12 mb-sm-30">
                <div className="row">
                  <div className="col-lg-5 col-6">
                    <div className="widget">
                      <h5>Company</h5>
                      <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Our Services</Link></li>
                        <li><Link to="/contact">Gallery</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-7 col-6">
                    <div className="widget">
                      <h5>Our Services</h5>
                      <ul>
                        <li><Link to="/contact">Network Security</Link></li>
                        <li><Link to="/contact">Data Encryption</Link></li>
                        <li><Link to="/contact">Identity & Access</Link></li>
                        <li><Link to="/contact">Security Monitoring</Link></li>
                        <li><Link to="/contact">Backup & Recovery</Link></li>
                        <li><Link to="/contact">Security Configuration</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mb-sm-30">
                <div className="widget">
                  <h5>Contact Us</h5>

                  <div className="fw-bold text-white">
                    <i className="icofont-location-pin me-2 id-color"></i>Head Office
                  </div>
                  123 Cyber Street, Los Angeles, CA

                  <div className="spacer-20"></div>

                  <div className="fw-bold text-white">
                    <i className="icofont-phone me-2 id-color"></i>Call Us
                  </div>
                  +1 800 987 654

                  <div className="spacer-20"></div>

                  <div className="fw-bold text-white">
                    <i className="icofont-envelope me-2 id-color"></i>Email Us
                  </div>
                  support@senitel.com
                </div>
              </div>
            </div>
          </div>

          <div className="subfooter">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="de-flex">
                    <div className="de-flex-col">
                      &copy; 2026 - Senitel by Designesia
                    </div>
                    <ul className="menu-simple">
                      <li><a href="#">Terms &amp; Conditions</a></li>
                      <li><a href="#">Privacy Policy</a></li>
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
