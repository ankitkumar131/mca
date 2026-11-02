import React from 'react';

// ============================================================
// Shared animation helper — fade-in on view
// ============================================================
function Reveal({ children, delay = 0, className = '' }) {
  return (
    <div
      className={`reveal ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ============================================================
// Diagram 1 — BI Architecture: Data ka Safar
// Sources → ETL → Data Warehouse → OLAP → Dashboards → Decisions
// ============================================================
export function BIFlowDiagram() {
  const steps = [
    { label: 'Data Sources', sub: 'DB · Excel · ERP · CRM', icon: 'M12 3C7 3 3 6.5 3 11s4 8 9 8 9-3.5 9-8-4-8-9-8zm0 15c-4 0-7-2.5-7-6s3-5.5 7-5.5S19 8 19 11s-3 5.5-7 5.5z' },
    { label: 'ETL', sub: 'Extract · Transform · Load', icon: 'M12 4v4m0 12v4M4 12h4m12 0h4M6.3 6.3l2.8 2.8m5.8 5.8l2.8 2.8M6.3 17.7l2.8-2.8m5.8-5.8l2.8-2.8' },
    { label: 'Data Warehouse', sub: 'Central store', icon: 'M3 7h18v4H3zM5 11v8M19 11v8M3 7V5m18 2V5M9 7v12m6-12v12' },
    { label: 'OLAP', sub: 'Multi-dimensional analysis', icon: 'M3 3v18h18M7 14l3-3 3 3 5-6' },
    { label: 'Dashboards', sub: 'Reports · Charts · KPIs', icon: 'M4 4h7v9H4zM13 4h7v5h-7zM13 12h7v8h-7zM4 16h7v4H4z' },
    { label: 'Decisions', sub: 'Better business decisions', icon: 'M12 2l2.4 5.4L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-1.6L12 2z' },
  ];

  return (
    <svg
      viewBox="0 0 1000 420"
      className="diagram-svg"
      role="img"
      aria-label="BI architecture flow diagram"
    >
      {/* Flow line */}
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
      <line x1="120" y1="150" x2="880" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="3" strokeDasharray="6 6" />

      {/* Steps */}
      {steps.map((s, i) => {
        const x = 70 + i * 160;
        return (
          <g key={s.label} style={{ animationDelay: `${200 + i * 150}ms` }} className="diagram-pop">
            {/* glow */}
            <rect x={x} y={80} width="140" height="110" rx="14" fill="rgba(0,71,255,0.08)" stroke="rgba(255,255,255,0.18)" />
            <rect x={x} y={80} width="140" height="110" rx="14" fill="url(#stepGrad)" opacity="0.35" />
            <rect x={x} y={80} width="140" height="110" rx="14" fill="none" stroke="#0047ff" strokeWidth="2" />
            {/* icon */}
            <g transform={`translate(${x + 70}, 112)`}>
              <path
                d={s.icon}
                fill="none"
                stroke="#c4ff00"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <text x={x + 70} y={160} textAnchor="middle" fill="#fff" fontSize="15" fontWeight="700">
              {s.label}
            </text>
            <text x={x + 70} y={178} textAnchor="middle" fill="#9ab0e0" fontSize="11">
              {s.sub}
            </text>
            {/* arrow to next */}
            {i < steps.length - 1 && (
              <g className="arrow-pulse">
                <line x1={x + 140} y1="135" x2={x + 160} y2="135" stroke="#c4ff00" strokeWidth="3" markerEnd="url(#arrow)" />
              </g>
            )}
          </g>
        );
      })}
      <defs>
        <linearGradient id="stepGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0047ff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0047ff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ============================================================
// Diagram 2 — Evolution Timeline
// ============================================================
export function TimelineDiagram() {
  const items = [
    { decade: '1950s–60s', name: 'MIS', desc: 'Structured reports\nRoutine decisions' },
    { decade: '1970s', name: 'DSS', desc: 'Data + models\nSemi-structured' },
    { decade: '1980s', name: 'EIS', desc: 'Executives\nExternal + internal data' },
    { decade: '1990s', name: 'DW / OLAP', desc: 'Data warehouse\nBI term popularised' },
    { decade: '2000s', name: 'Self-Service BI', desc: 'Tableau · Power BI\nUsers self-serve' },
    { decade: '2010s+', name: 'Modern BI', desc: 'Cloud · AI/ML\nReal-time insights' },
  ];
  return (
    <svg viewBox="0 0 1000 360" className="diagram-svg" role="img" aria-label="Evolution timeline of BI">
      <line x1="60" y1="190" x2="940" y2="190" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
      {items.map((it, i) => {
        const x = 60 + i * 160;
        return (
          <g key={it.name} style={{ animationDelay: `${i * 130}ms` }} className="diagram-pop">
            {/* node */}
            <circle cx={x} cy={190} r="13" fill="#0a0e1a" stroke="#c4ff00" strokeWidth="3" />
            <circle cx={x} cy={190} r="6" fill="#c4ff00" className="node-pulse" />
            {/* decade */}
            <text x={x} y={152} textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="800">
              {it.decade}
            </text>
            {/* name */}
            <text x={x} y={232} textAnchor="middle" fill="#fff" fontSize="15" fontWeight="700">
              {it.name}
            </text>
            {it.desc.split('\n').map((d, j) => (
              <text key={j} x={x} y={252 + j * 16} textAnchor="middle" fill="#9ab0e0" fontSize="11">
                {d}
              </text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

// ============================================================
// Diagram 3 — DSS Components
// ============================================================
export function DSSDiagram() {
  return (
    <svg viewBox="0 0 640 420" className="diagram-svg" role="img" aria-label="DSS components diagram">
      <defs>
        <marker id="arrowD" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
      {/* center */}
      <g style={{ animationDelay: '100ms' }} className="diagram-pop">
        <rect x="230" y="150" width="180" height="120" rx="16" fill="rgba(0,71,255,0.12)" stroke="#0047ff" strokeWidth="2.5" />
        <text x="320" y="200" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="800">DECISION</text>
        <text x="320" y="226" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="700">SUPPORT SYSTEM</text>
      </g>
      {/* three components */}
      {[
        { x: 40, y: 40, name: 'DATABASE', sub: 'Management System', desc: 'Store · manage · retrieve data', icon: 'M12 3C7 3 3 6.5 3 11s4 8 9 8 9-3.5 9-8-4-8-9-8z' },
        { x: 400, y: 40, name: 'MODEL', sub: 'Management System', desc: 'Analysis models · forecasting', icon: 'M12 2l2.4 5.4L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-1.6L12 2z' },
        { x: 400, y: 280, name: 'USER', sub: 'Interface', desc: 'Dialogue · query · interaction', icon: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 9a7 7 0 0 1 14 0' },
      ].map((c, i) => (
        <g key={c.name} style={{ animationDelay: `${250 + i * 140}ms` }} className="diagram-pop">
          <rect x={c.x} y={c.y} width="190" height="110" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" />
          <rect x={c.x} y={c.y} width="190" height="110" rx="14" fill="none" stroke="#0047ff" strokeWidth="2" opacity="0.6" />
          <g transform={`translate(${c.x + 34}, ${c.y + 34})`}>
            <path d={c.icon} fill="none" stroke="#c4ff00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text x={c.x + 30} y={c.y + 66} fill="#fff" fontSize="16" fontWeight="700">{c.name}</text>
          <text x={c.x + 30} y={c.y + 86} fill="#c4ff00" fontSize="12" fontWeight="600">{c.sub}</text>
          <text x={c.x + 30} y={c.y + 102} fill="#9ab0e0" fontSize="10">{c.desc}</text>
          {/* arrow to center */}
          <line
            x1={c.x + 190} y1={c.y + 55}
            x2={230} y2={190 + (c.y < 200 ? 0 : 40)}
            stroke="#c4ff00" strokeWidth="2.5" strokeDasharray="5 5" markerEnd="url(#arrowD)" className="arrow-pulse"
          />
        </g>
      ))}
      {/* data label */}
      <text x="320" y="395" textAnchor="middle" fill="#9ab0e0" fontSize="12">
        Three components combine to support decision makers
      </text>
    </svg>
  );
}

// ============================================================
// Diagram 4 — DIKW Pyramid
// ============================================================
export function DIKWDiagram() {
  const levels = [
    { label: 'WISDOM', sub: 'Right decisions', color: '#c4ff00', width: 0.22, y: 40 },
    { label: 'KNOWLEDGE', sub: 'Patterns · experience', color: '#00c8ff', width: 0.38, y: 110 },
    { label: 'INFORMATION', sub: 'Data + context', color: '#0047ff', width: 0.56, y: 180 },
    { label: 'DATA', sub: 'Raw facts & figures', color: '#7a8ab5', width: 0.76, y: 250 },
  ];
  const cx = 250;
  return (
    <svg viewBox="0 0 500 400" className="diagram-svg" role="img" aria-label="DIKW pyramid diagram">
      {/* left labels (for wide screens) */}
      {levels.map((lv, i) => {
        const w = lv.width * 300;
        const x = cx - w / 2;
        return (
          <g key={lv.label} style={{ animationDelay: `${300 - i * 90}ms` }} className="diagram-pop">
            <polygon
              points={`${x},${lv.y} ${x + w},${lv.y} ${x + w + 40},${lv.y + 60} ${x + 40},${lv.y + 60}`}
              fill={lv.color}
              opacity="0.22"
              stroke={lv.color}
              strokeWidth="2.5"
            />
            <text x={cx + w / 2 + 50} y={lv.y + 28} fill="#fff" fontSize="15" fontWeight="800">{lv.label}</text>
            <text x={cx + w / 2 + 50} y={lv.y + 48} fill="#9ab0e0" fontSize="11">{lv.sub}</text>
            {/* arrow */}
            <line x1={cx + w / 2 + 12} y1={lv.y + 30} x2={cx + w / 2 + 38} y2={lv.y + 30} stroke={lv.color} strokeWidth="2" markerEnd="url(#arrow)" />
          </g>
        );
      })}
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
    </svg>
  );
}

// ============================================================
// Diagram 5 — Analytics 4 stages
// ============================================================
export function AnalyticsDiagram() {
  const stages = [
    { q: 'What happened?', name: 'DESCRIPTIVE', desc: 'Past summary · reports', color: '#0047ff', icon: 'M4 4h7v9H4zM13 4h7v5h-7zM13 12h7v8h-7zM4 16h7v4H4z' },
    { q: 'Why did it happen?', name: 'DIAGNOSTIC', desc: 'Root cause · drill-down', color: '#00c8ff', icon: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm10 17l-4.3-4.3' },
    { q: 'What will happen?', name: 'PREDICTIVE', desc: 'Forecast · ML models', color: '#39d0ff', icon: 'M3 17l6-6 4 4 8-9' },
    { q: 'What should we do?', name: 'PRESCRIPTIVE', desc: 'Recommendations · optimize', color: '#c4ff00', icon: 'M12 2l2.4 5.4L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-1.6L12 2z' },
  ];
  return (
    <svg viewBox="0 0 1000 320" className="diagram-svg" role="img" aria-label="Analytics stages diagram">
      <defs>
        <marker id="arrowA" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
      <line x1="110" y1="160" x2="890" y2="160" stroke="rgba(255,255,255,0.15)" strokeWidth="3" strokeDasharray="6 6" />
      {stages.map((s, i) => {
        const x = 60 + i * 235;
        return (
          <g key={s.name} style={{ animationDelay: `${i * 150}ms` }} className="diagram-pop">
            <rect x={x} y={90} width="180" height="140" rx="16" fill="rgba(255,255,255,0.04)" stroke={s.color} strokeWidth="2.5" />
            <g transform={`translate(${x + 90}, 120)`}>
              <path d={s.icon} fill="none" stroke={s.color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <text x={x + 90} y={162} textAnchor="middle" fill="#fff" fontSize="15" fontWeight="800">{s.name}</text>
            <text x={x + 90} y={182} textAnchor="middle" fill={s.color} fontSize="13" fontWeight="700">"{s.q}"</text>
            <text x={x + 90} y={202} textAnchor="middle" fill="#9ab0e0" fontSize="11">{s.desc}</text>
            {i < 3 && (
              <line x1={x + 180} y1="160" x2={x + 235} y2="160" stroke="#c4ff00" strokeWidth="3" markerEnd="url(#arrowA)" className="arrow-pulse" />
            )}
          </g>
        );
      })}
    </svg>
  );
}

// ============================================================
// Diagram 6 — Decision cycle
// ============================================================
export function CycleDiagram() {
  const steps = [
    '1 · Identify Problem',
    '2 · Collect Data',
    '3 · Clean & Process',
    '4 · Analyze',
    '5 · Interpret',
    '6 · Decide',
    '7 · Implement & Monitor',
  ];
  const cx = 250, cy = 215, r = 130;
  return (
    <svg viewBox="0 0 500 430" className="diagram-svg" role="img" aria-label="Data-driven decision cycle">
      <defs>
        <marker id="arrowC" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
      {/* ring */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="3" strokeDasharray="8 8" />
      {/* center */}
      <g style={{ animationDelay: '80ms' }} className="diagram-pop">
        <circle cx={cx} cy={cy} r="55" fill="rgba(0,71,255,0.12)" stroke="#0047ff" strokeWidth="2.5" />
        <text x={cx} y={cy - 6} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">DATA-DRIVEN</text>
        <text x={cx} y={cy + 16} textAnchor="middle" fill="#c4ff00" fontSize="13" fontWeight="700">CYCLE</text>
      </g>
      {/* steps around */}
      {steps.map((s, i) => {
        const ang = -Math.PI / 2 + (i * 2 * Math.PI) / steps.length;
        const x = cx + r * Math.cos(ang) - 80;
        const y = cy + r * Math.sin(ang) - 16;
        return (
          <g key={s} style={{ animationDelay: `${150 + i * 110}ms` }} className="diagram-pop">
            <rect x={x} y={y} width="160" height="32" rx="16" fill="rgba(255,255,255,0.05)" stroke={i === steps.length - 1 ? '#c4ff00' : 'rgba(0,71,255,0.7)'} strokeWidth="1.8" />
            <text x={x + 80} y={y + 20} textAnchor="middle" fill="#fff" fontSize="11" fontWeight="600">{s}</text>
          </g>
        );
      })}
      <text x={cx} y={405} textAnchor="middle" fill="#9ab0e0" fontSize="12">Circular process — ek baar decision lene se kaam nahi khatam hota</text>
    </svg>
  );
}

// ============================================================
// Diagram selector
// ============================================================
export function Diagram({ type }) {
  switch (type) {
    case 'biflow':
      return <BIFlowDiagram />;
    case 'timeline':
      return <TimelineDiagram />;
    case 'dss':
      return <DSSDiagram />;
    case 'dikw':
      return <DIKWDiagram />;
    case 'analytics':
      return <AnalyticsDiagram />;
    case 'cycle':
      return <CycleDiagram />;
    default:
      return null;
  }
}
