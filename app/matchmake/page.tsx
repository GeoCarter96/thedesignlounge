"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import './matchmake.css';

const QUESTIONS = [
  {
    id: 1,
    text: "LOUNGE MATCHMAKER",
    options: [
      { text: "Live In Luxury", points: { luxury: 1 } },
      { text: "Plan Ahead", points: { goalsetter: 1 } },
      { text: "Event Promotion", points: { leader: 1 } },
      { text: "Brand Expansion", points: { ebooks: 1} },
      { text: "No Limits", points: { curiosity: 1} },
    ],
  },
];

const PRODUCTS = {
  luxury: { name: "The Private Lounge Experience", desc: "For brands that require a digital masterpiece.", path: "/privatelounge" },
  goalsetter: { name: "Planners", desc: "For brands ready to lead the conversation.", path: "/planners" },
  leader: { name: "Flyers", desc: "For brands that speak through advertisement.", path: "/flyers" },
  ebooks: { name: "EBooks", desc: "For brands that center the love of knowledge.", path: "/ebooks" },
  curiosity: { name: "Courses", desc: "For brands that thrive on continuous learning.", path: "/courses" },
};

type ScoreCategory = 'luxury' | 'goalsetter' | 'leader' | 'ebooks' | 'curiosity';
type ScoreState = Record<ScoreCategory, number>;

export default function DiscoveryPage() {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<ScoreState>({ 
    luxury: 0, goalsetter: 0, leader: 0, ebooks: 0, curiosity: 0 
  });
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setTimeout(() => {
    setMounted(true);
   }, 0);
}, []);

  const getResult = () => {
    const winner = (Object.keys(scores) as ScoreCategory[]).reduce((a, b) => 
      scores[a] > scores[b] ? a : b
    );
    return PRODUCTS[winner];
  };

  const handleAnswer = (points: Partial<ScoreState>) => {
    const newScores = { ...scores };
    (Object.keys(points) as ScoreCategory[]).forEach((key) => {
      const pointValue = points[key];
      if (pointValue !== undefined) newScores[key] += pointValue;
    });
    setScores(newScores);
    if (step < QUESTIONS.length - 1) setStep(step + 1);
    else setShowResult(true);
  };

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
  <div className="discovery-page">
    {!showResult ? (
      <div key={`step-${step}`} className="anim-question-enter max-w-2xl">
        <p className="step-counter">
          Step {step + 1} of {QUESTIONS.length}
        </p>
        <h2 className="question-text">
          {QUESTIONS[step].text}
        </h2>
        <div className="option-list">
          {QUESTIONS[step].options.map((opt) => (
            <button
              key={opt.text}
              onClick={() => handleAnswer(opt.points)}
              className="option-btn"
            >
              <span className="option-text">
                {opt.text}
              </span>
              <div className="option-fill" />
            </button>
          ))}
        </div>
      </div>
    ) : (
      <div className="anim-result-enter max-w-3xl">
        <p className="result-tag">Your Curated Recommendation</p>
        <h1 className="result-name">{getResult().name}</h1>
        <p className="result-desc">{getResult().desc}</p>
        <div style={{ textAlign: 'center' }}>
          <Link href={getResult().path}>
            <button className="cta-btn">
              Secure Your Placement
            </button>
          </Link>
        </div>
      </div>
    )}
  </div>
);
}