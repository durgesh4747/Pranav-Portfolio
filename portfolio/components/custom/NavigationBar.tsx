"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "about", "work", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -300 && rect.top < 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-3 left-1/2 z-50 w-[92%] max-w-7xl -translate-x-1/2">
      <div
        className="
      relative rounded-full
      bg-[#0F172A]/80 backdrop-blur-md
      border border-white/10
      shadow-lg shadow-black/40
    "
      >
        <GlowingLine />

        <div className="flex h-14 items-center justify-between px-6">
          {/* Name / Logo */}
          <Link
            href={"/"}
            className="text-base font-semibold tracking-wide text-[#F5C16C]"
          >
            Pranav Pargi
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium">
              <NavLinkAccess activeSection={activeSection} />
              <li>
                <ContactButton activeSection={activeSection} />
              </li>
            </ul>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white transition"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
      md:hidden mt-3 overflow-hidden rounded-2xl
      bg-[#0F172A]/90 backdrop-blur-md
      border border-white/10
      transition-all duration-300
      ${isOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}
    `}
      >
        <ul className="flex flex-col items-center gap-6 py-8">
          <NavLinkAccess
            closeMenu={() => setIsOpen(false)}
            activeSection={activeSection}
          />
          <ContactButton
            activeSection={activeSection}
            closeMenu={() => setIsOpen(false)}
          />
        </ul>
      </div>
    </header>
  );
}

export const GlowingLine = () => (
  <div
    className="absolute bottom-0 left-6 right-6 h-px 
    bg-linear-to-r from-transparent via-[#F5C16C]/60 to-transparent"
  />
);

const ContactButton = ({
  closeMenu,
  activeSection,
}: {
  closeMenu?: () => void;
  activeSection: string;
}) => {
  const isActive = activeSection === "contact";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    closeMenu?.();
  };

  return (
    <a
      href="#contact"
      onClick={handleClick}
      className={`
        rounded-full px-5 py-2 text-sm font-semibold transition
        ${
          isActive
            ? "bg-[#F5C16C] text-[#050F3D]"
            : "bg-transparent text-[#F5C16C] border border-[#F5C16C]/60 hover:bg-[#F5C16C] hover:text-[#050F3D]"
        }
      `}
    >
      Contact Me
    </a>
  );
};

const NavLinkAccess = ({
  closeMenu,
  activeSection,
}: {
  closeMenu?: () => void;
  activeSection?: string;
}) => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#work", label: "My Works" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Me" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    document
      .getElementById(href.slice(1))
      ?.scrollIntoView({ behavior: "smooth" });
    closeMenu?.();
  };

  return navLinks.map((link) => {
    const isActive = activeSection === link.href.slice(1);

    return (
      <li key={link.href}>
        <Link
          href={link.href}
          onClick={(e) => handleScroll(e, link.href)}
          className={`
            text-sm tracking-wide transition
            ${
              isActive
                ? "text-[#F5C16C] font-semibold"
                : "text-slate-300 hover:text-[#F5C16C]"
            }
          `}
        >
          {link.label}
        </Link>
      </li>
    );
  });
};
