import React, { Suspense, lazy, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

const Home = lazy(() => import('./Home'))
const Contact = lazy(() => import('./Contact'))
const About = lazy(() => import('./About'))
const Platform = lazy(() => import('./Platform'))
const Services = lazy(() => import('./Services'))
const MetasploitFramework = lazy(() => import('./MetasploitFramework'))
const AiCybersecurityConsulting = lazy(() => import('./AiCybersecurityConsulting'))
const AiSecurityTools = lazy(() => import('./AiSecurityTools'))
const ShodanDeviceDiscovery = lazy(() => import('./ShodanDeviceDiscovery'))
const ShodanVulnerabilityDetection = lazy(() => import('./ShodanVulnerabilityDetection'))
const ShodanNetworkMonitoring = lazy(() => import('./ShodanNetworkMonitoring'))
const ShodanInternetIntelligence = lazy(() => import('./ShodanInternetIntelligence'))
const WebsiteScanner = lazy(() => import('./WebsiteScanner'))

// Loading component for Suspense
const PageLoader = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#111' }}>
    <div className="spinner-border text-info" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

// ─── Utility: destroy Lenis & restore native browser scroll ──────────────────
// Root cause: designesia.js creates a Lenis smooth-scroll instance that hijacks
// window scroll. In a React SPA this instance is never re-created correctly on
// client-side navigation, leaving the page completely un-scrollable.
function restoreNativeScroll() {
  // Destroy any Lenis instance regardless of which variable name it was stored under
  ['lenis', '__lenis', '_lenis', 'lenisInstance'].forEach((key) => {
    if (window[key] && typeof window[key].destroy === 'function') {
      try { window[key].destroy(); } catch (_) {}
      window[key] = null;
    }
  });

  const htmlEl = document.documentElement;
  const bodyEl = document.body;

  // Remove any inline overflow locks left by Lenis or jQuery plugins
  ['overflow', 'overflow-y', 'overflow-x', 'transform', 'will-change'].forEach((prop) => {
    htmlEl.style.removeProperty(prop);
    bodyEl.style.removeProperty(prop);
  });

  // Lenis wraps the viewport — ensure the wrapper element is also clean
  const wrapper = document.querySelector('[data-lenis-wrapper]') || document.querySelector('.lenis');
  if (wrapper) {
    wrapper.style.removeProperty('overflow');
    wrapper.style.removeProperty('height');
    wrapper.style.removeProperty('transform');
  }

  // Re-apply the only constraint we want: hide horizontal overflow
  htmlEl.style.overflowX = 'hidden';
  bodyEl.style.overflowX = 'hidden';
}

// ─── Route Change Handler ────────────────────────────────────────────────────
const RouteChangeHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Destroy Lenis & unlock scroll IMMEDIATELY before anything else
    restoreNativeScroll();

    // 2. Jump to top
    window.scrollTo(0, 0);

    // 3. Re-initialize other jQuery/Jarallax plugins after DOM settles
    const timer = setTimeout(() => {
      try {
        // Re-init Jarallax (parallax backgrounds)
        if (window.jarallax) {
          window.jarallax(document.querySelectorAll('.jarallax'), 'destroy');
          window.jarallax(document.querySelectorAll('.jarallax'), { speed: 0.5 });
        }

        // Re-init WOW.js (scroll animations)
        if (window.WOW) {
          new window.WOW({ live: false }).init();
        }

        // Re-init designesia data-bgimage backgrounds
        if (window.$ && window.$.fn) {
          if (window.$('[data-bgimage]').length) {
            window.$('[data-bgimage]').each(function () {
              const bgImage = window.$(this).data('bgimage');
              if (bgImage) window.$(this).css('background', 'url(' + bgImage + ')');
            });
          }
          // Re-init Swiper sliders
          if (window.Swiper && window.$('.swiper-container').length) {
            window.$('.swiper-container').each(function () {
              if (!this.swiper) {
                new window.Swiper(this);
              }
            });
          }
        }
      } catch (e) {
        // Silently ignore plugin re-init errors
      }

      // 4. Restore scroll AGAIN after plugins run — some plugins re-lock on init
      restoreNativeScroll();
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <RouteChangeHandler />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/metasploit-framework" element={<MetasploitFramework />} />
          <Route path="/services/ai-cybersecurity-consulting" element={<AiCybersecurityConsulting />} />
          <Route path="/services/ai-security-tools-automation" element={<AiSecurityTools />} />
          <Route path="/services/shodan-services/device-discovery" element={<ShodanDeviceDiscovery />} />
          <Route path="/services/shodan-services/vulnerability-detection" element={<ShodanVulnerabilityDetection />} />
          <Route path="/services/shodan-services/network-monitoring" element={<ShodanNetworkMonitoring />} />
          <Route path="/services/shodan-services/internet-intelligence" element={<ShodanInternetIntelligence />} />
          <Route path="/website-scanner" element={<WebsiteScanner />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
