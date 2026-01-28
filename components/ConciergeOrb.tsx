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
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      <div
        ref={orbRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="pointer-events-auto absolute bottom-12 right-12 flex flex-col items-end group select-none"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          cursor: isDragging ? "grabbing" : "grab",
          transition: isDragging ? "none" : "transform 0.6s cubic-bezier(0.2, 0, 0.2, 1)",
        }}
      >
        {/* Navigation Menu */}
        {isOpen && (
          <div className="anim-menu-reveal mb-8 flex flex-col items-end gap-4 bg-black/40 backdrop-blur-2xl border border-white/10 p-8 shadow-2xl min-w-[240px]">
            <p className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] mb-2 border-b border-[#D4AF37]/20 w-full pb-3 font-light">
              The Lounge Menu
            </p>
            {["PLANNERS", "COURSES", "FLYERS", "EBOOKS", "PRIVATE LOUNGE", "FREEBIES"].map((name) => (
              <Link
                key={name}
                href={`/${name.toLowerCase().replace(" ", "")}`}
                onClick={() => setIsOpen(false)}
                className="text-sm font-extralight tracking-[0.2em] text-white/60 hover:text-white transition-all duration-500 hover:-translate-x-1"
              >
                {name}
              </Link>
            ))}
          </div>
        )}

        {/* Whisper Hint */}
        {showHint && !isOpen && (
          <div className="anim-hint-reveal absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none">
            <div className="bg-black/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-2xl">
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] font-light">Quick Navigation</p>
            </div>
          </div>
        )}

        {/* Trigger Button */}
        <button
          onClick={(e) => {
            if (isDragging) return; // Prevent opening while dragging
            setIsOpen(!isOpen);
          }}
          className="relative w-16 h-16 cursor-pointer rounded-full bg-gradient-to-br from-white/20 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 flex items-center justify-center shadow-2xl transition-all duration-700 hover:scale-110 active:scale-95"
        >
          <div className="relative z-10 flex flex-col gap-1.5 items-end">
            <span className={`h-[1px] transition-all duration-500 ${isOpen ? 'w-5 rotate-45 translate-y-[5px] bg-[#D4AF37]' : 'w-5 bg-white'}`} />
            <span className={`h-[1px] transition-all duration-500 ${isOpen ? 'w-5 -rotate-45 -translate-y-[2px] bg-[#D4AF37]' : 'w-3 bg-white'}`} />
          </div>
          <div className="absolute inset-0 rounded-full border border-[#D4AF37]/30 animate-luxury-pulse opacity-20" />
        </button>
      </div>
    </div>
  );
}
