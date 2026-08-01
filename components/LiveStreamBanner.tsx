import Link from "next/link";

const message =
  "🔴 LIVE NOW AT Q BILLIARDS ARENA — WATCH THE ACTION LIVE — CLICK HERE TO WATCH";

export default function LiveStreamBanner() {
  return (
    <Link
      href="/live"
      aria-label="Watch Q Billiards Arena live stream"
      className="ticker-mask relative z-[60] block overflow-hidden bg-red-700 py-3 text-white transition hover:bg-red-600"
    >
      <div className="q-ticker flex w-max items-center whitespace-nowrap">
        <span className="px-8 text-sm font-bold uppercase tracking-widest sm:text-base">
          {message}
        </span>

        <span
          aria-hidden="true"
          className="px-8 text-sm font-bold uppercase tracking-widest sm:text-base"
        >
          {message}
        </span>

        <span
          aria-hidden="true"
          className="px-8 text-sm font-bold uppercase tracking-widest sm:text-base"
        >
          {message}
        </span>

        <span
          aria-hidden="true"
          className="px-8 text-sm font-bold uppercase tracking-widest sm:text-base"
        >
          {message}
        </span>
      </div>
    </Link>
  );
}