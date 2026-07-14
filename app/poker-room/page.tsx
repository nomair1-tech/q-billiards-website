import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  Phone,
  Spade,
  Trophy,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Poker Room Rental | Q Billiards Arena",
  description:
    "Rent a private poker room at Q Billiards Arena in Houston. Seating for up to 30 players and perfect for poker tournaments, private games and special events.",
};

const features = [
  {
    icon: Users,
    title: "Seats Up to 30 Players",
    description:
      "A spacious private room that can comfortably accommodate games and tournaments with up to 30 players.",
  },
  {
    icon: Trophy,
    title: "Perfect for Tournaments",
    description:
      "Host private poker tournaments, league nights, celebrations, fundraisers and friendly games.",
  },
  {
    icon: Spade,
    title: "Private Poker Space",
    description:
      "Enjoy a dedicated room away from the main playing floor for a more focused and organized event.",
  },
  {
    icon: CalendarDays,
    title: "Flexible Scheduling",
    description:
      "Contact our team to discuss your preferred date, event length and room requirements.",
  },
];

export default function PokerRoomPage() {
  return (
    <main className="bg-[#0b0b0d] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,197,24,0.18),transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-yellow-400">
              Private Event Space
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
              Poker Room Rental
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-9 text-gray-300">
              Host your next poker tournament, private game or special event in
              a dedicated room that can comfortably seat up to 30 players.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="tel:+17134988813"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-black text-black transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                <Phone size={20} />
                Call to Reserve
              </a>

              <Link
                href="/contact"
                className="rounded-xl border-2 border-white px-7 py-4 font-bold text-white transition hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-400/40 bg-white/[0.05] p-8 shadow-2xl backdrop-blur md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
              Introductory Offer
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Free Room Rental
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-300">
              Take advantage of our special introductory offer and host your
              poker event without a room-rental fee.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-xl bg-yellow-400/10 p-4 text-sm text-yellow-200">
              <CheckCircle2 className="mt-0.5 shrink-0" size={20} />

              <p>
                Restrictions apply. Advance reservation, minimum purchase,
                availability and other promotional conditions may be required.
                Contact Q Billiards Arena for complete details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[0.25em] text-yellow-400">
              Built for your event
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Your Private Poker Destination
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Bring your group, organize the players and enjoy a comfortable
              private space inside Q Billiards Arena.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-2 hover:border-yellow-400/60 hover:bg-white/[0.07]"
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

      {/* EVENT IDEAS */}
      <section className="bg-white px-6 py-20 text-black">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-yellow-600">
              Great for
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              More Than Just a Friendly Game
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              The room works well for organized poker events of many different
              sizes and styles.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Poker tournaments",
              "Private cash games",
              "League nights",
              "Birthday celebrations",
              "Corporate gatherings",
              "Fundraising events",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-gray-200 p-5 font-bold"
              >
                <CheckCircle2 className="text-yellow-600" size={22} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-yellow-400 p-10 text-center text-black md:p-14">
          <p className="font-black uppercase tracking-[0.25em]">
            Reserve your date
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Ready to Host Your Poker Event?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8">
            Call us to check availability and learn about the introductory free
            room-rental offer.
          </p>

          <a
            href="tel:+17134988813"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-black px-8 py-4 text-lg font-black text-white transition hover:-translate-y-1"
          >
            <Phone size={20} />
            Call 713-498-8813
          </a>
        </div>
      </section>
    </main>
  );
}