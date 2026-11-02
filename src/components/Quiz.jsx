import React, { useState, useRef, useEffect } from 'react';
import { Icon } from './Icons';

export default function Quiz({ questions }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const wrapRef = useRef(null);
  const q = questions[idx];

  useEffect(() => {
    setSelected(null);
    setRevealed(false);
    wrapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [idx]);

  const pick = (i) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => setIdx((i) => i + 1);

  const restart = () => {
    setIdx(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    const msg =
      pct >= 80 ? 'Outstanding! Ye toh exam ke liye tayyar ho gaye ho!' :
      pct >= 50 ? 'Acha kaam! Thora aur practice karo, aap pakka hojaoge.' :
      'Koi baat nahi — revision aur quiz dobara karo, concepts aapke liye clear hojayega!';
    return (
      <div className="quiz-card finished">
        <div className="quiz-result-emoji">{pct >= 80 ? '🏆' : pct >= 50 ? '💪' : '📚'}</div>
        <h3>Quiz Khtam!</h3>
        <div className="score-ring" style={{ '--p': pct }}>
          <span>{score} / {questions.length}</span>
        </div>
        <p className="score-msg">{msg}</p>
        <button className="btn primary quiz-restart" onClick={restart}>Dobara Karne Ke Liye</button>
      </div>
    );
  }

  return (
    <div className="quiz-card" ref={wrapRef}>
      <div className="quiz-progress">
        <span>Question {idx + 1} of {questions.length}</span>
        <span>Score: {score}</span>
      </div>
      <div className="quiz-bar">
        <div className="quiz-bar-fill" style={{ width: `${((idx + (revealed ? 1 : 0)) / questions.length) * 100}%` }} />
      </div>
      <h3 className="quiz-question">{q.question}</h3>
      <div className="quiz-options">
        {q.options.map((opt, i) => {
          let cls = 'quiz-opt';
          if (revealed) {
            if (i === q.answer) cls += ' correct';
            else if (i === selected) cls += ' wrong';
            else cls += ' dim';
          }
          return (
            <button key={i} className={cls} onClick={() => pick(i)} disabled={revealed}>
              <span className="quiz-opt-letter">{String.fromCharCode(65 + i)}</span>
              <span className="quiz-opt-text">{opt}</span>
              {revealed && i === q.answer && <span className="quiz-mark">✓</span>}
              {revealed && i === selected && i !== q.answer && <span className="quiz-mark">✗</span>}
            </button>
          );
        })}
      </div>
      {revealed && (
        <div className="quiz-explain">
          <strong>💡 Samajh:</strong> {q.explain}
        </div>
      )}
      {revealed && <button className="btn primary quiz-next" onClick={next}>{idx + 1 < questions.length ? 'Agla Question →' : 'Quiz Khatam Karo ✓'}</button>}
    </div>
  );
}
