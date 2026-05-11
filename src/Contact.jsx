import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
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
                    <span><Link to="/contact">Scroll to top</Link></span>
                </div>
                <div className="scrollbar-v show-on-scroll"></div>

                <Navbar />
                
                {/* content begin */}
                <div className="no-bottom no-top" id="content">

                    <div id="top"></div>

                <section id="subheader" className="section-dark bg-dark text-light relative jarallax">
                    <div className="gradient-edge-top"></div>
                    <img src="/images/background/5.webp" className="jarallax-img" alt="" />
                    <div className="container relative z-2">
                        <div className="row gy-4 gx-5 align-items-center">
                            <div className="spacer-double sm-hide"></div>

                            <div className="col-lg-6">
                                <h1 className="mb-0 wow fadeInUp" data-wow-delay=".2s">Contact Us</h1>
                                <ul className="crumb wow fadeInUp">
                                    <li><Link to="/">Home</Link></li>
                                    <li className="active">Contact Us</li>
                                </ul>   
                            </div>

                            <div className="col-lg-6 text-lg-end sm-hide">
                                <h3>"Prevention is cheaper than a breach"</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={{ backgroundImage: 'url(/images/background/6.webp)', backgroundPosition: 'top', backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <h3 className="wow fadeInUp">Request a Security Consultation</h3>
                                <p className="mb-0">Secure your enterprise infrastructure today. Please provide your details and a brief overview of your security requirements, and our team of cybersecurity experts will respond within 24 hours to schedule a consultation.</p>
                            </div>

                            <div className="clearfix"></div>

                            <div className="col-lg-6">

                                <div className="rounded-1 bg-light overflow-hidden">
                                    <div className="row g-2 h-100">
                                        <div className="col-sm-6">
                                            <div className="auto-height relative h-100" style={{ backgroundImage: 'url(/images/misc/s1.webp)', backgroundPosition: 'center', backgroundSize: 'cover', minHeight: '300px' }}></div>
                                        </div>   
                                        <div className="col-sm-6 relative">
                                            <div className="p-30">

                                                <div className="fw-bold text-dark"><i className="icofont-location-pin me-2 id-color-2"></i>Office Location</div>
                                                123 Cyber Street, Los Angeles, CA



                                                <div className="spacer-20"></div>

                                                <div className="fw-bold text-dark"><i className="icofont-envelope me-2 id-color-2"></i>Send a Message</div>
                                                contact@sentinel.com                                            
                                            </div>
                                        </div>                             
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">
                                <form name="contactForm" id="contact_form" className="position-relative z1000" method="post" action="contact.php">
                                    
                                    <div className="field-set">
                                        <input type="text" name="name" id="name" className="form-control" placeholder="Full Name" required />
                                    </div>

                                    <div className="field-set">
                                        <input type="text" name="email" id="email" className="form-control" placeholder="Corporate Email" required />
                                    </div>

                                    <div className="field-set">
                                        <input type="text" name="phone" id="phone" className="form-control" placeholder="Phone Number" required />
                                    </div>

                                    <div className="field-set mb20">
                                        <textarea name="message" id="message" className="form-control" placeholder="How can we help secure your business?" required></textarea>
                                    </div>
                                        
                                    <div className="g-recaptcha" data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"></div>
                                    <div id='submit' className="mt20">
                                        <input type='submit' id='send_message' value='Send Message' className="btn-main" />
                                    </div>

                                    <div id="success_message" className='success'>
                                        Your message has been sent successfully. Refresh this page if you want to send more messages.
                                    </div>
                                    <div id="error_message" className='error'>
                                        Sorry there was an error sending your form.
                                    </div>
                                </form>
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

export default Contact;
