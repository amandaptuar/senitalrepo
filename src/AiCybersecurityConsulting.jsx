import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const AiCybersecurityConsulting = () => {
    useEffect(() => {
        // Update document title for SEO
        document.title = "AI-Powered Cybersecurity Consulting for Modern Enterprises | Sentinel";
        
        // Add meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = "description";
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = "Protect your organization with intelligent, adaptive security strategies built on advanced AI, real-time analytics, and zero-trust architecture.";

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
                    <img src="/images/background/9.webp" className="jarallax-img" alt="" />
                    <div className="container relative z-2">
                        <div className="row gy-4 gx-lg-5 align-items-center">
                            <div className="spacer-double sm-hide"></div>
                            <div className="col-lg-8 text-break">
                                <h1 className="mb-3 fw-bold text-wrap wow fadeInUp" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2' }} data-wow-delay=".2s">AI-Powered Cybersecurity Consulting for Modern Enterprises</h1>
                                <p className="lead mb-4 text-wrap wow fadeInUp" data-wow-delay=".4s">Protect your organization with intelligent, adaptive security strategies built on advanced AI, real-time analytics, and zero-trust architecture.</p>
                                <ul className="crumb mb-4 text-wrap wow fadeInUp" data-wow-delay=".6s">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li className="active text-break">AI Cybersecurity Consulting</li>
                                </ul>
                                <div className="mt-4 wow fadeInUp" data-wow-delay=".8s">
                                    <Link to="/contact" className="btn-main fx-slide me-3"><span>Talk to Experts</span></Link>
                                    <Link to="/platform?tab=demo" className="btn-main btn-line fx-slide"><span>Start Assessment</span></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center sm-hide">
                                <img src="/images/icons-white/cyber-security.png" alt="AI Consulting" className="w-50 op-5" style={{ maxWidth: '200px' }} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overview Section */}
                <section className="bg-dark-2 text-light py-5 relative overflow-hidden">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-7 text-break">
                                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Intelligent Defense Strategies</div>
                                <h2 className="mb-3 text-wrap wow fadeInUp" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }} data-wow-delay=".2s">AI-Driven Security for Modern Enterprises</h2>
                                <p className="lead mb-4 text-wrap wow fadeInUp" data-wow-delay=".4s">
                                    Cyber threats are no longer static—and neither should your defense strategy be. Our AI-driven cybersecurity consulting services help organizations proactively identify risks, automate threat detection, and strengthen security posture across cloud, network, and application environments.
                                </p>
                                <ul className="ul-check white mb-4 text-wrap ps-3 wow fadeInUp" data-wow-delay=".6s">
                                    <li className="mb-2 text-wrap" style={{ wordBreak: 'break-word' }}>Real-time AI threat detection & automated response</li>
                                    <li className="mb-2 text-wrap" style={{ wordBreak: 'break-word' }}>Zero Trust architecture design & implementation</li>
                                    <li className="mb-2 text-wrap" style={{ wordBreak: 'break-word' }}>Regulatory compliance across HIPAA, SOC 2 & ISO 27001</li>
                                </ul>
                                <Link to="/contact" className="btn-main fx-slide me-3 wow fadeInUp" data-wow-delay=".8s"><span>Talk to an Expert</span></Link>
                            </div>
                            <div className="col-lg-5">
                                <div className="row g-3">
                                    <div className="col-md-6 col-sm-6 col-12 wow fadeInRight" data-wow-delay=".0s">
                                        <div className="bg-dark-gradient p-3 p-md-4 rounded-3 border-top border-color border-3 text-center hover-scale-1-1 shadow-sm text-break h-100 d-flex flex-column justify-content-center">
                                            <h2 className="fs-1 id-color mb-1 fw-bold">98%</h2>
                                            <p className="mb-0 text-light-50 text-wrap" style={{ fontSize: '0.9rem' }}>Threat Detection Rate</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12 wow fadeInRight" data-wow-delay=".2s">
                                        <div className="bg-dark-gradient p-3 p-md-4 rounded-3 border-top border-color border-3 text-center hover-scale-1-1 shadow-sm text-break h-100 d-flex flex-column justify-content-center">
                                            <h2 className="fs-1 id-color mb-1 fw-bold">3x</h2>
                                            <p className="mb-0 text-light-50 text-wrap" style={{ fontSize: '0.9rem' }}>Faster Incident Response</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12 wow fadeInRight" data-wow-delay=".4s">
                                        <div className="bg-dark-gradient p-3 p-md-4 rounded-3 border-top border-color border-3 text-center hover-scale-1-1 shadow-sm text-break h-100 d-flex flex-column justify-content-center">
                                            <h2 className="fs-1 id-color mb-1 fw-bold">200+</h2>
                                            <p className="mb-0 text-light-50 text-wrap" style={{ fontSize: '0.9rem' }}>Enterprise Clients</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12 wow fadeInRight" data-wow-delay=".6s">
                                        <div className="bg-dark-gradient p-3 p-md-4 rounded-3 border-top border-color border-3 text-center hover-scale-1-1 shadow-sm text-break h-100 d-flex flex-column justify-content-center">
                                            <h2 className="fs-1 id-color mb-1 fw-bold">24/7</h2>
                                            <p className="mb-0 text-light-50 text-wrap" style={{ fontSize: '0.9rem' }}>Continuous Monitoring</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Services Grid */}
                <section className="section-dark bg-dark-2 text-light py-5 overflow-hidden relative" style={{ backgroundImage: 'url(/images/background/6.webp)', backgroundPosition: 'top', backgroundSize: 'cover' }}>
                    <div className="abs top-0 start-0 w-100 h-100 bg-dark op-8"></div>
                    <div className="container relative z-2">
                        <div className="row mb-5">
                            <div className="col-lg-12 text-center text-break">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">Core Services</div>
                                <h2 className="text-wrap wow fadeInUp" data-wow-delay=".2s">AI-Powered Security Operations</h2>
                            </div>
                        </div>
                        <div className="row g-4 align-items-stretch">
                            {[
                                { title: "AI Risk Assessment & Security Audit", icon: "/images/icons-white/monitoring.png", items: ["Intelligent vulnerability scanning", "Threat surface mapping", "AI-based risk scoring", "HIPAA, SOC 2, NIST, ISO 27001"] },
                                { title: "AI Threat Detection & Response", icon: "/images/icons-white/cyber-security.png", items: ["Behavioral anomaly detection", "Automated incident response", "Predictive analytics", "Threat intelligence"] },
                                { title: "Zero Trust Architecture Implementation", icon: "/images/icons-white/fingerprint.png", items: ["Multi-Factor Authentication (MFA)", "Role-Based Access Control (RBAC)", "Continuous verification", "Identity-first security"] },
                                { title: "Cloud & Application Security", icon: "/images/icons-white/cloud-storage.png", items: ["AWS, Azure, Google Cloud", "API & microservices security", "DevSecOps integration", "AI secure code review"] },
                                { title: "Penetration Testing with AI Simulation", icon: "/images/icons-white/encryption.png", items: ["Automated attack simulations", "AI red teaming", "Continuous testing", "Web/mobile penetration testing"] },
                                { title: "Security Automation & Orchestration", icon: "/images/icons-white/settings.png", items: ["AI workflows", "SIEM & SOAR integration", "Security event automation", "Reduced manual work"] }
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

                {/* AI Security Workflow Section */}
                <section className="section-dark bg-dark text-light py-5 overflow-hidden">
                    <div className="container">
                        <div className="row text-center mb-5">
                            <div className="col-lg-12 text-break">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">AI Security Workflow</div>
                                <h2 className="text-wrap wow fadeInUp" data-wow-delay=".2s">Automated Lifecycle</h2>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {[
                                { title: "Detect", desc: "Continuous AI monitoring across environments", icon: "monitoring.png" },
                                { title: "Analyze", desc: "Instant threat scoring & anomaly detection", icon: "cyber-security.png" },
                                { title: "Automate", desc: "Playbook execution & orchestration", icon: "settings.png" },
                                { title: "Respond", desc: "Rapid threat isolation & mitigation", icon: "cloud-storage.png" },
                                { title: "Protect", desc: "Zero-trust policy & proactive defense", icon: "encryption.png" },
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
                <section className="section-dark bg-dark-2 text-light py-5 overflow-hidden">
                    <div className="container">
                        <div className="row mb-5 text-center">
                            <div className="col-lg-12 text-break">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">Industries</div>
                                <h2 className="text-wrap wow fadeInUp" data-wow-delay=".2s">Industries We Serve</h2>
                            </div>
                        </div>
                        <div className="row g-4 align-items-stretch">
                            {[
                                { name: "Healthcare", icon: "fa-hospital", desc: "HIPAA-compliant security for patient data and medical systems." },
                                { name: "Finance", icon: "fa-building-columns", desc: "PCI-DSS and SOX-aligned protection for financial services." },
                                { name: "SaaS", icon: "fa-cloud", desc: "Application security for cloud-native software platforms." },
                                { name: "Government", icon: "fa-landmark", desc: "FedRAMP and NIST 800-53 compliance for public sector." },
                                { name: "Manufacturing", icon: "fa-industry", desc: "OT/ICS security and IoT protection for production environments." },
                                { name: "E-commerce", icon: "fa-cart-shopping", desc: "Fraud prevention and customer data protection at scale." },
                            ].map((industry, i) => (
                                <div key={i} className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={`${i * 0.1}s`}>
                                    <div className="d-flex align-items-start bg-dark p-3 p-md-4 rounded-3 h-100 border-start border-color border-4 hover-scale-1-1 shadow-sm text-break">
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

                {/* Compliance & Standards Section */}
                <section className="section-dark bg-dark text-light py-5 overflow-hidden">
                    <div className="container">
                        <div className="row mb-5 text-center">
                            <div className="col-lg-12 text-break">
                                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">Compliance</div>
                                <h2 className="text-wrap wow fadeInUp" data-wow-delay=".2s">Frameworks & Standards</h2>
                                <p className="lead text-light-50 mx-auto text-wrap wow fadeInUp" data-wow-delay=".4s" style={{ maxWidth: '600px' }}>Our consulting is aligned with all major industry regulatory frameworks to ensure your organization stays audit-ready.</p>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {[
                                { name: "HIPAA", desc: "Healthcare Data" },
                                { name: "SOC 2", desc: "Service Organization" },
                                { name: "ISO 27001", desc: "Info Security Mgmt" },
                                { name: "NIST", desc: "Cybersecurity Framework" },
                                { name: "GDPR", desc: "Data Privacy" },
                            ].map((standard, i) => (
                                <div key={i} className="col-lg-2 col-md-4 col-sm-6 col-12 wow fadeInUp" data-wow-delay={`${i * 0.1}s`}>
                                    <div className="bg-dark-gradient p-3 p-md-4 rounded-3 text-center border border-color hover-scale-1-1 shadow-sm text-break h-100 d-flex flex-column justify-content-center">
                                        <h5 className="id-color mb-2 text-wrap">{standard.name}</h5>
                                        <p className="mb-0 text-light-50 text-wrap" style={{ fontSize: '0.85rem' }}>{standard.desc}</p>
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
                                    <h4 className="mb-3 text-wrap">How does AI improve threat detection?</h4>
                                    <p className="text-light-50 mb-0 text-wrap" style={{ wordBreak: 'break-word' }}>
                                        AI systems analyze vast amounts of data in real-time, identifying behavioral anomalies and subtle patterns that indicate a potential attack—much faster than manual human analysis.
                                    </p>
                                </div>
                                <div className="bg-dark p-3 p-md-4 rounded-3 mb-4 border-start border-color border-4 shadow-sm hover-scale-1-1 text-break wow fadeInUp" data-wow-delay=".2s">
                                    <h4 className="mb-3 text-wrap">Do you help with regulatory compliance?</h4>
                                    <p className="text-light-50 mb-0 text-wrap" style={{ wordBreak: 'break-word' }}>
                                        Yes. We align your security posture with major regulatory frameworks like HIPAA, SOC 2, ISO 27001, and NIST, ensuring that your organization is audit-ready and compliant.
                                    </p>
                                </div>
                                <div className="bg-dark p-3 p-md-4 rounded-3 mb-4 border-start border-color border-4 shadow-sm hover-scale-1-1 text-break wow fadeInUp" data-wow-delay=".4s">
                                    <h4 className="mb-3 text-wrap">How quickly can you deploy AI security tools?</h4>
                                    <p className="text-light-50 mb-0 text-wrap" style={{ wordBreak: 'break-word' }}>
                                        Deployment timelines vary based on environment complexity, but most AI integrations are operational within 2–4 weeks. We handle the full setup, configuration, and staff training.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="bg-dark-gradient text-light py-5 relative overflow-hidden">
                    <div className="w-30 abs abs-middle end-0 me-5 op-1 d-none d-lg-block">
                        <img src="/images/logo-big-white.webp" className="w-100" alt="" />
                    </div>
                    <div className="container relative z-2">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-8 col-md-12 text-center text-lg-start text-break wow fadeInRight" data-wow-delay=".0s">
                                <h3 className="mb-3 text-white fw-bold text-wrap" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>Build a Future-Ready Security Strategy</h3>
                                <p className="lead mb-0 text-white-50 text-wrap">Consult with our AI cybersecurity experts today and get a tailored security roadmap.</p>
                            </div>
                            <div className="col-lg-4 col-md-12 text-center text-lg-end mt-4 mt-lg-0 wow fadeInRight" data-wow-delay=".2s">
                                <Link className="btn-main bg-color text-white fw-bold px-4 py-3 rounded-3 text-wrap" to="/contact"><span>Book a Consultation</span></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default AiCybersecurityConsulting;
