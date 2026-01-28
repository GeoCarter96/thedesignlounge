"use client";
import { useState, useEffect } from "react";
import './contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    vision: "",
  });

  useEffect(() => {
    // Native Intersection Observer to trigger CSS reveals
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const socials = [
    { name: 'Instagram', url: 'https://instagram.com/theedesignlounge' },
    { name: 'TikTok', url: 'https://tiktok.com/@maaiirr1' },
    { name: 'Youtube', url:'https://youtube.com/@shesmair' }
  ];

  const isFormValid = formData.name && formData.email && formData.vision;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget; 
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
  <div className="contact-page">
    
    <section className="max-w-7xl">
      <h1 className="reveal anim-slide-up hero-headline">
       Need Something? <br />
       <span className="text-gold">The Lounge Listens</span>
      </h1>
    </section>

    <div className="max-w-7xl grid-container">
      
      {/* Left: Form */}
      <div className="reveal anim-fade-in form-column">
        <p className="label-text" style={{ letterSpacing: '0.4em' }}>
          Whether It's A Question, Or Feedback, The Lounge Is Always Open
        </p>
        
        <form className="form-column">
          <div className="input-group">
            <label className="label-text">Full Name</label>
            <input 
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text" 
              placeholder="Your Name" 
              className="custom-input" 
            />
          </div>
          
          <div className="input-group">
            <label className="label-text">Electronic Mail</label>
            <input 
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email" 
              placeholder="email@address.com" 
              className="custom-input" 
            />
          </div>

          <div className="input-group">
            <label className="label-text">Your Vision</label>
            <textarea 
              name="vision"
              value={formData.vision}
              onChange={handleChange}
              rows={2} 
              placeholder="Tell us about your project" 
              className="custom-input" 
              style={{ resize: 'none' }}
            />
          </div>

          <button 
            disabled={!isFormValid}
            type="submit" 
            className={`submit-btn ${isFormValid ? 'valid' : ''}`}
          >
            <span style={{ position: 'relative', zIndex: 10 }}>Send Invitation</span>
            <div className="btn-fill" />
          </button>
        </form>
      </div>

      {/* Right: Studio Details */}
      <div className="reveal anim-fade-in details-column" style={{ transitionDelay: '0.2s' }}>
        <div>
          <h3 className="label-text" style={{ marginBottom: '32px', color: '#666' }}>Social Atelier</h3>
          {socials.map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              {social.name}
            </a>
          ))}
        </div>

        <div>
          <h3 className="label-text" style={{ marginBottom: '32px', color: '#666' }}>Direct Contact</h3>
          <p className="social-link" style={{ pointerEvents: 'none', opacity: 0.8 }}>
            concierge@yourstudio.com
          </p>
        </div>
      </div>
    </div>
  </div>
);
}