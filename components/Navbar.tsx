import Link from "next/link";
import './navbar.css'; 

export default function Navbar() {
  const navLinks = [
    { name: "The Lobby", href: "/" },
    { name: "The Lounge Menu", href: "/theloungemenu" },
    { name: "The Guest Book", href: "/testimonials" },
    { name: "From The Founder", href: "/owner" },
    { name: "The Custom Suite", href: "/customwork" },
  ];

  return (
    <nav className="anim-nav-entrance">
      <div className="nav-container">
       
        <div className="nav-logo">
          The Design Lounge
        </div>

        
        <div className="nav-links-wrapper">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link href="/contact" style={{ textDecoration: 'none' }}>
          <button className="nav-btn">
            Visit Concierge&apos;s Desk
          </button>
        </Link>
      </div>
    </nav>
  );
}
