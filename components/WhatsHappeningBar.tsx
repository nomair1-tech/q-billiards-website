export default function WhatsHappeningBar() {
  const announcements = [
    "🎱 FREE POOL with Equal Purchase",
    "🏆 Thursday 1 Red Snooker Tournament • Every Thursday • 8:30 PM",
    "🎱 Professional Snooker Coaching Available",
    "♠️ Private Poker Room Rentals Available",
    "🥤 BYOB • Open Late Until 2 AM (4 AM Fri & Sat)",
    "📍 Q Billiards Arena • Houston's Largest Billiards Club",
  ];

  const tickerText = announcements.join("     •     ");

  return (
    <div className="ticker-mask relative z-[60] overflow-hidden bg-black py-3 text-white">
      <div className="q-ticker flex w-max items-center whitespace-nowrap">
        <span className="px-8 text-sm font-semibold tracking-wide sm:text-base">
          {tickerText}
        </span>

        <span
          aria-hidden="true"
          className="px-8 text-sm font-semibold tracking-wide sm:text-base"
        >
          {tickerText}
        </span>

        <span
          aria-hidden="true"
          className="px-8 text-sm font-semibold tracking-wide sm:text-base"
        >
          {tickerText}
        </span>
      </div>
    </div>
  );
}