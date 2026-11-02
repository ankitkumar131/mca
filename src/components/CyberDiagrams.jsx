import React from 'react';

// ============================================================
// Cyber Security Unit 1 — 16 SVG diagrams
// Theme: midnight black bg, cobalt blue accents, acid lime highlights
// All labels in English (exam style)
// ============================================================

const FONT = "'Segoe UI', system-ui, sans-serif";

// ============================================================
// 1 — Cyber Security Framework (4 key areas)
// ============================================================
export function CyberFrameworkDiagram() {
  const areas = [
    { label: 'NETWORK\nSECURITY', sub: 'Firewalls · IDS · VPN', icon: 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z', delay: '0ms' },
    { label: 'APPLICATION\nSECURITY', sub: 'Input validation · Auth', icon: 'M6 2h8l4 4v16H6zM14 2v4h4', delay: '120ms' },
    { label: 'INFORMATION\nSECURITY', sub: 'Encryption · Access control', icon: 'M12 3C7 3 3 6.5 3 11s4 8 9 8 9-3.5 9-8-4-8-9-8zm0 15c-4 0-7-2.5-7-6s3-5.5 7-5.5S19 8 19 11s-3 5.5-7 5.5z', delay: '240ms' },
    { label: 'OPERATIONAL\nSECURITY', sub: 'Policies · Training · Risk', icon: 'M4 4h16v4H4zM6 8v12m12-12v12M4 20h16', delay: '360ms' },
  ];
  return (
    <svg viewBox="0 0 1000 340" className="diagram-svg" role="img" aria-label="Cyber Security Framework — 4 key areas">
      <defs>
        <marker id="arrowCyberA" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#c4ff00" />
        </marker>
        <linearGradient id="cyberGradA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0047ff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0047ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <text x="500" y="34" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>CYBER SECURITY FRAMEWORK</text>
      <text x="500" y="56" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>4 Key Areas of Protection — all work together</text>
      <circle cx="500" cy="200" r="120" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" strokeDasharray="8 8" />
      <text x="500" y="208" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700" fontFamily={FONT}>SECURE</text>
      {areas.map((a, i) => {
        const x = 500 + (i % 2 === 0 ? -240 : 240);
        const y = 200 + (i < 2 ? -140 : 140);
        return (
          <g key={a.label} style={{ animationDelay: a.delay }} className="diagram-pop">
            <rect x={x - 110} y={y - 60} width="220" height="120" rx="14" fill="rgba(0,71,255,0.08)" stroke="rgba(255,255,255,0.18)" />
            <rect x={x - 110} y={y - 60} width="220" height="120" rx="14" fill="url(#cyberGradA)" opacity="0.4" />
            <rect x={x - 110} y={y - 60} width="220" height="120" rx="14" fill="none" stroke="#0047ff" strokeWidth="2" />
            <g transform={`translate(${x}, ${y - 28})`}>
              <path d={a.icon} fill="none" stroke="#c4ff00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            {a.label.split('\n').map((line, li) => (
              <text key={li} x={x} y={y + 10 + li * 14} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>{line}</text>
            ))}
            <text x={x} y={y + 34} textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>{a.sub}</text>
            <line x1={x + (i < 2 ? -110 : 110)} y1={y} x2="500" y2="200" stroke="rgba(196,255,0,0.25)" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowCyberA)" className="arrow-pulse" />
          </g>
        );
      })}
    </svg>
  );
}

// ============================================================
// 2 — Cyberspace Layers (4 layers)
// ============================================================
export function CyberspaceLayersDiagram() {
  const layers = [
    { name: 'SOCIAL LAYER', items: 'Users · Communities · Human activity', color: '#c4ff00', delay: '0ms' },
    { name: 'LOGICAL LAYER', items: 'Software · Protocols · Applications', color: '#00c8ff', delay: '120ms' },
    { name: 'SECURITY LAYER', items: 'Firewalls · Encryption · Authentication', color: '#ff6b6b', delay: '240ms' },
    { name: 'PHYSICAL LAYER', items: 'Servers · Routers · Cables · Satellites', color: '#a78bfa', delay: '360ms' },
  ];
  return (
    <svg viewBox="0 0 900 340" className="diagram-svg" role="img" aria-label="Cyberspace layered structure — 4 layers">
      <text x="450" y="34" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>CYBERSPACE — LAYERED STRUCTURE</text>
      <text x="450" y="56" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>Internet · Networks · Connected devices — 4 layers</text>
      {layers.map((l, i) => {
        const y = 80 + i * 64;
        return (
          <g key={l.name} style={{ animationDelay: l.delay }} className="diagram-pop">
            <rect x="60" y={y} width="780" height="52" rx="12" fill="rgba(0,71,255,0.07)" stroke="rgba(255,255,255,0.15)" />
            <rect x="60" y={y} width="180" height="52" rx="12" fill={l.color} opacity="0.15" stroke={l.color} strokeWidth="2" />
            <text x="150" y={y + 28} textAnchor="middle" fill={l.color} fontSize="13" fontWeight="800" fontFamily={FONT}>{l.name}</text>
            <text x="300" y={y + 28} textAnchor="start" fill="#fff" fontSize="12" fontFamily={FONT}>{l.items}</text>
            <line x1="250" y1={y + 26} x2="290" y2={y + 26} stroke={l.color} strokeWidth="2" className="arrow-pulse" />
          </g>
        );
      })}
      <text x="450" y="330" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>Physical → Logical → Security → Social — bottom-up stack</text>
    </svg>
  );
}

// ============================================================
// 3 — Types of Cyber Threats
// ============================================================
export function CyberThreatsDiagram() {
  const threats = [
    { name: 'MALWARE', desc: 'Viruses · Worms · Trojans', icon: 'M12 2a4 4 0 0 1 4 4 3 3 0 0 1-2 2.8V12m0 0v4m0 4h-2m2 0h2m-4 0v-4m0-4V6.8A3 3 0 0 0 8 6a4 4 0 0 1 4-4z' },
    { name: 'PHISHING', desc: 'Fake emails · Credential theft', icon: 'M4 4h16v16H4zM4 4l8 8 8-8' },
    { name: 'RANSOMWARE', desc: 'Lock system · Demand ransom', icon: 'M6 10V8a6 6 0 1 1 12 0v2m2 0H4m16 0h-2m-2 4h6v6H4v-6h6z' },
    { name: 'DDoS', desc: 'Traffic flood · Overload', icon: 'M3 12h2m4 0h2m4 0h2m4 0h2M6 6l2 2m8 8l2 2m-10 0l2 2m8-8l2 2M6 18l2-2m8-8l2-2m-10 0l2-2m8 8l2-2' },
    { name: 'MITM', desc: 'Intercept · Modify data', icon: 'M12 4v8m0 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM4 4l4 4m8 8l4 4m-16 0l4-4m8-8l4-4' },
    { name: 'ZERO-DAY', desc: 'Unknown vulnerability', icon: 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z' },
  ];
  return (
    <svg viewBox="0 0 1000 360" className="diagram-svg" role="img" aria-label="Types of cyber threats — 6 categories">
      <text x="500" y="34" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>TYPES OF CYBER THREATS</text>
      <text x="500" y="56" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>6 Major Attack Vectors — each targets a different weakness</text>
      {threats.map((t, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 150 + col * 300;
        const y = 100 + row * 130;
        return (
          <g key={t.name} style={{ animationDelay: `${i * 110}ms` }} className="diagram-pop">
            <rect x={x - 110} y={y - 50} width="220" height="100" rx="14" fill="rgba(255,107,107,0.06)" stroke="rgba(255,255,255,0.15)" />
            <rect x={x - 110} y={y - 50} width="220" height="100" rx="14" fill="none" stroke="rgba(255,107,107,0.4)" strokeWidth="2" />
            <g transform={`translate(${x - 85}, ${y - 28})`}>
              <path d={t.icon} fill="none" stroke="#ff6b6b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <text x={x + 20} y={y - 22} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800" fontFamily={FONT}>{t.name}</text>
            <text x={x + 20} y={y} textAnchor="middle" fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>{t.desc}</text>
          </g>
        );
      })}
    </svg>
  );
}

// ============================================================
// 4 — Cyber Warfare Levels
// ============================================================
export function CyberWarfareDiagram() {
  const levels = [
    { name: 'CYBER ESPIONAGE', sub: 'Steal sensitive information', desc: 'Defense plans · Govt secrets · Economic data', color: '#00c8ff' },
    { name: 'CYBER SABOTAGE', sub: 'Damage physical infrastructure', desc: 'Power grids · Transportation · Stuxnet example', color: '#ff6b6b' },
    { name: 'FULL CYBER-WARFARE', sub: 'Disrupt entire systems', desc: 'Communication · Finance · Military — digital war', color: '#c4ff00' },
  ];
  return (
    <svg viewBox="0 0 900 340" className="diagram-svg" role="img" aria-label="Cyber warfare — 3 levels of attack">
      <text x="450" y="34" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>CYBER-WARFARE — 3 LEVELS</text>
      <text x="450" y="56" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>Nation-state digital attacks — increasing severity</text>
      {levels.map((l, i) => {
        const y = 80 + i * 84;
        return (
          <g key={l.name} style={{ animationDelay: `${i * 130}ms` }} className="diagram-pop">
            <rect x="50" y={y} width="800" height="68" rx="14" fill="rgba(0,71,255,0.06)" stroke="rgba(255,255,255,0.15)" />
            <rect x="50" y={y} width="220" height="68" rx="14" fill={l.color} opacity="0.12" stroke={l.color} strokeWidth="2.5" />
            <text x="160" y={y + 30} textAnchor="middle" fill={l.color} fontSize="14" fontWeight="800" fontFamily={FONT}>{l.name}</text>
            <text x="160" y={y + 50} textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>{l.sub}</text>
            <text x="300" y={y + 28} textAnchor="start" fill="#fff" fontSize="12" fontFamily={FONT}>{l.desc}</text>
            <line x1="280" y1={y + 34} x2="290" y2={y + 34} stroke={l.color} strokeWidth="2" className="arrow-pulse" />
            {i < 2 && <line x1="450" y1={y + 68} x2="450" y2={y + 84} stroke="rgba(196,255,0,0.3)" strokeWidth="3" strokeDasharray="4 4" markerEnd="url(#arrowCyberA)" className="arrow-pulse" />}
          </g>
        );
      })}
      <text x="450" y="330" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>Espionage → Sabotage → Full War — escalating digital conflict</text>
    </svg>
  );
}

// ============================================================
// 5 — CIA Triad
// ============================================================
export function CIATriadDiagram() {
  const parts = [
    { letter: 'C', word: 'CONFIDENTIALITY', desc: 'Data accessible only to authorized users', methods: 'Encryption · Passwords · Access control', color: '#0047ff', delay: '0ms' },
    { letter: 'I', word: 'INTEGRITY', desc: 'Data accurate — no unauthorized changes', methods: 'Checksums · Digital signatures · Hash', color: '#c4ff00', delay: '120ms' },
    { letter: 'A', word: 'AVAILABILITY', desc: 'Systems up when users need them', methods: 'Redundancy · Backups · DDoS protection', color: '#ff6b6b', delay: '240ms' },
  ];
  return (
    <svg viewBox="0 0 800 340" className="diagram-svg" role="img" aria-label="CIA Triad — 3 core security principles">
      <text x="400" y="34" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>CIA TRIAD — 3 CORE PRINCIPLES</text>
      <text x="400" y="56" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>Confidentiality · Integrity · Availability</text>
      <circle cx="400" cy="180" r="80" fill="rgba(0,71,255,0.1)" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
      <text x="400" y="188" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="800" fontFamily={FONT}>SECURITY</text>
      <text x="400" y="210" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>Model</text>
      {parts.map((p, i) => {
        const angle = (i * 120 - 90) * Math.PI / 180;
        const x = 400 + Math.cos(angle) * 200;
        const y = 180 + Math.sin(angle) * 200;
        return (
          <g key={p.letter} style={{ animationDelay: p.delay }} className="diagram-pop">
            <circle cx={x} cy={y} r="56" fill={p.color} opacity="0.12" stroke={p.color} strokeWidth="3" />
            <text x={x} y={y - 4} textAnchor="middle" fill={p.color} fontSize="30" fontWeight="800" fontFamily={FONT}>{p.letter}</text>
            <text x={x} y={y + 18} textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700" fontFamily={FONT}>{p.word}</text>
            <line x1={x + (x > 400 ? -56 : 56)} y1={y} x2="400" y2="180" stroke={p.color} strokeWidth="2" strokeDasharray="5 5" opacity="0.4" className="arrow-pulse" />
            <text x={x + (x > 400 ? -90 : 90)} y={y + 90} textAnchor={x > 400 ? 'end' : 'start'} fill="#9ab0e0" fontSize="10.5" fontFamily={FONT}>{p.desc}</text>
            <text x={x + (x > 400 ? -90 : 90)} y={y + 104} textAnchor={x > 400 ? 'end' : 'start'} fill={p.color} fontSize="9.5" fontFamily={FONT}>{p.methods}</text>
          </g>
        );
      })}
    </svg>
  );
}

// ============================================================
// 6 — Cyber Terrorism
// ============================================================
export function CyberTerrorismDiagram() {
  return (
    <svg viewBox="0 0 800 360" className="diagram-svg" role="img" aria-label="Cyber terrorism — concept and elements">
      <text x="400" y="34" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>CYBER TERROBIM — KEY ELEMENTS</text>
      <text x="400" y="56" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>Terrorism through digital attacks on critical systems</text>
      <g style={{ animationDelay: '0ms' }} className="diagram-pop">
        <rect x="40" y="80" width="220" height="110" rx="14" fill="rgba(255,107,107,0.08)" stroke="rgba(255,107,107,0.4)" strokeWidth="2" />
        <text x="150" y="108" textAnchor="middle" fill="#ff6b6b" fontSize="13" fontWeight="800" fontFamily={FONT}>MOTIVE</text>
        {['Political goals', 'Ideological', 'Fear & panic', 'Mass disruption'].map((p, i) => (
          <text key={p} x="150" y={128 + i * 18} textAnchor="middle" fill="#fff" fontSize="10.5" fontFamily={FONT}>{p}</text>
        ))}
      </g>
      <line x1="260" y1="135" x2="300" y2="135" stroke="#c4ff00" strokeWidth="3" markerEnd="url(#arrowCyberA)" className="arrow-pulse" />
      <g style={{ animationDelay: '120ms' }} className="diagram-pop">
        <rect x="300" y="70" width="200" height="130" rx="14" fill="rgba(0,71,255,0.1)" stroke="#0047ff" strokeWidth="2" />
        <text x="400" y="98" textAnchor="middle" fill="#00c8ff" fontSize="13" fontWeight="800" fontFamily={FONT}>DIGITAL ATTACK</text>
        {['Virus / Worm', 'DDoS flood', 'Ransomware', 'Data destruction'].map((p, i) => (
          <text key={p} x="400" y={118 + i * 18} textAnchor="middle" fill="#fff" fontSize="10.5" fontFamily={FONT}>{p}</text>
        ))}
      </g>
      <line x1="500" y1="135" x2="540" y2="135" stroke="#c4ff00" strokeWidth="3" markerEnd="url(#arrowCyberA)" className="arrow-pulse" />
      <g style={{ animationDelay: '240ms' }} className="diagram-pop">
        <rect x="540" y="80" width="220" height="110" rx="14" fill="rgba(196,255,0,0.08)" stroke="#c4ff00" strokeWidth="2" />
        <text x="650" y="108" textAnchor="middle" fill="#c4ff00" fontSize="13" fontWeight="800" fontFamily={FONT}>TARGETS</text>
        {['Critical infrastructure', 'Government systems', 'Public services', 'Financial systems'].map((p, i) => (
          <text key={p} x="650" y={128 + i * 18} textAnchor="middle" fill="#fff" fontSize="10" fontFamily={FONT}>{p}</text>
        ))}
      </g>
      <g style={{ animationDelay: '360ms' }} className="diagram-pop">
        <rect x="150" y="220" width="500" height="90" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" />
        <text x="400" y="248" textAnchor="middle" fill="#c4ff00" fontSize="13" fontWeight="800" fontFamily={FONT}>IMPACT</text>
        {['Public fear & panic', 'Economic disruption', 'Loss of life (indirect)', 'National security threat'].map((p, i) => (
          <text key={p} x={220 + i * 150} y={272 + i * 16} textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>{p}</text>
        ))}
      </g>
      <text x="400" y="340" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>Motive → Attack → Targets → Impact — cyber terrorism cycle</text>
    </svg>
  );
}

// ============================================================
// 7 — Critical Infrastructure
// ============================================================
export function CriticalInfraDiagram() {
  const items = [
    { name: 'POWER', sub: 'Electricity grids', icon: 'M13 2L3 14h8l-2 8 10-12h-8l2-8z' },
    { name: 'FINANCE', sub: 'Banks · Stock markets', icon: 'M4 4h16v4H4zM6 8v12m12-12v12M4 20h16' },
    { name: 'TELECOM', sub: 'Communication networks', icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5v5l3 3' },
    { name: 'WATER', sub: 'Supply & treatment', icon: 'M12 3a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1h6c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 3z' },
    { name: 'TRANSPORT', sub: 'Rail · Air · Ports', icon: 'M4 16V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8M4 16h16v4H4zM8 20v-2m8 2v-2' },
    { name: 'HEALTHCARE', sub: 'Hospitals · Patient data', icon: 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z' },
  ];
  return (
    <svg viewBox="0 0 1000 360" className="diagram-svg" role="img" aria-label="Critical infrastructure — 6 sectors">
      <text x="500" y="34" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>CRITICAL INFRASTRUCTURE</text>
      <text x="500" y="56" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>6 Sectors — attack on any one can halt a nation</text>
      <g style={{ animationDelay: '0ms' }} className="diagram-pop">
        <rect x="350" y="70" width="300" height="100" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" />
        <text x="500" y="100" textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="800" fontFamily={FONT}>NATION</text>
        <text x="500" y="122" textAnchor="middle" fill="#9ab0e0" fontSize="11" fontFamily={FONT}>Depends on all 6 sectors</text>
        <text x="500" y="145" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>24/7 · Interconnected · Vulnerable</text>
      </g>
      {items.map((it, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 100 + col * 400;
        const y = 200 + row * 120;
        return (
          <g key={it.name} style={{ animationDelay: `${(i + 1) * 100}ms` }} className="diagram-pop">
            <rect x={x - 100} y={y - 45} width="200" height="90" rx="14" fill="rgba(0,71,255,0.08)" stroke="rgba(255,255,255,0.18)" />
            <rect x={x - 100} y={y - 45} width="200" height="90" rx="14" fill="none" stroke="#0047ff" strokeWidth="2" />
            <g transform={`translate(${x - 80}, ${y - 25})`}>
              <path d={it.icon} fill="none" stroke="#c4ff00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <text x={x + 20} y={y - 22} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="800" fontFamily={FONT}>{it.name}</text>
            <text x={x + 20} y={y - 4} textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>{it.sub}</text>
            <line x1={x} y1={y + 45} x2="500" y2="170" stroke="rgba(196,255,0,0.15)" strokeWidth="2" strokeDasharray="3 3" className="arrow-pulse" />
          </g>
        );
      })}
    </svg>
  );
}

// ============================================================
// 8 — Organizational Security Implications
// ============================================================
export function OrgSecurityDiagram() {
  const areas = [
    { name: 'DATA LOSS', impact: 'Customer info · Financial records · Trade secrets', icon: 'M12 3C7 3 3 6.5 3 11s4 8 9 8 9-3.5 9-8-4-8-9-8zm0 15c-4 0-7-2.5-7-6s3-5.5 7-5.5S19 8 19 11s-3 5.5-7 5.5z' },
    { name: 'FINANCIAL LOSS', impact: 'Ransom payments · Revenue loss · Legal fines', icon: 'M4 4h16v4H4zM6 8v12m12-12v12M4 20h16' },
    { name: 'REPUTATION', impact: 'Customer trust lost · Brand damage · Market value down', icon: 'M12 2l2.4 5.4L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-1.6L12 2z' },
    { name: 'OPERATIONAL', impact: 'Systems down · Employees blocked · Work halted', icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5v5l3 3' },
    { name: 'LEGAL', impact: 'IT Act violations · Fines · Lawsuits · Compliance', icon: 'M4 4h16v16H4zM4 4l8 8 8-8' },
    { name: 'NATIONAL', impact: 'Critical infra affected · Security threat · Economy hit', icon: 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z' },
  ];
  return (
    <svg viewBox="0 0 1000 360" className="diagram-svg" role="img" aria-label="Organizational security implications — 6 areas">
      <text x="500" y="34" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>ORGANIZATIONAL SECURITY IMPLICATIONS</text>
      <text x="500" y="56" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>What happens when an organization is attacked</text>
      <g style={{ animationDelay: '0ms' }} className="diagram-pop">
        <circle cx="500" cy="100" r="50" fill="rgba(0,71,255,0.15)" stroke="#0047ff" strokeWidth="3" />
        <text x="500" y="96" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>ORG</text>
        <text x="500" y="112" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>ATTACK</text>
      </g>
      {areas.map((a, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 130 + col * 370;
        const y = 190 + row * 130;
        return (
          <g key={a.name} style={{ animationDelay: `${(i + 1) * 90}ms` }} className="diagram-pop">
            <rect x={x - 120} y={y - 45} width="240" height="90" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" />
            <g transform={`translate(${x - 95}, ${y - 25})`}>
              <path d={a.icon} fill="none" stroke="#ff6b6b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <text x={x + 25} y={y - 22} textAnchor="middle" fill="#ff6b6b" fontSize="13" fontWeight="800" fontFamily={FONT}>{a.name}</text>
            <text x={x + 25} y={y - 6} textAnchor="middle" fill="#fff" fontSize="10" fontFamily={FONT}>{a.impact}</text>
            <line x1={x} y1={y - 45} x2="500" y2="100" stroke="rgba(255,107,107,0.15)" strokeWidth="2" strokeDasharray="3 3" className="arrow-pulse" />
          </g>
        );
      })}
    </svg>
  );
}

// ============================================================
// 9 — Policy & Governance Framework
// ============================================================
export function PolicyFrameworkDiagram() {
  return (
    <svg viewBox="0 0 900 380" className="diagram-svg" role="img" aria-label="Policy and governance framework — layers">
      <text x="450" y="34" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>POLICY & GOVERNANCE FRAMEWORK</text>
      <text x="450" y="56" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>National → Organizational → Individual — 3 layers</text>
      <g style={{ animationDelay: '0ms' }} className="diagram-pop">
        <rect x="50" y="80" width="800" height="62" rx="12" fill="rgba(167,139,250,0.1)" stroke="#a78bfa" strokeWidth="2.5" />
        <text x="100" y="115" textAnchor="start" fill="#a78bfa" fontSize="13" fontWeight="800" fontFamily={FONT}>NATIONAL LAYER</text>
        <text x="300" y="115" textAnchor="start" fill="#fff" fontSize="11" fontFamily={FONT}>IT Act · National Policy · Cyber Crime Laws · Standards (BIS)</text>
      </g>
      <line x1="450" y1="142" x2="450" y2="158" stroke="rgba(196,255,0,0.3)" strokeWidth="3" strokeDasharray="4 4" markerEnd="url(#arrowCyberA)" className="arrow-pulse" />
      <g style={{ animationDelay: '120ms' }} className="diagram-pop">
        <rect x="50" y="160" width="800" height="72" rx="12" fill="rgba(0,71,255,0.1)" stroke="#0047ff" strokeWidth="2.5" />
        <text x="100" y="188" textAnchor="start" fill="#00c8ff" fontSize="13" fontWeight="800" fontFamily={FONT}>ORGANIZATIONAL LAYER</text>
        {['Security Policy', 'Risk Management', 'Incident Response Plan', 'Audit & Compliance'].map((p, i) => (
          <text key={p} x={300 + i * 160} y={188} textAnchor="start" fill="#fff" fontSize="10.5" fontFamily={FONT}>{p}</text>
        ))}
        <text x="100" y="212" textAnchor="start" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>Policies · Procedures · Training · Controls · Monitoring</text>
      </g>
      <line x1="450" y1="232" x2="450" y2="248" stroke="rgba(196,255,0,0.3)" strokeWidth="3" strokeDasharray="4 4" markerEnd="url(#arrowCyberA)" className="arrow-pulse" />
      <g style={{ animationDelay: '240ms' }} className="diagram-pop">
        <rect x="50" y="250" width="800" height="62" rx="12" fill="rgba(196,255,0,0.08)" stroke="#c4ff00" strokeWidth="2.5" />
        <text x="100" y="285" textAnchor="start" fill="#c4ff00" fontSize="13" fontWeight="800" fontFamily={FONT}>INDIVIDUAL LAYER</text>
        <text x="300" y="285" textAnchor="start" fill="#fff" fontSize="11" fontFamily={FONT}>Password hygiene · Phishing awareness · Safe browsing · Personal data care</text>
      </g>
      <g style={{ animationDelay: '360ms' }} className="diagram-pop">
        <rect x="50" y="330" width="800" height="40" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" />
        <text x="450" y="356" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>All 3 layers work together — one weak layer breaks the whole framework</text>
      </g>
    </svg>
  );
}

// ============================================================
// 10 — Nodal Authority (CERT-In)
// ============================================================
export function NodalAuthorityDiagram() {
  return (
    <svg viewBox="0 0 800 380" className="diagram-svg" role="img" aria-label="Nodal authority — CERT-In structure">
      <text x="400" y="34" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>NODAL AUTHORITY — CERT-IN</text>
      <text x="400" y="56" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>India's national computer emergency response team</text>
      <g style={{ animationDelay: '0ms' }} className="diagram-pop">
        <rect x="250" y="70" width="300" height="60" rx="14" fill="rgba(196,255,0,0.1)" stroke="#c4ff00" strokeWidth="3" />
        <text x="400" y="96" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>CERT-IN</text>
        <text x="400" y="114" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>National Nodal Agency — Cyber Security</text>
      </g>
      <line x1="400" y1="130" x2="200" y2="160" stroke="rgba(196,255,0,0.3)" strokeWidth="2" strokeDasharray="3 3" className="arrow-pulse" />
      <line x1="400" y1="130" x2="400" y2="160" stroke="rgba(196,255,0,0.3)" strokeWidth="2" strokeDasharray="3 3" className="arrow-pulse" />
      <line x1="400" y1="130" x2="600" y2="160" stroke="rgba(196,255,0,0.3)" strokeWidth="2" strokeDasharray="3 3" className="arrow-pulse" />
      <g style={{ animationDelay: '120ms' }} className="diagram-pop">
        <rect x="60" y="160" width="280" height="62" rx="12" fill="rgba(0,71,255,0.1)" stroke="#0047ff" strokeWidth="2" />
        <text x="200" y="185" textAnchor="middle" fill="#00c8ff" fontSize="12" fontWeight="800" fontFamily={FONT}>GOVERNMENT</text>
        <text x="200" y="202" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>Ministries · Central Agencies · Law Enforcement</text>
      </g>
      <g style={{ animationDelay: '240ms' }} className="diagram-pop">
        <rect x="360" y="160" width="280" height="62" rx="12" fill="rgba(0,71,255,0.1)" stroke="#0047ff" strokeWidth="2" />
        <text x="500" y="185" textAnchor="middle" fill="#00c8ff" fontSize="12" fontWeight="800" fontFamily={FONT}>ORGANIZATIONS</text>
        <text x="500" y="202" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>Banks · ISPs · Companies · Critical Infrastructure</text>
      </g>
      <g style={{ animationDelay: '360ms' }} className="diagram-pop">
        <rect x="260" y="250" width="280" height="62" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" />
        <text x="400" y="275" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="800" fontFamily={FONT}>INDIVIDUALS</text>
        <text x="400" y="292" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>Citizens reporting cyber incidents</text>
      </g>
      <line x1="400" y1="192" x2="200" y2="250" stroke="rgba(196,255,0,0.2)" strokeWidth="2" strokeDasharray="3 3" className="arrow-pulse" />
      <line x1="400" y1="192" x2="400" y2="250" stroke="rgba(196,255,0,0.2)" strokeWidth="2" strokeDasharray="3 3" className="arrow-pulse" />
      <line x1="400" y1="192" x2="600" y2="250" stroke="rgba(196,255,0,0.2)" strokeWidth="2" strokeDasharray="3 3" className="arrow-pulse" />
      <text x="400" y="340" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>All report incidents to CERT-In → It coordinates response & issues alerts</text>
    </svg>
  );
}

// ============================================================
// 11 — International Cyber Conventions
// ============================================================
export function InternationalCyberDiagram() {
  const items = [
    { name: 'UNITED NATIONS', items: ['UN Charter applies to cyber', 'UN GGE — 6 norms for cyber', 'UN OEWG — Open working group'], color: '#00c8ff' },
    { name: 'BUENOS AIRES', items: ['1998 — first UN confidence-building', 'Agenda for peace in cyberspace'], color: '#c4ff00' },
    { name: 'TALLINN', items: ['2009 — NATO manual on cyber', '3 pillars: deterrence · defense · resilience'], color: '#ff6b6b' },
    { name: 'MADRID', items: ['2021 — Budapest Convention update', 'Human rights · Democracy · Rule of law'], color: '#a78bfa' },
  ];
  return (
    <svg viewBox="0 0 900 380" className="diagram-svg" role="img" aria-label="International cyber conventions — key initiatives">
      <text x="450" y="34" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>INTERNATIONAL CYBER CONVENTIONS</text>
      <text x="450" y="56" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>Global efforts to govern cyberspace</text>
      {items.map((it, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 150 + col * 400;
        const y = 90 + row * 130;
        return (
          <g key={it.name} style={{ animationDelay: `${i * 110}ms` }} className="diagram-pop">
            <rect x={x - 140} y={y - 45} width="280" height="90" rx="14" fill="rgba(0,71,255,0.06)" stroke="rgba(255,255,255,0.15)" />
            <rect x={x - 140} y={y - 45} width="280" height="28" rx="14" fill={it.color} opacity="0.15" stroke={it.color} strokeWidth="2" />
            <text x={x} y={y - 24} textAnchor="middle" fill={it.color} fontSize="13" fontWeight="800" fontFamily={FONT}>{it.name}</text>
            {it.items.map((p, j) => (
              <text key={p} x={x} y={y + 10 + j * 16} textAnchor="middle" fill="#fff" fontSize="10.5" fontFamily={FONT}>{p}</text>
            ))}
          </g>
        );
      })}
      <g style={{ animationDelay: '480ms' }} className="diagram-pop">
        <rect x="100" y="330" width="700" height="40" rx="10" fill="rgba(196,255,0,0.06)" stroke="#c4ff00" strokeWidth="1.5" />
        <text x="450" y="356" textAnchor="middle" fill="#c4ff00" fontSize="12" fontWeight="700" fontFamily={FONT}>Global cooperation needed — no single nation can secure cyberspace alone</text>
      </g>
    </svg>
  );
}

// ============================================================
// 12 — Cyber Laws (Introduction)
// ============================================================
export function CyberLawsDiagram() {
  const items = [
    { name: 'DEFINITION', desc: 'Laws covering cybercrime, data protection, e-transactions, and digital evidence', icon: 'M4 4h16v16H4zM4 4l8 8 8-8' },
    { name: 'SCOPE', desc: 'Applies to all digital activity — computers, networks, internet, mobile', icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5v5l3 3' },
    { name: 'PURPOSE', desc: 'Prevent cybercrime · Protect data · Ensure trust · Enforce rights', icon: 'M12 2l2.4 5.4L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-1.6L12 2z' },
    { name: 'ENFORCEMENT', desc: 'Police cyber cells · Courts · IT Act provisions · International cooperation', icon: 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z' },
  ];
  return (
    <svg viewBox="0 0 1000 340" className="diagram-svg" role="img" aria-label="Cyber laws — 4 pillars">
      <text x="500" y="34" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>CYBER LAWS — 4 PILLARS</text>
      <text x="500" y="56" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>Legal framework for the digital world</text>
      <g style={{ animationDelay: '0ms' }} className="diagram-pop">
        <rect x="380" y="70" width="240" height="60" rx="14" fill="rgba(196,255,0,0.1)" stroke="#c4ff00" strokeWidth="2.5" />
        <text x="500" y="98" textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="800" fontFamily={FONT}>CYBER LAW</text>
        <text x="500" y="115" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>Digital world ka law</text>
      </g>
      {items.map((it, i) => {
        const angle = (i * 90 - 90) * Math.PI / 180;
        const x = 500 + Math.cos(angle) * 280;
        const y = 100 + Math.sin(angle) * 100;
        return (
          <g key={it.name} style={{ animationDelay: `${(i + 1) * 100}ms` }} className="diagram-pop">
            <rect x={x - 110} y={y - 40} width="220" height="80" rx="14" fill="rgba(0,71,255,0.08)" stroke="rgba(255,255,255,0.18)" />
            <rect x={x - 110} y={y - 40} width="220" height="80" rx="14" fill="none" stroke="#0047ff" strokeWidth="2" />
            <g transform={`translate(${x - 88}, ${y - 20})`}>
              <path d={it.icon} fill="none" stroke="#c4ff00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <text x={x} y={y - 2} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>{it.name}</text>
            <text x={x} y={y + 14} textAnchor="middle" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>{it.desc}</text>
            <line x1={x + (x > 500 ? -110 : 110)} y1={y} x2="500" y2="100" stroke="rgba(196,255,0,0.15)" strokeWidth="2" strokeDasharray="3 3" className="arrow-pulse" />
          </g>
        );
      })}
    </svg>
  );
}

// ============================================================
// 13 — Key Principles of Cyber Law
// ============================================================
export function LawPrinciplesDiagram() {
  const principles = [
    { name: 'LEGALITY', desc: 'All digital activity must follow the law', icon: 'M4 4h16v16H4zM4 4l8 8 8-8' },
    { name: 'PROPORTIONALITY', desc: 'Response must match the threat level', icon: 'M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0' },
    { name: 'DATA PROTECTION', desc: 'Personal data must be protected', icon: 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z' },
    { name: 'COOPERATION', desc: 'Cross-border enforcement needed', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' },
    { name: 'ACCOUNTABILITY', desc: 'Violators must face legal action', icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5v5l3 3' },
    { name: 'TRANSPARENCE', desc: 'Laws and policies must be public', icon: 'M4 4h16v4H4zM6 8v12m12-12v12M4 20h16' },
  ];
  return (
    <svg viewBox="0 0 1000 360" className="diagram-svg" role="img" aria-label="Key principles of cyber law — 6 principles">
      <text x="500" y="34" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>KEY PRINCIPLES OF CYBER LAW</text>
      <text x="500" y="56" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>6 Principles — the foundation of any cyber law</text>
      {principles.map((p, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 170 + col * 330;
        const y = 100 + row * 130;
        return (
          <g key={p.name} style={{ animationDelay: `${i * 100}ms` }} className="diagram-pop">
            <circle cx={x} cy={y} r="50" fill="rgba(0,71,255,0.1)" stroke="#0047ff" strokeWidth="2.5" />
            <g transform={`translate(${x - 22}, ${y - 22})`}>
              <path d={p.icon} fill="none" stroke="#c4ff00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <text x={x} y={y + 30} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily={FONT}>{p.name}</text>
            <text x={x} y={y + 44} textAnchor="middle" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>{p.desc}</text>
          </g>
        );
      })}
    </svg>
  );
}

// ============================================================
// 14 — IT Act 2000 Overview
// ============================================================
export function ItAct2000Diagram() {
  return (
    <svg viewBox="0 0 900 380" className="diagram-svg" role="img" aria-label="IT Act 2000 — overview and structure">
      <text x="450" y="34" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>IT ACT 2000 — OVERVIEW</text>
      <text x="450" y="56" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>India's first cyber law — passed 9 June 2000, effective 17 Oct 2000</text>
      <g style={{ animationDelay: '0ms' }} className="diagram-pop">
        <rect x="300" y="70" width="300" height="60" rx="14" fill="rgba(196,255,0,0.1)" stroke="#c4ff00" strokeWidth="3" />
        <text x="450" y="96" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>IT ACT 2000</text>
        <text x="450" y="115" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>Computer achieves legal recognition</text>
      </g>
      <line x1="450" y1="130" x2="200" y2="160" stroke="rgba(196,255,0,0.3)" strokeWidth="2" strokeDasharray="3 3" className="arrow-pulse" />
      <line x1="450" y1="130" x2="450" y2="160" stroke="rgba(196,255,0,0.3)" strokeWidth="2" strokeDasharray="3 3" className="arrow-pulse" />
      <line x1="450" y1="130" x2="700" y2="160" stroke="rgba(196,255,0,0.3)" strokeWidth="2" strokeDasharray="3 3" className="arrow-pulse" />
      <g style={{ animationDelay: '120ms' }} className="diagram-pop">
        <rect x="60" y="160" width="280" height="80" rx="12" fill="rgba(0,71,255,0.1)" stroke="#0047ff" strokeWidth="2" />
        <text x="200" y="186" textAnchor="middle" fill="#00c8ff" fontSize="13" fontWeight="800" fontFamily={FONT}>DIGITAL SIGNATURE</text>
        <text x="200" y="204" textAnchor="middle" fill="#fff" fontSize="10.5" fontFamily={FONT}>Legal validity of digital signatures</text>
        <text x="200" y="220" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>Sections 3 · 5 · 10</text>
      </g>
      <g style={{ animationDelay: '240ms' }} className="diagram-pop">
        <rect x="320" y="160" width="260" height="80" rx="12" fill="rgba(0,71,255,0.1)" stroke="#0047ff" strokeWidth="2" />
        <text x="450" y="186" textAnchor="middle" fill="#00c8ff" fontSize="13" fontWeight="800" fontFamily={FONT}>E-COMMERCE</text>
        <text x="450" y="204" textAnchor="middle" fill="#fff" fontSize="10.5" fontFamily={FONT}>Validity of electronic contracts</text>
        <text x="450" y="220" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>Sections 4 · 10</text>
      </g>
      <g style={{ animationDelay: '360ms' }} className="diagram-pop">
        <rect x="580" y="160" width="260" height="80" rx="12" fill="rgba(0,71,255,0.1)" stroke="#0047ff" strokeWidth="2" />
        <text x="710" y="186" textAnchor="middle" fill="#00c8ff" fontSize="13" fontWeight="800" fontFamily={FONT}>CYBER CRIME</text>
        <text x="710" y="204" textAnchor="middle" fill="#fff" fontSize="10.5" fontFamily={FONT}>Penalties for hacking · fraud · obscenity</text>
        <text x="710" y="220" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>Sections 65 · 66 · 72 · 74</text>
      </g>
      <g style={{ animationDelay: '480ms' }} className="diagram-pop">
        <rect x="60" y="270" width="780" height="90" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" />
        <text x="450" y="296" textAnchor="middle" fill="#c4ff00" fontSize="13" fontWeight="800" fontFamily={FONT}>3 PILLARS OF IT ACT 2000</text>
        {[
          { label: 'VALIDITY', desc: 'Digital signatures · E-contracts', color: '#c4ff00' },
          { label: 'SECURITY', desc: 'Penalties · Regulation · Compliance', color: '#00c8ff' },
          { label: 'GOVERNANCE', desc: 'IT Grievance · Adjudicator · Appellate', color: '#ff6b6b' },
        ].map((p, i) => (
          <g key={p.label} style={{ animationDelay: `${550 + i * 80}ms` }} className="diagram-pop">
            <rect x={100 + i * 260} y="310" width="220" height="40" rx="10" fill={p.color} opacity="0.1" stroke={p.color} strokeWidth="1.5" />
            <text x={210 + i * 260} y="328" textAnchor="middle" fill={p.color} fontSize="11" fontWeight="700" fontFamily={FONT}>{p.label}</text>
            <text x={210 + i * 260} y="342" textAnchor="middle" fill="#9ab0e0" fontSize="9" fontFamily={FONT}>{p.desc}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

// ============================================================
// 15 — IT Act Provisions (Key Sections)
// ============================================================
export function ItActProvisionsDiagram() {
  const sections = [
    { sec: 'Section 65', title: 'Tampering with Source Code', penalty: 'Imprisonment up to 3 years + Fine up to ₹20,000', color: '#ff6b6b' },
    { sec: 'Section 66', title: 'Computer-Related Offences', penalty: 'Imprisonment up to 3 years + Fine up to ₹500,000', color: '#ff6b6b' },
    { sec: 'Section 72', title: 'Breach of Confidentiality', penalty: 'Imprisonment up to 2 years + Fine up to ₹100,000', color: '#ff6b6b' },
    { sec: 'Section 10A', title: 'Validity of E-Transactions', penalty: 'Legal validity — no paper needed', color: '#00c8ff' },
    { sec: 'Section 43A', title: 'Compensation for Data Breach', penalty: 'Damages for negligent data handling', color: '#a78bfa' },
    { sec: 'Section 67', title: 'Publishing Obscene Material', penalty: 'Imprisonment up to 5 years + Fine up to ₹1,00,000', color: '#ff6b6b' },
  ];
  return (
    <svg viewBox="0 0 1000 380" className="diagram-svg" role="img" aria-label="IT Act 2000 — key provisions and penalties">
      <text x="500" y="34" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>IT ACT 2000 — KEY PROVISIONS</text>
      <text x="500" y="56" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>Important sections and their penalties — exam favourites</text>
      <g style={{ animationDelay: '0ms' }} className="diagram-pop">
        <rect x="300" y="70" width="400" height="48" rx="12" fill="rgba(196,255,0,0.08)" stroke="#c4ff00" strokeWidth="2" />
        <text x="500" y="98" textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="800" fontFamily={FONT}>IT ACT 2000 — PENALTY SECTIONS</text>
      </g>
      {sections.map((s, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 170 + col * 370;
        const y = 140 + row * 78;
        return (
          <g key={s.sec} style={{ animationDelay: `${i * 90}ms` }} className="diagram-pop">
            <rect x={x - 150} y={y - 28} width="300" height="56" rx="12" fill="rgba(0,71,255,0.06)" stroke="rgba(255,255,255,0.15)" />
            <rect x={x - 150} y={y - 28} width="80" height="56" rx="12" fill={s.color} opacity="0.15" stroke={s.color} strokeWidth="2" />
            <text x={x - 110} y={y} textAnchor="middle" fill={s.color} fontSize="12" fontWeight="800" fontFamily={FONT}>{s.sec}</text>
            <text x={x - 55} y={y - 6} textAnchor="start" fill="#fff" fontSize="12" fontWeight="700" fontFamily={FONT}>{s.title}</text>
            <text x={x - 55} y={y + 10} textAnchor="start" fill="#9ab0e0" fontSize="9.5" fontFamily={FONT}>{s.penalty}</text>
          </g>
        );
      })}
      <text x="500" y="370" textAnchor="middle" fill="#9ab0e0" fontSize="11" fontFamily={FONT}>Red = criminal offence · Blue = legal validity · Purple = civil liability</text>
    </svg>
  );
}

// ============================================================
// 16 — IT Act 2008 Amendments
// ============================================================
export function ItActAmendmentsDiagram() {
  const items = [
    { name: 'DATA PROTECTION', desc: 'Personal data — consent required for collection', color: '#00c8ff' },
    { name: 'CYBER CRIME', desc: 'New offences — identity theft · phishing · child porn', color: '#ff6b6b' },
    { name: 'BORDERLESS', desc: 'Applies to offences committed outside India', color: '#a78bfa' },
    { name: 'ENFORCEMENT', desc: 'Stronger powers for police · cyber cells', color: '#c4ff00' },
    { name: 'COMPENSATION', desc: 'Section 43A — damages for data breach', color: '#00c8ff' },
    { name: 'SENSITIVE DATA', desc: 'Section 43A — sensitive personal data defined', color: '#00c8ff' },
  ];
  return (
    <svg viewBox="0 0 1000 380" className="diagram-svg" role="img" aria-label="IT Act 2008 amendments — key changes">
      <text x="500" y="34" textAnchor="middle" fill="#c4ff00" fontSize="16" fontWeight="800" fontFamily={FONT}>IT ACT 2008 — AMENDMENTS</text>
      <text x="500" y="56" textAnchor="middle" fill="#9ab0e0" fontSize="12" fontFamily={FONT}>6 Key Changes — what the 2008 amendment added</text>
      <g style={{ animationDelay: '0ms' }} className="diagram-pop">
        <rect x="340" y="70" width="320" height="50" rx="14" fill="rgba(196,255,0,0.1)" stroke="#c4ff00" strokeWidth="3" />
        <text x="500" y="93" textAnchor="middle" fill="#c4ff00" fontSize="14" fontWeight="800" fontFamily={FONT}>IT ACT 2008</text>
        <text x="500" y="110" textAnchor="middle" fill="#9ab0e0" fontSize="10" fontFamily={FONT}>Amendments to IT Act 2000 — 6 changes</text>
      </g>
      {items.map((it, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 170 + col * 330;
        const y = 150 + row * 110;
        return (
          <g key={it.name} style={{ animationDelay: `${i * 100}ms` }} className="diagram-pop">
            <rect x={x - 130} y={y - 40} width="260" height="80" rx="14" fill="rgba(0,71,255,0.06)" stroke="rgba(255,255,255,0.15)" />
            <rect x={x - 130} y={y - 40} width="260" height="28" rx="14" fill={it.color} opacity="0.15" stroke={it.color} strokeWidth="2" />
            <text x={x} y={y - 19} textAnchor="middle" fill={it.color} fontSize="12" fontWeight="800" fontFamily={FONT}>{it.name}</text>
            <text x={x} y={y + 5} textAnchor="middle" fill="#fff" fontSize="10" fontFamily={FONT}>{it.desc}</text>
            <line x1={x} y1={y + 40} x2="500" y2="120" stroke="rgba(196,255,0,0.1)" strokeWidth="2" strokeDasharray="3 3" className="arrow-pulse" />
          </g>
        );
      })}
    </svg>
  );
}
