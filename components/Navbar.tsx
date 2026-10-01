'use client'; // Required to read browser path configurations in Next.js

import Link from "next/link";
import Image from "next/image"; // Imported for automated image optimization
import { usePathname } from "next/navigation"; // Reads the current active page route
import './navbar.css';

export default function Navbar() {
  const pathname = usePathname(); // Holds the current path string (e.g., "/theloungemenu")

  const navLinks = [
    { name: "THE LOBBY", href: "/" },
    { name: "THE LOUNGE MENU", href: "/theloungemenu" },
    { name: "THE GUEST BOOK", href: "/testimonials" },
    { name: "FROM THE FOUNDER", href: "/owner" },
    { name: "THE CUSTOM SUITE", href: "/customwork" },
    { name: "CHECK IN", href: "/contact" },
  ];

  return (
    <nav className="anim-nav-entrance">
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/">
            <Image
              src="/logo3.png"
              alt="The Design Lounge Logo"
              width={180} // Set this to your logo's preferred visual width
              height={50} // Set this to your logo's preferred visual height
              priority // Forces Next.js to preload the logo immediately
            />
          </Link>
        </div>
        <div className="nav-links-wrapper">
          {navLinks.map((link) => {
            // Checks if the current path exactly matches the link destination
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link ${link.name === "CHECK IN" ? "nav-cta" : ""} ${isActive ? "active" : ""}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
