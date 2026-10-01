'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
  color: string;
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0, speed: 0 });
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high-DPI retina displays for crisp particles
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      // Calculate delta distance to detect mouse speed
      const dx = mouseRef.current.x - mouseRef.current.lastX;
      const dy = mouseRef.current.y - mouseRef.current.lastY;
      mouseRef.current.speed = Math.sqrt(dx * dx + dy * dy);

      // Spawn gold dust particles based on movement speed
      if (mouseRef.current.speed > 2) {
        // Adjust the click offset coordinate to match the physical tip of the pen (0 24 layout)
        const penTipX = mouseRef.current.x;
        const penTipY = mouseRef.current.y;

        const goldShades = ['#F9E498', '#D4AF37', '#AF8A3F'];
        const pCount = Math.min(Math.floor(mouseRef.current.speed / 3), 4);

        for (let i = 0; i < pCount; i++) {
          particlesRef.current.push({
            x: penTipX,
            y: penTipY,
            size: Math.random() * 2.5 + 0.8,
            speedX: (Math.random() - 0.5) * 1.5 - (dx * 0.1), // Gentle trail drag drift opposite to movement
            speedY: (Math.random() - 0.5) * 1.5 - (dy * 0.1) + 0.3, // Soft gravitational drop downward
            alpha: 1,
            color: goldShades[Math.floor(Math.random() * goldShades.length)]
          });
        }
      }

      mouseRef.current.lastX = mouseRef.current.x;
      mouseRef.current.lastY = mouseRef.current.y;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop loop run frame rate cycle
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render and update each dust particle unit
      particlesRef.current.forEach((p, idx) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= 0.015; // Fade cycle speed opacity timeline
        p.size *= 0.97;   // Slowly shrinks particle radius over time

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        
        // Luxury shimmering diamond particle blur drop shadow
        ctx.shadowBlur = 4;
        ctx.shadowColor = '#D4AF37';
        ctx.fill();
        ctx.restore();
      });

      // Filter out dead particles
      particlesRef.current = particlesRef.current.filter(p => p.alpha > 0 && p.size > 0.2);

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none', // Allows full click-through to app layout underlying layers
        zIndex: 999999,        // Layers the gold sparks perfectly over everything
      }}
    />
  );
}
