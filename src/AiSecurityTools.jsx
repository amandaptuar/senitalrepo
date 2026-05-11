import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const AiSecurityTools = () => {
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
                <section id="subheader" className="section-dark bg-dark text-light relative jarallax">
                    <div className="gradient-edge-top"></div>
                    <img src="/images/background/7.webp" className="jarallax-img" alt="" />
                    <div className="container relative z-2">
                        <div className="row gy-4 gx-5 align-items-center">
                            <div className="spacer-double sm-hide"></div>
                            <div className="col-lg-8">
                                <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">AI Security Tools & Automation Services</h1>
                                <p className="lead text-color wow fadeInUp" data-wow-delay=".4s">Smarter Security. Faster Response. Zero Guesswork.</p>
                                <ul className="crumb wow fadeInUp" data-wow-delay=".6s">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li className="active">AI Security Tools</li>
                                </ul>
                                <div className="mt-4 wow fadeInUp" data-wow-delay=".8s">
                                    <Link to="/contact" className="btn-main fx-slide me-3"><span>Request Free Assessment</span></Link>
                                    <Link to="/contact" className="btn-main btn-line fx-slide"><span>View Dashboard</span></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center sm-hide">
                                <img src="/images/icons-white/fingerprint.png" alt="AI Tools" className="w-50 op-5" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="bg-dark-2 text-light pt-80 pb-80 relative overflow-hidden">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-7">
                                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Intelligent Automation</div>
                                <h2 className="fs-40 mb-3 wow fadeInUp" data-wow-delay=".2s">Beyond Traditional Cybersecurity</h2>
                                <p className="lead mb-4 wow fadeInUp" data-wow-delay=".4s">
                                    In today’s rapidly evolving threat landscape, traditional cybersecurity is no longer enough. Our AI-powered security solutions combine intelligent automation with real-time threat detection to protect your business across cloud, network, and applications.
                                </p>
                                <p className="text-light-50 mb-0 wow fadeInUp" data-wow-delay=".6s">
                                    We help enterprises in the USA and Dubai stay ahead of cyber threats with predictive analytics, automated response systems, and continuous monitoring — all designed to reduce risk, cost, and response time.
                                </p>
                            </div>
                            <div className="col-lg-5 text-center wow fadeInRight" data-wow-delay=".2s">
                                <div className="bg-dark-gradient p-5 rounded-1 border-top border-color border-4 relative overflow-hidden hover-scale-1-1">
                                    <h2 className="fs-60 id-color mb-0">24/7</h2>
                                    <h4 className="mb-0">Continuous AI Monitoring</h4>
                                    <i className="fa-solid fa-shield-halved abs top-0 end-0 fs-100 op-1 mt-4 me-4"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="section-dark bg-dark text-light">
                    <div className="container">
                        <div className="row mb-5 text-center">
                            <div className="col-lg-12">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">Automation & Intelligence</div>
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">Next-Gen Security Features</h2>
                            </div>
                        </div>
                        <div className="row g-4">
                            {/* Card 1 */}
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".0s">
                                <div className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden h-100">
                                    <div className="relative z-2">
                                        <img src="/images/icons-white/cyber-security.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt="" />
                                        <h4>AI-Powered Threat Detection</h4>
                                        <ul className="ul-check white mt-3 text-start mb-4">
                                            <li>Behavioral analysis</li>
                                            <li>Zero-day detection</li>
                                            <li>Malware detection</li>
                                            <li>Threat intelligence</li>
                                        </ul>
                                    </div>
                                    <img src="/images/icons-white/cyber-security.png" className="w-80 abs start-60 abs-middle op-1" alt="" />
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden h-100">
                                    <div className="relative z-2">
                                        <img src="/images/icons-white/settings.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt="" />
                                        <h4>Security Automation (SOAR)</h4>
                                        <ul className="ul-check white mt-3 text-start mb-4">
                                            <li>Automated workflows</li>
                                            <li>Playbook-driven responses</li>
                                            <li>Alert prioritization</li>
                                            <li>Reduced manual intervention</li>
                                        </ul>
                                    </div>
                                    <img src="/images/icons-white/settings.png" className="w-80 abs start-60 abs-middle op-1" alt="" />
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden h-100">
                                    <div className="relative z-2">
                                        <img src="/images/icons-white/monitoring.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt="" />
                                        <h4>AI Vulnerability Scanning</h4>
                                        <ul className="ul-check white mt-3 text-start mb-4">
                                            <li>Web/API scanning</li>
                                            <li>Misconfiguration detection</li>
                                            <li>AI risk scoring</li>
                                            <li>Compliance reports</li>
                                        </ul>
                                    </div>
                                    <img src="/images/icons-white/monitoring.png" className="w-80 abs start-60 abs-middle op-1" alt="" />
                                </div>
                            </div>
                            {/* Card 4 */}
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden h-100">
                                    <div className="relative z-2">
                                        <img src="/images/icons-white/encryption.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt="" />
                                        <h4>Attack Simulation</h4>
                                        <ul className="ul-check white mt-3 text-start mb-4">
                                            <li>Automated penetration testing</li>
                                            <li>Red team simulations</li>
                                            <li>Phishing simulation</li>
                                            <li>Continuous validation</li>
                                        </ul>
                                    </div>
                                    <img src="/images/icons-white/encryption.png" className="w-80 abs start-60 abs-middle op-1" alt="" />
                                </div>
                            </div>
                            {/* Card 5 */}
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                <div className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden h-100">
                                    <div className="relative z-2">
                                        <img src="/images/icons-white/cloud-storage.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt="" />
                                        <h4>Intelligent Data Protection</h4>
                                        <ul className="ul-check white mt-3 text-start mb-4">
                                            <li>DLP integration</li>
                                            <li>AI data classification</li>
                                            <li>Encryption at rest</li>
                                            <li>Secure data movement</li>
                                        </ul>
                                    </div>
                                    <img src="/images/icons-white/cloud-storage.png" className="w-80 abs start-60 abs-middle op-1" alt="" />
                                </div>
                            </div>
                            {/* Card 6 */}
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1s">
                                <div className="d-block relative bg-dark-gradient text-light rounded-1 p-40 pb-20 overflow-hidden h-100">
                                    <div className="relative z-2">
                                        <img src="/images/icons-white/fingerprint.png" className="w-90px mb-3 bg-color p-3 rounded-1" alt="" />
                                        <h4>Cloud & Endpoint Security</h4>
                                        <ul className="ul-check white mt-3 text-start mb-4">
                                            <li>Cloud workload protection</li>
                                            <li>EDR / XDR</li>
                                            <li>IAM optimization</li>
                                            <li>MFA enforcement</li>
                                        </ul>
                                    </div>
                                    <img src="/images/icons-white/fingerprint.png" className="w-80 abs start-60 abs-middle op-1" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="section-dark bg-dark-2 text-light">
                    <div className="container">
                        <div className="row mb-5 text-center">
                            <div className="col-lg-12">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">Why Adopt AI Tools</div>
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">Enterprise Benefits</h2>
                            </div>
                        </div>
                        <div className="row g-4">
                            {[
                                { title: "Faster Detection", icon: "fa-bolt" },
                                { title: "Reduced Risk", icon: "fa-shield-halved" },
                                { title: "Lower Operational Costs", icon: "fa-chart-line" },
                                { title: "Improved Compliance", icon: "fa-file-shield" },
                                { title: "Real-time Visibility", icon: "fa-eye" },
                                { title: "Enterprise Scalability", icon: "fa-server" }
                            ].map((benefit, i) => (
                                <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${i * 0.1}s`}>
                                    <div className="d-flex align-items-center bg-dark p-4 rounded-1 border-start border-color border-4 hover-scale-1-1">
                                        <i className={`fa-solid ${benefit.icon} fs-30 id-color me-3`}></i>
                                        <h4 className="mb-0">{benefit.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Global Coverage Section */}
                <section className="section-dark bg-dark text-light" data-bgimage="url(/images/background/2.webp) center">
                    <div className="container">
                        <div className="row text-center mb-4">
                            <div className="col-lg-12">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">Global Presence</div>
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">Worldwide Threat Monitoring</h2>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-center text-center">
                            {[
                                { title: "USA", icon: "fa-flag-usa" },
                                { title: "Dubai", icon: "fa-city" },
                                { title: "Remote Operations", icon: "fa-network-wired" },
                                { title: "24/7 Monitoring", icon: "fa-clock" }
                            ].map((location, i) => (
                                <div key={i} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${i * 0.1}s`}>
                                    <div className="bg-dark-gradient text-light p-4 rounded-1 fs-5 fw-bold border border-secondary hover-scale-1-1">
                                        <i className={`fa-solid ${location.icon} d-block fs-40 id-color mb-3`}></i>
                                        {location.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section-dark bg-dark-2 text-light">
                    <div className="container">
                        <div className="row mb-5 text-center">
                            <div className="col-lg-12">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">FAQ</div>
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">Frequently Asked Questions</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="bg-dark p-4 rounded-1 mb-3 border-start border-color border-4 wow fadeInUp" data-wow-delay=".0s">
                                    <h4 className="mb-2">What is SOAR?</h4>
                                    <p className="text-light-50 mb-0">
                                        Security Orchestration, Automation, and Response (SOAR) refers to technologies that enable organizations to collect threat-related data from diverse sources and automate responses to low-level threats without human intervention.
                                    </p>
                                </div>
                                <div className="bg-dark p-4 rounded-1 mb-3 border-start border-color border-4 wow fadeInUp" data-wow-delay=".2s">
                                    <h4 className="mb-2">Do these tools work across cloud and on-premise environments?</h4>
                                    <p className="text-light-50 mb-0">
                                        Yes, our AI security tools are designed to provide unified visibility and control across hybrid environments, including AWS, Azure, Google Cloud, and on-premise data centers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="bg-dark-gradient text-light pt-60 pb-50 relative overflow-hidden">
                    <div className="w-30 abs abs-middle end-0 me-5 op-1">
                        <img src="/images/logo-big-white.webp" className="w-100" alt="" />
                    </div>
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-md-9 wow fadeInRight" data-wow-delay=".0s">
                                <h3 className="mb-2 fs-32">Upgrade Your Security Posture Today</h3>
                                <p className="lead mb-0">Automate your defense with our enterprise-grade AI tools.</p>
                            </div>
                            <div className="col-md-3 text-md-end wow fadeInRight" data-wow-delay=".2s">                            
                                <Link className="btn-main fx-slide btn-line" to="/contact"><span>Talk to Experts</span></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default AiSecurityTools;
