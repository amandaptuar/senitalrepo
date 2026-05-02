import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Platform.css';

const AGENTS = [
  ["RECON-1", "Subdomain Hunter"], ["SURFACE-2", "Asset Mapper"], ["CVE-3", "CVE Scanner"], ["INJECT-4", "SQL Validator"],
  ["WEB-5", "Web Fuzzer"], ["AUTH-6", "Auth Tester"], ["CORS-7", "CORS Auditor"], ["API-8", "API Fuzzer"],
  ["FILE-9", "Backup Finder"], ["SERVER-10", "Server Auditor"], ["PROOF-11", "Evidence Engine"], ["TRIAGE-12", "AI Triage"],
  ["SHIELD-13", "Response Engine"], ["LEARN-14", "Learning Loop"]
];

const FINDINGS = [
  {
    id: "F-001", severity: "CRITICAL", title: "Remote Code Execution via PHP CGI Argument Injection", cve: "CVE-2024-4577", cvss: "9.8", asset: "api.demo-corp.com:8080",
    evidence: "uid=33(www-data) gid=33(www-data). Remote command execution confirmed in authorized simulation.",
    impact: "Full server compromise with potential access to application data, lateral movement, persistent backdoors, and regulatory exposure.",
    remediation: "Upgrade PHP immediately, disable vulnerable CGI paths, restrict /cgi-bin access, and monitor for suspicious process execution."
  },
  {
    id: "F-002", severity: "CRITICAL", title: "Unauthenticated Admin Panel Exposure", cve: "—", cvss: "9.1", asset: "admin.demo-corp.com",
    evidence: "Administrative dashboard returned HTTP 200 without cookie, bearer token, MFA, or HTTP basic authentication.",
    impact: "Complete compromise of application administration, user management, configuration, and downstream credential exposure.",
    remediation: "Require authenticated sessions, enforce MFA, restrict admin routes, rotate exposed credentials, and audit admin actions."
  },
  {
    id: "F-003", severity: "HIGH", title: "CORS Misconfiguration with Credentialed Requests", cve: "—", cvss: "7.5", asset: "api.demo-corp.com",
    evidence: "API reflected arbitrary Origin header while allowing credentials in cross-origin requests.",
    impact: "Authenticated users can be attacked through malicious sites, enabling account takeover and data exfiltration paths.",
    remediation: "Implement strict allowlist, remove arbitrary origin reflection, and use SameSite cookie controls."
  },
  {
    id: "F-004", severity: "HIGH", title: "Exposed .git Repository with Secrets", cve: "—", cvss: "7.2", asset: "www.demo-corp.com",
    evidence: "Public .git/config and commit history artifacts exposed cloud keys and database strings in simulation.",
    impact: "Source exposure and credential leakage create cloud pivot and financial fraud pathways.",
    remediation: "Block .git web access, rotate exposed keys, purge history, and enforce secret scanning."
  },
  {
    id: "F-005", severity: "MEDIUM", title: "Outdated Apache and PHP Fingerprint", cve: "CVE-2023-31122", cvss: "5.9", asset: "static.demo-corp.com",
    evidence: "Server headers reveal Apache 2.4.54 and PHP 7.4.3 in the simulated environment.",
    impact: "Unpatched infrastructure increases exploit chain risk when combined with higher-severity issues.",
    remediation: "Upgrade Apache/PHP, remove version disclosure headers, and validate patch state."
  }
];

const Platform = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'demo';
  
  const setActiveTab = (tab) => {
    setSearchParams({ tab });
  };

  const [scanDepth, setScanDepth] = useState('full');
  const [domainInput, setDomainInput] = useState('demo-corp.com');
  const [targetDomain, setTargetDomain] = useState('demo-corp.com');
  
  // Scan State
  const [agentStatus, setAgentStatus] = useState({});
  const [scanLogs, setScanLogs] = useState([{ agent: 'SYSTEM', msg: 'Ready. Enter an authorized target and start scan.' }]);
  const [liveFindings, setLiveFindings] = useState([]);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanCommand, setScanCommand] = useState('sentinel@ops: waiting');
  
  // Dashboard & Triage State
  const [selectedFinding, setSelectedFinding] = useState(FINDINGS[0]);
  const [triageBrief, setTriageBrief] = useState(null);
  const [leadStatus, setLeadStatus] = useState('');

  const logRef = useRef(null);

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

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [scanLogs]);

  const handleStartScan = () => {
    const domain = (domainInput || "demo-corp.com").replace(/^https?:\/\//, "").replace(/\/$/, "");
    setTargetDomain(domain);
    setScanCommand(`sentinel@ops: autonomous_scan --target=${domain} --mode=${scanDepth} --agents=14`);
    setScanLogs([]);
    setLiveFindings([]);
    setScanProgress(0);
    setAgentStatus({});

    const script = [
      ["RECON-1", `Enumerating subdomains for ${domain}...`],
      ["SURFACE-2", "14 live assets confirmed. Fingerprinting services..."],
      ["CVE-3", "Nuclei templates matched against exposed services."],
      ["INJECT-4", "CRITICAL: RCE exploitability confirmed in authorized simulation.", FINDINGS[0]],
      ["AUTH-6", "CRITICAL: Admin panel accessible without credentials.", FINDINGS[1]],
      ["CORS-7", "HIGH: Arbitrary origin reflection with credentials.", FINDINGS[2]],
      ["FILE-9", "HIGH: Exposed repository artifacts with secrets.", FINDINGS[3]],
      ["SERVER-10", "MEDIUM: Outdated Apache/PHP fingerprint confirmed.", FINDINGS[4]],
      ["PROOF-11", "Evidence packages compiled: requests, responses, PoC logs, CVSS."],
      ["TRIAGE-12", "AI triage complete. Executive brief ready."],
      ["SHIELD-13", "Remediation staged. Awaiting CISO approval."],
      ["LEARN-14", "Scan pattern added to learning loop."]
    ];

    script.forEach(([agent, msg, finding], i) => {
      setTimeout(() => {
        setAgentStatus(prev => ({ ...prev, [agent]: 'active' }));
        setScanLogs(prev => [...prev, { agent, msg }]);
        setScanProgress(Math.round(((i + 1) / script.length) * 100));
        
        if (finding) {
          setLiveFindings(prev => [{ ...finding, asset: finding.asset.replace("demo-corp.com", domain) }, ...prev]);
        }
        
        setTimeout(() => setAgentStatus(prev => ({ ...prev, [agent]: 'done' })), 500);
        
        if (i === script.length - 1) {
          setTimeout(() => { setActiveTab("dashboard"); }, 700);
        }
      }, i * 650);
    });
  };

  const handleSelectFinding = (finding) => {
    setSelectedFinding(finding);
    setActiveTab("triage");
    generateTriage(finding);
  };

  const generateTriage = (finding = selectedFinding) => {
    if (!finding) return;
    setTriageBrief({
      title: finding.title,
      asset: finding.asset,
      severity: finding.severity,
      cvss: finding.cvss,
      evidence: finding.evidence,
      impact: finding.impact,
      status: null
    });
  };

  const approveRemediation = () => {
    setTriageBrief(prev => ({ ...prev, status: 'approved' }));
  };

  const denyRemediation = () => {
    setTriageBrief(prev => ({ ...prev, status: 'denied' }));
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setLeadStatus("Inquiry captured locally. Connect this form to HubSpot, Slack, or your CRM endpoint for production.");
    e.target.reset();
  };

  // Dashboard calculations
  const totalFindings = liveFindings.length > 0 ? liveFindings : FINDINGS;
  const criticalCount = totalFindings.filter(f => f.severity === 'CRITICAL').length;
  const highCount = totalFindings.filter(f => f.severity === 'HIGH').length;

  return (
    <div id="wrapper">
      <Navbar />
      <div className="no-bottom no-top" id="content">
        <div className="sentinel-wrapper">
          <div className="bg-grid"></div>
          <div className="scanline"></div>

          <div className="container" style={{ position: 'relative', zIndex: 10 }}>

          {/* DEMO TAB */}
          {activeTab === 'demo' && (
            <div className="s-view active">
              <div className="page-title">
                <p className="eyebrow">Interactive simulation</p>
                <h2>Run a controlled SENTINEL scan.</h2>
                <p className="lead">Demo mode uses simulated findings only. Production scanning requires written authorization and scope approval.</p>
              </div>

              <div className="scan-console">
                <div className="scan-input-card">
                  <label>Authorized target domain</label>
                  <div className="scan-input-row">
                    <span>https://</span>
                    <input type="text" value={domainInput} onChange={(e) => setDomainInput(e.target.value)} placeholder="example.com" />
                    <button className="s-btn s-btn-primary" onClick={handleStartScan}>Start Scan</button>
                  </div>
                  <div className="depth-row">
                    <button className={`pill ${scanDepth === 'full' ? 'active' : ''}`} onClick={() => setScanDepth('full')}>Full Battalion</button>
                    <button className={`pill ${scanDepth === 'standard' ? 'active' : ''}`} onClick={() => setScanDepth('standard')}>Standard</button>
                    <button className={`pill ${scanDepth === 'quick' ? 'active' : ''}`} onClick={() => setScanDepth('quick')}>Quick</button>
                  </div>
                </div>

                <div className="scan-layout">
                  <aside className="agent-panel">
                    <h3>Agent Status</h3>
                    <div id="agentList">
                      {AGENTS.map(([id, label]) => (
                        <div key={id} className={`agent-row ${agentStatus[id] || ''}`}>
                          <span className="status-dot"></span>
                          <div><strong>{id}</strong><br/><small>{label}</small></div>
                        </div>
                      ))}
                    </div>
                  </aside>

                  <div className="live-terminal">
                    <div className="panel-header">
                      <span className="dot red"></span><span className="dot gold"></span><span className="dot green"></span>
                      <code>{scanCommand}</code>
                    </div>
                    <div className="scan-log" ref={logRef}>
                      {scanLogs.map((log, idx) => (
                        <p key={idx}><b>[{log.agent}]</b> {log.msg}</p>
                      ))}
                    </div>
                    <div className="progress-shell">
                      <div className="progress-bar" style={{ width: `${scanProgress}%` }}></div>
                    </div>
                  </div>

                  <aside className="live-findings">
                    <h3>Live Findings <span>{liveFindings.length}</span></h3>
                    <div id="findingFeed">
                      {liveFindings.map((f, i) => (
                        <div key={i} className={`finding-chip ${f.severity.toLowerCase()}`} onClick={() => handleSelectFinding(f)}>
                          <strong>{f.severity}: {f.title}</strong>
                          <small>{f.asset} · CVSS {f.cvss}</small>
                        </div>
                      ))}
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          )}

          {/* DASHBOARD TAB */}
          {activeTab === 'dashboard' && (
            <div className="s-view active">
              <div className="page-title d-flex justify-content-between align-items-start flex-wrap gap-3">
                <div>
                  <p className="eyebrow">Command dashboard</p>
                  <h2>Validated risk posture.</h2>
                  <p className="lead">Run a demo scan or review sample validated findings for <strong>{targetDomain}</strong>.</p>
                </div>
                <button className="s-btn s-btn-secondary mt-5" onClick={() => setActiveTab('demo')}>Run New Scan</button>
              </div>

              <div className="dashboard-grid">
                <article className="metric-card critical"><span>Critical</span><strong>{criticalCount}</strong><small>validated exploitable</small></article>
                <article className="metric-card high"><span>High</span><strong>{highCount}</strong><small>confirmed attack paths</small></article>
                <article className="metric-card"><span>False Positives</span><strong>0</strong><small>after evidence check</small></article>
                <article className="metric-card green"><span>Remediated</span><strong>0</strong><small>approval-gated fixes</small></article>
              </div>

              <div className="dashboard-main">
                <div className="chart-card">
                  <div className="card-head">
                    <h3>Risk Exposure Trend</h3>
                    <span>Last 7 scans</span>
                  </div>
                  <div className="bars">
                    {[42, 56, 74, 69, 88, 81, 64].map((v, i) => (
                      <div key={i} className="bar" style={{ height: `${v}%` }}><span>{v}</span></div>
                    ))}
                  </div>
                </div>

                <div className="chart-card">
                  <div className="card-head">
                    <h3>Threat Surface Map</h3>
                    <span>Simulated telemetry</span>
                  </div>
                  <div className="map-card">
                    <span className="node n1"></span><span className="node n2"></span><span className="node n3"></span><span className="node n4"></span>
                    <strong>14 assets scanned</strong>
                    <small>4 exploitable paths · 1 informational exposure</small>
                  </div>
                </div>
              </div>

              <div className="findings-table-card mt-3">
                <div className="card-head">
                  <h3>Validated Findings</h3>
                  <span>Click a row for AI triage</span>
                </div>
                <div className="findings-table">
                  {totalFindings.map((f, i) => (
                    <div key={i} className="finding-row" onClick={() => handleSelectFinding(f)}>
                      <span className={`tag ${f.severity.toLowerCase()}`}>{f.severity}</span>
                      <div><strong>{f.title}</strong><br/><small className="muted">{f.asset.replace("demo-corp.com", targetDomain)}</small></div>
                      <span className="muted">{f.cve}</span>
                      <strong>CVSS {f.cvss}</strong>
                      <span className="muted">{f.id}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TRIAGE TAB */}
          {activeTab === 'triage' && (
            <div className="s-view active">
              <div className="page-title">
                <p className="eyebrow">AI evidence synthesis</p>
                <h2>Executive-ready triage panel.</h2>
                <p className="lead">Click a finding in the Dashboard or use the sample below to generate a CISO brief.</p>
              </div>

              <div className="triage-layout">
                <div className="triage-finding">
                  {selectedFinding ? (
                    <>
                      <span className={`tag ${selectedFinding.severity.toLowerCase()} mb-2 d-inline-block`}>{selectedFinding.severity}</span>
                      <h3 className="mb-3">{selectedFinding.title}</h3>
                      <p><strong>Asset:</strong> {selectedFinding.asset.replace("demo-corp.com", targetDomain)}</p>
                      <p><strong>CVSS:</strong> {selectedFinding.cvss} &nbsp; <strong>CVE:</strong> {selectedFinding.cve}</p>
                      <p><strong>Evidence:</strong> {selectedFinding.evidence}</p>
                      <div className="approval-row mt-4">
                        <button className="s-btn s-btn-primary s-btn-small" onClick={approveRemediation}>Approve Remediation</button>
                        <button className="s-btn s-btn-ghost s-btn-small" onClick={denyRemediation}>Manual Review</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3>No finding selected</h3>
                      <p>Select a validated finding from the Dashboard.</p>
                      <button className="s-btn s-btn-primary mt-3" onClick={() => handleSelectFinding(FINDINGS[0])}>Load Sample Triage</button>
                    </>
                  )}
                </div>

                <div className="ai-brief">
                  <div className="card-head">
                    <h3>AI Triage Brief</h3>
                    <button className="s-btn s-btn-secondary s-btn-small" onClick={() => generateTriage()}>Generate Brief</button>
                  </div>
                  <div className="brief-output">
                    {!triageBrief ? (
                      <p className="muted">AI brief output will appear here after clicking "Generate Brief".</p>
                    ) : (
                      <>
                        <h4>1. Executive Summary</h4>
                        <p>{triageBrief.title} was validated on <strong>{triageBrief.asset.replace("demo-corp.com", targetDomain)}</strong>. This is a <strong>{triageBrief.severity}</strong> risk with CVSS {triageBrief.cvss}, requiring immediate business-level attention.</p>
                        <h4>2. Technical Confirmation</h4>
                        <p>{triageBrief.evidence}</p>
                        <h4>3. Business Impact</h4>
                        <ul>
                          <li>{triageBrief.impact}</li>
                          <li>Risk is validated, not theoretical; escalation is justified.</li>
                          <li>Potential exposure includes operational downtime, data compromise, regulatory scrutiny, and reputational harm.</li>
                        </ul>
                        <h4>4. Remediation Priority</h4>
                        <ul>
                          <li><strong>Immediate:</strong> restrict exposure and preserve logs.</li>
                          <li><strong>24 hours:</strong> apply recommended fixes and rotate affected credentials where applicable.</li>
                          <li><strong>7 days:</strong> retest and verify remediation evidence.</li>
                          <li><strong>30 days:</strong> update controls, playbooks, and monitoring rules.</li>
                        </ul>
                        <h4>5. CISO Recommendation</h4>
                        <p>Approve controlled remediation for this finding, with rollback plan and post-fix validation.</p>
                        
                        {triageBrief.status === 'approved' && (
                          <div className="mt-4 pt-3 border-top" style={{borderColor: 'var(--border)'}}>
                            <h4>Approval Status</h4>
                            <p style={{color: 'var(--green)'}}>Remediation approved. Patch/block action staged and evidence retest scheduled.</p>
                          </div>
                        )}
                        {triageBrief.status === 'denied' && (
                          <div className="mt-4 pt-3 border-top" style={{borderColor: 'var(--border)'}}>
                            <h4>Approval Status</h4>
                            <p style={{color: 'var(--gold)'}}>Manual review selected. Finding routed to security owner for validation meeting.</p>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* INVESTOR TAB */}
          {activeTab === 'investor' && (
            <div className="s-view active">
              <div className="page-title">
                <p className="eyebrow">Investor tab</p>
                <h2>Category thesis: proof-based autonomous cyber operations.</h2>
                <p className="lead">SENTINEL combines continuous validation, AI triage, controlled remediation, enterprise GTM, and sovereign deployment economics.</p>
              </div>

              <div className="investor-hero-grid">
                <article className="investor-card"><span>TAM</span><strong>$215B</strong><small>global cybersecurity spend</small></article>
                <article className="investor-card"><span>SAM</span><strong>$62B</strong><small>application, cloud, SOC automation</small></article>
                <article className="investor-card"><span>SOM</span><strong>$420M</strong><small>year-3 autonomous validation target</small></article>
                <article className="investor-card"><span>Seed A</span><strong>$3.0M</strong><small>MVP + first enterprise contracts</small></article>
              </div>

              <div className="investor-layout">
                <div className="investor-panel">
                  <h3>5-Year ARR Model</h3>
                  <div className="arr-chart">
                    <div style={{'--h': '18%'}}><span>$1.5M</span><b>Y1</b></div>
                    <div style={{'--h': '34%'}}><span>$8.7M</span><b>Y2</b></div>
                    <div style={{'--h': '54%'}}><span>$24.6M</span><b>Y3</b></div>
                    <div style={{'--h': '74%'}}><span>$50.3M</span><b>Y4</b></div>
                    <div style={{'--h': '92%'}}><span>$92.6M</span><b>Y5</b></div>
                  </div>
                </div>

                <div className="investor-panel">
                  <h3>Investment Thesis</h3>
                  <ul className="thesis-list">
                    <li><strong>Validated proof:</strong> moves security from theoretical alerts to confirmed exploitation evidence.</li>
                    <li><strong>Labor leverage:</strong> reduces SOC validation burden and manual triage cycles.</li>
                    <li><strong>Procurement fit:</strong> enterprise, federal, and regulated operators need defensible audit evidence.</li>
                    <li><strong>Sovereign upside:</strong> air-gapped CERT and national infrastructure deployments create large ACV pathways.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* SOVEREIGN TAB */}
          {activeTab === 'sovereign' && (
            <div className="s-view active">
              <div className="page-title">
                <p className="eyebrow">Sovereign cyber resilience</p>
                <h2>Air-gapped autonomous validation for national environments.</h2>
                <p className="lead">SENTINEL can be deployed as a sovereign instance for defense ministries, national CERTs, utilities, and critical infrastructure operators.</p>
              </div>
              <div className="sovereign-grid">
                <article><h3>Air-Gapped Instance</h3><p>Designed for environments where telemetry and security data cannot leave national infrastructure.</p></article>
                <article><h3>CERT Integration</h3><p>API-ready posture dashboards for national response teams and cyber command visibility.</p></article>
                <article><h3>Self-Scanning Protocol</h3><p>The platform can continuously test its own exposed surfaces, workflows, and security controls.</p></article>
              </div>
            </div>
          )}

          {/* CONTACT TAB */}
          {activeTab === 'contact' && (
            <div className="s-view active">
              <div className="contact-card">
                <p className="eyebrow">Request briefing</p>
                <h2>Book SENTINEL for enterprise, investor, or sovereign review.</h2>
                <form onSubmit={handleLeadSubmit}>
                  <input required name="name" placeholder="Name" />
                  <input required name="email" type="email" placeholder="Work email" />
                  <select required name="interest" defaultValue="">
                    <option value="" disabled>Interest</option>
                    <option>Enterprise Pilot</option>
                    <option>Investor Briefing</option>
                    <option>Sovereign Deployment</option>
                    <option>Critical Infrastructure</option>
                  </select>
                  <textarea name="message" placeholder="Message"></textarea>
                  <button className="s-btn s-btn-primary" type="submit">Submit Inquiry</button>
                  {leadStatus && <p id="leadStatus" className="mt-3 text-success">{leadStatus}</p>}
                </form>
              </div>
            </div>
          )}

        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Platform;
