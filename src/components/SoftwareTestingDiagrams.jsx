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

// ============================================================
// TOPIC 1.8 — Quality Assurance Models
// ============================================================

export function QAModelsOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="qaModelsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#aa00ff', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#6600cc', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      
      <rect width="900" height="650" fill="#0a0a0f" />
      
      <text x="450" y="35" textAnchor="middle" fill="#aa00ff" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Quality Assurance Models Overview
      </text>
      
      {/* ISO-9000 */}
      <g transform="translate(50, 70)">
        <rect width="250" height="100" rx="8" fill="url(#qaModelsGrad)" stroke="#aa00ff" strokeWidth="2" />
        <text x="125" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">ISO-9000 Series</text>
        <text x="125" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Quality Management</text>
        <text x="125" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Standardization</text>
        <text x="125" y="80" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Certification</text>
      </g>
      
      {/* CMM/CMMI */}
      <g transform="translate(325, 70)">
        <rect width="250" height="100" rx="8" fill="url(#qaModelsGrad)" stroke="#aa00ff" strokeWidth="2" />
        <text x="125" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">CMM / CMMI</text>
        <text x="125" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Process Maturity</text>
        <text x="125" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">5 Levels</text>
        <text x="125" y="80" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Process Improvement</text>
      </g>
      
      {/* TMM */}
      <g transform="translate(600, 70)">
        <rect width="250" height="100" rx="8" fill="url(#qaModelsGrad)" stroke="#aa00ff" strokeWidth="2" />
        <text x="125" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">TMM</text>
        <text x="125" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Test Maturity</text>
        <text x="125" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">5 Levels</text>
        <text x="125" y="80" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Testing Improvement</text>
      </g>
      
      {/* SPICE */}
      <g transform="translate(50, 200)">
        <rect width="250" height="100" rx="8" fill="url(#qaModelsGrad)" stroke="#aa00ff" strokeWidth="2" />
        <text x="125" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">SPICE</text>
        <text x="125" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Process Assessment</text>
        <text x="125" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">6 Levels</text>
        <text x="125" y="80" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">International Standard</text>
      </g>
      
      {/* Malcolm Baldrige */}
      <g transform="translate(325, 200)">
        <rect width="250" height="100" rx="8" fill="url(#qaModelsGrad)" stroke="#aa00ff" strokeWidth="2" />
        <text x="125" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Malcolm Baldrige</text>
        <text x="125" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Performance Excellence</text>
        <text x="125" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Award Criteria</text>
        <text x="125" y="80" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Organizational Excellence</text>
      </g>
      
      {/* P-CMM */}
      <g transform="translate(600, 200)">
        <rect width="250" height="100" rx="8" fill="url(#qaModelsGrad)" stroke="#aa00ff" strokeWidth="2" />
        <text x="125" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">P-CMM</text>
        <text x="125" y="50" textAnchor="middle" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">People Capability</text>
        <text x="125" y="65" textAnchor="middle" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">5 Levels</text>
        <text x="125" y="80" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Workforce Development</text>
      </g>
      
      {/* Connection lines */}
      <line x1="175" y1="120" x2="325" y2="120" stroke="#aa00ff" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="475" y1="120" x2="625" y2="120" stroke="#aa00ff" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="175" y1="250" x2="325" y2="250" stroke="#aa00ff" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="475" y1="250" x2="625" y2="250" stroke="#aa00ff" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      
      {/* CMM Levels Visual */}
      <g transform="translate(325, 340)">
        <text x="125" y="20" textAnchor="middle" fill="#aa00ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">CMM 5 Levels</text>
        
        <rect x="20" y="30" width="210" height="35" rx="4" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="30" y="52" fill="#888" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">1</text>
        <text x="50" y="52" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Initial</text>
        <text x="130" y="52" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Ad hoc</text>
        
        <rect x="20" y="70" width="210" height="35" rx="4" fill="#1a1a2e" stroke="#555" strokeWidth="1" />
        <text x="30" y="92" fill="#888" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">2</text>
        <text x="50" y="92" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Repeatable</text>
        <text x="130" y="92" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Basic PM</text>
        
        <rect x="20" y="110" width="210" height="35" rx="4" fill="#2a2a3e" stroke="#666" strokeWidth="1" />
        <text x="30" y="132" fill="#aaa" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">3</text>
        <text x="50" y="132" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Defined</text>
        <text x="130" y="132" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Standardized</text>
        
        <rect x="20" y="150" width="210" height="35" rx="4" fill="#3a3a4e" stroke="#777" strokeWidth="1" />
        <text x="30" y="172" fill="#bbb" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">4</text>
        <text x="50" y="172" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Managed</text>
        <text x="130" y="172" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Quantitative</text>
        
        <rect x="20" y="190" width="210" height="35" rx="4" fill="#4a4a5e" stroke="#888" strokeWidth="1" />
        <text x="30" y="212" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">5</text>
        <text x="50" y="212" fill="#ccc" fontSize="11" fontFamily="'Segoe UI', system-ui, sans-serif">Optimizing</text>
        <text x="130" y="212" fill="#888" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Continuous</text>
      </g>
      
      {/* Selection Criteria */}
      <g transform="translate(50, 480)">
        <text x="100" y="25" textAnchor="middle" fill="#aa00ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Model Selection Criteria</text>
        <text x="100" y="45" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Organizational needs</text>
        <text x="100" y="60" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Process maturity goals</text>
        <text x="100" y="75" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Quality improvement focus</text>
        <text x="100" y="90" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Resource availability</text>
        <text x="100" y="105" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Multiple models combine</text>
      </g>
      
      <g transform="translate(600, 480)">
        <text x="100" y="25" textAnchor="middle" fill="#aa00ff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Key Benefits</text>
        <text x="100" y="45" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Structured approach</text>
        <text x="100" y="60" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Process improvement</text>
        <text x="100" y="75" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Quality consistency</text>
        <text x="100" y="90" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• International recognition</text>
        <text x="100" y="105" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Continuous improvement</text>
      </g>
    </svg>
  );
}

// ============================================================
// TOPIC 1.9 — Software Quality Assurance Trends
// ============================================================

export function SQATrendsOverviewDiagram() {
  return (
    <svg viewBox="0 0 900 650" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="sqaTrendsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff0080', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: '#cc0066', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      
      <rect width="900" height="650" fill="#0a0a0f" />
      
      <text x="450" y="35" textAnchor="middle" fill="#ff0080" fontSize="20" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">
        Software Quality Assurance Trends
      </text>
      
      {/* PSP */}
      <g transform="translate(50, 70)">
        <rect width="200" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">PSP</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Personal Software</text>
        <text x="100" y="62" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Process</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Individual improvement</text>
        <text x="100" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Self-discipline</text>
      </g>
      
      {/* TSP */}
      <g transform="translate(275, 70)">
        <rect width="200" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">TSP</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Team Software</text>
        <text x="100" y="62" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Process</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Team performance</text>
        <text x="100" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Project success</text>
      </g>
      
      {/* OO Methodology */}
      <g transform="translate(500, 70)">
        <rect width="200" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">OO Methodology</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Object-Oriented</text>
        <text x="100" y="62" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Approach</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Code reuse</text>
        <text x="100" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Maintainability</text>
      </g>
      
      {/* Clean-room SE */}
      <g transform="translate(725, 70)">
        <rect width="150" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="75" y="28" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Clean-room</text>
        <text x="75" y="45" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">SE</text>
        <text x="75" y="65" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Defect</text>
        <text x="75" y="78" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Prevention</text>
        <text x="75" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Formal methods</text>
      </g>
      
      {/* Defect Injection */}
      <g transform="translate(50, 210)">
        <rect width="200" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Defect Injection</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Fault injection</text>
        <text x="100" y="62" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Testing</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Test effectiveness</text>
        <text x="100" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Validation</text>
      </g>
      
      {/* Internal Auditing */}
      <g transform="translate(275, 210)">
        <rect width="200" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Internal Auditing</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Compliance</text>
        <text x="100" y="62" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Verification</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Process audit</text>
        <text x="100" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Standards</text>
      </g>
      
      {/* Inspections */}
      <g transform="translate(500, 210)">
        <rect width="200" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="100" y="28" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Inspections</text>
        <text x="100" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">& Walkthroughs</text>
        <text x="100" y="62" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Peer review</text>
        <text x="100" y="80" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Early detection</text>
        <text x="100" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Quality</text>
      </g>
      
      {/* CASE Tools */}
      <g transform="translate(725, 210)">
        <rect width="150" height="110" rx="8" fill="url(#sqaTrendsGrad)" stroke="#ff0080" strokeWidth="2" />
        <text x="75" y="28" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">CASE Tools</text>
        <text x="75" y="48" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Automation</text>
        <text x="75" y="68" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Efficiency</text>
        <text x="75" y="81" textAnchor="middle" fill="#888" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Productivity</text>
        <text x="75" y="95" textAnchor="middle" fill="#666" fontSize="9" fontFamily="'Segoe UI', system-ui, sans-serif">Quality</text>
      </g>
      
      {/* Connection lines */}
      <line x1="250" y1="125" x2="275" y2="125" stroke="#ff0080" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="475" y1="125" x2="500" y2="125" stroke="#ff0080" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="700" y1="125" x2="725" y2="125" stroke="#ff0080" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      
      <line x1="250" y1="265" x2="275" y2="265" stroke="#ff0080" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="475" y1="265" x2="500" y2="265" stroke="#ff0080" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      <line x1="700" y1="265" x2="725" y2="265" stroke="#ff0080" strokeWidth="1" strokeDasharray="4,4" opacity="0.5" />
      
      {/* PSP/TSP Phases */}
      <g transform="translate(50, 360)">
        <text x="200" y="20" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">PSP/TSP Phases</text>
        <rect x="10" y="30" width="100" height="25" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="60" y="47" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Planning</text>
        <rect x="120" y="30" width="100" height="25" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="170" y="47" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Design</text>
        <rect x="230" y="30" width="100" height="25" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="280" y="47" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Code</text>
        <rect x="340" y="30" width="100" height="25" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="390" y="47" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Test</text>
        <rect x="450" y="30" width="120" height="25" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
        <text x="510" y="47" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Postmortem</text>
        
        <line x1="110" y1="42" x2="120" y2="42" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
        <line x1="220" y1="42" x2="230" y2="42" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
        <line x1="330" y1="42" x2="340" y2="42" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
        <line x1="440" y1="42" x2="450" y2="42" stroke="#ff0080" strokeWidth="1" opacity="0.5" />
      </g>
      
      {/* Benefits */}
      <g transform="translate(50, 440)">
        <text x="300" y="25" textAnchor="middle" fill="#ff0080" fontSize="12" fontWeight="bold" fontFamily="'Segoe UI', system-ui, sans-serif">Key Benefits of Modern Trends</text>
        <text x="300" y="45" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Quality improvement</text>
        <text x="300" y="60" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Efficiency increase</text>
        <text x="300" y="75" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Defect reduction</text>
        <text x="300" y="90" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Process maturity</text>
        <text x="300" y="105" textAnchor="middle" fill="#ccc" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">• Team collaboration</text>
      </g>
      
      <g transform="translate(50, 560)">
        <text x="300" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="'Segoe UI', system-ui, sans-serif">Modern SQA trends combine personal discipline, team processes, object-oriented design, defect prevention, and automation</text>
      </g>
    </svg>
  );
}
