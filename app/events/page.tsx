import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events & Tournaments",
  description:
    "View upcoming pool tournaments, snooker tournaments, coaching camps and special events at Q Billiards Arena in Houston.",
};

const calendarEmbedUrl =
  "https://calendar.google.com/calendar/embed?height=700&wkst=1&ctz=America%2FChicago&showPrint=0&showTabs=1&showCalendars=0&showTz=0&showTitle=0&src=2de3b8906372871e3e4bf48a060b5eba82a0262a0729f56e0cb2dc044a8a9c3d%40group.calendar.google.com";

const addCalendarUrl =
  "https://calendar.google.com/calendar/u/0?cid=2de3b8906372871e3e4bf48a060b5eba82a0262a0729f56e0cb2dc044a8a9c3d%40group.calendar.google.com";

export default function EventsPage() {
  return (
    <main className="bg-[#08080a] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <p className="font-black uppercase tracking-[0.25em] text-yellow-400">
            Q Billiards Arena
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Events & Tournaments
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Check our official schedule for pool tournaments, snooker events,
            coaching camps and special nights at Q Billiards Arena.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={addCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-yellow-400 px-6 py-3 font-black text-black transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              Add Q Events Calendar
            </a>

            <a
              href="tel:+17134988813"
              className="rounded-xl border-2 border-white px-6 py-3 font-bold text-white transition hover:bg-white hover:text-black"
            >
              Call About an Event
            </a>
          </div>
        </div>
      </section>

      {/* EVENT TYPES */}
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-3xl">🎱</div>
            <h2 className="mt-4 text-xl font-black">Pool Tournaments</h2>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Weekly competitions and special pool events.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-3xl">🔴</div>
            <h2 className="mt-4 text-xl font-black">Snooker Events</h2>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              One-Red tournaments, championships and practice events.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-3xl">🏆</div>
            <h2 className="mt-4 text-xl font-black">Special Events</h2>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Championships, exhibitions and community nights.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-3xl">🎓</div>
            <h2 className="mt-4 text-xl font-black">Coaching Camps</h2>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Coaching sessions and camps for adults and children.
            </p>
          </article>
        </div>
      </section>

      {/* GOOGLE CALENDAR */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="font-black uppercase tracking-[0.2em] text-yellow-400">
              Official Live Schedule
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              What&apos;s Happening at Q?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
              Events added to the Q Billiards Google Calendar will appear here
              automatically.
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
            Event times may change. Please check the latest calendar details or
            call the club before traveling for a special event.
          </p>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-xl border border-yellow-400 px-6 py-3 font-black text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
            >
              Contact Q Billiards
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}