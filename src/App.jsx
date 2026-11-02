import React, { useEffect, useState } from 'react';
import { topics } from './data/topics';
import TopicPage from './components/TopicPage';
import { Icon } from './components/Icons';
import './App.css';

function Home() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`home ${visible ? 'home-visible' : ''}`}>
      {/* animated background */}
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
            Unit 1 — Introduction to BI. Data se decisions tak ka safar, bilkul simple
            Hinglish mein — animations, diagrams aur quizzes ke saath.
          </p>
          <div className="hero-meta">
            <span>🎓 3 topics</span>
            <span>🖼️ 6 animated diagrams</span>
            <span>🎯 15 quiz questions</span>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="topics-grid">
          {topics.map((topic) => (
            <button
              key={topic.id}
              className="topic-card"
              style={{ '--accent': topic.accent }}
              onClick={() => window.dispatchEvent(new CustomEvent('open-topic', { detail: topic.id }))}
            >
              <div className="topic-card-head">
                <span className="topic-card-num">{topic.number}</span>
                <span className="topic-card-icon">
                  <Icon name={topic.icon} size={34} />
                </span>
              </div>
              <h2 className="topic-card-title">{topic.title}</h2>
              <p className="topic-card-sub">{topic.subtitle}</p>
              <p className="topic-card-intro">{topic.intro}</p>
              <span className="topic-card-cta">
                Start reading <Icon name="arrow" size={16} color="#c4ff00" />
              </span>
            </button>
          ))}
        </div>

        <section className="how-it-works">
          <h2>Kaise hoga aapka study ka safar?</h2>
          <div className="how-grid">
            <div className="how-item">
              <span className="how-emoji">📖</span>
              <h3>Simple Hinglish Explanations</h3>
              <p>Har concept ko simple words mein samjhaya gaya hai — Hindi + English mix, jise aap asaani se samajh sake aur exam mein likh sake.</p>
            </div>
            <div className="how-item">
              <span className="how-emoji">🖼️</span>
              <h3>Animated Exam Diagrams</h3>
              <p>Jo diagram exam mein demonstrate karna ho sakta hai — wo animated aur labeled hain. Yaad rakhna asaan hoga.</p>
            </div>
            <div className="how-item">
              <span className="how-emoji">🎯</span>
              <h3>Interactive Quizzes</h3>
              <p>Har topic ke end mein quiz hai. Apne knowledge test karo, score dekhlo — aur weak areas pe focus karo.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  const [openTopic, setOpenTopic] = useState(null);

  useEffect(() => {
    const handler = (e) => setOpenTopic(e.detail);
    window.addEventListener('open-topic', handler);
    return () => window.removeEventListener('open-topic', handler);
  }, []);

  return (
    <div className={`app ${openTopic ? 'app-page' : ''}`}>
      <nav className="topnav">
        <div className="container nav-inner">
          <span className="brand">
            <span className="brand-dot" /> BI · Hinglish Study
          </span>
          <button className="nav-home" onClick={() => setOpenTopic(null)}>Home</button>
        </div>
      </nav>
      {openTopic ? (
        <TopicPage topicId={openTopic} onBack={() => setOpenTopic(null)} />
      ) : (
        <Home />
      )}
      <footer className="footer">
        <div className="container">
          <p>Business Intelligence · Unit 1 — Hinglish Study Companion 🎓</p>
          <p className="footer-note">Build for MCA students — simple explanations, exam-ready diagrams, interactive quizzes.</p>
        </div>
      </footer>
    </div>
  );
}
