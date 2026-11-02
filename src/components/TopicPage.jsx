import React, { useEffect, useState } from 'react';
import { topics } from '../data/topics';
import { Diagram } from './Diagrams';
import Quiz from './Quiz';
import { Icon } from './Icons';

function TopicCard({ topic }) {
  return (
    <article className="topic-card" style={{ '--accent': topic.accent }}>
      <div className="topic-card-head">
        <span className="topic-card-num">{topic.number}</span>
        <span className="topic-card-icon">
          <Icon name={topic.icon} size={34} />
        </span>
      </div>
      <h2 className="topic-card-title">{topic.title}</h2>
      <p className="topic-card-sub">{topic.subtitle}</p>
      <p className="topic-card-intro">{topic.intro}</p>
    </article>
  );
}

function SectionRenderer({ section, index }) {
  const icons = {
    definition: 'book',
    cards: 'chart',
    diagram: 'timeline',
    example: 'bulb',
    points: 'check',
    recap: 'quiz',
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

export default function TopicPage({ topicId, onBack }) {
  const topic = topics.find((t) => t.id === topicId);
  const [progress, setProgress] = useState(0);

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

  if (!topic) {
    return (
      <div className="container">
        <p>Topic nahi mila.</p>
        <button className="btn primary" onClick={onBack}>← Wapas Ghar</button>
      </div>
    );
  }

  const topicsList = topics;

  return (
    <>
      <header className="topic-hero" style={{ '--accent': topic.accent }}>
        <div className="topic-hero-bg" />
        <div className="container">
          <button className="back-btn" onClick={onBack}>
            <Icon name="arrow" size={18} color="#fff" /> Wapas Ghar
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
            <span>🎯 {topic.quiz.length} quiz questions</span>
          </div>
        </div>
      </header>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <main className="container">
        {topic.sections.map((section, i) => (
          <SectionRenderer key={i} section={section} index={i} />
        ))}

        <section className="section quiz-section">
          <div className="section-kicker"><Icon name="quiz" size={16} /> Interactive Quiz</div>
          <h3>Ab Apna Gyaan Test Karo 🔥</h3>
          <p className="section-note">Har question ke answer dekhne se pehle sochna — phir reveal karo. Score check karo!</p>
          <Quiz questions={topic.quiz} />
        </section>

        <nav className="topic-nav">
          <button className="btn ghost" onClick={onBack}>← Pehle wale topics ke liye</button>
        </nav>
      </main>
    </>
  );
}
