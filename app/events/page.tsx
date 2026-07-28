import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events & Tournaments | Q Billiards Arena Houston",
  description:
    "Discover upcoming snooker coaching camps, weekly pool tournaments, one-red snooker events and monthly competitions at Q Billiards Arena in Houston.",
};

const featuredEvents = [
  {
    title: "One Red Snooker Tournament",
    date: "Thursday, July 30, 2026",
    time: "8:30 PM",
    image: "/events/QbiliardsArena-one-red-snooker-tournament.png",
    imageAlt:
      "One Red Snooker Tournament at Q Billiards Arena in Houston, Texas",
    badge: "This Thursday",
    badgeStyle: "bg-red-600 text-white",
    accentStyle: "text-red-400",
    borderStyle: "hover:border-red-500/60",
    description:
      "Only one red followed by the colors. This fast, unforgiving format is open to both pool players and snooker players.",
    registrationText: "Call to Register",
    registrationLink: "tel:+17134988813",
  },
  {
    title: "Snooker Coaching Camp",
    date: "August 2 and August 9, 2026",
    time: "4:00 PM – 6:00 PM",
    image: "/events/qbilliards-Snooker-Coaching-camp.jpg",
    imageAlt:
      "Snooker coaching camp for adults and children at Q Billiards Arena",
    badge: "Registration Open",
    badgeStyle: "bg-green-500 text-black",
    accentStyle: "text-green-400",
    borderStyle: "hover:border-green-500/60",
    description:
      "Introductory coaching sessions for amateur adults and players under 18. Learn the fundamentals, improve your technique and enjoy the game.",
    registrationText: "Register on WhatsApp",
    registrationLink:
      "https://wa.me/17134988813?text=Hello%20Q%20Billiards%2C%20I%20would%20like%20to%20register%20for%20the%20Snooker%20Coaching%20Camp.",
  },
];

const weeklyEvents = [
  {
    title: "Tuesday Night Pool Tournament",
    day: "Every Tuesday",
    time: "9:00 PM",
    entry: "$10 Entry",
    category: "American Pool",
    description:
      "A competitive weekly pool tournament open to Houston-area players of all skill levels.",
  },
  {
    title: "One Red Snooker Tournament",
    day: "Every Thursday",
    time: "8:30 PM",
    entry: "$20 Entry",
    category: "Snooker",
    description:
      "One red, six colors and no room for mistakes. Join Houston’s exciting weekly cutthroat snooker competition.",
  },
  {
    title: "Friday Night Pool Tournament",
    day: "Every Friday",
    time: "9:00 PM",
    entry: "$10 Entry",
    category: "American Pool",
    description:
      "Start your weekend with competitive pool, skilled players and exciting matches at Q Billiards Arena.",
  },
];

const monthlyEvents = [
  {
    title: "Monthly Open Pool Championship",
    schedule: "Date Announced Monthly",
    time: "Start Time Announced Soon",
    entry: "Entry Fee Announced Soon",
    description:
      "A larger monthly pool competition featuring an expanded player field, increased prize money and competitive match formats.",
  },
  {
    title: "Monthly Snooker Championship",
    schedule: "Date Announced Monthly",
    time: "Start Time Announced Soon",
    entry: "Entry Fee Announced Soon",
    description:
      "A special monthly snooker competition featuring Houston-area players and longer competitive match formats.",
  },
  {
    title: "Chinese 9-Ball Tournament",
    schedule: "Coming Soon",
    time: "Schedule Announced Soon",
    entry: "Entry Fee Announced Soon",
    description:
      "Compete on our professional nine-foot Chinese 9-ball tables with rounded pockets and tournament-style playing conditions.",
  },
  {
    title: "Poker Tournament",
    schedule: "Monthly Event",
    time: "Schedule Announced Soon",
    entry: "$20 Buy-In",
    description:
      "Join our monthly poker tournament inside the Q Billiards private poker room. Seating is limited.",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.16),_transparent_48%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center sm:py-24">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-yellow-400">
            Q Billiards Arena Houston
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Events & Tournaments
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            Join weekly pool tournaments, one-red snooker competitions,
            coaching camps, poker events and special monthly championships at
            Q Billiards Arena.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+17134988813"
              className="rounded-full bg-yellow-400 px-7 py-3 font-black text-black transition hover:bg-yellow-300"
            >
              Call 713-498-8813
            </a>

            <a
              href="https://wa.me/17134988813"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-green-400 px-7 py-3 font-black text-green-400 transition hover:bg-green-400 hover:text-black"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Featured Upcoming Events */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
            Happening Soon
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Featured Upcoming Events
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-neutral-400">
            View our latest event flyers and reserve your place before
            registration fills up.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {featuredEvents.map((event) => {
            const isExternal = event.registrationLink.startsWith("http");

            return (
              <article
                key={event.title}
                className={`overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl transition duration-300 hover:-translate-y-1 ${event.borderStyle}`}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                  <Image
                    src={event.image}
                    alt={event.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                    priority
                  />

                  <div className="absolute left-5 top-5">
                    <span
                      className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider shadow-lg ${event.badgeStyle}`}
                    >
                      {event.badge}
                    </span>
                  </div>
                </div>

                <div className="p-7 sm:p-8">
                  <p
                    className={`text-sm font-black uppercase tracking-wider ${event.accentStyle}`}
                  >
                    {event.date}
                  </p>

                  <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                    {event.title}
                  </h3>

                  <div className="mt-5 grid gap-4 border-y border-white/10 py-5 sm:grid-cols-2">
                    <div>
                      <p className="text-sm text-neutral-500">Date</p>
                      <p className="mt-1 font-bold">{event.date}</p>
                    </div>

                    <div>
                      <p className="text-sm text-neutral-500">Start Time</p>
                      <p className="mt-1 font-bold">{event.time}</p>
                    </div>
                  </div>

                  <p className="mt-5 leading-7 text-neutral-300">
                    {event.description}
                  </p>

                  <a
                    href={event.registrationLink}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="mt-7 inline-flex w-full justify-center rounded-xl bg-yellow-400 px-6 py-3 font-black text-black transition hover:bg-yellow-300"
                  >
                    {event.registrationText}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Weekly Events */}
      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-green-400">
              Recurring Schedule
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Weekly Events
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-neutral-400">
              Our weekly tournaments are open to new and experienced players.
              Arrive early to register and warm up before the event begins.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {weeklyEvents.map((event) => (
              <article
                key={event.title}
                className="flex flex-col rounded-3xl border border-white/10 bg-neutral-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-green-500/50"
              >
                <div className="mb-5">
                  <span className="rounded-full bg-green-500/15 px-4 py-2 text-xs font-black uppercase tracking-wider text-green-400">
                    {event.category}
                  </span>
                </div>

                <h3 className="text-2xl font-black">{event.title}</h3>

                <div className="mt-6 space-y-3 border-y border-white/10 py-5 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-neutral-400">Schedule</span>
                    <span className="text-right font-bold">{event.day}</span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-neutral-400">Start Time</span>
                    <span className="text-right font-bold">{event.time}</span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-neutral-400">Registration</span>
                    <span className="text-right font-bold text-green-400">
                      {event.entry}
                    </span>
                  </div>
                </div>

                <p className="mt-5 flex-1 leading-7 text-neutral-300">
                  {event.description}
                </p>

                <a
                  href="tel:+17134988813"
                  className="mt-7 inline-flex justify-center rounded-xl bg-white px-5 py-3 font-black text-black transition hover:bg-green-400"
                >
                  Call for Details
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Events */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
            Bigger Competitions
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Monthly & Special Events
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-neutral-400">
            Dates, formats and prize funds for special events are announced on
            our website and social media pages.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {monthlyEvents.map((event) => (
            <article
              key={event.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-yellow-400/40"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                    Monthly Event
                  </p>

                  <h3 className="mt-2 text-2xl font-black">{event.title}</h3>
                </div>

                <span className="w-fit rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300">
                  {event.entry}
                </span>
              </div>

              <p className="mt-5 leading-7 text-neutral-300">
                {event.description}
              </p>

              <div className="mt-6 grid gap-3 border-t border-white/10 pt-5 text-sm sm:grid-cols-2">
                <div>
                  <p className="text-neutral-500">Schedule</p>
                  <p className="mt-1 font-bold">{event.schedule}</p>
                </div>

                <div>
                  <p className="text-neutral-500">Start Time</p>
                  <p className="mt-1 font-bold">{event.time}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tournament Information */}
      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 rounded-3xl border border-yellow-400/20 bg-yellow-950/10 p-8 lg:grid-cols-[1.3fr_0.7fr] lg:p-12">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                Before You Arrive
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Tournament Information
              </h2>

              <ul className="mt-6 space-y-3 text-neutral-300">
                <li>• Events are open to local pool and snooker players.</li>
                <li>• Registration may close when the field is full.</li>
                <li>• Players should arrive before the listed start time.</li>
                <li>• Formats and prize funds may vary by event.</li>
                <li>• Follow Q Billiards for schedule changes and updates.</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-black/40 p-7">
              <h3 className="text-xl font-black">Host an Event at Q</h3>

              <p className="mt-4 leading-7 text-neutral-300">
                Interested in hosting a league, private tournament, corporate
                gathering, coaching camp or poker night? Contact our team to
                discuss availability.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex w-full justify-center rounded-xl bg-yellow-400 px-6 py-3 font-black text-black transition hover:bg-yellow-300"
              >
                Contact Q Billiards
              </Link>

              <a
                href="https://www.google.com/maps/search/?api=1&query=10500+W+Belfort+Ave+Unit+200+Houston+TX+77031"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full justify-center rounded-xl border border-white/20 px-6 py-3 font-black transition hover:border-yellow-400 hover:text-yellow-400"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}