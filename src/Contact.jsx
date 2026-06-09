import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar';
import Footer from './Footer';

/* ═══════════════════════════════════════════════════════════════════
   EmailJS Configuration
   ───────────────────────────────────────────────────────────────────
   SETUP (5 minutes, free):
   1. Go to https://www.emailjs.com → Sign Up (free)
   2. Add a Gmail service → name it anything → copy the SERVICE_ID
   3. Create an Email Template with these variables:
        {{from_name}}, {{from_email}}, {{phone}}, {{message}}
      Set "To Email" → matrikaventures2020@gmail.com
      Copy the TEMPLATE_ID
   4. Go to Account → General → copy your PUBLIC_KEY
   5. Paste all three values below
   ═══════════════════════════════════════════════════════════════════ */
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'A1b2C3d4E5f6G7h8'

const INITIAL = { name: '', email: '', phone: '', message: '' };
const NOT_CONFIGURED =
  EMAILJS_SERVICE_ID  === 'YOUR_SERVICE_ID' ||
  EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
  EMAILJS_PUBLIC_KEY  === 'YOUR_PUBLIC_KEY';

const Contact = () => {
  const [form, setForm]     = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errMsg, setErrMsg] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    /* Initialise EmailJS once */
    if (!NOT_CONFIGURED) emailjs.init(EMAILJS_PUBLIC_KEY);

    const scripts = [
      '/js/plugins.js', '/js/designesia.js',
      '/js/custom-marquee.js', '/js/swiper.js', '/js/custom-swiper-1.js',
    ];
    const id = setTimeout(() => {
      scripts.forEach(src => {
        if (!document.querySelector(`script[src="${src}"]`)) {
          const s = document.createElement('script');
          s.src = src; s.async = false;
          document.body.appendChild(s);
        }
      });
    }, 100);
    window.scrollTo(0, 0);
    return () => clearTimeout(id);
  }, []);

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (NOT_CONFIGURED) {
      setStatus('error');
      setErrMsg('EmailJS is not configured yet. See the setup instructions in Contact.jsx.');
      return;
    }
    setStatus('sending'); setErrMsg('');

    /* Template params — must match the variables in your EmailJS template */
    const templateParams = {
      from_name:    form.name,
      from_email:   form.email,
      phone:        form.phone,
      message:      form.message,
      to_email:     'matrikaventures2020@gmail.com',
      reply_to:     form.email,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      setForm(INITIAL);
    } catch (err) {
      setStatus('error');
      setErrMsg(
        (err?.text || err?.message || 'Unknown error') +
        ' — check your EmailJS service/template IDs.'
      );
    }
  };

  const isSending = status === 'sending';

  return (
    <>
      <div id="wrapper">
        <div className="float-text show-on-scroll">
          <span><Link to="/contact">Scroll to top</Link></span>
        </div>
        <div className="scrollbar-v show-on-scroll"></div>

        <Navbar />

        <div className="no-bottom no-top" id="content">
          <div id="top"></div>

          {/* ── Subheader ── */}
          <section id="subheader" className="section-dark bg-dark text-light relative jarallax">
            <div className="gradient-edge-top"></div>
            <img src="images/background/5.webp" className="jarallax-img" alt="" />
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

          {/* ── Main section ── */}
          <section style={{
            backgroundImage: 'url(images/background/6.webp)',
            backgroundPosition: 'top', backgroundSize: 'cover',
          }}>
            <div className="container">
              <div className="row g-4">

                {/* Intro text */}
                <div className="col-lg-6">
                  <h3 className="wow fadeInUp">Request a Security Consultation</h3>
                  <p className="mb-0">
                    Secure your enterprise infrastructure today. Please provide your details and
                    a brief overview of your security requirements, and our team of cybersecurity
                    experts will respond within 24 hours to schedule a consultation.
                  </p>
                </div>

                <div className="clearfix"></div>

                {/* Contact info card */}
                <div className="col-lg-6">
                  <div className="rounded-1 bg-light overflow-hidden">
                    <div className="row g-2 h-100">
                      <div className="col-sm-6">
                        <div className="auto-height relative h-100" style={{
                          backgroundImage: 'url(images/misc/s1.webp)',
                          backgroundPosition: 'center', backgroundSize: 'cover', minHeight: 300,
                        }}></div>
                      </div>
                      <div className="col-sm-6 relative">
                        <div className="p-30">
                          <div className="fw-bold text-dark">
                            <i className="icofont-location-pin me-2 id-color-2"></i>Office Location
                          </div>
                          123 Cyber Street, Los Angeles, CA

                          <div className="spacer-20"></div>

                          <div className="fw-bold text-dark">
                            <i className="icofont-envelope me-2 id-color-2"></i>Send a Message
                          </div>
                          matrikaventures2020@gmail.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Contact Form ── */}
                <div className="col-lg-6">

                  {/* Setup warning */}
                  {NOT_CONFIGURED && (
                    <div style={{
                      background: 'rgba(255,183,77,.10)', border: '1px solid rgba(255,183,77,.4)',
                      borderRadius: 10, padding: '14px 18px', marginBottom: 18,
                      fontSize: 13, color: '#ffb74d', lineHeight: 1.7,
                    }}>
                      <strong>⚙ EmailJS Setup Required</strong><br />
                      1. Sign up free at{' '}
                      <a href="https://www.emailjs.com" target="_blank" rel="noreferrer"
                        style={{ color: '#ffb74d', textDecoration: 'underline' }}>
                        emailjs.com
                      </a><br />
                      2. Add a Gmail service → copy <strong>Service ID</strong><br />
                      3. Create a template with <code>{'{{from_name}}'}</code>,{' '}
                      <code>{'{{from_email}}'}</code>, <code>{'{{phone}}'}</code>,{' '}
                      <code>{'{{message}}'}</code> → copy <strong>Template ID</strong><br />
                      4. Account → General → copy <strong>Public Key</strong><br />
                      5. Paste all three into <code>Contact.jsx</code> lines 20–22
                    </div>
                  )}

                  {/* Success */}
                  {status === 'success' ? (
                    <div style={{
                      background: 'rgba(0,230,118,.08)', border: '1px solid rgba(0,230,118,.3)',
                      borderRadius: 14, padding: '36px 28px', textAlign: 'center',
                    }}>
                      <div style={{ fontSize: 52, marginBottom: 12 }}>✅</div>
                      <h4 style={{ color: '#00e676', marginBottom: 8 }}>Message Sent!</h4>
                      <p style={{ color: '#cde1f3', marginBottom: 20 }}>
                        Your enquiry has been delivered to{' '}
                        <strong>matrikaventures2020@gmail.com</strong> via EmailJS.<br />
                        We'll get back to you within 24 hours.
                      </p>
                      <button className="btn-main"
                        onClick={() => setStatus('idle')}
                        style={{ cursor: 'pointer' }}>
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form
                      ref={formRef}
                      name="contactForm"
                      id="contact_form"
                      className="position-relative z1000"
                      onSubmit={handleSubmit}
                      noValidate
                    >
                      <div className="field-set">
                        <input type="text" name="name" id="name"
                          className="form-control" placeholder="Full Name"
                          value={form.name} onChange={handleChange} required />
                      </div>

                      <div className="field-set">
                        <input type="email" name="email" id="email"
                          className="form-control" placeholder="Corporate Email"
                          value={form.email} onChange={handleChange} required />
                      </div>

                      <div className="field-set">
                        <input type="tel" name="phone" id="phone"
                          className="form-control" placeholder="Phone Number"
                          value={form.phone} onChange={handleChange} required />
                      </div>

                      <div className="field-set mb20">
                        <textarea name="message" id="message"
                          className="form-control"
                          placeholder="How can we help secure your business?"
                          value={form.message} onChange={handleChange} required />
                      </div>

                      {status === 'error' && (
                        <div id="error_message" className="error"
                          style={{ display: 'block', marginBottom: 12 }}>
                          ⚠ {errMsg}
                        </div>
                      )}

                      <div id="submit" className="mt20">
                        <input
                          type="submit" id="send_message"
                          value={isSending ? 'Sending…' : 'Send Message'}
                          className="btn-main"
                          disabled={isSending}
                          style={{ opacity: isSending ? 0.6 : 1, cursor: isSending ? 'not-allowed' : 'pointer' }}
                        />
                      </div>
                    </form>
                  )}
                </div>

              </div>
            </div>
          </section>

        </div>{/* content end */}

        <Footer />
      </div>
    </>
  );
};

export default Contact;
