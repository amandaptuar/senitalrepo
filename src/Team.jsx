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
                                    <h1 className="mb-0 wow fadeInUp" data-wow-delay=".2s">Our Team</h1>
                                    <ul className="crumb wow fadeInUp" data-wow-delay=".4s">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="active">Our Team</li>
                                    </ul>   
                                </div>

                                <div className="col-lg-6 text-lg-end sm-hide wow fadeInUp" data-wow-delay=".6s">
                                    <h3>"Prevention is cheaper than a breach"</h3>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="row g-4">
                                {[
                                    { img: "1.webp", name: "John Smith", role: "Chief Security Officer", quote: "Security is a process, not a product." },
                                    { img: "2.webp", name: "Sarah Johnson", role: "Lead Threat Analyst", quote: "We track the threats before they track you." },
                                    { img: "3.webp", name: "Thomas Bennett", role: "Cloud Security Specialist", quote: "Securing the cloud, one instance at a time." },
                                    { img: "4.webp", name: "Joshua Henry", role: "Incident Response Manager", quote: "When milliseconds matter, we deliver." },
                                    { img: "5.webp", name: "Emily Davis", role: "SOC Manager", quote: "Eyes on the network 24/7/365." },
                                    { img: "6.webp", name: "Michael Lee", role: "Senior Penetration Tester", quote: "Breaking in to keep them out." },
                                    { img: "7.webp", name: "Olivia Martinez", role: "Compliance & Risk Specialist", quote: "Navigating regulations so you don't have to." },
                                    { img: "8.webp", name: "David Wilson", role: "Digital Forensics Expert", quote: "Following the digital breadcrumbs." }
                                ].map((member, i) => (
                                    <div key={i} className="col-lg-3 wow fadeInUp" data-wow-delay={`${(i % 4) * 0.2}s`}>
                                        <div className="flip-card">
                                            <div className="flip-card-inner">
                                                {/* Front */}
                                                <div className="flip-card-front shadow-sm">
                                                    <img src={`/images/team/${member.img}`} className="w-100" alt={member.name} style={{ height: '70%', objectFit: 'cover' }} />
                                                    <div className="bg-light p-3 overflow-hidden text-center" style={{ height: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                        <h4 className="mb-0 text-dark">{member.name}</h4>
                                                        <p className="mb-0 text-secondary" style={{ fontSize: '0.9rem' }}>{member.role}</p>
                                                    </div>
                                                </div>
                                                {/* Back */}
                                                <div className="flip-card-back shadow-sm">
                                                    <h4 className="mb-2">{member.name}</h4>
                                                    <p className="mb-3 id-color">{member.role}</p>
                                                    <blockquote>"{member.quote}"</blockquote>
                                                    <div className="social-icons mt-auto">
                                                        <Link to="/contact"><i className="fa-brands fa-linkedin"></i></Link>
                                                        <Link to="/contact"><i className="fa-brands fa-x-twitter"></i></Link>
                                                        <Link to="/contact"><i className="fa-brands fa-github"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="section-dark bg-color text-light pt-60 pb-50 relative overflow-hidden">
                        
                        <div className="w-30 abs abs-middle end-0 me-5 op-1">
                            <img src="/images/logo-big-white.webp" className="w-100" alt="" />
                        </div>
                        <div className="container relative z-2">
                            <div className="row g-4 align-items-center">
                                <div className="col-md-10 wow fadeInRight" data-wow-delay=".0s">
                                    <h3 className="mb-0 fs-32">Need 24/7 Protection From Cyber Attacks?</h3>
                                </div>
                                <div className="col-md-2 text-md-end wow fadeInRight" data-wow-delay=".2s">                            
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
