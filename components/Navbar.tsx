"use client";
import Link from "next/link";
import './navbar.css'; 

export default function Navbar() {
  return (
    <nav className="anim-nav-entrance relative z-50">
      <div className="flex items-center justify-between px-10 py-8 text-white">
        <div className="hidden md:block text-2xl font-bold tracking-widest uppercase selection:text-[#D4AF37]">
          The Design Lounge
        </div>

        <div className="hidden space-x-8 gap-12 md:flex">
          {[
            { name: "The Lobby", href: "/" },
            { name: "The Lounge Menu", href: "/theloungemenu" },
            { name: "Testimonials", href: "/testimonials" },
            { name: "About The Owner", href: "/owner" },
            { name: "Custom Work", href: "/customwork" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-all duration-500 cursor-pointer text-white/80 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#D4AF37] hover:via-[#F9E498] hover:to-[#AF8A3F] hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link href="/contact">
          <button className="hidden md:block transition-all duration-500 cursor-pointer text-white/80 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#D4AF37] hover:via-[#F9E498] hover:to-[#AF8A3F] hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
            Visit Concierge's Desk
          </button>
        </Link>
      </div>
    </nav>
  );
}
