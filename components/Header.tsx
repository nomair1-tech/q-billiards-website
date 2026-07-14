"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Games", href: "/games" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Poker Room", href: "/poker-room" },
  { name: "Tournaments", href: "/tournaments" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 text-white shadow-lg backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 text-xl font-black text-black">
            Q
          </div>

          <div>
            <p className="text-lg font-black leading-none tracking-wide md:text-xl">
              Q BILLIARDS
            </p>

            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-400">
              Arena Houston
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-gray-200 transition hover:text-yellow-400"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+17134988813"
            className="hidden items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-black text-black transition hover:bg-yellow-300 sm:flex"
          >
            <Phone size={17} />
            Call Now
          </a>

          <a
            href="tel:+17134988813"
            aria-label="Call Q Billiards Arena"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black sm:hidden"
          >
            <Phone size={20} />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 lg:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-5 py-5 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-bold text-gray-200 transition hover:bg-white/5 hover:text-yellow-400"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mx-auto mt-4 max-w-7xl">
            <a
              href="https://www.google.com/maps/search/?api=1&query=10500+W+Belfort+Ave+Unit+200+Houston+TX+77031"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-yellow-400 px-5 py-3 text-center font-black text-yellow-400"
            >
              Get Directions
            </a>
          </div>
        </div>
      )}
    </header>
  );
}