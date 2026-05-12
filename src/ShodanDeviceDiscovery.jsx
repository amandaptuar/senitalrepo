import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const ShodanDeviceDiscovery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div id="wrapper">
            <div className="float-text show-on-scroll">
                <span><a href="#top">Scroll to top</a></span>
            </div>
            <div className="scrollbar-v show-on-scroll"></div>

            <Navbar />

            <div className="no-bottom no-top" id="content">
                <div id="top"></div>

                {/* Hero Section */}
                <section id="subheader" className="section-dark bg-dark text-light relative jarallax overflow-hidden">
                    <div className="gradient-edge-top"></div>
                    <img src="images/background/9.webp" className="jarallax-img" alt="" />
                    <div className="container relative z-2">
                        <div className="row gy-4 gx-lg-5 align-items-center">
                            <div className="spacer-double sm-hide"></div>
                            <div className="col-lg-8 text-break">
                                <h1 className="mb-3 fw-bold text-wrap wow fadeInUp" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2' }} data-wow-delay=".2s">Discover Exposed Internet Devices Before Attackers Do</h1>
                                <p className="lead mb-4 text-wrap wow fadeInUp" data-wow-delay=".4s">Gain deep visibility into internet-facing assets, open ports, exposed systems, and unmanaged infrastructure using enterprise-grade Shodan intelligence.</p>
                                <ul className="crumb mb-4 text-wrap wow fadeInUp" data-wow-delay=".6s">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li className="active text-break">Shodan Device Discovery</li>
                                </ul>
                                <div className="mt-4 wow fadeInUp" data-wow-delay=".8s">
                                    <Link to="/contact" className="btn-main fx-slide me-3"><span>Request Consultation</span></Link>
                                    <Link to="/contact" className="btn-main btn-line fx-slide"><span>Schedule Demo</span></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center sm-hide">
                                <img src="images/icons-white/cyber-security.png" alt="Device Discovery" className="w-50 op-5" style={{ maxWidth: '200px' }} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overview Section */}
                <section className="bg-dark-2 text-light py-5 relative overflow-hidden">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-7 text-break">
                                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Shodan Reconnaissance</div>
                                <h2 className="mb-3 text-wrap wow fadeInUp" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }} data-wow-delay=".2s">Real-Time Visibility Into Exposed Services</h2>
                                <p className="lead mb-4 text-wrap wow fadeInUp" data-wow-delay=".4s">
                                    Our Shodan Device Discovery services help organizations identify exposed internet-facing infrastructure including servers, IoT devices, routers, firewalls, industrial systems, and cloud assets. We provide real-time visibility into exposed services and help reduce attack surface risks before exploitation occurs.
                                </p>
                                <ul className="ul-check white mb-4 text-wrap ps-3 wow fadeInUp" data-wow-delay=".6s">
                                    <li className="mb-2 text-wrap" style={{ wordBreak: 'break-word' }}>Internet Asset Discovery & Mapping</li>
                                    <li className="mb-2 text-wrap" style={{ wordBreak: 'break-word' }}>Open Port & Vulnerability Enumeration</li>
                                    <li className="mb-2 text-wrap" style={{ wordBreak: 'break-word' }}>Cloud Infrastructure & IoT Exposure Detection</li>
                                </ul>
                                <Link to="/contact" className="btn-main fx-slide me-3 wow fadeInUp" data-wow-delay=".8s"><span>Talk to Expert</span></Link>
                            </div>
                            <div className="col-lg-5">
                                <div className="row g-3">
                                    <div className="col-md-6 col-sm-6 col-12 wow fadeInRight" data-wow-delay=".0s">
                                        <div className="bg-dark-gradient p-3 p-md-4 rounded-3 border-top border-color border-3 text-center hover-scale-1-1 shadow-sm text-break h-100 d-flex flex-column justify-content-center">
                                            <h2 className="fs-1 id-color mb-1 fw-bold">100%</h2>
                                            <p className="mb-0 text-light-50 text-wrap" style={{ fontSize: '0.9rem' }}>Asset Visibility</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12 wow fadeInRight" data-wow-delay=".2s">
                                        <div className="bg-dark-gradient p-3 p-md-4 rounded-3 border-top border-color border-3 text-center hover-scale-1-1 shadow-sm text-break h-100 d-flex flex-column justify-content-center">
                                            <h2 className="fs-1 id-color mb-1 fw-bold">24/7</h2>
                                            <p className="mb-0 text-light-50 text-wrap" style={{ fontSize: '0.9rem' }}>Exposure Tracking</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12 wow fadeInRight" data-wow-delay=".4s">
                                        <div className="bg-dark-gradient p-3 p-md-4 rounded-3 border-top border-color border-3 text-center hover-scale-1-1 shadow-sm text-break h-100 d-flex flex-column justify-content-center">
                                            <h2 className="fs-1 id-color mb-1 fw-bold">Zero</h2>
                                            <p className="mb-0 text-light-50 text-wrap" style={{ fontSize: '0.9rem' }}>Blind Spots</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12 wow fadeInRight" data-wow-delay=".6s">
                                        <div className="bg-dark-gradient p-3 p-md-4 rounded-3 border-top border-color border-3 text-center hover-scale-1-1 shadow-sm text-break h-100 d-flex flex-column justify-content-center">
                                            <h2 className="fs-1 id-color mb-1 fw-bold">Fast</h2>
                                            <p className="mb-0 text-light-50 text-wrap" style={{ fontSize: '0.9rem' }}>Remediation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Features Grid */}
                <section className="section-dark bg-dark text-light py-5 overflow-hidden relative" style={{ backgroundImage: 'url(images/background/6.webp)', backgroundPosition: 'top', backgroundSize: 'cover' }}>
                    <div className="abs top-0 start-0 w-100 h-100 bg-dark op-8"></div>
                    <div className="container relative z-2">
                        <div className="row mb-5">
                            <div className="col-lg-12 text-center text-break">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">Key Features</div>
                                <h2 className="text-wrap wow fadeInUp" data-wow-delay=".2s">Advanced Device Discovery</h2>
                            </div>
                        </div>
                        <div className="row g-4 align-items-stretch">
                            {[
                                { title: "Internet Asset Discovery", icon: "/images/icons-white/monitoring.png", items: ["Identify all internet-facing devices", "Discover shadow IT assets", "Map enterprise networks"] },
                                { title: "Open Port Enumeration", icon: "/images/icons-white/cyber-security.png", items: ["Detect unauthorized open ports", "Analyze exposed services", "Close high-risk entry points"] },
                                { title: "Cloud Infrastructure Mapping", icon: "/images/icons-white/cloud-storage.png", items: ["AWS, Azure, Google Cloud assets", "Detect misconfigured storage", "Public IP tracking"] },
                                { title: "IoT Exposure Detection", icon: "/images/icons-white/fingerprint.png", items: ["Locate exposed cameras & routers", "Industrial control systems (ICS)", "Unsecured smart devices"] },
                                { title: "Service Banner Analysis", icon: "/images/icons-white/encryption.png", items: ["Extract software versions", "Identify legacy systems", "Deep metadata analysis"] },
                                { title: "Real-Time Exposure Tracking", icon: "/images/icons-white/settings.png", items: ["Continuous Shodan monitoring", "Alerting on new exposures", "Automated threat intelligence"] }
                            ].map((offer, i) => (
                                <div key={i} className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={`${i * 0.1}s`}>
                                    <div className="d-flex flex-column bg-dark-gradient text-light rounded-3 p-3 p-md-4 h-100 relative overflow-hidden border border-secondary border-opacity-10 hover-scale-1-1 shadow-sm text-break">
                                        <div className="relative z-2 flex-grow-1">
                                            <img src={offer.icon} className="mb-4 bg-color p-3 rounded-3" alt={offer.title} style={{ width: '70px', height: '70px', objectFit: 'contain' }} />
                                            <h4 className="mb-3 text-wrap">{offer.title}</h4>
                                            <ul className="ul-check white mt-3 text-start mb-0 ps-3 text-wrap">
                                                {offer.items.map((item, idx) => (
                                                    <li key={idx} className="mb-2 text-wrap" style={{ wordBreak: 'break-word' }}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <img src={offer.icon} className="abs end-0 bottom-0 op-1" alt="" style={{ width: '120px', transform: 'translate(20%, 20%)', maxWidth: '40%' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Workflow Section */}
                <section className="section-dark bg-dark-2 text-light py-5 overflow-hidden">
                    <div className="container">
                        <div className="row text-center mb-5">
                            <div className="col-lg-12 text-break">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">Our Process</div>
                                <h2 className="text-wrap wow fadeInUp" data-wow-delay=".2s">Discovery Methodology</h2>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {[
                                { title: "Asset Enumeration", desc: "Identify all domains, IPs, and exposed infrastructure.", icon: "monitoring.png" },
                                { title: "Exposure Analysis", desc: "Correlate assets with Shodan threat intelligence.", icon: "cyber-security.png" },
                                { title: "Risk Prioritization", desc: "Rank exposures by severity and business impact.", icon: "settings.png" },
                                { title: "Remediation", desc: "Actionable recommendations to secure exposed services.", icon: "encryption.png" },
                            ].map((step, index) => (
                                <div className="col-lg col-md-6 col-sm-12 text-center wow fadeInUp" data-wow-delay={`${index * 0.1}s`} key={index}>
                                    <div className="d-block relative bg-dark-gradient text-light rounded-3 p-3 p-md-4 h-100 hover-scale-1-2 border-top border-color border-3 shadow-sm text-break">
                                        <div className="bg-color text-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '48px', height: '48px' }}>
                                            <h5 className="mb-0">0{index + 1}</h5>
                                        </div>
                                        <img src={`/images/icons-white/${step.icon}`} className="w-50px mb-3 op-8" alt="" />
                                        <h5 className="mb-2 text-wrap">{step.title}</h5>
                                        <p className="text-light-50 mb-0 text-wrap" style={{ fontSize: '0.9rem', wordBreak: 'break-word' }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industries We Serve */}
                <section className="section-dark bg-dark text-light py-5 overflow-hidden">
                    <div className="container">
                        <div className="row mb-5 text-center">
                            <div className="col-lg-12 text-break">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">Industries</div>
                                <h2 className="text-wrap wow fadeInUp" data-wow-delay=".2s">Industries We Serve</h2>
                            </div>
                        </div>
                        <div className="row g-4 align-items-stretch">
                            {[
                                { name: "Banking & Finance", icon: "fa-building-columns", desc: "Secure exposed financial systems and critical portals." },
                                { name: "Manufacturing", icon: "fa-industry", desc: "Protect industrial control systems (ICS) and OT infrastructure." },
                                { name: "Healthcare", icon: "fa-hospital", desc: "Discover exposed medical devices and unmanaged endpoints." },
                                { name: "Government", icon: "fa-landmark", desc: "Secure public sector assets and highly sensitive infrastructure." },
                                { name: "Telecom", icon: "fa-satellite-dish", desc: "Map complex distributed networks and exposed routers." },
                                { name: "SaaS Companies", icon: "fa-cloud", desc: "Identify misconfigured cloud assets and exposed APIs." },
                            ].map((industry, i) => (
                                <div key={i} className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={`${i * 0.1}s`}>
                                    <div className="d-flex align-items-start bg-dark-gradient p-3 p-md-4 rounded-3 h-100 border-start border-color border-4 hover-scale-1-1 shadow-sm text-break">
                                        <div className="me-3 mt-1 flex-shrink-0">
                                            <i className={`fa-solid ${industry.icon} fs-2 id-color`}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2 text-wrap">{industry.name}</h5>
                                            <p className="text-light-50 mb-0 text-wrap" style={{ wordBreak: 'break-word', fontSize: '0.9rem' }}>{industry.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section-dark bg-dark-2 text-light py-5 overflow-hidden">
                    <div className="container">
                        <div className="row mb-5 text-center">
                            <div className="col-lg-12 text-break">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">FAQ</div>
                                <h2 className="text-wrap wow fadeInUp" data-wow-delay=".2s">Frequently Asked Questions</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-10 col-12">
                                <div className="bg-dark p-3 p-md-4 rounded-3 mb-4 border-start border-color border-4 shadow-sm hover-scale-1-1 text-break wow fadeInUp" data-wow-delay=".0s">
                                    <h4 className="mb-3 text-wrap">What is Shodan device discovery?</h4>
                                    <p className="text-light-50 mb-0 text-wrap" style={{ wordBreak: 'break-word' }}>
                                        It is the process of using the Shodan search engine and our proprietary threat intelligence tools to identify all internet-facing devices belonging to your organization, including servers, IoT devices, and databases.
                                    </p>
                                </div>
                                <div className="bg-dark p-3 p-md-4 rounded-3 mb-4 border-start border-color border-4 shadow-sm hover-scale-1-1 text-break wow fadeInUp" data-wow-delay=".2s">
                                    <h4 className="mb-3 text-wrap">Can you identify shadow IT assets?</h4>
                                    <p className="text-light-50 mb-0 text-wrap" style={{ wordBreak: 'break-word' }}>
                                        Yes. We frequently discover unmanaged infrastructure, forgotten legacy systems, and rogue devices that were spun up outside of normal IT processes, presenting significant security risks.
                                    </p>
                                </div>
                                <div className="bg-dark p-3 p-md-4 rounded-3 mb-4 border-start border-color border-4 shadow-sm hover-scale-1-1 text-break wow fadeInUp" data-wow-delay=".4s">
                                    <h4 className="mb-3 text-wrap">How often should organizations scan assets?</h4>
                                    <p className="text-light-50 mb-0 text-wrap" style={{ wordBreak: 'break-word' }}>
                                        Given the dynamic nature of cloud and modern IT, we recommend continuous monitoring. Attack surfaces change daily, and real-time visibility is critical to preventing exploitation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="section-dark bg-color text-light py-5 overflow-hidden text-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="mb-3 wow fadeInUp" data-wow-delay=".0s">Get Full Visibility Into Your Internet-Facing Infrastructure</h2>
                                <p className="lead mb-4 wow fadeInUp" data-wow-delay=".2s">Identify exposed systems, reduce attack surface risks, and strengthen cyber resilience today.</p>
                                <div className="wow fadeInUp" data-wow-delay=".4s">
                                    <Link to="/contact" className="btn-main btn-dark fx-slide me-3"><span>Request Consultation</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <Footer />
        </div>
    );
};

export default ShodanDeviceDiscovery;
