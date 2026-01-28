"use client";
import { useEffect } from "react";
import Link from "next/link";
import './privatelounge.css';

const COLLECTION = [
  { id: "ple1", category: " Night One of the three-night Private Lounge Experience opens at the Brand Identity Bar, where you’ll explore your brand through a luxury-inspired drink menu of identity elixirs and immersive visual prompts. This opening night is about refining your aesthetic and reconnecting with the energy your brand is meant to carry — so you stop guessing and start showing up aligned.", title: "The Private Lounge Experience Night 1 The Brand Identity Bar", price: "$17", link: "https://www.etsy.com/listing/4316240020/the-private-lounge-experience-night-1?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_10&dd=1&logging_key=65e887647b8fa79ac3bb3afe1f7bd0f58117def3%3A4316240020" },
  { id: "primary", category: " Night Two of the three-night Private Lounge Experience invites you into The Suite of Self-Leadership, where you’ll audit your brand from the inside out, redefine your boundaries, and reconnect with the voice you’re meant to lead with. Through intentional reflection and guided exercises like the Self-Led Brand Inventory and the Leadership Ledger, this night is about stepping into clarity and moving like someone who already knows who she is.  ", title: "The Private Lounge Experience Night 2 The Suite of Self Leadership", price: "$17", link: "https://www.etsy.com/listing/4323717783/the-private-lounge-experience-night-2?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_7&dd=1&logging_key=5c282d3fa27a5ef7a4d7eb4524753d8d031883a6%3A4323717783" },
 { id: "ple2", category: "The three-night Private Lounge Experience concludes at The Lounge Legacy Table On Night Three, you’ll refine how you show up, clarify what your content is really saying, and design a rhythm of visibility that supports the brand legacy you’re building — not just the algorithm.", title: "The Private Lounge Experience Night 3 The Lounge Legacy Table", price: "$17", link: "https://www.etsy.com/listing/4323747057/the-private-lounge-experience-night-3?sr_prefetch=1&pf_from=shop_home&ref=shop_home_active_6&dd=1&logging_key=af91a53442a33217cbbb34dc2252a543993bc11f%3A4323747057" },
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
    
    
    <section className="header-section max-w-7xl">
      <p className="reveal anim-fade-in editorial-tag">
        Curated Excellence // Volume I
      </p>
      <h1 className="reveal anim-slide-up hero-title">
        The <span className="text-gold-italic">Private Lounge</span> Experience
      </h1>
    </section>

    
    <section className="grid-container max-w-7xl">
  <div className="grid-layout">
    {COLLECTION.map((item, i) => (
      <div 
        key={item.id}
        style={{ transitionDelay: `${i * 0.2}s` }}
        className="reveal anim-slide-up collection-item group"
      >
        {/* WRAP THE IMAGE SECTION IN THE LINK */}
        <Link 
          href={item.link}
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
        >
          {/* Light beam stays relative to the link container */}
          <div className="light-beam-bg">
            <img src="/lightbeam.png" alt="" />
          </div>

          <div className="image-wrapper" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
            <img 
              src={`/${item.id}.png`} 
              alt={item.title}
              className="product-img"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.dataset.triedAll) return;
                if (target.src.endsWith('.png')) {
                  target.src = target.src.replace('.png', '.PNG');
                } else if (target.src.endsWith('.PNG')) {
                  target.src = target.src.replace('.PNG', '.jpg');
                } else {
                  target.dataset.triedAll = 'true';
                  target.src = "/placeholder.jpg"; 
                }
              }}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            />

            <div className="shimmer-overlay">
               <div className="shimmer-beam" />
            </div>
          </div>
        </Link>

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

  
    <section className="closure-section">
       <p className="reveal anim-fade-in closure-text">
          Exclusivity is a Dialogue
       </p>
    </section>
  </div>
);
}