import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScannerDashboard from './ScannerDashboard';
import './WebsiteScanner.css';

const API = 'https://sentinel-ai-api-w59o.onrender.com';
const POLL_MS = 3000;
const MAX_POLLS = 80;

const SCAN_LOG_LINES = [
  'Initializing Sentinel AI scan engine…',
  'Resolving DNS records…',
  'Checking SSL/TLS certificate…',
  'Analyzing security headers…',
  'Running ML phishing classifier…',
  'Passive reconnaissance in progress…',
  'Enumerating subdomains…',
  'Fingerprinting server technologies…',
  'Checking for exposed files & endpoints…',
  'WHOIS lookup complete…',
  'Gemini AI generating security brief…',
  'Compiling vulnerability report…',
  'Finalizing risk score…',
];

/* ─── Animated scan terminal ──────────────────────────────────────── */
function ScanningView({ targetUrl, pollCount }) {
  const [lines, setLines] = useState([]);
  const [cursor, setCursor] = useState(true);
  const logRef = useRef(null);

  // Drip-feed log lines
  useEffect(() => {
    setLines([]);
    let i = 0;
    const iv = setInterval(() => {
      if (i < SCAN_LOG_LINES.length) {
        setLines(prev => [...prev, SCAN_LOG_LINES[i]]);
        i++;
      }
    }, 1800);
    return () => clearInterval(iv);
  }, [targetUrl]);

  // Blinking cursor
  useEffect(() => {
    const iv = setInterval(() => setCursor(c => !c), 530);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [lines]);

  return (
    <div className="ws-scanning-view">
      <div className="ws-scan-anim">
        <div className="ws-scan-ring r1" />
        <div className="ws-scan-ring r2" />
        <div className="ws-scan-ring r3" />
        <div className="ws-scan-icon">🛡</div>
      </div>

      <div className="ws-scanning-label">
        <span className="ws-eyebrow">SCANNING IN PROGRESS</span>
        <h2 className="ws-scan-title">Analyzing <span>{targetUrl}</span></h2>
        <p className="ws-scan-sub">ML + passive recon + Gemini AI · poll #{pollCount}</p>
      </div>

      <div className="ws-scan-terminal">
        <div className="ws-term-header">
          <span className="ws-tdot red"/><span className="ws-tdot gold"/><span className="ws-tdot green"/>
          <code>sentinel@ops: deep_scan --target={targetUrl}</code>
        </div>
        <div className="ws-term-body" ref={logRef}>
          {lines.map((l, i) => (
            <p key={i}><span className="ws-term-prompt">[SENTINEL]</span> {l}</p>
          ))}
          {cursor && <p><span className="ws-term-prompt">[SENTINEL]</span> <span className="ws-cursor">█</span></p>}
        </div>
        <div className="ws-term-progress">
          <div className="ws-term-bar" style={{ animationPlayState: 'running' }} />
        </div>
      </div>

      <p className="ws-scan-note">This may take 30–90 seconds. Do not close this tab.</p>
    </div>
  );
}

/* ─── Main Page ───────────────────────────────────────────────────── */
export default function WebsiteScanner() {
  const [url, setUrl]           = useState('');
  const [mode, setMode]         = useState('full');
  const [view, setView]         = useState('scan');   // 'scan' | 'scanning' | 'dashboard'
  const [jobId, setJobId]       = useState(null);
  const [scanTarget, setScanTarget] = useState('');
  const [status, setStatus]     = useState('idle');
  const [result, setResult]     = useState(null);
  const [errMsg, setErrMsg]     = useState('');
  const [pdfLoading, setPdfLoading] = useState(false);
  const [polls, setPolls]       = useState(0);
  const pollRef = useRef(null);
  const topRef  = useRef(null);

  useEffect(() => {
    const scripts = ['/js/plugins.js', '/js/designesia.js'];
    const t = setTimeout(() => scripts.forEach(src => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const s = document.createElement('script'); s.src = src; s.async = false;
        document.body.appendChild(s);
      }
    }), 100);
    return () => { clearTimeout(t); scripts.forEach(src => document.querySelector(`script[src="${src}"]`)?.remove()); };
  }, []);

  const stopPoll = useCallback(() => {
    if (pollRef.current) { clearInterval(pollRef.current); pollRef.current = null; }
  }, []);

  const finishScan = useCallback((res) => {
    stopPoll();
    setResult(res);
    setStatus('done');
    setView('dashboard');
    setTimeout(() => topRef.current?.scrollIntoView({ behavior: 'smooth' }), 150);
  }, [stopPoll]);

  const startPoll = useCallback((id) => {
    let n = 0;
    stopPoll();
    pollRef.current = setInterval(async () => {
      n++; setPolls(n);
      if (n > MAX_POLLS) {
        stopPoll(); setStatus('error');
        setErrMsg('Scan timed out. Please retry.'); setView('scan'); return;
      }
      try {
        const r = await fetch(`${API}/scan/result/${id}`);
        const j = await r.json();
        const s = (j.status || '').toLowerCase();
        if (s === 'pending' || s === 'running' || s === 'processing' || s === 'queued') return;
        if (s === 'failed' || j.error) {
          stopPoll(); setStatus('error');
          setErrMsg(j.error || j.message || 'Scan failed.'); setView('scan'); return;
        }
        finishScan(j.result || j.data || j);
      } catch { /* keep polling */ }
    }, POLL_MS);
  }, [stopPoll, finishScan]);

  const handleScan = async () => {
    let raw = url.trim();
    if (!raw) return;
    if (!/^https?:\/\//i.test(raw)) raw = 'https://' + raw;

    stopPoll();
    setResult(null); setErrMsg(''); setJobId(null); setPolls(0);
    setStatus('pending'); setScanTarget(raw);
    setView('scanning');  // ← go to animated scan page immediately
    topRef.current?.scrollIntoView({ behavior: 'smooth' });

    const endpoint = mode === 'quick' ? `${API}/scan/quick` : `${API}/scan`;
    try {
      const r = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: raw }),
      });
      if (!r.ok) { const e = await r.json().catch(() => ({})); throw new Error(e.detail || e.message || `HTTP ${r.status}`); }
      const j = await r.json();

      // Quick scan or sync result returned directly
      if (j.result || j.vulnerabilities || j.risk_score !== undefined || j.phishing_probability !== undefined) {
        finishScan(j.result || j); return;
      }

      const id = j.job_id || j.id || j.task_id;
      if (!id) { finishScan(j); return; }

      setJobId(id);
      setStatus('running');
      startPoll(id);
    } catch (e) {
      stopPoll(); setStatus('error');
      setErrMsg(e.message || 'Failed to reach the API.'); setView('scan');
    }
  };

  const handleReset = () => {
    stopPoll(); setResult(null); setErrMsg(''); setJobId(null);
    setStatus('idle'); setPolls(0); setView('scan');
  };

  const handlePdf = async () => {
    const tryDownload = async (pdfId) => {
      let n = 0;
      return new Promise(resolve => {
        const iv = setInterval(async () => {
          if (++n > 30) { clearInterval(iv); resolve(); return; }
          try {
            const r = await fetch(`${API}/scan/result/${pdfId}/pdf`);
            if (r.ok && r.headers.get('content-type')?.includes('pdf')) {
              clearInterval(iv);
              const blob = await r.blob();
              const a = document.createElement('a');
              a.href = URL.createObjectURL(blob);
              a.download = `sentinel-report-${pdfId}.pdf`;
              a.click();
              resolve();
            }
          } catch {}
        }, 3000);
      });
    };

    setPdfLoading(true);
    try {
      if (jobId) { await tryDownload(jobId); }
      else {
        let raw = url.trim();
        if (!/^https?:\/\//i.test(raw)) raw = 'https://' + raw;
        const r = await fetch(`${API}/scan/report`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: raw }),
        });
        const j = await r.json();
        const pid = j.job_id || j.id;
        if (pid) await tryDownload(pid);
      }
    } catch {}
    setPdfLoading(false);
  };

  const isScanning = status === 'pending' || status === 'running';

  return (
    <div id="wrapper">
      <Navbar />
      <div className="no-bottom no-top" id="content">
        <div className="ws-wrapper">
          <div className="ws-bg-grid" />
          <div className="ws-scanline" />
          <div ref={topRef} className="container ws-inner">

            {/* ══ VIEW 1: SCAN INPUT ══ */}
            {view === 'scan' && (
              <>
                <div className="ws-hero">
                  <p className="ws-eyebrow">Sentinel AI · Security Scanner</p>
                  <h1>WEBSITE<br /><span>SCANNER</span></h1>
                  <p className="ws-hero-sub">ML + passive recon + Gemini AI phishing &amp; security analysis. Get an instant professional security report for any URL.</p>
                  <div className="ws-features">
                    {['ML Phishing Detection','SSL/TLS Analysis','Vuln Scanning','WHOIS & DNS','Security Headers','Gemini AI','PDF Report'].map(f => (
                      <span key={f} className="ws-feat-pill"><span className="ws-feat-dot" />{f}</span>
                    ))}
                  </div>
                </div>

                <div className="ws-input-card">
                  <div className="ws-input-row">
                    <span className="ws-prefix">🔍 TARGET →</span>
                    <input id="ws-url-input" type="text" value={url}
                      onChange={e => setUrl(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && !isScanning && handleScan()}
                      placeholder="example.com or https://example.com" />
                  </div>
                  <div className="ws-modes">
                    <button className={`ws-pill ${mode==='full'?'active':''}`} onClick={() => setMode('full')}>
                      ⚡ Full Scan (ML + Gemini AI + Recon)
                    </button>
                    <button className={`ws-pill ${mode==='quick'?'active':''}`} onClick={() => setMode('quick')}>
                      ⚡ Quick Scan (ML + Recon only)
                    </button>
                  </div>
                  <div className="ws-btn-row">
                    <button id="ws-scan-btn" className="ws-btn ws-btn-primary"
                      onClick={handleScan} disabled={!url.trim()}>
                      ⚡ Start Scan
                    </button>
                  </div>
                </div>

                {errMsg && (
                  <div className="ws-error">
                    <h3>⚠ Scan Error</h3>
                    <p>{errMsg}</p>
                    <p style={{marginTop:12,fontSize:13,color:'var(--faint)'}}>
                      The API runs on Render's free tier — it may take 30–60s to wake up on first use. Please retry.
                    </p>
                  </div>
                )}

                <div className="ws-empty">
                  <div className="ws-empty-icon">🛡</div>
                  <h3>READY TO SCAN</h3>
                  <p>Enter any URL and hit Start Scan. Full scan uses ML + Gemini AI for deep analysis with a professional security dashboard on completion.</p>
                </div>
              </>
            )}

            {/* ══ VIEW 2: SCANNING ANIMATION ══ */}
            {view === 'scanning' && (
              <ScanningView targetUrl={scanTarget} pollCount={polls} />
            )}

            {/* ══ VIEW 3: DASHBOARD ══ */}
            {view === 'dashboard' && result && (
              <>


                <ScannerDashboard
                  data={result}
                  jobId={jobId}
                  onReset={handleReset}
                  onDownloadPdf={handlePdf}
                  pdfLoading={pdfLoading}
                />
              </>
            )}

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
