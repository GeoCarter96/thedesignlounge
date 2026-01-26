"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import './matchmake.css';


const QUESTIONS = [
  {
    id: 1,
    text: " Lounge Matchmaker",
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
  luxury: { 
    name: "The Private Lounge Experience", 
    desc: "For brands that require a digital masterpiece.",
    path: "/privatelounge" // Specific page
  },
  goalsetter: { 
    name: "Planners", 
    desc: "For brands ready to lead the conversation.",
    path: "/planners" 
  },
  leader: { 
    name: "Flyers", 
    desc: "For brands that speak through advertisement.",
    path: "/flyers" 
  },
   ebooks: { 
    name: "EBooks", 
    desc: "For brands that center the love of knowledge.",
    path: "/ebooks" 
  },
   curiosity: { 
    name: "Courses", 
    desc: "For brands that thrive on continuous learning.",
    path: "/courses" 
  },
  
};

// 1. Define the shape of your scores
type ScoreCategory = 'luxury' | 'goalsetter' | 'leader'  | 'ebooks' | 'curiosity';
type ScoreState = Record<ScoreCategory, number>;

export default function DiscoveryPage() {
  const [step, setStep] = useState(0);
  
  // 2. Explicitly type the state
  const [scores, setScores] = useState<ScoreState>({ 
    luxury: 0, 
    goalsetter: 0, 
    leader: 0, 
   
    ebooks: 0,
    curiosity: 0
  });

  const [showResult, setShowResult] = useState(false);
    const getResult = () => {
    // Find which key has the highest value
    const winner = (Object.keys(scores) as ScoreCategory[]).reduce((a, b) => 
      scores[a] > scores[b] ? a : b
    );
    return PRODUCTS[winner];
  };

  // 3. Type the points parameter
  const handleAnswer = (points: Partial<ScoreState>) => {
    const newScores = { ...scores };
    
    // 4. Tell TS that 'key' is one of our specific categories
    (Object.keys(points) as ScoreCategory[]).forEach((key) => {
      const pointValue = points[key];
      if (pointValue !== undefined) {
        newScores[key] += pointValue;
      }
    });
    
    setScores(newScores);

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };


  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 pt-20">
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-2xl w-full text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.5em] opacity-30 mb-8">
              Step {step + 1} of {QUESTIONS.length}
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight mb-16">
              {QUESTIONS[step].text}
            </h2>
            <div className="flex flex-col gap-6">
              {QUESTIONS[step].options.map((opt) => (
                <button
                  key={opt.text}
                  onClick={() => handleAnswer(opt.points)}
                  className="group relative py-6 border border-white/10 cursor-pointer rounded-full hover:border-[#D4AF37] transition-all duration-500 overflow-hidden"
                >
                  <span className="relative z-10 uppercase tracking-[0.2em] text-xs group-hover:text-black transition-colors duration-500">
                    {opt.text}
                  </span>
                  <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-3xl"
          >
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] mb-6">Your Curated Recommendation</p>
            <h1 className="text-5xl md:text-7xl font-serif-display mb-8 italic">{getResult().name}</h1>
            <p className="text-xl opacity-60 font-extralight mb-16">{getResult().desc}</p>
           <Link href={getResult().path}>
  <button className="rounded-full bg-white px-16 py-5 text-xs font-bold uppercase cursor-pointer tracking-[0.3em] text-black hover:bg-[#D4AF37] transition-all">
    Secure Your Placement
  </button>
</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
