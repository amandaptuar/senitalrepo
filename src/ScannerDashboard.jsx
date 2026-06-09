import React, { useMemo } from 'react';

/* ─── helpers ─────────────────────────────────────────────────────── */
const safe = v => {
  if (v == null) return '—';
  if (typeof v === 'boolean') return v ? '✓ Yes' : '✗ No';
  if (Array.isArray(v)) return v.slice(0,4).join(', ') + (v.length>4?` +${v.length-4} more`:'');
  if (typeof v === 'object') return JSON.stringify(v).slice(0,100);
  return String(v);
};

const riskColor = score => score >= 70 ? '#ff4b4b' : score >= 40 ? '#ffb74d' : '#00e676';
const riskClass = score => score >= 70 ? 'danger' : score >= 40 ? 'warn' : 'ok';

/* ─── SVG Score Ring ──────────────────────────────────────────────── */
function Ring({ value, max, color, label, size = 110, unit = '%' }) {
  const stroke = 13, r = (size - stroke) / 2, circ = 2 * Math.PI * r;
  const pct = Math.min((value || 0) / max, 1);
  return (
    <div className="ws-ring-wrap">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#142943" strokeWidth={stroke}/>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
          strokeDasharray={`${pct*circ} ${(1-pct)*circ}`} strokeLinecap="round"
          style={{transform:'rotate(-90deg)',transformOrigin:'50% 50%'}}/>
        <text x={size/2} y={size/2-4} textAnchor="middle"
          fill="#eef5ff" fontFamily="'Bebas Neue',Impact,sans-serif" fontSize={Math.round(size*0.2)}>
          {typeof value==='number'?Math.round(value):value??'—'}
        </text>
        <text x={size/2} y={size/2+13} textAnchor="middle"
          fill="#88a6c6" fontFamily="'JetBrains Mono',monospace" fontSize={9}>{unit}</text>
      </svg>
      <span className="ws-ring-label">{label}</span>
    </div>
  );
}

/* ─── SVG Bar Chart ───────────────────────────────────────────────── */
function BarChart({ bars }) {
  const max = Math.max(...bars.map(b => b.value), 1);
  return (
    <div className="ws-bar-chart">
      {bars.map((b, i) => (
        <div key={i} className="ws-bar-col">
          <div className="ws-bar-fill" data-val={`${b.value}${b.unit||''}`}
            style={{ height:`${(b.value/max)*100}%`, background:b.color, minHeight:4 }}/>
          <div className="ws-bar-lbl">{b.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ─── Donut ───────────────────────────────────────────────────────── */
function Donut({ segments, size=140, stroke=20 }) {
  const r = (size-stroke)/2, circ = 2*Math.PI*r;
  const total = segments.reduce((a,s)=>a+(s.value||0),0)||1;
  let off=0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#142943" strokeWidth={stroke}/>
      {segments.map((s,i)=>{
        const dash=(s.value/total)*circ;
        const el=(<circle key={i} cx={size/2} cy={size/2} r={r} fill="none"
          stroke={s.color} strokeWidth={stroke}
          strokeDasharray={`${dash} ${circ-dash}`}
          strokeDashoffset={-off}
          style={{transform:'rotate(-90deg)',transformOrigin:'50% 50%'}}/>);
        off+=dash; return el;
      })}
      <text x={size/2} y={size/2-5} textAnchor="middle"
        fill="#eef5ff" fontFamily="'Bebas Neue',Impact,sans-serif" fontSize={Math.round(size*0.18)}>{total}</text>
      <text x={size/2} y={size/2+13} textAnchor="middle"
        fill="#88a6c6" fontFamily="'JetBrains Mono',monospace" fontSize={9}>TOTAL</text>
    </svg>
  );
}

/* ─── Main Dashboard ──────────────────────────────────────────────── */
export default function ScannerDashboard({ data, jobId, onReset, onDownloadPdf, pdfLoading }) {
  const d = data || {};

  // Core fields from API
  const targetUrl   = d.url || d.target_url || '—';
  const scanDate    = d.scan_date || d.timestamp || null;
  const duration    = d.scan_duration_seconds ?? d.scan_duration ?? null;
  const riskScore   = d.risk_score ?? null;          // 0-100
  const riskLevel   = d.risk_level || null;
  const ml          = d.ml_result || {};
  const catScores   = d.category_scores || {};       // domain_integrity, ssl_security, etc.
  const features    = d.features || {};
  const recon       = d.recon_summary || {};
  const llmRaw    = d.llm_report || d.ai_analysis || d.gemini_analysis || d.summary || null;

  // llm_report can be a string OR an object with {summary, findings, recommendations, ...}
  const llmObj    = llmRaw && typeof llmRaw === 'object' ? llmRaw : null;
  const llmStr    = llmRaw && typeof llmRaw === 'string' ? llmRaw : null;

  const recsRaw   = d.recommendations || (llmObj?.recommendations) || [];
  const talking   = d.talking_points || (llmObj?.key_points) || (llmObj?.talking_points) || [];
  const verdict   = d.verdict_explanation || d.domain_summary || (llmObj?.verdict) || null;


  // Fallbacks for older shape
  const vulns = useMemo(()=>[...(d.vulnerabilities||[]),(d.findings||[]),(d.issues||[])].flat(),[d]);
  const ssl   = d.ssl_info||d.ssl||d.tls||{};
  const headers = d.headers||d.http_headers||d.security_headers||{};
  const whois   = d.whois||d.whois_info||{};
  const dns     = d.dns||d.dns_records||{};
  const tech    = d.technologies||d.tech_stack||[];
  const ports   = d.open_ports||d.ports||[];

  // Category score bars (from API: 0-100)
  const catBarData = Object.entries(catScores).map(([k,v])=>({
    label: k.replace(/_/g,' ').replace(/\b\w/g,c=>c.toUpperCase()).replace('Security','Sec').replace('Integrity','Int'),
    value: typeof v==='number'?v:0,
    unit:'%',
    color: v>=70?'#00e676':v>=40?'#ffb74d':'#ff4b4b',
  }));

  // Security feature checks (from API features object)
  const HEADER_FEATURES = {
    'has_csp':'Content-Security-Policy','has_hsts':'Strict-Transport-Security',
    'has_x_frame_options':'X-Frame-Options','has_x_content_type':'X-Content-Type',
  };
  const headerChecks = Object.entries(HEADER_FEATURES).map(([k,label])=>({
    label, present: features[k]===1,
  }));
  const headerScore = headerChecks.filter(h=>h.present).length;

  // Phishing probability
  const phishPct = ml.probability != null ? Math.round(ml.probability*100) : null;
  const mlScore  = ml.score ?? riskScore;
  const mlLabel  = ml.label || riskLevel || '—';

  const rc = riskColor(mlScore||riskScore||0);
  const pc = phishPct!=null ? riskColor(phishPct) : '#88a6c6';

  // Parse LLM report into sections
  const llmSections = useMemo(()=>{
    if (!llmStr) return [];
    const raw = llmStr.split(/\n(?=#+\s|\*\*[A-Z]|[A-Z][A-Z ]+:|\d\.\s)/g);
    if (raw.length<=1) return [{title:null,body:llmStr}];
    return raw.filter(Boolean).map(p=>{
      const lines=p.trim().split('\n');
      const head=lines[0].replace(/^#+\s*/,'').replace(/^\*\*/,'').replace(/\*\*$/,'').replace(/:\s*$/,'').trim();
      const body=lines.slice(1).join('\n').trim();
      return {title:head,body:body||head};
    });
  },[llmStr]);

  // Obj-shape extra fields
  const llmObjSummary  = llmObj?.summary || llmObj?.overview || null;
  const llmObjFindings = (llmObj?.findings || llmObj?.issues || []);
  const llmObjRecs     = (llmObj?.recommendations || llmObj?.mitigations || []);
  const hasAI = !!(llmStr || llmObj || verdict || talking.length > 0);

  // Render a finding item — could be a string or an object {severity,title,detail,...}
  const renderFinding = (f, i) => {
    if (typeof f === 'string') return <li key={i}>{f}</li>;
    if (typeof f === 'object' && f !== null) {
      const sev = (f.severity||'').toLowerCase();
      const sc = sev.includes('crit')?'critical':sev.includes('high')?'high':sev.includes('med')?'medium':sev.includes('low')?'low':'info';
      return (
        <div key={i} className="ws-vuln" style={{marginBottom:8}}>
          {f.severity && <span className={`ws-sev ${sc}`}>{f.severity.toUpperCase()}</span>}
          <div style={{flex:1}}>
            {f.title && <div className="ws-vuln-title">{f.title}</div>}
            {(f.detail||f.description||f.message) && <div className="ws-vuln-desc">{f.detail||f.description||f.message}</div>}
            {f.recommendation && <div className="ws-vuln-desc" style={{color:'var(--blue)',marginTop:4}}>Fix: {f.recommendation}</div>}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="ws-dashboard">

      {/* ── Header ── */}
      <div className="ws-dash-header">
        <div>
          <h2>SECURITY REPORT</h2>
          <p className="ws-dash-target">
            TARGET: <strong>{targetUrl}</strong>
            {scanDate && <> · {scanDate}</>}
          </p>
        </div>
        <div className="ws-dash-actions">
          <button className="ws-pdf-btn" onClick={onDownloadPdf} disabled={pdfLoading}>
            {pdfLoading ? '⏳ Generating…' : '⬇ PDF Report'}
          </button>
          <button className="ws-btn ws-btn-ghost" onClick={onReset}>↺ New Scan</button>
        </div>
      </div>

      {/* ── KPI Row ── */}
      <div className="ws-kpi-grid">
        {mlScore!=null && (
          <div className={`ws-kpi ${riskClass(mlScore)}`}>
            <div className="ws-kpi-label">Risk Score</div>
            <div className="ws-kpi-val">{Math.round(mlScore)}</div>
            <div className="ws-kpi-sub">{riskLevel||'out of 100'}</div>
          </div>
        )}
        {phishPct!=null && (
          <div className={`ws-kpi ${riskClass(phishPct)}`}>
            <div className="ws-kpi-label">Phishing Prob.</div>
            <div className="ws-kpi-val">{phishPct}%</div>
            <div className="ws-kpi-sub">{mlLabel}</div>
          </div>
        )}
        {ml.confidence && (
          <div className="ws-kpi blue">
            <div className="ws-kpi-label">ML Confidence</div>
            <div className="ws-kpi-val" style={{fontSize:28,paddingTop:10}}>{ml.confidence}</div>
            <div className="ws-kpi-sub">model certainty</div>
          </div>
        )}
        <div className={`ws-kpi ${headerScore>=3?'ok':headerScore>=1?'warn':'danger'}`}>
          <div className="ws-kpi-label">Security Headers</div>
          <div className="ws-kpi-val">{headerScore}/4</div>
          <div className="ws-kpi-sub">headers present</div>
        </div>
        {duration!=null && (
          <div className="ws-kpi">
            <div className="ws-kpi-label">Scan Duration</div>
            <div className="ws-kpi-val" style={{fontSize:28,paddingTop:10}}>{typeof duration==='number'?duration.toFixed(1):duration}s</div>
            <div className="ws-kpi-sub">analysis time</div>
          </div>
        )}
        {features.domain_age_days!=null && (
          <div className="ws-kpi ok">
            <div className="ws-kpi-label">Domain Age</div>
            <div className="ws-kpi-val" style={{fontSize:26,paddingTop:10}}>{Math.round(features.domain_age_days/365)}y</div>
            <div className="ws-kpi-sub">{features.domain_age_days} days</div>
          </div>
        )}
      </div>

      {/* ── Charts Row ── */}
      <div className="ws-2col" style={{marginBottom:20}}>

        {/* Category Score Bars */}
        {catBarData.length>0 && (
          <div className="ws-section">
            <div className="ws-sect-head">
              <h3>📊 Category Scores</h3>
              <span className="ws-sect-badge">100 = perfect</span>
            </div>
            <BarChart bars={catBarData}/>
            <div style={{marginTop:16,display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
              {catBarData.map((b,i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:8,fontFamily:'var(--mono)',fontSize:11}}>
                  <div style={{width:8,height:8,borderRadius:'50%',background:b.color,flexShrink:0}}/>
                  <span style={{color:'var(--muted)',flex:1}}>{b.label}</span>
                  <strong style={{color:b.color}}>{b.value}%</strong>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Score Rings */}
        <div className="ws-section">
          <div className="ws-sect-head"><h3>🎯 Risk Indicators</h3></div>
          <div style={{display:'flex',gap:20,flexWrap:'wrap',justifyContent:'center',padding:'10px 0'}}>
            {mlScore!=null && <Ring value={mlScore} max={100} color={rc} label="Risk Score" unit="/ 100"/>}
            {phishPct!=null && <Ring value={phishPct} max={100} color={pc} label="Phishing %" unit="%"/>}
            <Ring value={headerScore*25} max={100} color={headerScore>=3?'#00e676':headerScore>=1?'#ffb74d':'#ff4b4b'} label="Header Score" unit="%"/>
            {catScores.ssl_security!=null && <Ring value={catScores.ssl_security} max={100} color={riskColor(100-catScores.ssl_security)} label="SSL Security" unit="%"/>}
          </div>
        </div>
      </div>

      {/* ── LLM AI Report ── */}
      {hasAI && (
        <div className="ws-section" style={{marginBottom:20}}>
          <div className="ws-sect-head">
            <h3>🤖 Gemini AI Security Analysis</h3>
            <span className="ws-sect-badge">AI Generated</span>
          </div>
          <div className="ws-ai-box">
            <div className="ws-ai-label">✦ SENTINEL AI · SECURITY BRIEF</div>

            {verdict && <div className="ws-ai-section"><h4>Verdict</h4><p>{verdict}</p></div>}

            {/* String llm_report */}
            {llmSections.map((s,i) => (
              <div key={i} className="ws-ai-section">
                {s.title && <h4>{s.title}</h4>}
                <p style={{whiteSpace:'pre-wrap'}}>{s.body}</p>
              </div>
            ))}

            {/* Object llm_report */}
            {llmObjSummary && <div className="ws-ai-section"><h4>Summary</h4><p>{String(llmObjSummary)}</p></div>}
            {llmObjFindings.length>0 && (
              <div className="ws-ai-section">
                <h4>AI Findings</h4>
                <div className="ws-vuln-list">{llmObjFindings.map(renderFinding)}</div>
              </div>
            )}
            {llmObjRecs.length>0 && (
              <div className="ws-ai-section">
                <h4>AI Recommendations</h4>
                <ul>{llmObjRecs.map((r,i)=><li key={i}>{typeof r==='string'?r:safe(r)}</li>)}</ul>
              </div>
            )}

            {/* top-level recs / talking points */}
            {recsRaw.length>0 && llmObjRecs.length===0 && (
              <div className="ws-ai-section">
                <h4>Recommendations</h4>
                <ul>{recsRaw.map((r,i)=><li key={i}>{typeof r==='string'?r:safe(r)}</li>)}</ul>
              </div>
            )}
            {talking.length>0 && (
              <div className="ws-ai-section">
                <h4>Key Points</h4>
                <ul>{talking.map((t,i)=><li key={i}>{typeof t==='string'?t:safe(t)}</li>)}</ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Security Header Checks ── */}
      <div className="ws-section" style={{marginBottom:20}}>
        <div className="ws-sect-head">
          <h3>🛡 Security Header Checks</h3>
          <span className={`ws-sect-badge ${headerScore>=3?'ok':headerScore>=1?'warn':'danger'}`}>{headerScore}/4 set</span>
        </div>
        {headerChecks.map((h,i)=>(
          <div key={i} className="ws-header-row">
            <span className="ws-header-name">{h.label}</span>
            <span className={`ws-check ${h.present?'ok':'danger'}`}>{h.present?'✓ PRESENT':'✗ MISSING'}</span>
          </div>
        ))}

        {/* Extra headers from headers object if present */}
        {Object.keys(headers).length>0 && Object.entries(headers).slice(0,8).map(([k,v])=>{
          const present=v!==null&&v!==false&&v!=='missing';
          return (
            <div key={k} className="ws-header-row">
              <span className="ws-header-name">{k}</span>
              <span className="ws-header-val">{present?String(safe(v)).slice(0,60):'—'}</span>
              <span className={`ws-check ${present?'ok':'danger'}`}>{present?'✓ SET':'✗ MISSING'}</span>
            </div>
          );
        })}
      </div>

      {/* ── Recon Summary ── */}
      {Object.keys(recon).length > 0 && (
        <div className="ws-section" style={{marginBottom:20}}>
          <div className="ws-sect-head"><h3>🔍 Recon Summary</h3></div>
          <div className="ws-info-grid">
            {[
              ['Final URL', recon.final_url],
              ['HTTP Status', recon.http_status_code],
              ['Server Tech', recon.server_tech],
              ['HSTS', recon.has_hsts===1?'Present':'Missing'],
              ['CSP', recon.has_csp===1?'Present':'Missing'],
              ['Cloudflare', recon.cloudflare_protected===1?'Yes':'No'],
              ['CF Bypass Possible', recon.cf_bypass_possible===1?'⚠ Yes':'No'],
              ['DNSSEC', recon.has_dnssec===1?'Enabled':'Missing'],
              ['Subdomains', recon.subdomains_count],
              ['Redirect Depth', recon.redirect_depth],
            ].filter(([,v])=>v!=null).map(([label,val])=>{
              const isWarn = String(val).includes('⚠')||String(val).toLowerCase().includes('bypass');
              const isOk   = String(val).toLowerCase()==='present'||val===1||val==='yes'||val==='enabled';
              const isBad  = String(val).toLowerCase()==='missing';
              return (
                <div key={label} className="ws-info-item">
                  <div className="ws-ii-lbl">{label}</div>
                  <div className={`ws-ii-val ${isOk?'ok':isBad?'danger':isWarn?'warn':''}`}>{safe(val)}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── SSL + WHOIS row ── */}
      {(Object.keys(ssl).length > 0 || Object.keys(whois).length > 0) && (
        <div className="ws-2col">
          {Object.keys(ssl).length > 0 && (
            <div className="ws-section">
              <div className="ws-sect-head"><h3>🔒 SSL / TLS</h3></div>
              <div className="ws-info-grid" style={{gridTemplateColumns:'1fr'}}>
                {Object.entries(ssl).slice(0,10).map(([k,v])=>{
                  const ok=v===true||String(v).toLowerCase()==='true'||String(v).toLowerCase()==='valid';
                  const bad=v===false||String(v).toLowerCase()==='false'||String(v).toLowerCase()==='expired';
                  return (
                    <div key={k} className="ws-info-item">
                      <div className="ws-ii-lbl">{k.replace(/_/g,' ').toUpperCase()}</div>
                      <div className={`ws-ii-val ${ok?'ok':bad?'danger':''}`}>{safe(v)}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {Object.keys(whois).length > 0 && (
            <div className="ws-section">
              <div className="ws-sect-head"><h3>📋 WHOIS</h3></div>
              <div className="ws-info-grid" style={{gridTemplateColumns:'1fr'}}>
                {Object.entries(whois).slice(0,8).map(([k,v])=>(
                  <div key={k} className="ws-info-item">
                    <div className="ws-ii-lbl">{k.replace(/_/g,' ').toUpperCase()}</div>
                    <div className="ws-ii-val">{safe(v)}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── DNS / Tech / Ports ── */}
      {(Object.keys(dns).length>0||tech.length>0||ports.length>0) && (
        <div className="ws-2col">
          {Object.keys(dns).length>0 && (
            <div className="ws-section">
              <div className="ws-sect-head"><h3>🌐 DNS Records</h3></div>
              <div className="ws-info-grid" style={{gridTemplateColumns:'1fr'}}>
                {Object.entries(dns).slice(0,8).map(([k,v])=>(
                  <div key={k} className="ws-info-item">
                    <div className="ws-ii-lbl">{k.toUpperCase()}</div>
                    <div className="ws-ii-val">{safe(v)}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {(tech.length>0||ports.length>0) && (
            <div className="ws-section">
              {tech.length>0&&(<>
                <div className="ws-sect-head"><h3>⚙ Technologies</h3><span className="ws-sect-badge">{tech.length}</span></div>
                <div className="ws-tags" style={{marginBottom:16}}>
                  {tech.map((t,i)=><span key={i} className="ws-tag ok">{typeof t==='string'?t:t.name||safe(t)}</span>)}
                </div>
              </>)}
              {ports.length>0&&(<>
                <div className="ws-sect-head" style={{marginTop:tech.length?12:0}}><h3>🔌 Open Ports</h3><span className="ws-sect-badge warn">{ports.length}</span></div>
                <div className="ws-tags">
                  {ports.map((p,i)=><span key={i} className="ws-tag warn">{typeof p==='object'?`${p.port} (${p.service||''})`:p}</span>)}
                </div>
              </>)}
            </div>
          )}
        </div>
      )}

      {/* ── Vulnerabilities (fallback for older API shape) ── */}
      {vulns.length>0 && (
        <div className="ws-section" style={{marginBottom:20}}>
          <div className="ws-sect-head">
            <h3>⚠ Vulnerabilities</h3>
            <span className="ws-sect-badge danger">{vulns.length}</span>
          </div>
          <div className="ws-vuln-list">
            {vulns.map((v,i)=>{
              const s=(v.severity||v.risk||v.level||'info').toLowerCase();
              const sc=s.includes('crit')?'critical':s.includes('high')?'high':s.includes('med')?'medium':s.includes('low')?'low':'info';
              return (
                <div key={i} className="ws-vuln">
                  <span className={`ws-sev ${sc}`}>{(v.severity||v.risk||'INFO').toUpperCase()}</span>
                  <div style={{flex:1}}>
                    <div className="ws-vuln-title">{v.title||v.name||`Finding ${i+1}`}</div>
                    {v.description&&<div className="ws-vuln-desc">{String(v.description).slice(0,240)}</div>}
                  </div>
                  {v.cve&&<span className="ws-cve">{v.cve}</span>}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
