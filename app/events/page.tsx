import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events, Coaching & Tournaments | Q Billiards Arena",
  description:
    "View upcoming coaching camps, One-Red snooker tournaments and the official Q Billiards Arena event calendar.",
};

const calendarEmbedUrl =
  "https://calendar.google.com/calendar/embed?height=700&wkst=1&ctz=America%2FChicago&showPrint=0&showTabs=1&showCalendars=0&showTz=0&showTitle=0&src=2de3b8906372871e3e4bf48a060b5eba82a0262a0729f56e0cb2dc044a8a9c3d%40group.calendar.google.com";

const addCalendarUrl =
  "https://calendar.google.com/calendar/u/0?cid=2de3b8906372871e3e4bf48a060b5eba82a0262a0729f56e0cb2dc044a8a9c3d%40group.calendar.google.com";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#08080a] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <p className="font-black uppercase tracking-[0.25em] text-yellow-400">
            Q Billiards Arena
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Events, Coaching & Tournaments
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            View our featured events, register online and check the official
            live schedule for Q Billiards Arena.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#featured-events"
              className="rounded-xl bg-yellow-400 px-6 py-3 font-black text-black transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              View Featured Events
            </a>

            <a
              href={addCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border-2 border-white px-6 py-3 font-bold transition hover:bg-white hover:text-black"
            >
              Add Q Events Calendar
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section id="featured-events" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="font-black uppercase tracking-[0.2em] text-yellow-400">
              Register Now
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Featured Events at Q
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
              Select an event below to open its registration page.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* COACHING CAMP */}
            <article className="overflow-hidden rounded-3xl border border-yellow-400/30 bg-[#151517] shadow-[0_0_40px_rgba(250,204,21,0.12)]">
              <div className="relative aspect-[4/5] w-full bg-black">
                <Image
                  src="/images/qbilliards-Snooker-Coaching-camp.jpg"
                  alt="Q Billiards Arena snooker coaching camp"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>

              <div className="p-7 sm:p-9">
                <p className="font-black uppercase tracking-[0.2em] text-yellow-400">
                  Coaching Registration
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Snooker Coaching Camp
                </h2>

                <p className="mt-4 leading-7 text-gray-300">
                  Coaching sessions for children and developing players who
                  want to improve cue action, positioning, safety play and match
                  confidence.
                </p>

                <Link
                  href="/events/coaching-registration"
                  className="mt-7 block rounded-xl bg-yellow-400 px-6 py-4 text-center font-black text-black transition hover:-translate-y-1 hover:bg-yellow-300"
                >
                  Register for Coaching Camp
                </Link>
              </div>
            </article>

            {/* ONE-RED TOURNAMENT */}
            <article className="overflow-hidden rounded-3xl border border-red-500/30 bg-[#151517] shadow-[0_0_40px_rgba(239,68,68,0.12)]">
              <div className="relative aspect-[4/5] w-full bg-black">
                <Image
                  src="/images/QbiliardsArena-one-red-snooker-tournament.png"
                  alt="Q Billiards Arena weekly One-Red snooker tournament"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>

              <div className="p-7 sm:p-9">
                <p className="font-black uppercase tracking-[0.2em] text-red-400">
                  Weekly Competition
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  One-Red Snooker Tournament
                </h2>

                <p className="mt-4 leading-7 text-gray-300">
                  One red, six colors and almost no room for mistakes. Open to
                  pool players, snooker players and anyone ready to compete.
                </p>

                <Link
                  href="/events/tournament-registration"
                  className="mt-7 block rounded-xl bg-red-600 px-6 py-4 text-center font-black text-white transition hover:-translate-y-1 hover:bg-red-500"
                >
                  Register for the Tournament
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* GOOGLE CALENDAR */}
      <section className="border-t border-white/10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="font-black uppercase tracking-[0.2em] text-yellow-400">
              Official Live Schedule
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              What&apos;s Happening at Q?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
              Events added to the official Q Billiards Google Calendar appear
              here automatically.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-yellow-400/30 bg-white shadow-[0_0_35px_rgba(250,204,21,0.14)]">
            <iframe
              title="Q Billiards Arena official events calendar"
              src={calendarEmbedUrl}
              width="100%"
              height="700"
              loading="lazy"
              className="block min-h-[700px] w-full border-0"
            />
          </div>

          <p className="mt-5 text-center text-sm leading-6 text-gray-400">
            Event dates and times may change. Check the calendar or call the
            club before traveling for a special event.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+17134988813"
              className="rounded-xl bg-yellow-400 px-6 py-3 font-black text-black transition hover:bg-yellow-300"
            >
              Call 713-498-8813
            </a>

            <Link
              href="/contact"
              className="rounded-xl border border-yellow-400 px-6 py-3 font-black text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
            >
              Contact Q Billiards
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}