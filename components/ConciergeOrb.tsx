"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import './concierge.css';

export default function ConciergeOrb() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const orbRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Drag Logic
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || isOpen) return;
    setPosition((prev) => ({
      x: prev.x + e.movementX,
      y: prev.y + e.movementY,
    }));
  };

  const handlePointerUp = () => setIsDragging(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOpen) {
        setShowHint(true);
        setTimeout(() => setShowHint(false), 4000);
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [isOpen]);

 return (
  <div className="orb-viewport-lock">
    <div
      ref={orbRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="orb-draggable-wrapper"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        cursor: isDragging ? "grabbing" : "grab",
        transition: isDragging ? "none" : "transform 0.6s cubic-bezier(0.2, 0, 0.2, 1)",
      }}
    >
      {/* Navigation Menu */}
      {isOpen && (
        <div className="orb-nav-menu">
          <p className="orb-menu-title">The Lounge Menu</p>
          {["PLANNERS", "COURSES", "FLYERS", "EBOOKS", "PRIVATE LOUNGE", "FREEBIES"].map((name) => (
            <Link
              key={name}
              href={`/${name.toLowerCase().replace(" ", "")}`}
              onClick={() => setIsOpen(false)}
              className="orb-nav-link"
            >
              {name}
            </Link>
          ))}
        </div>
      )}

      {/* Whisper Hint */}
      {showHint && !isOpen && (
        <div className="orb-whisper-hint">
          <div className="orb-hint-box">
            <p className="orb-hint-text">Quick Navigation</p>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => {
          if (isDragging) return;
          setIsOpen(!isOpen);
        }}
        className="orb-trigger-btn"
      >
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
          <span style={{ 
            height: '1px', transition: 'all 0.5s', backgroundColor: isOpen ? '#D4AF37' : '#fff',
            width: '20px', transform: isOpen ? 'rotate(45deg) translateY(5px)' : 'none' 
          }} />
          <span style={{ 
            height: '1px', transition: 'all 0.5s', backgroundColor: isOpen ? '#D4AF37' : '#fff',
            width: isOpen ? '20px' : '12px', transform: isOpen ? 'rotate(-45deg) translateY(-2px)' : 'none' 
          }} />
        </div>
        <div className="orb-pulse-ring" />
      </button>
    </div>
  </div>
);
}