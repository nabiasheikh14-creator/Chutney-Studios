"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#connect", label: "Connect" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateNav = () => setIsScrolled(window.scrollY > 24);

    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });

    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  return (
    <header className={`site-nav ${isScrolled ? "site-nav--scrolled" : ""}`}>
      <a className="site-nav__brand" href="#top" aria-label="Sifarr home">
        <Image
          src="/assets/logos/sifarr-primary.svg"
          alt=""
          width={180}
          height={90}
          priority
        />
      </a>

      <nav className="site-nav__links" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="button button--nav" href="#connect">
        Start from Sifarr
      </a>

      <button
        className="site-nav__toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{isOpen ? "Close" : "Menu"}</span>
      </button>

      <div
        className={`site-nav__mobile ${isOpen ? "site-nav__mobile--open" : ""}`}
        id="mobile-menu"
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="button button--light" href="#connect" onClick={() => setIsOpen(false)}>
          Start from Sifarr
        </a>
      </div>
    </header>
  );
}
