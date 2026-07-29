"use client";

import Link from "next/link";

const announcements = [
  {
    icon: "🎱",
    label: "Tonight",
    text: "1-Red Snooker Tournament — 8:30 PM",
    href: "/events",
  },
  {
    icon: "🍗",
    label: "Food Special",
    text: "Wings and Fries Available Tonight",
    href: "/menu",
  },
  {
    icon: "🥤",
    label: "Drink Special",
    text: "Cold Coffee — $6.99",
    href: "/menu",
  },
  {
    icon: "🔥",
    label: "Promotion",
    text: "Free Pool With Equal Purchase",
    href: "/games",
  },
];

export default function WhatsHappeningBar() {
  const tickerItems = [...announcements, ...announcements];

  return (
    <div className="sticky top-0 z-[100] overflow-hidden border-b border-yellow-300/40 bg-black text-white shadow-[0_0_25px_rgba(250,204,21,0.25)]">
      <div className="relative flex min-h-14 items-stretch">
        {/* FIXED LIVE LABEL */}
        <div className="relative z-20 flex shrink-0 items-center gap-2 bg-gradient-to-r from-red-700 via-red-600 to-red-700 px-3 sm:px-5">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
          </span>

          <span className="text-xs font-black uppercase tracking-[0.18em] sm:text-sm">
            Live
          </span>

          <div className="absolute right-[-16px] top-0 h-full w-8 skew-x-[-18deg] bg-red-700" />
        </div>

        {/* FIXED TITLE */}
        <div className="relative z-10 hidden shrink-0 items-center bg-yellow-400 px-7 text-black md:flex">
          <span className="animate-pulse whitespace-nowrap text-sm font-black uppercase tracking-[0.16em]">
            What&apos;s Happening at Q Tonight
          </span>

          <div className="absolute right-[-16px] top-0 h-full w-8 skew-x-[-18deg] bg-yellow-400" />
        </div>

        {/* SCROLLING CONTENT */}
        <div className="ticker-mask flex min-w-0 flex-1 items-center overflow-hidden bg-gradient-to-r from-neutral-950 via-black to-neutral-950">
          <div className="q-ticker flex w-max items-center whitespace-nowrap py-2">
            {tickerItems.map((item, index) => (
              <Link
                key={`${item.text}-${index}`}
                href={item.href}
                className="group mx-3 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <span className="text-xl transition group-hover:scale-125">
                  {item.icon}
                </span>

                <span className="text-xs font-black uppercase tracking-wider text-yellow-400 group-hover:text-black">
                  {item.label}
                </span>

                <span className="text-sm font-bold">{item.text}</span>

                <span className="text-yellow-400 group-hover:text-black">➜</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}