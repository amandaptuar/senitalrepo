import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <div id="wrapper">
                <div className="float-text show-on-scroll">
                    <span><Link to="/contact">Scroll to top</Link></span>
                </div>
                <div className="scrollbar-v show-on-scroll"></div>

                <Navbar />
                
                {/* content begin */}
                <div className="no-bottom no-top" id="content">

                    <div id="top"></div>

                    <section id="subheader" className="section-dark bg-dark text-light relative jarallax">
                        <div className="gradient-edge-top"></div>
                        <img src="images/background/1.webp" className="jarallax-img" alt="" />
                        <div className="container relative z-2">
                            <div className="row gy-4 gx-5 align-items-center">
                                <div className="spacer-double sm-hide"></div>

                                <div className="col-lg-6">
                                    <h1 className="mb-0 wow fadeInUp" data-wow-delay=".2s">About Us</h1>
                                    <ul className="crumb wow fadeInUp">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active">About Us</li>
                                    </ul>   
                                </div>

                                <div className="col-lg-6 text-lg-end sm-hide">
                                    <h3>"Intelligent Defense for a Secure Digital Ecosystem"</h3>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section data-bgimage="url(images/background/6.webp) top">
                        <div className="container">
                            <div className="row g-4 gx-5 align-items-center">
                                
                                <div className="col-lg-6">
                                    <div className="ms-lg-4">
                                        <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Enterprise-Grade Protection</div>
                                        <h2 className="wow fadeInUp" data-wow-delay=".2s">Pioneering AI-Powered Cyber Defense</h2>

                                        <p className="wow fadeInUp" data-wow-delay=".4s">
                                            For over 15 years, we have architected mission-critical, autonomous cyber defense infrastructure to protect global enterprises from sophisticated attacks. 
                                            By combining advanced AI models with elite security research, we deliver an intelligent, self-healing security posture. 
                                            From real-time zero-day threat intelligence to continuous vulnerability analysis, our platform ensures absolute digital sovereignty in an increasingly volatile digital landscape.
                                        </p>

                                        <Link className="btn-main fx-slide mb10 mb-3 wow fadeInUp" data-wow-delay=".6s" to="/contact"><span>Contact Our Team</span></Link>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="relative">
                                        <div className="p-4 mt-3 bg-white text-dark abs abs-centered rounded-1 text-center z-2 wow fadeIn">
                                            <h1 className="fs-72 mb-1">15</h1>
                                            <div className="fs-16 lh-1-5">Years of Experience</div>
                                        </div>

                                        <div className="row g-4">
                                            <div className="col-lg-6 wow fadeInRight">
                                                <div className="relative rounded-1 overflow-hidden">
                                                    <img src="images/misc/p1.webp" className="w-100" alt="Cybersecurity Operations Center" loading="lazy" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 wow fadeInRight" data-wow-delay=".3s">
                                                <div className="relative rounded-1 overflow-hidden">
                                                    <img src="images/misc/p2.webp" className="w-100" alt="Network Security Infrastructure" loading="lazy" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </section>

                    <div className="bg-color text-light d-flex py-4 lh-1 overflow-hidden">
                    <div className="de-marquee-list-2 wow fadeIn" data-wow-duration="2s">
                        <span className="fs-32 fw-500">AI-Powered Defense</span>
                        <span className="mx-3 fs-32 op-3">/</span>
                        <span className="fs-32 fw-500">Intelligent Threat Detection</span>
                        <span className="mx-3 fs-32 op-3">/</span>
                        <span className="fs-32 fw-500">Real-Time Analytics</span>
                        <span className="mx-3 fs-32 op-3">/</span>
                        <span className="fs-32 fw-500">Zero Trust Architecture</span>
                        <span className="mx-3 fs-32 op-3">/</span>
                        <span className="fs-32 fw-500">Automated Remediation</span>
                        <span className="mx-3 fs-32 op-3">/</span>
                        <span className="fs-32 fw-500">Advanced Cryptography</span>
                        <span className="mx-3 fs-32 op-3">/</span>
                    </div>

                    </div>

                    <section className="bg-light">
                        <div className="container">
                            <div className="row gy-4 gx-5">
                                <div className="col-lg-12">
                                    <div className="text-center">
                                        <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Autonomous Defense Infrastructure</div>
                                        <h2 className="wow fadeInUp" data-wow-delay=".2s">Zero-Trust Architecture for Advanced Threat Vectors</h2>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="relative about-images-wrapper">
                                        <div className="bg-color text-light text-center rounded-1 abs w-200px p-4 m-4 bottom-0 z-3 overflow-hidden wow zoomIn">
                                            <h2 className="mb-0">99.9%</h2>
                                            <p className="lh-1-5 fs-14 mb-0">Autonomous Threat Mitigation Rate</p>
                                        </div>
                                        <div className="rounded-1 w-90 overflow-hidden wow zoomIn">
                                            <img src="images/misc/l1.webp" className="w-100 wow scaleIn" alt="Cyber Defense Dashboard" />
                                        </div>
                                        <div className="rounded-1 w-50 abs mb-min-50 end-0 bottom-0 z-2 overflow-hidden shadow-soft wow zoomIn" data-wow-delay=".2s">
                                            <img src="images/misc/s1.webp" className="w-100 wow scaleIn" data-wow-delay=".2s" alt="Security Monitoring Interface" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="relative mb-4 wow fadeInUp" data-wow-delay=".2s">
                                        <img src="images/icons-dark/padlock.png" className="absolute w-100px p-3 mb-3 z-2" alt="Intelligent Vulnerability Analysis Icon" />
                                        <div className="ps-100">
                                            <h4>Intelligent Vulnerability Analysis</h4>
                                            <p>Leverage machine learning to continuously discover and patch systemic weaknesses, reducing exposure across complex cloud and on-premise environments.</p>
                                        </div>
                                    </div>

                                    <div className="relative mb-4 wow fadeInUp" data-wow-delay=".4s">
                                        <img src="images/icons-dark/cloud.png" className="absolute w-100px p-3 mb-3 z-2" alt="Cloud Security Icon" />
                                        <div className="ps-100">
                                            <h4>Quantum-Resistant Encryption</h4>
                                            <p>Secure highly sensitive workloads with next-generation cryptographic protocols, strict zero-trust access controls, and decentralized secure storage.</p>
                                        </div>
                                    </div>

                                    <div className="relative wow fadeInUp" data-wow-delay=".6s">
                                        <img src="images/icons-dark/quality.png" className="absolute w-100px p-3 mb-3 z-2" alt="Trust Icon" />
                                        <div className="ps-100">
                                            <h4>Uncompromising Digital Trust</h4>
                                            <p>Establish irrefutable reliability by neutralizing systemic risks before they disrupt operations, ensuring enterprise resilience and continuous compliance.</p>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>

                            <div className="spacer-single sm-hide"></div>
                        </div>
                    </section>

                    <section className="section-dark text-light bg-dark-gradient no-top no-bottom overflow-hidden">
                        <div className="container-fluid position-relative half-fluid">
                            <div className="container">
                                <div className="row">
                                    {/* Image */}
                                    <div className="col-lg-6 position-lg-absolute right-half h-100">
                                        <div className="triangle-bottomright-dark"></div>
                                        <div className="image" style={{backgroundImage: 'url(images/misc/s4.webp)', backgroundPosition: 'center', backgroundSize: 'cover'}} data-bgimage="url(images/misc/s4.webp) center"></div>
                                    </div>
                                    {/* Text */}
                                    <div className="col-lg-6">
                                        <div className="me-lg-3">
                                            <div className="py-5 my-5 me-lg-3">
                                                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Advanced Security Operations</div>
                                                <h2 className="wow fadeInUp" data-wow-delay=".2s">Proactive Defense Powered by AI Automation</h2>
                                                <p className="wow fadeInUp" data-wow-delay=".4s">
                                                    Deploy an autonomous security posture capable of detecting and neutralizing anomalies in milliseconds. 
                                                    Our platform integrates behavioral analytics, dynamic threat hunting, and automated incident response 
                                                    to transform your infrastructure into a resilient, self-healing digital ecosystem.
                                                </p>

                                                <ul className="ul-check fw-600 mb-4 wow fadeInUp" data-wow-delay=".6s">
                                                    <li>Continuous AI-driven threat monitoring</li>
                                                    <li>Algorithmic protection against zero-day exploits</li>
                                                    <li>Scalable API-first security architecture</li>
                                                    <li>Automated regulatory compliance frameworks</li>
                                                </ul>

                                                <Link className="btn-main wow fadeInUp" data-wow-delay=".9s" to="/contact">Request a Security Assessment</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>





                    <section className="section-dark bg-color text-light pt-60 pb-50 relative overflow-hidden">
                        
                        <div className="w-30 abs abs-middle end-0 me-5 op-1">
                            <img src="images/logo-big-white.webp" className="w-100 wow scaleIn" alt="" />
                        </div>
                        <div className="container">
                            <div className="row g-4">
                                <div className="col-md-10">
                                    <h3 className="mb-0 fs-32 wow fadeInRight">Ready to Upgrade to Enterprise-Grade AI Security?</h3>
                                </div>
                                <div className="col-md-2">                            
                                    <Link className="btn-main fx-slide btn-line wow fadeInLeft" to="/contact"><span>Book Consultation</span></Link>
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

export default About;
