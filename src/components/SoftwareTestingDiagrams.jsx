import React from 'react';

const FONT = "'Segoe UI', system-ui, sans-serif";

// 1. QA vs QC Comparison
export function QAQCComparisonDiagram() {
  return (
    <svg viewBox="0 0 800 400" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrowST1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
      </defs>
      {/* QA side */}
      <rect x="60" y="60" width="300" height="280" rx="10" fill="#0047ff" opacity="0.1" stroke="#0047ff" strokeWidth="2" />
      <text x="210" y="90" textAnchor="middle" fill="#0047ff" fontSize="18" fontWeight="800" fontFamily={FONT}>QA (Quality Assurance)</text>
      <text x="210" y="115" textAnchor="middle" fill="#888" fontSize="13" fontFamily={FONT}>Process-Oriented</text>
      {['Prevents defects', 'Whole team', 'Systematic', 'Continuous'].map((item, i) => {
        const y = 150 + i * 40;
        return (
          <g key={i}>
            <circle cx="100" cy={y} r="6" fill="#0047ff" />
            <line x1="110" y1={y} x2="300" y2={y} stroke="#333" strokeWidth="1" />
            <text x="310" y={y + 4} fill="#fff" fontSize="13" fontFamily={FONT}>{item}</text>
          </g>
        );
      })}
      {/* QC side */}
      <rect x="440" y="60" width="300" height="280" rx="10" fill="#ff0040" opacity="0.1" stroke="#ff0040" strokeWidth="2" />
      <text x="590" y="90" textAnchor="middle" fill="#ff0040" fontSize="18" fontWeight="800" fontFamily={FONT}>QC (Quality Control)</text>
      <text x="590" y="115" textAnchor="middle" fill="#888" fontSize="13" fontFamily={FONT}>Product-Oriented</text>
      {['Finds defects', 'QA team', 'Verification', 'Final check'].map((item, i) => {
        const y = 150 + i * 40;
        return (
          <g key={i}>
            <circle cx="480" cy={y} r="6" fill="#ff0040" />
            <line x1="490" y1={y} x2="680" y2={y} stroke="#333" strokeWidth="1" />
            <text x="690" y={y + 4} fill="#fff" fontSize="13" fontFamily={FONT}>{item}</text>
          </g>
        );
      })}
      {/* VS in middle */}
      <circle cx="400" cy="200" r="35" fill="#c4ff00" opacity="0.2" stroke="#c4ff00" strokeWidth="2" />
      <text x="400" y="206" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>VS</text>
      <text x="400" y="380" textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="800" fontFamily={FONT}>QA vs QC</text>
    </svg>
  );
}

// 2. SQA Components
export function SQAComponentsDiagram() {
  const components = [
    { name: 'Standards', desc: 'ISO, CMMI', color: '#0047ff' },
    { name: 'Metrics', desc: 'Measure', color: '#00aaff' },
    { name: 'Reviews', desc: 'Code review', color: '#00ff88' },
    { name: 'Testing', desc: 'Unit, Integration', color: '#c4ff00' },
    { name: 'Training', desc: 'Team skills', color: '#ff8800' },
    { name: 'Audits', desc: 'Compliance', color: '#ff0080' },
  ];
  return (
    <svg viewBox="0 0 800 400" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      {components.map((c, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 150 + col * 250;
        const y = 80 + row * 120;
        return (
          <g key={i}>
            <rect x={x - 100} y={y - 40} width="200" height="80" rx="10" fill={c.color} opacity="0.15" stroke={c.color} strokeWidth="2" />
            <text x={x} y={y - 5} textAnchor="middle" fill={c.color} fontSize="16" fontWeight="800" fontFamily={FONT}>{c.name}</text>
            <text x={x} y={y + 18} textAnchor="middle" fill="#fff" fontSize="12" fontFamily={FONT}>{c.desc}</text>
          </g>
        );
      })}
      <text x="400" y="360" textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="800" fontFamily={FONT}>SQA SYSTEM COMPONENTS</text>
      <text x="400" y="380" textAnchor="middle" fill="#888" fontSize="12" fontFamily={FONT}>All components work together for quality</text>
    </svg>
  );
}

// 3. Quality Business Impact
export function QualityBusinessImpactDiagram() {
  const benefits = [
    { name: 'Lower Costs', icon: '💰' },
    { name: 'Customer Satisfaction', icon: '😊' },
    { name: 'Reputation', icon: '⭐' },
    { name: 'Competitive Edge', icon: '🏆' },
    { name: 'Reduced Risks', icon: '🛡️' },
  ];
  return (
    <svg viewBox="0 0 800 350" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Quality center */}
      <circle cx="400" cy="80" r="50" fill="#c4ff00" opacity="0.2" stroke="#c4ff00" strokeWidth="3" />
      <text x="400" y="75" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>QUALITY</text>
      <text x="400" y="95" textAnchor="middle" fill="#888" fontSize="11" fontFamily={FONT}>Software</text>
      {/* Arrows to benefits */}
      {benefits.map((b, i) => {
        const x = 120 + i * 140;
        const y = 200;
        return (
          <g key={i}>
            <line x1="400" y1="130" x2={x} y2={y - 30} stroke="#c4ff00" strokeWidth="2" markerEnd="url(#arrowST1)" />
            <rect x={x - 60} y={y - 30} width="120" height="60" rx="10" fill="#0047ff" opacity="0.1" stroke="#0047ff" strokeWidth="2" />
            <text x={x} y={y - 5} textAnchor="middle" fontSize="24">{b.icon}</text>
            <text x={x} y={y + 15} textAnchor="middle" fill="#fff" fontSize="11" fontFamily={FONT}>{b.name}</text>
          </g>
        );
      })}
      {/* Result */}
      <rect x="250" y="280" width="300" height="50" rx="10" fill="#00ff88" opacity="0.15" stroke="#00ff88" strokeWidth="2" />
      <text x="400" y="310" textAnchor="middle" fill="#00ff88" fontSize="16" fontWeight="800" fontFamily={FONT}>BUSINESS SUCCESS</text>
      <text x="400" y="350" textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="700" fontFamily={FONT}>Quality → Benefits → Success</text>
    </svg>
  );
}

// 4. SQA Planning Process
export function SQAPlanningProcessDiagram() {
  const steps = [
    { name: 'Goals', desc: 'Define', color: '#0047ff' },
    { name: 'Standards', desc: 'Establish', color: '#00aaff' },
    { name: 'Resources', desc: 'Allocate', color: '#00ff88' },
    { name: 'Schedules', desc: 'Create', color: '#c4ff00' },
    { name: 'Processes', desc: 'Define', color: '#ff8800' },
    { name: 'Document', desc: 'Plan', color: '#ff0080' },
  ];
  return (
    <svg viewBox="0 0 800 350" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      {steps.map((s, i) => {
        const x = 100 + i * 120;
        return (
          <g key={i}>
            <rect x={x - 50} y={80} width="100" height="80" rx="10" fill={s.color} opacity="0.15" stroke={s.color} strokeWidth="2" />
            <text x={x} y={110} textAnchor="middle" fill={s.color} fontSize="14" fontWeight="800" fontFamily={FONT}>{s.name}</text>
            <text x={x} y={130} textAnchor="middle" fill="#fff" fontSize="11" fontFamily={FONT}>{s.desc}</text>
            {i < steps.length - 1 && (
              <line x1={x + 50} y1={120} x2={x + 120 - 50} y2={120} stroke="#c4ff00" strokeWidth="2" markerEnd="url(#arrowST1)" />
            )}
          </g>
        );
      })}
      <text x="400" y="230" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>SQA PLANNING PROCESS</text>
      <text x="400" y="255" textAnchor="middle" fill="#888" fontSize="12" fontFamily={FONT}>Goals → Standards → Resources → Schedules → Processes → Documentation</text>
      <text x="400" y="320" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="700" fontFamily={FONT}>Quality built-in — not tested-in</text>
    </svg>
  );
}

// 5. Product vs Process Quality
export function ProductProcessQualityDiagram() {
  return (
    <svg viewBox="0 0 800 350" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      {/* Product side */}
      <rect x="60" y="60" width="300" height="220" rx="10" fill="#0047ff" opacity="0.1" stroke="#0047ff" strokeWidth="2" />
      <text x="210" y="85" textAnchor="middle" fill="#0047ff" fontSize="16" fontWeight="800" fontFamily={FONT}>PRODUCT QUALITY</text>
      <text x="210" y="105" textAnchor="middle" fill="#888" fontSize="11" fontFamily={FONT}>Outcome — What We Get</text>
      {['Reliability', 'Usability', 'Performance', 'Maintainability', 'Scalability', 'Security'].map((item, i) => {
        const y = 130 + i * 25;
        return (
          <g key={i}>
            <circle cx="90" cy={y} r="5" fill="#0047ff" />
            <line x1="100" y1={y} x2="280" y2={y} stroke="#333" strokeWidth="1" />
            <text x="290" y={y + 4} fill="#fff" fontSize="12" fontFamily={FONT}>{item}</text>
          </g>
        );
      })}
      {/* Process side */}
      <rect x="440" y="60" width="300" height="220" rx="10" fill="#ff8800" opacity="0.1" stroke="#ff8800" strokeWidth="2" />
      <text x="590" y="85" textAnchor="middle" fill="#ff8800" fontSize="16" fontWeight="800" fontFamily={FONT}>PROCESS QUALITY</text>
      <text x="590" y="105" textAnchor="middle" fill="#888" fontSize="11" fontFamily={FONT}>Approach — How We Work</text>
      {['Planning', 'Design', 'Coding', 'Testing', 'Standards', 'Metrics'].map((item, i) => {
        const y = 130 + i * 25;
        return (
          <g key={i}>
            <circle cx="470" cy={y} r="5" fill="#ff8800" />
            <line x1="480" y1={y} x2="660" y2={y} stroke="#333" strokeWidth="1" />
            <text x="670" y={y + 4} fill="#fff" fontSize="12" fontFamily={FONT}>{item}</text>
          </g>
        );
      })}
      {/* VS in middle */}
      <circle cx="400" cy="170" r="30" fill="#c4ff00" opacity="0.2" stroke="#c4ff00" strokeWidth="2" />
      <text x="400" y="176" textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="800" fontFamily={FONT}>VS</text>
      <line x1="340" y1="170" x2="460" y2="170" stroke="#c4ff00" strokeWidth="2" />
      <text x="400" y="320" textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="700" fontFamily={FONT}>Good Process → Good Product</text>
    </svg>
  );
}

// 6. Process Models Comparison
export function ProcessModelsComparisonDiagram() {
  const models = [
    { name: 'Waterfall', desc: 'Linear', color: '#0047ff' },
    { name: 'Agile', desc: 'Iterative', color: '#00ff88' },
    { name: 'Spiral', desc: 'Risk-Driven', color: '#ff8800' },
    { name: 'V-Model', desc: 'Verification', color: '#ff0080' },
  ];
  return (
    <svg viewBox="0 0 800 350" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      {models.map((m, i) => {
        const x = 120 + i * 180;
        return (
          <g key={i}>
            <rect x={x - 70} y={60} width="140" height="100" rx="10" fill={m.color} opacity="0.15" stroke={m.color} strokeWidth="2" />
            <text x={x} y={90} textAnchor="middle" fill={m.color} fontSize="16" fontWeight="800" fontFamily={FONT}>{m.name}</text>
            <text x={x} y={115} textAnchor="middle" fill="#fff" fontSize="12" fontFamily={FONT}>{m.desc}</text>
          </g>
        );
      })}
      <text x="400" y="230" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>SOFTWARE PROCESS MODELS</text>
      <text x="400" y="255" textAnchor="middle" fill="#888" fontSize="12" fontFamily={FONT}>Waterfall | Agile | Spiral | V-Model</text>
      <text x="400" y="300" textAnchor="middle" fill="#00ff88" fontSize="12" fontWeight="700" fontFamily={FONT}>Each model has strengths and weaknesses</text>
    </svg>
  );
}

// 7. QC Tools Overview
export function QCToolsOverviewDiagram() {
  const tools = [
    { name: 'Check Sheet', desc: 'Data', color: '#0047ff' },
    { name: 'Flow Chart', desc: 'Process', color: '#00aaff' },
    { name: 'Histogram', desc: 'Distribution', color: '#00ff88' },
    { name: 'Pareto', desc: 'Priority', color: '#c4ff00' },
    { name: 'Fishbone', desc: 'Root Cause', color: '#ff8800' },
    { name: 'Scatter', desc: 'Relationship', color: '#ff0080' },
    { name: 'Control Chart', desc: 'Control', color: '#aa00ff' },
  ];
  return (
    <svg viewBox="0 0 800 400" className="diagram-pop" style={{ maxWidth: '100%', height: 'auto' }}>
      {tools.map((t, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        const x = 130 + col * 180;
        const y = 80 + row * 140;
        return (
          <g key={i}>
            <rect x={x - 70} y={y - 40} width="140" height="80" rx="10" fill={t.color} opacity="0.15" stroke={t.color} strokeWidth="2" />
            <text x={x} y={y - 5} textAnchor="middle" fill={t.color} fontSize="14" fontWeight="800" fontFamily={FONT}>{t.name}</text>
            <text x={x} y={y + 18} textAnchor="middle" fill="#fff" fontSize="11" fontFamily={FONT}>{t.desc}</text>
          </g>
        );
      })}
      <text x="400" y="380" textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="800" fontFamily={FONT}>7 QC TOOLS</text>
    </svg>
  );
}
