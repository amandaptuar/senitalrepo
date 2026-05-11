import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MetasploitFramework = () => {
    useEffect(() => {
        // Update document title for SEO
        document.title = "Advanced Penetration Testing with Metasploit Framework | Sentinel";
        
        // Add meta description
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
                <section id="subheader" className="section-dark bg-dark text-light relative overflow-hidden" style={{ padding: '160px 0 100px 0' }}>
                    <img src="/images/background/2.webp" className="abs start-0 top-0 w-100 h-100" style={{ objectFit: 'cover', opacity: 0.4 }} alt="Background" />
                    <div className="container relative z-2">
                        <div className="row gy-4 gx-lg-5 align-items-center">
                            <div className="col-lg-8 text-break">
                                <h1 className="mb-3 fw-bold wow fadeInUp" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2' }} data-wow-delay=".2s">Advanced Penetration Testing with Metasploit Framework</h1>
                                <p className="lead mb-4 text-wrap wow fadeInUp" data-wow-delay=".4s">Identify, validate, and remediate vulnerabilities before attackers exploit them—using industry-leading Metasploit-driven security testing.</p>
                                <ul className="crumb mb-4 text-wrap wow fadeInUp" data-wow-delay=".6s">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li className="active text-break">Metasploit Framework</li>
                                </ul>
                                <div className="wow fadeInUp" data-wow-delay=".8s">
                                    <Link to="/contact" className="btn-main fx-slide me-3"><span>Book Security Consultation</span></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center d-none d-lg-block">
                                <div className="relative d-inline-block p-4 rounded-circle bg-color-opacity-10">
                                    <img src="/images/icons-white/encryption.png" alt="Metasploit Testing" className="w-100 op-8" style={{ maxWidth: '200px' }} />
                                    <div className="abs top-0 start-0 w-100 h-100 rounded-circle border border-color border-opacity-50" style={{ animation: 'spin 10s linear infinite' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overview Section */}
                <section className="bg-dark-2 text-light py-5 relative overflow-hidden">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 text-break">
                                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Ethical Hacking Experts</div>
                                <h2 className="mb-3 text-wrap wow fadeInUp" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }} data-wow-delay=".2s">Proactive Vulnerability Discovery</h2>
                                <p className="lead mb-4 text-wrap wow fadeInUp" data-wow-delay=".4s">
                                    We leverage the Metasploit Framework — one of the most trusted tools in cybersecurity — to simulate real-world attacks and uncover hidden vulnerabilities across your infrastructure.
                                </p>
                                <ul className="ul-check white mb-4 ps-3 text-wrap wow fadeInUp" data-wow-delay=".6s">
                                    <li className="mb-2 text-wrap" style={{ wordBreak: 'break-word' }}>Certified ethical hackers with OSCP & CEH credentials</li>
                                    <li className="mb-2 text-wrap" style={{ wordBreak: 'break-word' }}>Controlled, safe testing with full rules of engagement</li>
                                    <li className="mb-2 text-wrap" style={{ wordBreak: 'break-word' }}>Compliance-aligned reporting (HIPAA, SOC 2, PCI-DSS)</li>
                                </ul>
                                <Link to="/contact" className="btn-main fx-slide wow fadeInUp" data-wow-delay=".8s"><span>Start a Free Consultation</span></Link>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-3">
                                    <div className="col-md-6 col-sm-6 col-12 wow fadeInRight" data-wow-delay=".0s">
                                        <div className="bg-dark-gradient p-3 p-md-4 rounded-3 border-top border-color border-3 text-center hover-scale-1-1 h-100 d-flex flex-column justify-content-center shadow-sm text-break">
                                            <h2 className="fs-1 id-color mb-1 fw-bold">500+</h2>
                                            <p className="mb-0 text-light-50 text-wrap" style={{ fontSize: '0.9rem' }}>Assessments Completed</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12 wow fadeInRight" data-wow-delay=".2s">
                                        <div className="bg-dark-gradient p-3 p-md-4 rounded-3 border-top border-color border-3 text-center hover-scale-1-1 h-100 d-flex flex-column justify-content-center shadow-sm text-break">
                                            <h2 className="fs-1 id-color mb-1 fw-bold">99%</h2>
                                            <p className="mb-0 text-light-50 text-wrap" style={{ fontSize: '0.9rem' }}>Client Satisfaction Rate</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12 wow fadeInRight" data-wow-delay=".4s">
                                        <div className="bg-dark-gradient p-3 p-md-4 rounded-3 border-top border-color border-3 text-center hover-scale-1-1 h-100 d-flex flex-column justify-content-center shadow-sm text-break">
                                            <h2 className="fs-1 id-color mb-1 fw-bold">15+</h2>
                                            <p className="mb-0 text-light-50 text-wrap" style={{ fontSize: '0.9rem' }}>Years of Experience</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12 wow fadeInRight" data-wow-delay=".6s">
                                        <div className="bg-dark-gradient p-3 p-md-4 rounded-3 border-top border-color border-3 text-center hover-scale-1-1 h-100 d-flex flex-column justify-content-center shadow-sm text-break">
                                            <h2 className="fs-1 id-color mb-1 fw-bold">24/7</h2>
                                            <p className="mb-0 text-light-50 text-wrap" style={{ fontSize: '0.9rem' }}>Expert Support</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Offer Section */}
                <section className="section-dark bg-dark text-light py-5">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-lg-12 text-center text-break">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">What We Offer</div>
                                <h2 className="text-wrap wow fadeInUp" data-wow-delay=".2s">Comprehensive Testing Capabilities</h2>
                            </div>
                        </div>
                        <div className="row g-4 align-items-stretch">
                            {[
                                { title: "Web Application Penetration Testing", icon: "/images/icons-white/cyber-security.png", items: ["SQL injection, XSS, CSRF, OWASP Top 10", "Exploit simulation using Metasploit modules", "Secure coding recommendations"] },
                                { title: "Network Penetration Testing", icon: "/images/icons-white/encryption.png", items: ["Internal & external scanning", "Exploitation testing", "Privilege escalation testing"] },
                                { title: "Endpoint & System Exploitation Testing", icon: "/images/icons-white/cloud-storage.png", items: ["Windows/Linux/server vulnerability testing", "Payload simulation", "Weak configuration detection"] },
                                { title: "Wireless & IoT Security Testing", icon: "/images/icons-white/settings.png", items: ["Wi-Fi vulnerability assessment", "Rogue device detection", "IoT attack surface analysis"] },
                                { title: "Post-Exploitation & Risk Analysis", icon: "/images/icons-white/monitoring.png", items: ["Lateral movement simulation", "Data access testing", "Business impact analysis"] },
                                { title: "Automated & Continuous Testing", icon: "/images/icons-white/settings.png", items: ["Scheduled scans", "CI/CD integration", "Continuous validation"] }
                            ].map((offer, i) => (
                                <div key={i} className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={`${i * 0.1}s`}>
                                    <div className="d-flex flex-column bg-dark-2 text-light rounded-3 p-3 p-md-4 h-100 relative overflow-hidden border border-secondary border-opacity-10 hover-scale-1-1 shadow-sm text-break">
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

                {/* Methodology Timeline Section */}
                <section className="bg-dark-2 text-light py-5 overflow-hidden">
                    <div className="container">
                        <div className="row text-center mb-5">
                            <div className="col-lg-12 text-break">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">Our Process</div>
                                <h2 className="text-wrap wow fadeInUp" data-wow-delay=".2s">Methodology Timeline</h2>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {[
                                { num: "01", title: "Reconnaissance & Scanning", desc: "Gathering intelligence and mapping out the full attack surface across your systems.", icon: "fa-magnifying-glass" },
                                { num: "02", title: "Vulnerability Identification", desc: "Locating potential weak points across networks, applications, and infrastructure.", icon: "fa-triangle-exclamation" },
                                { num: "03", title: "Exploitation via Metasploit", desc: "Safely executing exploits to validate and measure the real-world impact of vulnerabilities.", icon: "fa-bug" },
                                { num: "04", title: "Post-Exploitation Analysis", desc: "Determining the extent of access gained and potential business damage.", icon: "fa-chart-pie" },
                                { num: "05", title: "Reporting & Remediation", desc: "Delivering actionable security reports with prioritized fixes and compliance guidance.", icon: "fa-file-shield" },
                            ].map((step, i) => (
                                <div key={i} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={`${i * 0.1}s`}>
                                    <div className="bg-dark-gradient p-3 p-md-4 rounded-3 h-100 border-bottom border-color border-3 hover-scale-1-2 d-flex flex-column align-items-center text-center shadow-sm text-break">
                                        <div className="bg-color text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 flex-shrink-0" style={{ width: '48px', height: '48px' }}>
                                            <span className="fw-bold fs-5">{step.num}</span>
                                        </div>
                                        <i className={`fa-solid ${step.icon} d-block fs-1 id-color mb-3`}></i>
                                        <h5 className="mb-2 text-wrap">{step.title}</h5>
                                        <p className="text-light-50 mb-0 text-wrap" style={{ wordBreak: 'break-word' }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className="bg-dark text-light py-5 overflow-hidden">
                    <div className="container">
                        <div className="row mb-5 text-center">
                            <div className="col-lg-12 text-break">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">Why Us</div>
                                <h2 className="text-wrap wow fadeInUp" data-wow-delay=".2s">Why Choose Sentinel</h2>
                            </div>
                        </div>
                        <div className="row g-4 align-items-stretch">
                            {[
                                { title: "Certified Ethical Hackers", icon: "fa-user-shield", desc: "OSCP, CEH & CISM certified professionals with deep offensive security expertise." },
                                { title: "Enterprise-grade Reporting", icon: "fa-file-contract", desc: "Clear, executive-level and technical reports with risk ratings and remediation steps." },
                                { title: "Compliance-focused Testing", icon: "fa-scale-balanced", desc: "Aligned with HIPAA, PCI-DSS, ISO 27001, SOC 2, and NIST frameworks." },
                                { title: "Real-world Attack Simulation", icon: "fa-bug", desc: "Simulations that mirror actual adversary tactics, techniques, and procedures (TTPs)." },
                                { title: "Fast Turnaround", icon: "fa-bolt", desc: "Efficient scoping and delivery without compromising depth or thoroughness." },
                                { title: "Actionable Remediation", icon: "fa-wrench", desc: "Every finding comes with a clear remediation plan and priority classification." },
                            ].map((feature, i) => (
                                <div key={i} className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={`${i * 0.1}s`}>
                                    <div className="d-flex align-items-start bg-dark-2 p-3 p-md-4 rounded-3 h-100 border-start border-color border-4 hover-scale-1-1 shadow-sm text-break">
                                        <div className="me-3 mt-1 flex-shrink-0">
                                            <i className={`fa-solid ${feature.icon} fs-2 id-color`}></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2 text-wrap">{feature.title}</h5>
                                            <p className="text-light-50 mb-0 text-wrap" style={{ wordBreak: 'break-word' }}>{feature.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="bg-dark-2 text-light py-5 overflow-hidden">
                    <div className="container">
                        <div className="row mb-5 text-center">
                            <div className="col-lg-12 text-break">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">FAQ</div>
                                <h2 className="text-wrap wow fadeInUp" data-wow-delay=".2s">Frequently Asked Questions</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-10 col-12">
                                <div className="bg-dark-gradient p-3 p-md-4 rounded-3 mb-4 border-start border-color border-4 shadow-sm hover-scale-1-1 text-break wow fadeInUp" data-wow-delay=".0s">
                                    <h4 className="mb-3 text-wrap">What is the Metasploit Framework?</h4>
                                    <p className="text-light-50 mb-0 text-wrap" style={{ wordBreak: 'break-word' }}>
                                        The Metasploit Framework is a powerful open-source tool used by security professionals to probe systemic vulnerabilities on networks and servers. It simulates real-world attacks to identify and validate weaknesses.
                                    </p>
                                </div>
                                <div className="bg-dark-gradient p-3 p-md-4 rounded-3 mb-4 border-start border-color border-4 shadow-sm hover-scale-1-1 text-break wow fadeInUp" data-wow-delay=".2s">
                                    <h4 className="mb-3 text-wrap">Is penetration testing safe for our live environment?</h4>
                                    <p className="text-light-50 mb-0 text-wrap" style={{ wordBreak: 'break-word' }}>
                                        Yes. Our certified ethical hackers follow strict protocols and rules of engagement to ensure testing is controlled and does not disrupt your business operations.
                                    </p>
                                </div>
                                <div className="bg-dark-gradient p-3 p-md-4 rounded-3 mb-4 border-start border-color border-4 shadow-sm hover-scale-1-1 text-break wow fadeInUp" data-wow-delay=".4s">
                                    <h4 className="mb-3 text-wrap">How long does an assessment take?</h4>
                                    <p className="text-light-50 mb-0 text-wrap" style={{ wordBreak: 'break-word' }}>
                                        Typical engagements range from one to three weeks depending on scope. We provide a detailed timeline during the scoping phase before any work begins.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="bg-color text-light py-5 relative overflow-hidden">
                    <div className="w-30 abs abs-middle end-0 me-5 op-1 d-none d-lg-block">
                        <img src="/images/logo-big-white.webp" className="w-100" alt="Logo" style={{ filter: 'brightness(0) invert(1)', opacity: '0.1' }} />
                    </div>
                    <div className="container relative z-2">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-8 col-md-12 text-center text-lg-start text-break wow fadeInRight" data-wow-delay=".0s">
                                <h3 className="mb-3 text-white fw-bold text-wrap" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>Ready to Identify & Fix Your Vulnerabilities?</h3>
                                <p className="lead mb-0 text-white-50 text-wrap">Secure your digital assets with our advanced Metasploit-driven penetration testing.</p>
                            </div>
                            <div className="col-lg-4 col-md-12 text-center text-lg-end mt-4 mt-lg-0 wow fadeInRight" data-wow-delay=".2s">
                                <Link className="btn-main bg-dark text-white fw-bold px-4 py-3 rounded-3 text-wrap" to="/contact"><span>Request Free Assessment</span></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default MetasploitFramework;
