import React, { useEffect, useState } from 'react';
import { subjects, units } from './data/topics';
import TopicPage from './components/TopicPage';
import { Icon } from './components/Icons';
import { getCompletedTopics } from './utils/progress';
import './App.css';

// ---------- Subject card ----------
function SubjectCard({ subject, onOpen }) {
  if (!subject.available) {
    return (
      <article className="subject-card coming-soon" style={{ '--accent': subject.color }}>
        <div className="subject-card-head">
          <span className="subject-card-icon">
            <Icon name="book" size={32} color="#5a6a9e" />
          </span>
          <span className="subject-card-code">{subject.code}</span>
        </div>
        <h2 className="subject-card-title">{subject.name}</h2>
        <span className="coming-soon-badge">Coming Soon</span>
      </article>
    );
  }
  const biTopics = units['business-intelligence'][0].topics;
  const doneCount = getCompletedTopics().filter((id) => biTopics.some((t) => t.id === id)).length;
  return (
    <article className="subject-card" style={{ '--accent': subject.color }}>
      <div className="subject-card-head">
        <span className="subject-card-icon">
          <Icon name="chart" size={32} />
        </span>
        <span className="subject-card-code">{subject.code}</span>
      </div>
      <h2 className="subject-card-title">{subject.name}</h2>
      <p className="subject-card-desc">{subject.description}</p>
      {doneCount > 0 && (
        <p className="subject-progress">
          ✓ {doneCount} of {biTopics.length} topics completed
        </p>
      )}
      <button
        className="subject-card-cta"
        onClick={() => window.dispatchEvent(new CustomEvent('open-subject', { detail: subject.id }))}
      >
        Explore Units <Icon name="arrow" size={16} color="#c4ff00" />
      </button>
    </article>
  );
}

// ---------- Unit page ----------
function UnitPage({ subject, onBack }) {
  const subjectUnits = units[subject.id] || [];
  const biTopics = units['business-intelligence'][0].topics;
  const completed = getCompletedTopics();
  return (
    <>
      <header className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <button className="back-btn" onClick={onBack}>
            <Icon name="arrow" size={18} color="#fff" /> Wapas Ghar
          </button>
          <div className="topic-hero-badge">
            <span className="topic-hero-num">{subject.code}</span>
            <span>{subject.name}</span>
          </div>
          <h1 className="topic-hero-title">Units & Topics</h1>
          <p className="topic-hero-sub">{subject.description}</p>
          <div className="topic-hero-stats">
            <span>📊 {completed.filter((id) => biTopics.some((t) => t.id === id)).length} of {biTopics.length} completed</span>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="units-grid">
          {subjectUnits.map((unit) => (
            <article key={unit.id} className="unit-card" style={{ '--i': unit.number }}>
              <div className="unit-card-head">
                <span className="unit-card-num">Unit {unit.number}</span>
                <span className="unit-card-icon"><Icon name="book" size={26} /></span>
              </div>
              <h2 className="unit-card-title">{unit.name}</h2>
              <p className="unit-card-count">{unit.topics.length} topics</p>
              <div className="unit-topics-preview">
                {unit.topics.map((t) => {
                  const isDone = completed.includes(t.id);
                  return (
                    <button
                      key={t.id}
                      className={`unit-topic-mini ${isDone ? 'done' : ''}`}
                      onClick={() => window.dispatchEvent(new CustomEvent('open-topic', { detail: t.id }))}
                    >
                      <span className="utm-num">{t.number}</span>
                      <span className="utm-title">{t.title}</span>
                      {isDone && <span className="utm-check">✓</span>}
                    </button>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}

// ---------- Home ----------
function Home() {
  const biTopics = units['business-intelligence'][0].topics;
  const doneCount = getCompletedTopics().filter((id) => biTopics.some((t) => t.id === id)).length;
  return (
    <div className="home">
      <div className="bg-orbs">
        <span className="orb orb1" />
        <span className="orb orb2" />
        <span className="orb orb3" />
      </div>

      <header className="home-hero">
        <div className="container">
          <div className="hero-badge">
            <span className="hero-badge-dot" /> MCA Study Companion
          </div>
          <h1 className="hero-title">
            Business Intelligence
            <span className="hero-title-accent">Hinglish Mein</span>
          </h1>
          <p className="hero-sub">
            5 subjects · Unit 1 BI topics — simple Hinglish explanations, official English definitions,
            animated exam diagrams, real reference images aur 6-mark exam questions.
          </p>
          <div className="hero-meta">
            <span>📚 5 Subjects</span>
            <span>📖 Unit 1 · 5 Topics</span>
            <span>🖼️ 9 Animated Diagrams</span>
            <span>✓ {doneCount} of {biTopics.length} completed</span>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="section-kicker center">Choose a Subject</div>
        <h2 className="subjects-title">All Subjects</h2>
        <div className="subjects-grid">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState({ level: 'home' });

  useEffect(() => {
    const handler = (e) => setView({ level: 'units', subjectId: e.detail });
    window.addEventListener('open-subject', handler);
    return () => window.removeEventListener('open-subject', handler);
  }, []);

  useEffect(() => {
    const handler = (e) => setView({ level: 'topic', topicId: e.detail });
    window.addEventListener('open-topic', handler);
    return () => window.removeEventListener('open-topic', handler);
  }, []);

  const subject = view.level === 'units' ? subjects.find((s) => s.id === view.subjectId) : null;
  const goHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView({ level: 'home' });
  };

  const openTopic = (topicId) => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setView({ level: 'topic', topicId });
  };

  return (
    <div className="app">
      <nav className="topnav">
        <div className="container nav-inner">
          <span className="brand" onClick={goHome} style={{ cursor: 'pointer' }}>
            <span className="brand-dot" /> BI · Hinglish Study
          </span>
          <button className="nav-home" onClick={goHome}>Home</button>
        </div>
      </nav>

      {view.level === 'topic' ? (
        <TopicPage
          topicId={view.topicId}
          onBack={() => setView({ level: 'units', subjectId: 'business-intelligence' })}
          onOpenTopic={openTopic}
        />
      ) : view.level === 'units' && subject ? (
        <UnitPage subject={subject} onBack={goHome} />
      ) : (
        <Home />
      )}

      <footer className="footer">
        <div className="container">
          <p>MCA Study Companion — Hinglish Study Material 🎓</p>
          <p className="footer-note">Simple explanations · Official definitions · Exam diagrams · 6-mark questions</p>
        </div>
      </footer>
    </div>
  );
}
