import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Services = () => {
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
                        <img src="/images/background/2.webp" className="jarallax-img" alt="" />
                        <div className="container relative z-2">
                            <div className="row gy-4 gx-5 align-items-center">
                                <div className="spacer-double sm-hide"></div>

                                <div className="col-lg-6">
                                    <h1 className="mb-0" data--delay=".2s">Our Service</h1>
                                    <ul className="crumb">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active">Our Services</li>
                                    </ul>   
                                </div>

                                <div className="col-lg-6 text-lg-end sm-hide">
                                    <h3>"Prevention is cheaper than a breach"</h3>
                                </div>
                            </div>
                        </div>

                    </section>
                    
                    <section data-bgimage="url(/images/background/6.webp) top">
                        <div className="container">

                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6" data--delay="0s">
                                    <div className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden">
                                        <div className="relative z-2" data--delay=".0s">
                                            <img src="/images/icons-white/cyber-security.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt="" />
                                            <h4>Network Security</h4>
                                            <p>Deploying firewalls and intrusion detection systems to safeguard networks.</p>
                                            <Link className="btn-main fx-slide bg-dark" to="/contact"><span>Learn More</span></Link>
                                        </div>
                                        <img src="/images/icons-white/cyber-security.png" className="w-80 abs start-60 abs-middle op-1" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6" data--delay=".2s">
                                    <div className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden">
                                        <div className="relative z-2" data--delay=".2s">
                                            <img src="/images/icons-white/encryption.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt="" />
                                            <h4>Data Encryption</h4>
                                            <p>Encrypting sensitive data at rest and in transit using advanced encryption.</p>
                                            <Link className="btn-main fx-slide bg-dark" to="/contact"><span>Learn More</span></Link>
                                        </div>
                                        <img src="/images/icons-white/encryption.png" className="w-80 abs start-60 abs-middle op-1" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6" data--delay=".4s">
                                    <div className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden">
                                        <div className="relative z-2" data--delay=".4s">
                                            <img src="/images/icons-white/fingerprint.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt="" />
                                            <h4>Identity & Access</h4>
                                            <p>Managing user identities and access with MFA and detailed role-based control.</p>
                                            <Link className="btn-main fx-slide bg-dark" to="/contact"><span>Learn More</span></Link>
                                        </div>
                                        <img src="/images/icons-white/fingerprint.png" className="w-80 abs start-60 abs-middle op-1" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6" data--delay=".6s">
                                    <div className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden">
                                        <div className="relative z-2" data--delay=".6s">
                                            <img src="/images/icons-white/monitoring.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt="" />
                                            <h4>Security Monitoring</h4>
                                            <p>24/7 monitoring with advanced SIEM systems for real-time detection.</p>
                                            <Link className="btn-main fx-slide bg-dark" to="/contact"><span>Learn More</span></Link>
                                        </div>
                                        <img src="/images/icons-white/monitoring.png" className="w-80 abs start-60 abs-middle op-1" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6" data--delay=".8s">
                                    <div className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden">
                                        <div className="relative z-2" data--delay=".8s">
                                            <img src="/images/icons-white/cloud-storage.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt="" />
                                            <h4>Backup & Recovery</h4>
                                            <p>Protecting critical data with secure backups and rapid recovery plans.</p>
                                            <Link className="btn-main fx-slide bg-dark" to="/contact"><span>Learn More</span></Link>
                                        </div>
                                        <img src="/images/icons-white/cloud-storage.png" className="w-80 abs start-60 abs-middle op-1" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6" data--delay="1s">
                                    <div className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden">
                                        <div className="relative z-2" data--delay="1s">
                                            <img src="/images/icons-white/settings.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt="" />
                                            <h4>Security Configuration</h4>
                                            <p>Hardening systems and applying secure configurations across all infrastructure.</p>
                                            <Link className="btn-main fx-slide bg-dark" to="/contact"><span>Learn More</span></Link>
                                        </div>
                                        <img src="/images/icons-white/settings.png" className="w-80 abs start-60 abs-middle op-1" alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="section-dark bg-dark-2">
                        <div className="container">
                            <div className="row g-4 justify-content-center mb-2">
                                <div className="col-lg-12 text-light">
                                    <div className="text-center">
                                        <div className="subtitle">Why Choose Us</div> 
                                        <h2 className="" data--delay=".2s">Complete Cyber Defense Against Modern Attacks</h2>
                                        <p className="lead" data--delay=".4s">Stay protected with a fully integrated defense strategy built for today’s complex cyber landscape.
        From ransomware to phishing and zero-day exploits, we provide comprehensive protection across networks, endpoints, and cloud environments.</p>
                                    </div>
                                </div>                                       
                            </div>

                            <div className="row g-4">

                                <div className="col-lg-6" data--delay=".0s">
                                    <Link to="/contact" className="hover overflow-hidden rounded-1 bg-dark text-light d-block">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-sm-6">
                                                <div className="p-40">
                                                    <h3>Advanced Threat Detection</h3>
                                                    <p className="mb-0">Leverage real-time monitoring and AI-driven analytics to detect threats on your systems.</p>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="relative overflow-hidden">
                                                    <h3 className="abs text-white fs-32 lh-1 p-4 top-0 start-0 z-3">01</h3>
                                                    <img src="/images/misc/s2.webp" className="w-100 hover-scale-1-2" alt="Threat Detection" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-lg-6" data--delay=".2s">
                                    <Link to="/contact" className="hover overflow-hidden rounded-1 bg-dark text-light d-block">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-sm-6">
                                                <div className="p-40">
                                                    <h3>Zero Trust Architecture</h3>
                                                    <p className="mb-0">Enforce strict access control and verification at every level to prevent lateral movement in your network.</p>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="relative overflow-hidden">
                                                    <h3 className="abs text-white fs-32 lh-1 p-4 top-0 start-0 z-3">02</h3>
                                                    <img src="/images/misc/s3.webp" className="w-100 hover-scale-1-2" alt="Zero Trust" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                            
                        </div>
                    </section>

                    <section className="bg-color text-light pt-60 pb-50 relative overflow-hidden">
                        
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

export default Services;
