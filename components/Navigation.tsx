"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems, type NavItem } from "@/lib/data";

function DropdownMenu({ items }: { items: NonNullable<NavItem["dropdown"]> }) {
  return (
    <div className="absolute top-full left-0 z-50 min-w-48 bg-white shadow-lg border-t-2 border-pinnacle-amber">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2 text-xs font-work-sans font-bold tracking-widest text-pinnacle-navy hover:bg-slate-bg hover:text-pinnacle-blue transition-colors whitespace-nowrap"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  const toggleMobileSection = (label: string) => {
    setOpenMobileSection((prev) => (prev === label ? null : label));
  };

  return (
    <nav className="bg-white shadow-sm relative z-40">
      {/* Desktop nav */}
      <div className="hidden lg:flex items-center tracking-widest max-w-screen-xl mx-auto px-4">
        {navItems.map((item) =>
          item.dropdown ? (
            <div key={item.label} className="relative group">
              <button className="flex items-center gap-1 px-3 py-3 text-[11px] font-work-sans font-bold text-pinnacle-navy hover:text-pinnacle-amber transition-colors whitespace-nowrap">
                {item.label}
                <svg
                  className="w-3 h-3 transition-transform group-hover:rotate-180"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="hidden group-hover:block">
                <DropdownMenu items={item.dropdown} />
              </div>
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="px-3 py-3 text-[11px] font-work-sans font-bold text-pinnacle-navy hover:text-pinnacle-amber transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          )
        )}
      </div>

      {/* Mobile nav bar */}
      <div className="lg:hidden flex items-center justify-between px-4 py-2">
        <Link href="/" className="text-sm font-work-sans font-bold text-pinnacle-navy">
          PINNACLE MONTESSORI
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="text-pinnacle-amber"
        >
          <h3 className="font-work-sans text-2xl leading-none">☰</h3>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  onClick={() => toggleMobileSection(item.label)}
                  className="w-full flex items-center justify-between px-4 py-3 text-xs font-work-sans font-bold tracking-widest text-pinnacle-navy border-b border-gray-100 hover:bg-slate-bg"
                >
                  {item.label}
                  <svg
                    className={`w-3 h-3 transition-transform ${openMobileSection === item.label ? "rotate-180" : ""}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {openMobileSection === item.label && (
                  <div className="bg-slate-bg">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-8 py-2 text-xs font-work-sans font-bold tracking-widest text-pinnacle-navy hover:text-pinnacle-blue border-b border-gray-200"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-xs font-work-sans font-bold tracking-widest text-pinnacle-navy border-b border-gray-100 hover:bg-slate-bg"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
