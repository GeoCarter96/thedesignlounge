"use client";
import { useEffect } from "react";
import Link from "next/link";
import './ebooks.css';

const PUBLICATIONS = [
  {
    id: "vol-01",
    title: "How To Create And Sell Digital Products",
    subtitle: "(Item Still In Production)",
    img: "/ebooks.PNG",
    price: "",
  }
];

export default function Ebooks() {
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
  <div className="ebooks-page">
    
    <section className="header-section max-w-7xl">
      <p className="reveal anim-fade-in editorial-tag">
        The Digital Atelier // Library
      </p>
      <h1 className="reveal anim-slide-up hero-title">
        Curated <span className="text-gold">Knowledge</span>
      </h1>
    </section>

    <section className="collection-section max-w-7xl">
      {PUBLICATIONS.map((book, i) => (
        <div 
          key={book.id}
          style={{ transitionDelay: `${i * 0.2}s` }}
          className="reveal anim-slide-up book-card"
        >
          <div className="bg-light-beam">
            <img src="/lightbeam.png" alt="" />
          </div>

          <div className="book-wrapper">
            <img src={book.img} alt={book.title} className="book-img" />
            <div className="book-spine" />
            <div className="shimmer-overlay">
              <div className="shimmer-beam" />
            </div>
          </div>

        
          <div className="book-meta">
            <div style={{ maxWidth: '70%' }}>
              <span className="book-id">{book.id}</span>
              <h3 className="book-title">{book.title}</h3>
              <p className="book-subtitle">{book.subtitle}</p>
            </div>
            <span style={{ fontSize: '1.125rem', fontWeight: 200, letterSpacing: '0.1em' }}>
              {book.price}
            </span>
          </div>
        </div>
      ))}
    </section>

    <section style={{ padding: '160px 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }} className="reveal anim-fade-in">
      <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5em' }}>
        Instant Digital Fulfillment // Secure Encryption
      </p>
    </section>
  </div>
);
}