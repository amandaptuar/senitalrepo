import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {

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
      {/* Copied from homepage-6.html */}
      <div id="wrapper">
        <div className="float-text show-on-scroll">
            <span><Link to="/contact">Scroll to top</Link></span>
        </div>
        <div className="scrollbar-v show-on-scroll"></div>



        {/* header begin */}
        <Navbar />
        {/* header end */}
        {/* content begin */}
        <div className="no-bottom no-top" id="content">

            <div id="top"></div>

            <section id="section-intro" className="bg-dark text-light overflow-hidden" data-bgimage="url(images/background/9.webp) bottom right">
                <div className="container">
                  <div className="row g-4 gx-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="spacer-double sm-hide"></div>
                        <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Welcome to CyberGuard</div>
                        <h1 className="wow fadeInUp" data-wow-delay=".2s">Your Partner in Total Cyber Security</h1>
                        <p className="col-lg-10 wow fadeInUp" data-wow-delay=".4s">Protect your business from digital threats with cutting-edge cybersecurity solutions—24/7 monitoring, penetration testing, and expert-driven defense strategies.</p>
                        <Link className="btn-main mb10 mb-3 wow fadeInUp" data-wow-delay=".6s" to="/platform?tab=demo"><span>Start Scan</span></Link>
                        <div className="border-bottom my-3"></div>
                        <div className="d-lg-flex align-items-center text-light">
                            <div className="me-3">Google Rating</div>
                            <div className="me-3">5.0</div>
                            <div className="d-flex fs-14 d-rating me-3">
                                <i className="fa fa-solid fa-star m-1"></i>
                                <i className="fa fa-solid fa-star m-1"></i>
                                <i className="fa fa-solid fa-star m-1"></i>
                                <i className="fa fa-solid fa-star m-1"></i>
                                <i className="fa fa-solid fa-star m-1"></i>
                            </div>
                            <div className="me-3">Based on 23k Reviews</div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="relative">
                            <div className="bg-blur text-light shadow-1 abs end-0 abs-middle p-4 rounded-1 overflow-hidden z-2 wow fadeInRight" data-wow-delay=".5s">
                                <div className="d-flex justify-content-center">
                                    <i className="fs-60 id-color fa-solid fa-shield-halved"></i>
                                    <div className="ms-3">
                                        <h2 className="mb-0">99.9%</h2>
                                        Threat detection
                                    </div>
                                </div>
                            </div>
                            <div className="bg-blur shadow-1 abs start-0 bottom-10 p-4 rounded-1 overflow-hidden z-2 wow fadeInLeft" data-wow-delay=".7s">
                                <div className="d-flex justify-content-center">
                                    <i className="fs-60 id-color fa-solid fa-user-group"></i>
                                    <div className="ms-3">
                                        <h2 className="mb-0">23K</h2>
                                        Happy Customers
                                    </div>
                                </div>
                            </div>
                            <img src="images/misc/c2.webp" className="w-100 wow fadeInUp" data-wow-delay=".3s" alt="" />
                        </div>                        
                    </div>
                  </div>
                </div>
            </section>


            <section className="section-dark bg-dark-3 text-light pt-60 pb-50 relative overflow-hidden">
                
                <div className="w-30 abs abs-middle end-0 me-5 op-1">
                    <img src="/imgadd/senitalnewlogo.jpeg" className="w-100 wow scaleIn" alt="" />
                </div>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-10">
                            <h3 className="mb-0 fs-32 wow fadeInRight">Need 24/7 Protection From Cyber Attacks?</h3>
                        </div>
                        <div className="col-md-2">                            
                            <Link className="btn-main fx-slide btn-line wow fadeInLeft" to="/platform?tab=demo"><span>Start Scan</span></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section data-bgimage="url(images/background/6.webp) top">
                <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-12 text-center">
                            <div className="spacer-single"></div>
                            <div className="sw-text-wrapper">
                                <div className="subtitle wow fadeInUp">Cybersecurity Experts</div>
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">Comprehensive Cybersecurity Solutions for Modern Threats</h2>
                            </div>
                        </div>
                        <div className="spacer-single"></div>
                    </div>

                    <div className="row g-4 slider-extra sm-hide wow fadeInUp" data-wow-delay=".4s">
                        <div className="col-lg-4 col-md-6">
                            <img src="images/icons-dark/padlock.png" className="absolute w-100px p-3 mb-3 z-2" alt="Network Security Icon" />
                            <div className="ps-100 fs-16">
                                <h4>Network Security</h4>
                                <p>Protect critical infrastructure with firewalls, intrusion detection systems, and real-time threat monitoring.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <img src="images/icons-dark/cloud.png" className="absolute w-100px p-3 mb-3 z-2" alt="Cloud Security Icon" />
                            <div className="ps-100 fs-16">
                                <h4>Cloud Security</h4>
                                <p>Ensure safe cloud environments with encryption, access control, and advanced identity management solutions.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <img src="images/icons-dark/quality.png" className="absolute w-100px p-3 mb-3 z-2" alt="Compliance Icon" />
                            <div className="ps-100 fs-16">
                                <h4>Regulatory Compliance</h4>
                                <p>Stay ahead of industry regulations like GDPR, HIPAA, and ISO by implementing strong security frameworks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="section-dark bg-dark text-light">
                <div className="container">
                    <div className="row g-4 justify-content-center mb-2">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <div className="subtitle wow fadeInUp">What We Provide</div> 
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">Robust Cybersecurity Services for Today’s Threats</h2>
                                <p className="lead wow fadeInUp" data-wow-delay=".4s">Protect your business from ever-evolving cyber risks with our end-to-end security solutions.
We offer advanced threat detection, real-time monitoring, and proactive defense strategies tailored to your infrastructure. Whether you're safeguarding sensitive data or ensuring compliance, our robust cybersecurity services help you stay secure, resilient, and ahead of the threat curve.</p>
                            </div>
                        </div>                                       
                    </div>

                    <div className="row g-0 mb-3">

                        <div className="col-lg-6">
                            <Link to="/contact" className="hover overflow-hidden bg-dark text-light d-block">
                                <div className="row g-0 align-items-end">
                                    <div className="col-md-6">
                                        <div className="relative overflow-hidden">
                                            <h3 className="abs text-white fs-32 lh-1 p-4 top-0 start-0 z-3">01</h3>
                                            <div className="sw-overlay z-2 op-3"></div>
                                            <img src="images/services/1.webp" className="w-100 hover-scale-1-2" alt="Network Security" loading="lazy" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-40">
                                            <h3>Network Security</h3>
                                            <p className="mb-0">Deploying firewalls and intrusion detection systems to safeguard networks.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-6">
                            <Link to="/contact" className="hover overflow-hidden bg-color text-light d-block">
                                <div className="row g-0 align-items-end">
                                    <div className="col-md-6">
                                        <div className="relative overflow-hidden">
                                            <h3 className="abs text-white fs-32 lh-1 p-4 top-0 start-0 z-3">02</h3>
                                            <div className="sw-overlay z-2 op-3"></div>
                                            <img src="images/services/2.webp" className="w-100 hover-scale-1-2" alt="Data Encryption" loading="lazy" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-40">
                                            <h3>Data Encryption</h3>
                                            <p className="mb-0">Encrypting sensitive data at rest and in transit using advanced encryption.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-6">
                            <Link to="/contact" className="hover overflow-hidden bg-dark text-light d-block">
                                <div className="row g-0 align-items-end">
                                    <div className="col-sm-6">
                                        <div className="p-40">
                                            <h3>Identity & Access</h3>
                                            <p className="mb-0">Managing user identities and access with MFA and detailed role-based control.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="relative overflow-hidden">
                                            <h3 className="abs text-white fs-32 lh-1 p-4 top-0 start-0 z-3">03</h3>
                                            <div className="sw-overlay z-2 op-3"></div>
                                            <img src="images/services/3.webp" className="w-100 hover-scale-1-2" alt="Identity & Access" loading="lazy" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-6">
                            <Link to="/contact" className="hover overflow-hidden bg-dark text-light d-block">
                                <div className="row g-0 align-items-end">
                                    <div className="col-sm-6">
                                        <div className="p-40">
                                            <h3>Security Monitoring</h3>
                                            <p className="mb-0">24/7 monitoring with advanced SIEM systems for real-time detection.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="relative overflow-hidden">
                                            <h3 className="abs text-white fs-32 lh-1 p-4 top-0 start-0 z-3">04</h3>
                                            <div className="sw-overlay z-2 op-3"></div>
                                            <img src="images/services/4.webp" className="w-100 hover-scale-1-2" alt="Security Monitoring" loading="lazy" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-6">
                            <Link to="/contact" className="hover overflow-hidden bg-color text-light d-block">
                                <div className="row g-0 align-items-end">
                                    <div className="col-md-6">
                                        <div className="relative overflow-hidden">
                                            <h3 className="abs text-white fs-32 lh-1 p-4 top-0 start-0 z-3">05</h3>
                                            <div className="sw-overlay z-2 op-3"></div>
                                            <img src="images/services/5.webp" className="w-100 hover-scale-1-2" alt="Backup & Recovery" loading="lazy" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-40">
                                            <h3>Backup & Recovery</h3>
                                            <p className="mb-0">Protecting critical data with secure backups and rapid recovery plans.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-lg-6">
                            <Link to="/contact" className="hover overflow-hidden bg-dark text-light d-block">
                                <div className="row g-0 align-items-end">
                                    <div className="col-md-6">
                                        <div className="relative overflow-hidden">
                                            <h3 className="abs text-white fs-32 lh-1 p-4 top-0 start-0 z-3">06</h3>
                                            <div className="sw-overlay z-2 op-3"></div>
                                            <img src="images/services/6.webp" className="w-100 hover-scale-1-2" alt="Security Configuration" loading="lazy" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-40">
                                            <h3>Security Configuration</h3>
                                            <p className="mb-0">Hardening systems and applying secure configurations across all infrastructure.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>


                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-3 col-sm-6">
                            <div className="de_count text-center wow fadeInRight" data-wow-delay=".0s">
                                <i className="p-3 circle bg-color text-light fs-40 d-inline-block mb-2 icofont-briefcase-2"></i>
                                <h3 className="fs-40 mb-0 lh-1-1"><span className="timer" data-to="65250" data-speed="3000">0</span>+</h3>
                                Hours of Works
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="de_count text-center wow fadeInRight" data-wow-delay=".2s">
                                <i className="p-3 circle bg-color text-light fs-40 d-inline-block mb-2 icofont-thumbs-up"></i>
                                <h3 className="fs-40 mb-0 lh-1-1"><span className="timer" data-to="23160" data-speed="3000">0</span>+</h3>
                                Happy Customers
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="de_count text-center wow fadeInRight" data-wow-delay=".4s">
                                <i className="p-3 circle bg-color text-light fs-40 d-inline-block mb-2 icofont-users-alt-3"></i>
                                <h3 className="fs-40 mb-0 lh-1-1"><span className="timer" data-to="1500" data-speed="3000">0</span>+</h3>
                                Experienced Workers
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="de_count text-center wow fadeInRight" data-wow-delay=".6s">
                                <i className="p-3 circle bg-color text-light fs-40 d-inline-block mb-2 icofont-badge"></i>
                                <h3 className="fs-40 mb-0 lh-1-1"><span className="timer" data-to="20" data-speed="3000">0</span>+</h3>
                                Years of Experience
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-light">
                <div className="container">
                    <div className="row g-4 mb-2">
                        <div className="col-lg-12 text-center">
                            <div className="subtitle wow fadeInUp mb-3">Cybersecurity Pricing</div>
                            <h2 className="wow fadeInUp" data-wow-delay=".2s">Flexible Plans for Every Security Need</h2>
                            <p className="lead wow fadeInUp" data-wow-delay=".4s">
                                Our transparent pricing ensures enterprise-grade protection, compliance, and 24/7 threat monitoring without hidden costs.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-12 text-center">
                            <div className="switch-set">
                                <div>Monthly Plan</div>
                                <div><input id="sw-1" className="switch" type="checkbox" /></div>
                                <div>Yearly Plan</div>
                            </div>
                        </div>

                        {/* Basic Protection Plan */}
                        <div className="col-lg-3 col-md-6">
                            <div className="relative bg-white rounded-1 overflow-hidden p-30 pt-5 h-100">
                                <div className="mh-150">
                                    <h3 className="mb-1">Essential</h3>
                                    <p>Core protection for small teams and startups.</p>
                                </div>
                                <div className="relative">
                                    <h4 className="mb-0 lh-1 opt-1 fs-40">$12.99<span className="fs-16">/mo</span></h4>
                                    <h4 className="mb-0 lh-1 opt-2 fs-40">$9.99<span className="fs-16">/mo</span></h4>
                                    <p className="fs-14">Normally <s>$19.99</s></p>
                                </div>
                                <div className="relative">
                                    <Link to="/contact" className="btn-main opt-1 w-100">Get Monthly Plan</Link>
                                    <Link to="/contact" className="btn-main opt-2 w-100">Get Yearly Plan</Link>
                                    <p className="fs-12">Auto renews at regular rate</p>
                                </div>
                                <div className="relative">
                                    <h4>Top Features</h4>
                                    <ul className="ul-check">
                                        <li>Antivirus & Malware Protection</li>
                                        <li>Basic Firewall Rules</li>
                                        <li>Email Threat Detection</li>
                                        <li>Security Dashboard Access</li>
                                    </ul>
                                </div>
                                <div className="relative">
                                    <h4>Also Includes</h4>
                                    <ul className="ul-check">
                                        <li>24/7 Tech Support</li>
                                        <li>Weekly Scan Reports</li>
                                        <li>Free Onboarding</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Plus Plan */}
                        <div className="col-lg-3 col-md-6">
                            <div className="relative bg-white rounded-1 overflow-hidden p-30 pt-5 h-100">
                                <div className="mh-150">
                                    <h3 className="mb-1">Advanced</h3>
                                    <p>Advanced threat protection for growing businesses.</p>
                                </div>
                                <div className="relative">
                                    <h4 className="mb-0 lh-1 opt-1 fs-40">$19.99<span className="fs-16">/mo</span></h4>
                                    <h4 className="mb-0 lh-1 opt-2 fs-40">$14.99<span className="fs-16">/mo</span></h4>
                                    <p className="fs-14">Normally <s>$29.99</s></p>
                                </div>
                                <div className="relative">
                                    <Link to="/contact" className="btn-main opt-1 w-100">Get Monthly Plan</Link>
                                    <Link to="/contact" className="btn-main opt-2 w-100">Get Yearly Plan</Link>
                                    <p className="fs-12">Auto renews at regular rate</p>
                                </div>
                                <div className="relative">
                                    <h4>Top Features</h4>
                                    <ul className="ul-check">
                                        <li>Everything in Essential</li>
                                        <li>Real-Time Threat Monitoring</li>
                                        <li>AI-Powered Threat Detection</li>
                                        <li>Incident Response Toolkit</li>
                                    </ul>
                                </div>
                                <div className="relative">
                                    <h4>Also Includes</h4>
                                    <ul className="ul-check">
                                        <li>24/7 Emergency Response</li>
                                        <li>Weekly Vulnerability Reports</li>
                                        <li>Security Awareness Training</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Deluxe (Recommended) */}
                        <div className="col-lg-3 col-md-6">
                            <div className="relative bg-white rounded-1 overflow-hidden p-30 pt-5 h-100">
                                <div className="abs start-0 top-0 w-100 bg-color p-30 py-0 text-light">Recommended</div>
                                <div className="mh-150">
                                    <h3 className="mb-1">ProSecure</h3>
                                    <p>Full-suite defense for multi-office organizations.</p>
                                </div>
                                <div className="relative">
                                    <h4 className="mb-0 lh-1 opt-1 fs-40">$29.99<span className="fs-16">/mo</span></h4>
                                    <h4 className="mb-0 lh-1 opt-2 fs-40">$22.99<span className="fs-16">/mo</span></h4>
                                    <p className="fs-14">Normally <s>$39.99</s></p>
                                </div>
                                <div className="relative">
                                    <Link to="/contact" className="btn-main opt-1 w-100">Get Monthly Plan</Link>
                                    <Link to="/contact" className="btn-main opt-2 w-100">Get Yearly Plan</Link>
                                    <p className="fs-12">Auto renews at regular rate</p>
                                </div>
                                <div className="relative">
                                    <h4>Top Features</h4>
                                    <ul className="ul-check">
                                        <li>Everything in Advanced</li>
                                        <li>Automated Incident Response</li>
                                        <li>SIEM Integration Support</li>
                                        <li>Cloud & Endpoint Protection</li>
                                    </ul>
                                </div>
                                <div className="relative">
                                    <h4>Also Includes</h4>
                                    <ul className="ul-check">
                                        <li>Free Risk Assessment</li>
                                        <li>Monthly Security Reports</li>
                                        <li>Compliance Monitoring</li>
                                        <li>Automated Backups</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Ultimate Plan */}
                        <div className="col-lg-3 col-md-6">
                            <div className="relative bg-white rounded-1 overflow-hidden p-30 pt-5 h-100">
                                <div className="mh-150">
                                    <h3 className="mb-1">Enterprise</h3>
                                    <p>Ultimate protection with custom infrastructure support.</p>
                                </div>
                                <div className="relative">
                                    <h4 className="mb-0 lh-1 opt-1 fs-40">$49.99<span className="fs-16">/mo</span></h4>
                                    <h4 className="mb-0 lh-1 opt-2 fs-40">$39.99<span className="fs-16">/mo</span></h4>
                                    <p className="fs-14">Normally <s>$59.99</s></p>
                                </div>
                                <div className="relative">
                                    <Link to="/contact" className="btn-main opt-1 w-100">Get Monthly Plan</Link>
                                    <Link to="/contact" className="btn-main opt-2 w-100">Get Yearly Plan</Link>
                                    <p className="fs-12">Auto renews at regular rate</p>
                                </div>
                                <div className="relative">
                                    <h4>Top Features</h4>
                                    <ul className="ul-check">
                                        <li>Everything in ProSecure</li>
                                        <li>Dedicated Security Engineer</li>
                                        <li>Threat Intelligence Feeds</li>
                                        <li>Advanced Compliance Tools</li>
                                        <li>Custom Policy Management</li>
                                    </ul>
                                </div>
                                <div className="relative">
                                    <h4>Also Includes</h4>
                                    <ul className="ul-check">
                                        <li>Private Cloud Hosting</li>
                                        <li>Priority Incident Response</li>
                                        <li>Free Security Audit</li>
                                        <li>Dedicated IP & VPN Access</li>
                                        <li>Automated Data Backup</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>

            <section className="section-dark bg-dark text-light">
                <div className="container">
                    <div className="row g-4 justify-content-center mb-2">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <div className="subtitle wow fadeInUp">Real Study Case</div> 
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">Real-World Cybersecurity Success Stories</h2>
                                <p className="lead wow fadeInUp" data-wow-delay=".4s">
                                Explore how our tailored cybersecurity solutions have helped businesses overcome critical challenges — from preventing data breaches and fixing cloud vulnerabilities to achieving compliance and building long-term resilience.
                                </p>
                            </div>
                        </div>                                       
                    </div>

                    <div className="row g-4">
                        {/* service item begin */}
                        <div className="col-lg-4 col-sm-6">
                            <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".0s">
                                <img src="images/projects/1.webp" className="hover-scale-1-1 w-100" alt="" />
                                <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                                    <div className="mb-3">Safeguard your online store with end-to-end protection, preventing data breaches, fraud, and unauthorized access.</div>
                                    <Link className="btn-line" to="/contact">View Details</Link>
                                </div>
                                <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1"></div>
                                <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                                    <h4 className="fs-20 mb-3">E-Commerce Platform Security</h4>
                                </div>
                                <div className="gradient-edge-bottom abs w-100 h-60 bottom-0"></div>
                            </div>
                        </div>
                        {/* service item end */}

                        {/* service item begin */}
                        <div className="col-lg-4 col-sm-6">
                            <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".3s">
                                <img src="images/projects/2.webp" className="hover-scale-1-1 w-100" alt="" />
                                <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                                    <div className="mb-3">Eliminate hidden cloud vulnerabilities with expert misconfiguration audits, secure policies, and real-time fixes.</div>
                                    <Link className="btn-line" to="/contact">View Details</Link>
                                </div>
                                <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1"></div>
                                <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                                    <h4 className="fs-20 mb-3">Cloud Misconfiguration Fix</h4>
                                </div>
                                <div className="gradient-edge-bottom abs w-100 h-60 bottom-0"></div>
                            </div>
                        </div>
                        {/* service item end */}

                        {/* service item begin */}
                        <div className="col-lg-4 col-sm-6">
                            <div className="hover rounded-1 overflow-hidden relative text-light text-center wow fadeInRight" data-wow-delay=".6s">
                                <img src="images/projects/3.webp" className="hover-scale-1-1 w-100" alt="" />
                                <div className="abs w-100 px-4 hover-op-1 z-4 hover-mt-40 abs-centered">
                                    <div className="mb-3">Strengthen your firm’s defenses with advanced protection, compliance support, and incident response readiness.</div>
                                    <Link className="btn-line" to="/contact">View Details</Link>
                                </div>
                                <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1"></div>
                                <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                                    <h4 className="fs-20 mb-3">Law Firm Cyber Resilience</h4>
                                </div>
                                <div className="gradient-edge-bottom abs w-100 h-60 bottom-0"></div>
                            </div>
                        </div>
                        {/* service item end */}

                    </div>


                    
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row g-4 mb-2">
                        <div className="col-lg-12 text-center">
                            <div className="subtitle wow fadeInUp mb-3">Testimonials</div>
                            <h2 className="wow fadeInUp" data-wow-delay=".2s">Hear It from Our Happy Customers</h2>
                            <p className="lead wow fadeInUp" data-wow-delay=".4s">See how our cybersecurity solutions have helped businesses stay secure, compliant, and resilient against evolving digital threats.</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="owl-carousel owl-theme wow fadeInUp four-cols-center-dots">
                            {/* testimonial item begin */}
                            <div className="item">
                                <div className="bg-light rounded-1 p-30">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="d-flex align-items-center">
                                            <img className="w-40px circle me-3" alt="" src="images/testimonial/1.webp" />
                                            <div className="mt-2">
                                                <div className="text-dark fw-bold lh-1">
                                                    Sarah Johnson
                                                </div>
                                                <small>
                                                    15 January 2025
                                                </small>
                                            </div>
                                        </div>
                                        <img src="images/misc/google-icon.svg" className="w-30px" alt="" />
                                    </div>  
                                    <div className="de-rating-ext mb-2">
                                        <span className="d-stars">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        </span>
                                        <span className="ms-2 text-white">5.0</span>
                                    </div>
                                    <p>"CyberShield helped us identify critical vulnerabilities before attackers could exploit them. Their team is proactive and truly knows their craft."</p>
                                </div>
                            </div>
                            {/* testimonial item end */}

                            {/* testimonial item begin */}
                            <div className="item">
                                <div className="bg-light rounded-1 p-30">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="d-flex align-items-center">
                                            <img className="w-40px circle me-3" alt="" src="images/testimonial/2.webp" />
                                            <div className="mt-2">
                                                <div className="text-dark fw-bold lh-1">
                                                    Mark Davis
                                                </div>
                                                <small>
                                                    28 December 2024
                                                </small>
                                            </div>
                                        </div>
                                        <img src="images/misc/google-icon.svg" className="w-30px" alt="" />
                                    </div>  
                                    <div className="de-rating-ext mb-2">
                                        <span className="d-stars">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        </span>
                                        <span className="ms-2 text-white">5.0</span>
                                    </div>
                                    <p>"Thanks to their 24/7 monitoring, we sleep better knowing our systems are safe. They’ve prevented several potential breaches already."</p>
                                </div>
                            </div>
                            {/* testimonial item end */}

                            {/* testimonial item begin */}
                            <div className="item">
                                <div className="bg-light rounded-1 p-30">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="d-flex align-items-center">
                                            <img className="w-40px circle me-3" alt="" src="images/testimonial/3.webp" />
                                            <div className="mt-2">
                                                <div className="text-dark fw-bold lh-1">
                                                    Emily Carter
                                                </div>
                                                <small>
                                                    10 December 2024
                                                </small>
                                            </div>
                                        </div>
                                        <img src="images/misc/google-icon.svg" className="w-30px" alt="" />
                                    </div>  
                                    <div className="de-rating-ext mb-2">
                                        <span className="d-stars">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        </span>
                                        <span className="ms-2 text-white">5.0</span>
                                    </div>
                                    <p>"Their penetration testing gave us a clear picture of our risks. The remediation plan was actionable and effective. Highly recommended."</p>
                                </div>
                            </div>
                            {/* testimonial item end */}

                            {/* testimonial item begin */}
                            <div className="item">
                                <div className="bg-light rounded-1 p-30">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="d-flex align-items-center">
                                            <img className="w-40px circle me-3" alt="" src="images/testimonial/4.webp" />
                                            <div className="mt-2">
                                                <div className="text-dark fw-bold lh-1">
                                                    James Wilson
                                                </div>
                                                <small>
                                                    4 December 2024
                                                </small>
                                            </div>
                                        </div>
                                        <img src="images/misc/google-icon.svg" className="w-30px" alt="" />
                                    </div>  
                                    <div className="de-rating-ext mb-2">
                                        <span className="d-stars">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        </span>
                                        <span className="ms-2 text-white">5.0</span>
                                    </div>
                                    <p>"We achieved ISO 27001 compliance with their guidance. The team is knowledgeable, patient, and delivers excellent results every time."</p>
                                </div>
                            </div>
                            {/* testimonial item end */}

                            {/* testimonial item begin */}
                            <div className="item">
                                <div className="bg-light rounded-1 p-30">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="d-flex align-items-center">
                                            <img className="w-40px circle me-3" alt="" src="images/testimonial/5.webp" />
                                            <div className="mt-2">
                                                <div className="text-dark fw-bold lh-1">
                                                    Olivia Martinez
                                                </div>
                                                <small>
                                                    22 November 2024
                                                </small>
                                            </div>
                                        </div>
                                        <img src="images/misc/google-icon.svg" className="w-30px" alt="" />
                                    </div>  
                                    <div className="de-rating-ext mb-2">
                                        <span className="d-stars">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        </span>
                                        <span className="ms-2 text-white">5.0</span>
                                    </div>
                                    <p>"Our law firm’s sensitive data is now fully protected. CyberShield gave us the confidence to work securely in a digital-first world."</p>
                                </div>
                            </div>
                            {/* testimonial item end */}

                            {/* testimonial item begin */}
                            <div className="item">
                                <div className="bg-light rounded-1 p-30">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="d-flex align-items-center">
                                            <img className="w-40px circle me-3" alt="" src="images/testimonial/6.webp" />
                                            <div className="mt-2">
                                                <div className="text-dark fw-bold lh-1">
                                                    Michael Brown
                                                </div>
                                                <small>
                                                    16 November 2024
                                                </small>
                                            </div>
                                        </div>
                                        <img src="images/misc/google-icon.svg" className="w-30px" alt="" />
                                    </div>  
                                    <div className="de-rating-ext mb-2">
                                        <span className="d-stars">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        </span>
                                        <span className="ms-2 text-white">5.0</span>
                                    </div>
                                    <p>"Their incident response team saved us when we faced a ransomware attack. We were back online quickly with minimal disruption."</p>
                                </div>
                            </div>
                            {/* testimonial item end */}

                            {/* testimonial item begin */}
                            <div className="item">
                                <div className="bg-light rounded-1 p-30">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="d-flex align-items-center">
                                            <img className="w-40px circle me-3" alt="" src="images/testimonial/7.webp" />
                                            <div className="mt-2">
                                                <div className="text-dark fw-bold lh-1">
                                                    Isabella Green
                                                </div>
                                                <small>
                                                    2 November 2024
                                                </small>
                                            </div>
                                        </div>
                                        <img src="images/misc/google-icon.svg" className="w-30px" alt="" />
                                    </div>  
                                    <div className="de-rating-ext mb-2">
                                        <span className="d-stars">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        </span>
                                        <span className="ms-2 text-white">5.0</span>
                                    </div>
                                    <p>"They transformed our cloud security. No more misconfigurations or hidden risks — we feel secure managing sensitive workloads."</p>
                                </div>
                            </div>
                            {/* testimonial item end */}

                            {/* testimonial item begin */}
                            <div className="item">
                                <div className="bg-light rounded-1 p-30">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="d-flex align-items-center">
                                            <img className="w-40px circle me-3" alt="" src="images/testimonial/8.webp" />
                                            <div className="mt-2">
                                                <div className="text-dark fw-bold lh-1">
                                                    William Harris
                                                </div>
                                                <small>
                                                    25 October 2024
                                                </small>
                                            </div>
                                        </div>
                                        <img src="images/misc/google-icon.svg" className="w-30px" alt="" />
                                    </div>  
                                    <div className="de-rating-ext mb-2">
                                        <span className="d-stars">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        </span>
                                        <span className="ms-2 text-white">5.0</span>
                                    </div>
                                    <p>"Their security awareness training dramatically reduced phishing incidents in our company. It’s worth every penny."</p>
                                </div>
                            </div>
                            {/* testimonial item end */}

                            {/* testimonial item begin */}
                            <div className="item">
                                <div className="bg-light rounded-1 p-30">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="d-flex align-items-center">
                                            <img className="w-40px circle me-3" alt="" src="images/testimonial/9.webp" />
                                            <div className="mt-2">
                                                <div className="text-dark fw-bold lh-1">
                                                    Sophia Lee
                                                </div>
                                                <small>
                                                    11 October 2024
                                                </small>
                                            </div>
                                        </div>
                                        <img src="images/misc/google-icon.svg" className="w-30px" alt="" />
                                    </div>  
                                    <div className="de-rating-ext mb-2">
                                        <span className="d-stars">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        </span>
                                        <span className="ms-2 text-white">5.0</span>
                                    </div>
                                    <p>"From consultation to implementation, everything was seamless. They truly care about securing their clients’ businesses."</p>
                                </div>
                            </div>
                            {/* testimonial item end */}

                            {/* testimonial item begin */}
                            <div className="item">
                                <div className="bg-light rounded-1 p-30">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="d-flex align-items-center">
                                            <img className="w-40px circle me-3" alt="" src="images/testimonial/10.webp" />
                                            <div className="mt-2">
                                                <div className="text-dark fw-bold lh-1">
                                                    Daniel Scott
                                                </div>
                                                <small>
                                                    1 October 2024
                                                </small>
                                            </div>
                                        </div>
                                        <img src="images/misc/google-icon.svg" className="w-30px" alt="" />
                                    </div>  
                                    <div className="de-rating-ext mb-2">
                                        <span className="d-stars">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        </span>
                                        <span className="ms-2 text-white">5.0</span>
                                    </div>
                                    <p>"A top-notch cybersecurity team! They guided us through building a strong defense strategy tailored to our unique needs."</p>
                                </div>
                            </div>
                            {/* testimonial item end */}

                        </div>
                    </div>
                </div>
            </section>

            <section aria-label="section" className="section-dark p-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <a className="d-block hover popup-youtube" href="https://www.youtube.com/watch?v=xQQskN6UXRY">
                                <div className="relative overflow-hidden">
                                    <div className="absolute start-0 w-100 abs-middle fs-36 text-white text-center z-2">
                                        <div className="player circle wow scaleIn"><span></span></div>
                                    </div> 
                                    <div className="absolute w-100 h-100 top-0 bg-dark hover-op-05"></div>
                                    <img src="images/background/w1.webp" className="w-100 hover-scale-1-1" alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row g-4 mb-2">
                        <div className="col-lg-12 text-center">
                            <div className="subtitle wow fadeInUp mb-3">Testimonials</div>
                            <h2 className="wow fadeInUp" data-wow-delay=".2s">Hear It from Our Happy Customers</h2>
                            <p className="lead wow fadeInUp" data-wow-delay=".4s">See how our cybersecurity solutions have helped businesses stay secure, compliant, and resilient against evolving digital threats.</p>
                        </div>
                    </div>

                    <div className="row g-4">

                        <div className="col-lg-4">
                            <Link to="/contact" className="d-block hover relative rounded-20 overflow-hidden text-light">
                                <img src="images/news/s1.webp" className="w-100 hover-scale-1-1" alt="Cybersecurity News" />
                                <div className="absolute start-0 bottom-0 p-40 z-2">
                                    <div className="bg-color rounded-1 p-0 px-2 d-inline-block mb-3">Cyber Insights</div>
                                    <h4>Top Strategies to Prevent Ransomware Attacks in 2025</h4>
                                    <div className="relative">
                                        <img src="images/testimonial/1.webp" className="w-20px me-2 circle" alt="" />
                                        <div className="d-inline fs-14 me-3">Michael Carter</div>
                                        <div className="d-inline fs-14"><i className="icofont-ui-calendar id-color me-2"></i>15 Jul 2025</div>
                                    </div>
                                </div>
                                <div className="gradient-edge-bottom h-70"></div>
                            </Link>
                        </div>

                        <div className="col-lg-4">
                            <Link to="/contact" className="d-block hover relative rounded-20 overflow-hidden text-light">
                                <img src="images/news/s2.webp" className="w-100 hover-scale-1-1" alt="Cybersecurity News" />
                                <div className="absolute start-0 bottom-0 p-40 z-2">
                                    <div className="bg-color rounded-1 p-0 px-2 d-inline-block mb-3">Threat Reports</div>
                                    <h4>AI-Powered Cyber Threats: How to Stay Ahead of Hackers</h4>
                                    <div className="relative">
                                        <img src="images/testimonial/2.webp" className="w-20px me-2 circle" alt="" />
                                        <div className="d-inline fs-14 me-3">Sophia Lee</div>
                                        <div className="d-inline fs-14"><i className="icofont-ui-calendar id-color me-2"></i>10 Jul 2025</div>
                                    </div>
                                </div>
                                <div className="gradient-edge-bottom h-70"></div>
                            </Link>
                        </div>

                        <div className="col-lg-4">
                            <Link to="/contact" className="d-block hover relative rounded-20 overflow-hidden text-light">
                                <img src="images/news/s3.webp" className="w-100 hover-scale-1-1" alt="Cybersecurity News" />
                                <div className="absolute start-0 bottom-0 p-40 z-2">
                                    <div className="bg-color rounded-1 p-0 px-2 d-inline-block mb-3">Best Practices</div>
                                    <h4>Building a Strong Cyber Defense Plan for Your Business</h4>
                                    <div className="relative">
                                        <img src="images/testimonial/3.webp" className="w-20px me-2 circle" alt="" />
                                        <div className="d-inline fs-14 me-3">David Wilson</div>
                                        <div className="d-inline fs-14"><i className="icofont-ui-calendar id-color me-2"></i>2 Jul 2025</div>
                                    </div>
                                </div>
                                <div className="gradient-edge-bottom h-70"></div>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section-dark bg-color text-light pt-60 pb-50 relative overflow-hidden">
                
                <div className="w-30 abs abs-middle end-0 me-5 op-1">
                    <img src="imgadd/senitalnewlogo.jpeg" className="w-100 wow scaleIn" alt="" />
                </div>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-10">
                            <h3 className="mb-0 fs-32 wow fadeInRight">Need 24/7 Protection From Cyber Attacks?</h3>
                        </div>
                        <div className="col-md-2">                            
                            <Link className="btn-main fx-slide btn-line wow fadeInLeft" to="/platform?tab=demo"><span>Start Scan</span></Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
        <Footer />
    </div>

    
    </>
  );
};

export default Home;
