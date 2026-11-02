import React, { useEffect, useState } from 'react';
import { subjects, units } from '../data/topics';
import { Diagram } from './Diagrams';
import { Icon } from './Icons';
import { getCompletedTopics, toggleCompletedTopic } from '../utils/progress';

// ---------- Sidebar menu ----------
function TopicMenu({ currentTopicId, onOpenTopic, onOpenSubject, onBack, mobileOpen, setMobileOpen }) {
  const [collapsed, setCollapsed] = useState(false);
  const allTopics = units['business-intelligence'][0].topics;
  // Add Unit 2 as coming soon
  const allUnits = [
    ...units['business-intelligence'],
    { id: 'unit-2', number: '2', name: 'Unit 2 — Coming Soon', topics: [], available: false },
  ];

  return (
    <aside className={`topic-menu ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
      <div className="topic-menu-head">
        <button className="menu-back" onClick={onBack}>
          <Icon name="arrow" size={18} color="#fff" />
        </button>
        <span className="menu-title">Menu</span>
        <button
          className="menu-collapse"
          onClick={() => {
            setCollapsed((c) => !c);
            setMobileOpen(false);
          }}
        >
          {collapsed ? '→' : '✕'}
        </button>
      </div>

      {!collapsed && (
        <nav className="menu-nav">
          <p className="menu-section-label">Subjects</p>
          {subjects.map((subject) => (
            <div key={subject.id} className="menu-subject">
              <button
                className={`menu-subject-btn ${subject.id === 'business-intelligence' ? 'active' : ''}`}
                onClick={() => !subject.available && null}
              >
                <Icon name="book" size={16} color={subject.available ? '#c4ff00' : '#5a6a9e'} />
                <span>{subject.name}</span>
                {!subject.available && <span className="menu-coming">Soon</span>}
              </button>

              {subject.available && subject.id === 'business-intelligence' && (
                <div className="menu-units">
                  {allUnits.map((unit) => (
                    <div key={unit.id} className="menu-unit">
                      <span className="menu-unit-name">
                        Unit {unit.number} — {unit.name}
                      </span>
                      {unit.available === false ? (
                        <button
                          className="menu-topic coming"
                          onClick={() => setMobileOpen(false)}
                        >
                          <span className="menu-topic-title">Coming Soon 🔜</span>
                        </button>
                      ) : (
                        unit.topics.map((t) => {
                          const completed = getCompletedTopics().includes(t.id);
                          return (
                            <button
                              key={t.id}
                              className={`menu-topic ${t.id === currentTopicId ? 'active' : ''}`}
                              onClick={() => {
                                onOpenTopic(t.id);
                                setMobileOpen(false);
                              }}
                            >
                              <span className="menu-topic-num">{t.number}</span>
                              <span className="menu-topic-title">{t.title}</span>
                              {completed && <span className="menu-check">✓</span>}
                            </button>
                          );
                        })
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </aside>
  );
}

// ---------- Section renderer ----------
function SectionRenderer({ section, index }) {
  const icons = {
    definition: 'book',
    cards: 'chart',
    diagram: 'timeline',
    example: 'bulb',
    points: 'check',
    recap: 'quiz',
    image: 'chart',
  };
  const kickerIcon = icons[section.type] || 'chart';

  if (section.type === 'definition') {
    return (
      <section className="section" style={{ '--i': index }}>
        <div className="section-kicker"><Icon name={kickerIcon} size={16} /> {section.kicker}</div>
        <h3>{section.title}</h3>
        <div className="definition-card">
          <p>{section.body}</p>
          {section.body2 && <p className="definition-extra">{section.body2}</p>}
        </div>
        {section.chips && (
          <div className="chips">
            {section.chips.map((c) => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
        )}
      </section>
    );
  }

  if (section.type === 'cards') {
    return (
      <section className="section" style={{ '--i': index }}>
        <div className="section-kicker"><Icon name={kickerIcon} size={16} /> {section.kicker}</div>
        <h3>{section.title}</h3>
        <div className="card-grid">
          {section.cards.map((card, i) => (
            <div key={card.title} className="card" style={{ '--d': `${i * 80}ms` }}>
              <div className="card-icon">
                <Icon name={card.icon} size={26} />
              </div>
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (section.type === 'diagram') {
    return (
      <section className="section" style={{ '--i': index }}>
        <div className="section-kicker"><Icon name={kickerIcon} size={16} /> {section.kicker}</div>
        <h3>{section.title}</h3>
        <div className="diagram-card">
          <Diagram type={section.diagram} />
        </div>
        {section.caption && <p className="diagram-caption">{section.caption}</p>}
      </section>
    );
  }

  if (section.type === 'image') {
    return (
      <section className="section" style={{ '--i': index }}>
        <div className="section-kicker"><Icon name={kickerIcon} size={16} /> {section.kicker}</div>
        <h3>{section.title}</h3>
        <div className="image-card">
          {section.images.map((img, i) => (
            <figure key={i} className="image-figure" style={{ '--d': `${i * 100}ms` }}>
              <img src={img.src} alt={img.caption} loading="lazy" />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    );
  }

  if (section.type === 'example') {
    return (
      <section className="section" style={{ '--i': index }}>
        <div className="section-kicker"><Icon name={kickerIcon} size={16} /> {section.kicker}</div>
        <h3>{section.title}</h3>
        <div className="example-card">
          <span className="example-emoji">💡</span>
          <p>{section.body}</p>
        </div>
      </section>
    );
  }

  if (section.type === 'points') {
    return (
      <section className="section" style={{ '--i': index }}>
        <div className="section-kicker"><Icon name={kickerIcon} size={16} /> {section.kicker}</div>
        <h3>{section.title}</h3>
        <ul className="points-list">
          {section.points.map((p, i) => (
            <li key={i} style={{ '--d': `${i * 60}ms` }}>
              <span className="point-bullet">✓</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (section.type === 'recap') {
    return (
      <section className="section" style={{ '--i': index }}>
        <div className="section-kicker"><Icon name={kickerIcon} size={16} /> {section.kicker}</div>
        <h3>{section.title}</h3>
        <div className="recap-card">
          {section.points.map((p, i) => (
            <div key={i} className="recap-item" style={{ '--d': `${i * 90}ms` }}>
              <span className="recap-bullet">{i + 1}</span>
              <span>{p}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return null;
}

// Renders formatted exam answer text (supports **bold** markers)
function ExamAnswer({ text }) {
  const parts = text.split('**').filter(Boolean);
  return (
    <div className="exam-answer">
      {parts.map((part, i) =>
        i % 2 === 0 ? (
          <span key={i}>{part}</span>
        ) : (
          <strong key={i}>{part}</strong>
        )
      )}
    </div>
  );
}

export default function TopicPage({ topicId, onBack, onOpenTopic }) {
  const topic = units['business-intelligence'][0].topics.find((t) => t.id === topicId);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(() => getCompletedTopics().includes(topicId));
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setCompleted(getCompletedTopics().includes(topicId));
  }, [topicId]);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Math.min(100, Math.max(0, scrolled)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.scrollTo(0, 0);
    return () => window.removeEventListener('scroll', onScroll);
  }, [topicId]);

  const handleComplete = () => {
    toggleCompletedTopic(topicId);
    setCompleted(!completed);
  };

  if (!topic) {
    return (
      <div className="container">
        <p>Topic nahi mila.</p>
        <button className="btn primary" onClick={onBack}>← Wapas Ghar</button>
      </div>
    );
  }

  // Prev/next topic
  const allTopics = units['business-intelligence'][0].topics;
  const idx = allTopics.findIndex((t) => t.id === topicId);
  const prevTopic = idx > 0 ? allTopics[idx - 1] : null;
  const nextTopic = idx < allTopics.length - 1 ? allTopics[idx + 1] : null;

  return (
    <div className="topic-page">
      {/* Sidebar menu */}
      <TopicMenu
        currentTopicId={topicId}
        onOpenTopic={onOpenTopic}
        onOpenSubject={() => onBack()}
        onBack={onBack}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="topic-main">
        <header className="topic-hero" style={{ '--accent': topic.accent }}>
          <div className="topic-hero-bg" />
          <div className="container">
            <button className="menu-toggle-mobile" onClick={() => { setMobileOpen(true); }}>
              <Icon name="book" size={16} color="#c4ff00" /> Topics Menu
            </button>
            <div className="topic-hero-badge">
              <span className="topic-hero-num">{topic.number}</span>
              <span>Business Intelligence · Unit 1</span>
            </div>
            <h1 className="topic-hero-title">{topic.title}</h1>
            <p className="topic-hero-sub">{topic.subtitle}</p>
            <div className="topic-hero-stats">
              <span>📖 {topic.sections.length} sections</span>
              <span>🖼️ {topic.sections.filter((s) => s.type === 'diagram').length} diagrams</span>
              <span>🎯 {topic.examQuestions.length} 6-mark exam questions</span>
            </div>
          </div>
        </header>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <main className="container">
          {/* English Definition Box */}
          <section className="section english-def-section">
            <div className="section-kicker"><Icon name="book" size={16} /> English Definition</div>
            <div className="english-def-card">
              <span className="english-def-label">OFFICIAL DEFINITION</span>
              <p>{topic.englishDefinition}</p>
            </div>
          </section>

          {/* Hinglish intro */}
          <section className="section intro-section">
            <div className="intro-card">
              <span className="intro-emoji">🎓</span>
              <p>{topic.intro}</p>
            </div>
          </section>

          {topic.sections.map((section, i) => (
            <SectionRenderer key={i} section={section} index={i} />
          ))}

          {/* 6-mark exam questions */}
          <section className="section exam-section">
            <div className="section-kicker"><Icon name="quiz" size={16} /> Exam Focus — 6 Marks Questions</div>
            <h3>6 Marks Exam Questions & Answers 🔥</h3>
            <p className="section-note">
              Important questions jo exam mein aa sakte hain — aur unke complete answers bhi diye gaye hain. Answer mein definition, explanation aur diagram reference diya gaya hai.
            </p>
            <div className="exam-list">
              {topic.examQuestions.map((q, i) => (
                <div key={i} className="exam-item" style={{ '--d': `${i * 80}ms` }}>
                  <div className="exam-question">
                    <span className="exam-q-num">Q{i + 1}</span>
                    <span className="exam-q-text">{q.question}</span>
                  </div>
                  <div className="exam-answer-block">
                    <span className="exam-answer-label">ANSWER</span>
                    <ExamAnswer text={q.answer} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom nav: prev/next + mark complete */}
          <nav className="topic-bottom-nav">
            <div className="tbn-row">
              <button
                className="btn ghost"
                disabled={!prevTopic}
                onClick={() => prevTopic && onOpenTopic(prevTopic.id)}
              >
                ← Pehla Topic
              </button>
              <button
                className={`btn ${completed ? 'btn-done' : 'btn-mark'}`}
                onClick={handleComplete}
              >
                {completed ? '✓ Topic Completed' : 'Mark as Completed'}
              </button>
              <button
                className="btn primary"
                disabled={!nextTopic}
                onClick={() => nextTopic && onOpenTopic(nextTopic.id)}
              >
                Agla Topic →
              </button>
            </div>
          </nav>
        </main>
      </div>
    </div>
  );
}
