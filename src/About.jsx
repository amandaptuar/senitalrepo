import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
    useEffect(() => {
        const scripts = [
          "/js/plugins.js",
          "/js/designesia.js",
          "/js/custom-marquee.js"
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
                    <span><Link to="/contact">Scroll to top</Link></span>
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
                                    <h1 className="mb-0" data--delay=".2s">About Us</h1>
                                    <ul className="crumb">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active">About Us</li>
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
                            <div className="row g-4 gx-5 align-items-center">
                                
                                <div className="col-lg-6">
                                    <div className="ms-lg-4">
                                        <div className="subtitle s2 mb-3" data--delay=".0s">About Us</div>
                                        <h2 className="" data--delay=".2s">Defending Your Digital World, 24/7</h2>

                                        <p className="" data--delay=".4s">
                                            For over 15 years, we’ve been safeguarding organizations from evolving cyber threats. 
                                            Our team of experts provides end-to-end security solutions — from proactive threat detection 
                                            and vulnerability assessments to rapid incident response — ensuring your data, systems, and 
                                            reputation remain fully protected in an ever-changing digital landscape.
                                        </p>

                                        <Link className="btn-main fx-slide mb10 mb-3" data--delay=".6s" to="/contact"><span>Start For Free</span></Link>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="relative">
                                        <div className="p-4 mt-3 bg-white text-dark abs abs-centered rounded-1 text-center z-2">
                                            <h1 className="fs-72 mb-1">15</h1>
                                            <div className="fs-16 lh-1-5">Years of Experience</div>
                                        </div>

                                        <div className="row g-4">
                                            <div className="col-lg-6">
                                                <div className="relative rounded-1 overflow-hidden">
                                                    <img src="/images/misc/p1.webp" className="w-100" alt="Cybersecurity Operations Center" loading="lazy" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6" data--delay=".3s">
                                                <div className="relative rounded-1 overflow-hidden">
                                                    <img src="/images/misc/p2.webp" className="w-100" alt="Network Security Infrastructure" loading="lazy" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </section>

                    <div className="bg-color text-light d-flex py-4 lh-1 overflow-hidden">
                    <div className="de-marquee-list-2" data--duration="2s">
                        <span className="fs-32 fw-500">Network Security</span>
                        <span className="mx-3 fs-32 op-3">/</span>
                        <span className="fs-32 fw-500">Endpoint Protection</span>
                        <span className="mx-3 fs-32 op-3">/</span>
                        <span className="fs-32 fw-500">Threat Intelligence</span>
                        <span className="mx-3 fs-32 op-3">/</span>
                        <span className="fs-32 fw-500">Penetration Testing</span>
                        <span className="mx-3 fs-32 op-3">/</span>
                        <span className="fs-32 fw-500">Security Audits</span>
                        <span className="mx-3 fs-32 op-3">/</span>
                        <span className="fs-32 fw-500">Incident Response</span>
                        <span className="mx-3 fs-32 op-3">/</span>
                    </div>

                    </div>

                    <section className="bg-light">
                        <div className="container">
                            <div className="row gy-4 gx-5">
                                <div className="col-lg-12">
                                    <div className="text-center">
                                        <div className="subtitle s2 mb-3" data--delay=".0s">Cybersecurity Experts</div>
                                        <h2 className="" data--delay=".2s">Comprehensive Cybersecurity Solutions for Modern Threats</h2>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="relative">
                                        <div className="bg-color text-light text-center rounded-1 abs w-200px p-4 m-4 bottom-0 z-3 overflow-hidden zoomIn">
                                            <h2 className="mb-0">99.9%</h2>
                                            <p className="lh-1-5 fs-14 mb-0">Threat detection and prevention rate</p>
                                        </div>
                                        <div className="rounded-1 w-90 overflow-hidden zoomIn">
                                            <img src="/images/misc/l1.webp" className="w-100" alt="Cyber Defense Dashboard" />
                                        </div>
                                        <div className="rounded-1 w-50 abs mb-min-50 end-0 bottom-0 z-2 overflow-hidden shadow-soft zoomIn" data--delay=".2s">
                                            <img src="/images/misc/s1.webp" className="w-100" data--delay=".2s" alt="Security Monitoring Interface" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="relative mb-4" data--delay=".2s">
                                        <img src="/images/icons-dark/padlock.png" className="absolute w-100px p-3 mb-3 z-2" alt="Vulnerability Assessment Icon" />
                                        <div className="ps-100">
                                            <h4>Vulnerability Assessment</h4>
                                            <p>Identify weaknesses before attackers do, reduce risk exposure, and strengthen your overall security posture.</p>
                                        </div>
                                    </div>

                                    <div className="relative mb-4" data--delay=".4s">
                                        <img src="/images/icons-dark/cloud.png" className="absolute w-100px p-3 mb-3 z-2" alt="Safety Icon" />
                                        <div className="ps-100">
                                            <h4>Data Protection</h4>
                                            <p>Safeguard sensitive data against breaches and leaks with strong encryption, access control, and secure storage.</p>
                                        </div>
                                    </div>

                                    <div className="relative" data--delay=".6s">
                                        <img src="/images/icons-dark/quality.png" className="absolute w-100px p-3 mb-3 z-2" alt="Reputation Icon" />
                                        <div className="ps-100">
                                            <h4>Brand Reputation</h4>
                                            <p>Maintain customer trust and brand integrity by preventing cyber incidents and demonstrating strong data responsibility.</p>
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
                                        <div className="image" style={{backgroundImage: 'url(/images/misc/s4.webp)', backgroundPosition: 'center', backgroundSize: 'cover'}} data-bgimage="url(/images/misc/s4.webp) center"></div>
                                    </div>
                                    {/* Text */}
                                    <div className="col-lg-6">
                                        <div className="me-lg-3">
                                            <div className="py-5 my-5 me-lg-3">
                                                <div className="subtitle s2 mb-3" data--delay=".0s">Maximum Protection</div>
                                                <h2 className="" data--delay=".2s">Cybersecurity Solutions for Complete Digital Safety</h2>
                                                <p className="" data--delay=".4s">
                                                    Safeguard your business with our comprehensive cybersecurity services. 
                                                    We protect your data, networks, and infrastructure using advanced threat detection, 
                                                    proactive defense strategies, and rapid incident response — ensuring peace of mind 
                                                    in an increasingly hostile digital world.
                                                </p>

                                                <ul className="ul-check fw-600 mb-4" data--delay=".6s">
                                                    <li>24/7 threat monitoring and response</li>
                                                    <li>Advanced protection against malware and ransomware</li>
                                                    <li>Customized security solutions for your business</li>
                                                    <li>Compliance-ready and future-proof defense strategies</li>
                                                </ul>

                                                <Link className="btn-main" data--delay=".9s" to="/contact">Request a Security Assessment</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className="container">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="text-center">
                                        <div className="subtitle">Our Team</div> 
                                        <h2 className="" data--delay=".2s">Complete Cyber Defense Against Modern Attacks</h2>
                                    </div>
                                </div>
                                
                                <div className="col-lg-3">
                                    <div className="rounded-1 overflow-hidden">
                                        <img src="/images/team/1.webp" className="w-100" alt="Cybersecurity Expert" loading="lazy" />
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

                                <div className="col-lg-3">
                                    <div className="rounded-1 overflow-hidden">
                                        <img src="/images/team/2.webp" className="w-100" alt="Threat Analyst" />
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

                                <div className="col-lg-3">
                                    <div className="rounded-1 overflow-hidden">
                                        <img src="/images/team/3.webp" className="w-100" alt="Cloud Security Specialist" />
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

                                <div className="col-lg-3">
                                    <div className="rounded-1 overflow-hidden">
                                        <img src="/images/team/4.webp" className="w-100" alt="Incident Response Manager" />
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
                                    <Link className="btn-main fx-slide btn-line" to="/contact"><span>Start For Free</span></Link>
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
