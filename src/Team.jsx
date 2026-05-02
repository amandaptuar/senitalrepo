import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Team = () => {
    useEffect(() => {
        const scripts = [
          "/js/plugins.js",
          "/js/designesia.js",
          "/js/custom-marquee.js",
          "/js/swiper.js",
          "/js/custom-swiper-1.js"
        ];
    
        const timeoutId = setTimeout(() => {
            scripts.forEach(src => {
              if (!document.querySelector(`script[src="${src}"]`)) {
                const script = document.createElement("script");
                script.src = src;
                script.async = false;
                document.body.appendChild(script);
              }
            });
        }, 100);
    
        window.scrollTo(0, 0);

        return () => {
          clearTimeout(timeoutId);
          scripts.forEach(src => {
            const script = document.querySelector(`script[src="${src}"]`);
            if (script) {
              script.remove();
            }
          });
        };
    }, []);

    return (
        <>
            <div id="wrapper">
                <div className="float-text show-on-scroll">
                    <span><Link to="#">Scroll to top</Link></span>
                </div>
                <div className="scrollbar-v show-on-scroll"></div>

                <Navbar />
                
                {/* content begin */}
                <div className="no-bottom no-top" id="content">

                    <div id="top"></div>

                    <section id="subheader" className="section-dark bg-dark text-light relative jarallax">
                        <div className="gradient-edge-top"></div>
                        <img src="/images/background/1.webp" className="jarallax-img" alt="" />
                        <div className="container relative z-2">
                            <div className="row gy-4 gx-5 align-items-center">
                                <div className="spacer-double sm-hide"></div>

                                <div className="col-lg-6">
                                    <h1 className="mb-0" data--delay=".2s">Our Team</h1>
                                    <ul className="crumb">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active">Our Team</li>
                                    </ul>   
                                </div>

                                <div className="col-lg-6 text-lg-end sm-hide">
                                    <h3>"Prevention is cheaper than a breach"</h3>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="row g-4">
                                {/* Team 1 */}
                                <div className="col-lg-3" data--delay="0s">
                                    <div className="rounded-1 overflow-hidden">
                                        <img src="/images/team/1.webp" className="w-100" alt="" />
                                        <div className="bg-light p-4 overflow-hidden text-center">
                                            <h4 className="mb-0">John Smith</h4>
                                            <p className="mb-2">Chief Security Officer</p>
                                            <div className="social-icons">
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-linkedin"></i></Link>
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-x-twitter"></i></Link>
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-github"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Team 2 */}
                                <div className="col-lg-3" data--delay="0.2s">
                                    <div className="rounded-1 overflow-hidden">
                                        <img src="/images/team/2.webp" className="w-100" alt="" />
                                        <div className="bg-light p-4 overflow-hidden text-center">
                                            <h4 className="mb-0">Sarah Johnson</h4>
                                            <p className="mb-2">Lead Threat Analyst</p>
                                            <div className="social-icons">
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-linkedin"></i></Link>
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-x-twitter"></i></Link>
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-github"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Team 3 */}
                                <div className="col-lg-3" data--delay="0.4s">
                                    <div className="rounded-1 overflow-hidden">
                                        <img src="/images/team/3.webp" className="w-100" alt="" />
                                        <div className="bg-light p-4 overflow-hidden text-center">
                                            <h4 className="mb-0">Thomas Bennett</h4>
                                            <p className="mb-2">Cloud Security Specialist</p>
                                            <div className="social-icons">
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-linkedin"></i></Link>
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-x-twitter"></i></Link>
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-github"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Team 4 */}
                                <div className="col-lg-3" data--delay="0.6s">
                                    <div className="rounded-1 overflow-hidden">
                                        <img src="/images/team/4.webp" className="w-100" alt="" />
                                        <div className="bg-light p-4 overflow-hidden text-center">
                                            <h4 className="mb-0">Joshua Henry</h4>
                                            <p className="mb-2">Incident Response Manager</p>
                                            <div className="social-icons">
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-linkedin"></i></Link>
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-x-twitter"></i></Link>
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-github"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Team 5 */}
                                <div className="col-lg-3" data--delay="0.8s">
                                    <div className="rounded-1 overflow-hidden">
                                        <img src="/images/team/5.webp" className="w-100" alt="" />
                                        <div className="bg-light p-4 overflow-hidden text-center">
                                            <h4 className="mb-0">Emily Davis</h4>
                                            <p className="mb-2">SOC Manager</p>
                                            <div className="social-icons">
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-linkedin"></i></Link>
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-x-twitter"></i></Link>
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-github"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Team 6 */}
                                <div className="col-lg-3" data--delay="1s">
                                    <div className="rounded-1 overflow-hidden">
                                        <img src="/images/team/6.webp" className="w-100" alt="" />
                                        <div className="bg-light p-4 overflow-hidden text-center">
                                            <h4 className="mb-0">Michael Lee</h4>
                                            <p className="mb-2">Senior Penetration Tester</p>
                                            <div className="social-icons">
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-linkedin"></i></Link>
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-x-twitter"></i></Link>
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-github"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Team 7 */}
                                <div className="col-lg-3" data--delay="1.2s">
                                    <div className="rounded-1 overflow-hidden">
                                        <img src="/images/team/7.webp" className="w-100" alt="" />
                                        <div className="bg-light p-4 overflow-hidden text-center">
                                            <h4 className="mb-0">Olivia Martinez</h4>
                                            <p className="mb-2">Compliance & Risk Specialist</p>
                                            <div className="social-icons">
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-linkedin"></i></Link>
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-x-twitter"></i></Link>
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-github"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Team 8 */}
                                <div className="col-lg-3" data--delay="1.4s">
                                    <div className="rounded-1 overflow-hidden">
                                        <img src="/images/team/8.webp" className="w-100" alt="" />
                                        <div className="bg-light p-4 overflow-hidden text-center">
                                            <h4 className="mb-0">David Wilson</h4>
                                            <p className="mb-2">Digital Forensics Expert</p>
                                            <div className="social-icons">
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-linkedin"></i></Link>
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-x-twitter"></i></Link>
                                                <Link to="/contact"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-github"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="section-dark bg-color text-light pt-60 pb-50 relative overflow-hidden">
                        
                        <div className="w-30 abs abs-middle end-0 me-5 op-1">
                            <img src="/images/logo-big-white.webp" className="w-100" alt="" />
                        </div>
                        <div className="container">
                            <div className="row g-4">
                                <div className="col-md-10">
                                    <h3 className="mb-0 fs-32">Need 24/7 Protection From Cyber Attacks?</h3>
                                </div>
                                <div className="col-md-2">                            
                                    <Link className="btn-main fx-slide btn-line" to="/platform?tab=demo"><span>Start Scan</span></Link>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
                {/* content end */}

                <Footer />
            </div>
        </>
    );
};

export default Team;
