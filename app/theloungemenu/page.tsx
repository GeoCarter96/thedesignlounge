"use client";
import { useEffect } from "react";
import Link from "next/link";
import './theloungemenu.css';

const SECTIONS = [
  { id: "planners", title: "Planners", sub: "Architectural Time Management", img: "/planner.png" },
  { id: "freebies", title: "Freebies", sub: "Gifts from the Atelier", img: "/freebie.jpg" },
  { id: "ebooks", title: "Ebooks", sub: "Curated Digital Knowledge", img: "/ebooks.PNG" },
  { id: "courses", title: "Courses", sub: "Mastery of Restraint", img: "/course.PNG" },
  { id: "flyers", title: "Flyers", sub: "Digital Couture Assets", img: "/flyer.PNG" },
  { id: "privatelounge", title: "Private Lounge", sub: "Exclusivity Redefined", img: "/ple1.PNG" },
];

export default function LuxuryExperience() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal-section").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  

  return (
    <div className="bg-black">
      {SECTIONS.map((section, i) => (
        <section key={section.id} className="reveal-section">
          
          <div className="text-center mb-20">
            <p className="reveal-sub">
              Volume 0{i + 1} - {section.sub}
            </p>
            <h2 className="reveal-title">
              {section.title}
            </h2>
          </div>

          <div className="reveal-monolith">
      
            <img 
              src={section.img} 
              alt={section.title}
            />
            <Link 
              href={section.title === 'The Lobby' ? '/' : section.title === 'Lounge Menu' ? '/theloungemenu' : `/${section.id}`} 
              className="monolith-link" 
              aria-label={`View ${section.title}`} 
            />
          </div>

          <Link 
            href={`/${section.id}`}
            className="reveal-link"
          >
            Explore {section.title} —
          </Link>
        </section>
      ))}
    </div>
  );
}
