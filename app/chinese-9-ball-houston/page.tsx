import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  CircleDot,
  Clock3,
  MapPin,
  Phone,
  Sparkles,
  Trophy,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Chinese 9-Ball in Houston | Q Billiards Arena",
  description:
    "Play Chinese 9-ball in Houston at Q Billiards Arena. Enjoy professional nine-foot Chinese pool tables, late-night hours, food, drinks and upcoming tournaments.",
  alternates: {
    canonical: "/chinese-9-ball-houston",
  },
};

const features = [
  {
    icon: CircleDot,
    title: "Professional 9-Foot Tables",
    description:
      "Play on professional Chinese 9-ball tables designed for challenging, competitive cue-sports action.",
  },
  {
    icon: Sparkles,
    title: "Unique Playing Experience",
    description:
      "Chinese 9-ball combines precision, cue-ball control and demanding pocket conditions for serious players.",
  },
  {
    icon: Trophy,
    title: "Tournaments Coming Soon",
    description:
      "Chinese 9-ball tournaments are being planned at Q Billiards Arena, with dates and entry details coming soon.",
  },
  {
    icon: Clock3,
    title: "Open Late",
    description:
      "Play until 2 AM Sunday through Thursday and until 4 AM Friday and Saturday.",
  },
];

export default function ChineseNineBallHoustonPage() {
  return (
    <main className="bg-[#0b0b0d] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="font-black uppercase tracking-[0.25em] text-yellow-400">
            Chinese Pool in Houston
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Chinese 9-Ball in Houston
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Experience one of cue sports&apos; most demanding disciplines at
            Q Billiards Arena. Our professional Chinese 9-ball tables offer
            tight rounded pockets, fast competition and a unique playing
            experience for Houston players.
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
              View Games & Rates
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[0.25em] text-yellow-400">
              A different kind of pool
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Why Play Chinese 9-Ball at Q Billiards?
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Chinese 9-ball rewards accurate cue-ball control, precise
              pocketing and disciplined pattern play. It is ideal for players
              looking for a more demanding challenge than traditional
              American pool.
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

      {/* GAME INFORMATION */}
      <section className="bg-white px-6 py-20 text-black">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-yellow-600">
              The game
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              What Makes Chinese 9-Ball Different?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Chinese 9-ball is played on a nine-foot table with rounded,
              snooker-style pockets. The pocket shape and table conditions
              demand greater accuracy, controlled speed and careful position
              play.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              The format is popular with competitive players because it blends
              the strategy and rotation of 9-ball with the technical challenge
              of tighter pockets.
            </p>
          </div>

          <div className="rounded-3xl bg-black p-8 text-white shadow-xl md:p-10">
            <h3 className="text-3xl font-black">Great for Players Who Enjoy</h3>

            <div className="mt-7 space-y-5 text-lg text-gray-300">
              <p>✓ Tight-pocket competition</p>
              <p>✓ Accurate cue-ball positioning</p>
              <p>✓ Rotation-style pattern play</p>
              <p>✓ Snooker-style pocket difficulty</p>
              <p>✓ Competitive practice and match play</p>
            </div>

            <Link
              href="/contact"
              className="mt-9 inline-block rounded-xl bg-yellow-400 px-7 py-4 font-black text-black transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              Contact the Club
            </Link>
          </div>
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-yellow-400">
              Coming soon
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Chinese 9-Ball Tournaments
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Q Billiards Arena plans to host Chinese 9-ball tournaments for
              Houston-area players. Dates, formats, entry fees and prize
              information will be announced as events are scheduled.
            </p>

            <div className="mt-8 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
              <div className="flex items-center gap-3">
                <CalendarDays className="text-yellow-400" size={26} />

                <p className="text-xl font-black text-yellow-400">
                  Tournament Schedule Coming Soon
                </p>
              </div>
            </div>

            <Link
              href="/tournaments"
              className="mt-8 inline-block rounded-xl bg-yellow-400 px-7 py-4 font-black text-black transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              View Tournament Schedule
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <Trophy className="text-yellow-400" size={44} />

            <h3 className="mt-6 text-3xl font-black">
              Players of Different Skill Levels Welcome
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              Whether you are new to Chinese 9-ball or already compete
              regularly, Q Billiards Arena provides a dedicated Houston venue
              where you can practice, challenge other players and prepare for
              future tournaments.
            </p>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-gray-100 px-6 py-20 text-black">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-yellow-600">
              Play Chinese 9-ball in Houston
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Visit Q Billiards Arena
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
            Looking for Chinese 9-Ball in Houston?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8">
            Visit Q Billiards Arena for professional Chinese pool tables,
            late-night playing hours, food, drinks and upcoming tournaments.
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