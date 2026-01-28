"use client";
import { useEffect } from "react";
import Link from "next/link";
import './privatelounge.css';

const COLLECTION = [
  { id: "ple1", category: "Digital", title: "The Private Lounge Experience", price: "$17", link: "https://www.theedesignlounge.co/product/the-private-lounge-experience-night-1-the-brand-identity-bar/2" },
  { id: "ple2", category: "Digital", title: "The Lounge Legacy Table", price: "$17", link: "https://www.theedesignlounge.co/product/the-lounge-legacy-table-night-3/6" },
  { id: "ple3", category: "Digital", title: "The Suite Of Self Leadership", price: "$17", link: "https://www.theedesignlounge.co/product/the-suite-of-self-leadership-night-2/4" },
];

export default function PrivateloungePage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
  <div className="lounge-page">
    
    {/* 1. EDITORIAL HEADER */}
    <section className="header-section max-w-7xl">
      <p className="reveal anim-fade-in editorial-tag">
        Curated Excellence // Volume I
      </p>
      <h1 className="reveal anim-slide-up hero-title">
        The <span className="text-gold-italic">Private Lounge</span> Experience
      </h1>
    </section>

    {/* 2. THE TRIPTYCH GRID */}
    <section className="grid-container max-w-7xl">
      <div className="grid-layout">
        {COLLECTION.map((item, i) => (
          <div 
            key={item.id}
            style={{ transitionDelay: `${i * 0.2}s` }}
            className="reveal anim-slide-up collection-item group"
          >
            {/* Desktop Light Beam Background */}
            <div className="light-beam-bg">
              <img src="/lightbeam.png" alt="" />
            </div>

            {/* Product Image Container */}
            <div className="image-wrapper">
              <img 
                src={`/${item.id}.png`} 
                alt={item.title}
                className="product-img"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = target.src.endsWith('.png') ? target.src.replace('.png', '.PNG') : target.src.replace('.PNG', '.png');
                }}
              />
              <div className="shimmer-overlay">
                 <div className="shimmer-beam" />
              </div>
            </div>

            {/* Text Content Container */}
            <div className="content-wrapper">
              <div className="meta-row">
                <span className="category-tag">{item.category}</span>
                <span className="item-price">{item.price}</span>
              </div>
              <h3 className="item-title">
                {item.title}
              </h3>
              <Link 
                href={item.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="details-link"
              >
                View Details —
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* 3. VIGNETTE CLOSURE */}
    <section className="closure-section">
       <p className="reveal anim-fade-in closure-text">
          Exclusivity is a Dialogue
       </p>
    </section>
  </div>
);
}