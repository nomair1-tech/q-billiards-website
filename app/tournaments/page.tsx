import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  CircleDollarSign,
  CircleDot,
  Phone,
  Spade,
  Trophy,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tournaments & Events | Q Billiards Arena",
  description:
    "Join weekly pool, snooker, poker and Chinese 9-ball tournaments at Q Billiards Arena in Houston.",
};

const weeklyEvents = [
  {
    icon: CircleDot,
    category: "Weekly Pool Tournament",
    title: "Tuesday Night Pool Tournament",
    day: "Every Tuesday",
    time: "9:00 PM",
    price: "$10 Entry",
    description:
      "Join Houston-area pool players every Tuesday night for affordable, competitive tournament action.",
  },
  {
    icon: CircleDot,
    category: "Weekly Pool Tournament",
    title: "Friday Night Pool Tournament",
    day: "Every Friday",
    time: "9:00 PM",
    price: "$10 Entry",
    description:
      "Start your weekend with competitive pool, a welcoming atmosphere and late-night entertainment.",
  },
  {
    icon: Trophy,
    category: "Weekly Snooker Tournament",
    title: "1-Red Snooker Tournament",
    day: "Every Thursday",
    time: "Contact Club",
    price: "$20 Entry",
    description:
      "A fast and exciting weekly 1-Red Snooker Tournament for Houston snooker players.",
  },
];

const upcomingEvents = [
  {
    icon: Spade,
    title: "Poker Tournaments",
    schedule: "Starting August 2026",
    price: "$20 Buy-In",
    description:
      "Regular poker tournaments are beginning next month. Contact the club for the first tournament date, format and registration details.",
  },
  {
    icon: CircleDot,
    title: "Chinese 9-Ball Tournaments",
    schedule: "Starting Soon",
    price: "Details Coming Soon",
    description:
      "Competitive Chinese 9-ball tournaments are coming to Q Billiards Arena. Dates, entry fees and formats will be announced soon.",
  },
];

export default function TournamentsPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,197,24,0.18),transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="font-black uppercase tracking-[0.25em] text-yellow-400">
            Weekly Competition in Houston
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Tournaments & Events
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Compete in weekly pool and snooker tournaments, upcoming poker
            tournaments and future Chinese 9-ball events at Q Billiards Arena.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="tel:+17134988813"
              className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-black text-black transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              <Phone size={20} />
              Call to Register
            </a>

            <Link
              href="/contact"
              className="rounded-xl border-2 border-white px-7 py-4 font-bold text-white transition hover:bg-white hover:text-black"
            >
              Contact the Club
            </Link>
          </div>
        </div>
      </section>

      {/* WEEKLY TOURNAMENTS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[0.25em] text-yellow-400">
              Every Week
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Weekly Tournament Schedule
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Affordable weekly tournaments for pool and snooker players of
              different skill levels.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {weeklyEvents.map((event) => {
              const Icon = event.icon;

              return (
                <article
                  key={event.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-400/60 hover:bg-white/[0.07]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black transition group-hover:scale-110">
                    <Icon size={28} strokeWidth={2.5} />
                  </div>

                  <p className="mt-6 text-sm font-black uppercase tracking-[0.2em] text-yellow-400">
                    {event.category}
                  </p>

                  <h3 className="mt-3 text-3xl font-black">{event.title}</h3>

                  <p className="mt-5 leading-7 text-gray-400">
                    {event.description}
                  </p>

                  <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-3">
                      <CalendarDays size={20} className="text-yellow-400" />
                      <span className="font-bold">{event.day}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock3 size={20} className="text-yellow-400" />
                      <span className="font-bold">{event.time}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CircleDollarSign
                        size={20}
                        className="text-yellow-400"
                      />
                      <span className="font-black">{event.price}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="bg-white px-6 py-20 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[0.25em] text-yellow-600">
              Coming Soon
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              More Events Are on the Way
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Q Billiards Arena is expanding its tournament schedule with poker
              and Chinese 9-ball events.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {upcomingEvents.map((event) => {
              const Icon = event.icon;

              return (
                <article
                  key={event.title}
                  className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-yellow-400">
                    <Icon size={28} strokeWidth={2.5} />
                  </div>

                  <h3 className="mt-6 text-3xl font-black">{event.title}</h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {event.description}
                  </p>

                  <div className="mt-7 rounded-2xl bg-yellow-400 p-5 text-black">
                    <p className="font-black">{event.schedule}</p>
                    <p className="mt-1 font-semibold">{event.price}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* NOTICE */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-yellow-400/40 bg-yellow-400/10 p-10 text-center md:p-14">
          <Trophy className="mx-auto text-yellow-400" size={48} />

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            More Events Will Be Added
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Tournament formats, start times and availability may change. Please
            call Q Billiards Arena before arriving to confirm the latest
            details.
          </p>

          <a
            href="tel:+17134988813"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-4 text-lg font-black text-black transition hover:-translate-y-1 hover:bg-yellow-300"
          >
            <Phone size={20} />
            Call 713-498-8813
          </a>
        </div>
      </section>
    </main>
  );
}