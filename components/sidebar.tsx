'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import './sidebar.css';


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    'The Lobby', 'Freebies', 'Courses', 'Ebooks', 
    'Flyers', 'Planners', 'PrivateLounge', 'LoungeMenu', 
    'Founder', 'CustomSuite', 'GuestBook', 'Contact'
  ];

  return (
  <div>
 
  {!isOpen && (
    <button 
      onClick={() => setIsOpen(true)}
      className="sidebar-trigger"
      aria-label="Open menu"
    >
      <span className="trigger-line" style={{ width: '24px' }} />
      <span className="trigger-line" style={{ width: '16px', alignSelf: 'flex-end' }} />
    </button>
  )}

  <AnimatePresence mode="wait">
    {isOpen && (
    
      <div key="sidebar-fixed-wrapper" className="sidebar-container-fixed">
      
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="sidebar-backdrop"
        />

      
        <motion.div 
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="sidebar-panel"
        >
        
          <button 
            onClick={(e) => {
              e.stopPropagation(); 
              setIsOpen(false);
            }}
            className="sidebar-close-btn"
            aria-label="Close menu"
          >
            X
          </button>

       
          <div className="scroll-container custom-scrollbar">
            <nav className="sidebar-nav">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link 
                    href={item === 'The Lobby' ? '/' : item === 'LoungeMenu' 
                      ? '/theloungemenu' : item === 'Founder' ? '/owner' : item === 'GuestBook' ? '/testimonials' : item === 'CustomSuite' ? '/customwork' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="sidebar-link group"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="gold-text-base">{item}</span>
                    <span className="shimmer-layer">{item}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
</div>
  );
}