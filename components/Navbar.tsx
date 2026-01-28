import Link from "next/link";
import './navbar.css'; 

export default function Navbar() {
  const navLinks = [
    { name: "THE LOBBY", href: "/" },
    { name: "THE LOUNGE MENU", href: "/theloungemenu" },
    { name: "THE GUEST BOOK", href: "/testimonials" },
    { name: "FROM THE FOUNDER", href: "/owner" },
    { name: "THE CUSTOM SUITE", href: "/customwork" },
    { name: "VISIT CONCIERGE'S DESK", href: "/contact" },
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

       
      </div>
    </nav>
  );
}
