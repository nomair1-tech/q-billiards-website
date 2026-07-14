import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  Flame,
  MapPin,
  Phone,
  Trophy,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Snooker Club in Houston | Q Billiards Arena",
  description:
    "Looking for snooker in Houston? Q Billiards Arena offers nine full-size snooker tables, including two heated tables, weekly tournaments, food, drinks and late-night play.",
  alternates: {
    canonical: "/snooker-houston",
  },
};

const features = [
  {
    icon: Trophy,
    title: "Nine Snooker Tables",
    description:
      "Play on seven standard full-size snooker tables and two premium heated snooker tables.",
  },
  {
    icon: Flame,
    title: "Heated Snooker Tables",
    description:
      "Our heated tables provide more consistent playing conditions for practice and competitive matches.",
  },
  {
    icon: CalendarDays,
    title: "Weekly Snooker Events",
    description:
      "Join our weekly Thursday 1-Red Snooker Tournament with a $20 entry fee.",
  },
  {
    icon: Clock3,
    title: "Open Late",
    description:
      "Play until 2 AM Sunday through Thursday and until 4 AM on Friday and Saturday.",
  },
];

export default function SnookerHoustonPage() {
  return (
    <main className="bg-[#0b0b0d] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="font-black uppercase tracking-[0.25em] text-yellow-400">
            Houston Snooker Destination
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Snooker Club in Houston
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Q Billiards Arena offers one of Houston&apos;s largest selections
            of full-size snooker tables, with seven standard tables, two heated
            tables, weekly competition and late-night playing hours.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="tel:+17134988813"
              className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-black text-black transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              <Phone size={20} />
              Call for Availability
            </a>

            <Link
              href="/games"
              className="rounded-xl border-2 border-white px-7 py-4 font-bold text-white transition hover:bg-white hover:text-black"
            >
              View Rates
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[0.25em] text-yellow-400">
              Serious tables for serious players
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Why Houston Snooker Players Choose Q Billiards
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Whether you are learning the game, practicing your break-building
              or preparing for competition, our club gives you the space and
              equipment to play properly.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-2 hover:border-yellow-400/60 hover:bg-white/[0.07]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black transition group-hover:scale-110">
                    <Icon size={28} strokeWidth={2.5} />
                  </div>

                  <h3 className="mt-6 text-2xl font-black">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TABLE RATES */}
      <section className="bg-white px-6 py-20 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[0.25em] text-yellow-600">
              Snooker pricing
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Choose Your Table
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <article className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-600">
                Seven Tables Available
              </p>

              <h3 className="mt-3 text-3xl font-black">Standard Snooker</h3>

              <p className="mt-4 text-4xl font-black">$15/hour</p>

              <p className="mt-5 leading-7 text-gray-600">
                Full-size snooker tables for casual games, regular practice and
                competitive matches.
              </p>
            </article>

            <article className="rounded-3xl bg-black p-8 text-white shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">
                Two Premium Tables
              </p>

              <h3 className="mt-3 text-3xl font-black">Heated Snooker</h3>

              <p className="mt-4 text-4xl font-black text-yellow-400">
                $20/hour
              </p>

              <p className="mt-5 leading-7 text-gray-300">
                Heated tournament-style tables designed to provide more
                consistent cloth and playing conditions.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* TOURNAMENT */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-yellow-400">
              Weekly competition
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Thursday 1-Red Snooker Tournament
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Join Houston-area snooker players every Thursday for a fast,
              exciting 1-Red Snooker Tournament. The entry fee is $20. Contact
              the club to confirm the start time and current tournament format.
            </p>

            <div className="mt-8 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
              <p className="text-xl font-black text-yellow-400">
                Every Thursday
              </p>

              <p className="mt-2 text-lg font-bold">$20 Entry</p>
            </div>

            <Link
              href="/tournaments"
              className="mt-8 inline-block rounded-xl bg-yellow-400 px-7 py-4 font-black text-black transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              View All Tournaments
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <h3 className="text-3xl font-black">Built for Every Skill Level</h3>

            <div className="mt-7 space-y-5 text-gray-300">
              <p>✓ Casual and recreational snooker</p>
              <p>✓ Serious practice sessions</p>
              <p>✓ Competitive match play</p>
              <p>✓ Weekly tournament experience</p>
              <p>✓ Local and visiting players welcome</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-gray-100 px-6 py-20 text-black">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-yellow-600">
              Visit our Houston snooker club
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Q Billiards Arena
            </h2>

            <div className="mt-8 flex gap-4">
              <MapPin className="mt-1 shrink-0 text-yellow-600" size={30} />

              <address className="not-italic text-lg leading-8">
                10500 W Belfort Ave, Unit 200
                <br />
                Houston, TX 77031
              </address>
            </div>

            <div className="mt-8 border-l-4 border-yellow-400 pl-5">
              <p className="font-black">Sunday–Thursday</p>
              <p className="text-gray-600">5 PM–2 AM</p>

              <p className="mt-4 font-black">Friday–Saturday</p>
              <p className="text-gray-600">5 PM–4 AM</p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=10500+W+Belfort+Ave+Unit+200+Houston+TX+77031"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-xl bg-black px-7 py-4 font-black text-white transition hover:-translate-y-1"
            >
              Get Directions
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
            <iframe
              title="Q Billiards Arena Houston location"
              src="https://www.google.com/maps?q=10500%20W%20Belfort%20Ave%20Unit%20200%20Houston%20TX%2077031&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-yellow-400 p-10 text-center text-black md:p-14">
          <h2 className="text-4xl font-black md:text-5xl">
            Looking for Snooker in Houston?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8">
            Visit Q Billiards Arena for full-size snooker tables, heated
            tables, late-night play and weekly competition.
          </p>

          <a
            href="tel:+17134988813"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-8 py-4 text-lg font-black text-white transition hover:-translate-y-1"
          >
            <Phone size={20} />
            Call (713) 498-8813
          </a>
        </div>
      </section>
    </main>
  );
}