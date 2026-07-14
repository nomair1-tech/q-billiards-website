import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Link from "next/link";

const games = [
  {
    name: "American Pool",
    price: "$10/hour",
    description:
      "Seven-foot and nine-foot tables for casual play, practice and competition.",
  },
  {
    name: "Standard Snooker",
    price: "$15/hour",
    description:
      "Full-size snooker tables for recreational and competitive players.",
  },
  {
    name: "Heated Snooker",
    price: "$20/hour",
    description:
      "Heated tournament-style tables for consistent playing conditions.",
  },
  {
    name: "Chinese 9-Ball",
    price: "$15/hour",
    description:
      "Professional nine-foot Chinese pool tables with rounded pockets.",
  },
  {
    name: "Carom Billiards",
    price: "$15/hour",
    description:
      "Dedicated carom and three-cushion tables for Houston players.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />

      <WhyChooseUs />

      {/* FREE POOL PROMOTION */}
      <section className="bg-yellow-400 px-6 py-12 text-center text-black">
        <p className="text-sm font-black uppercase tracking-[0.25em]">
          Limited-Time Promotion
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-5xl">
          FREE POOL WITH EQUAL PURCHASE
        </h2>

        <p className="mx-auto mt-4 max-w-3xl font-semibold leading-7">
          Each player must make the required equal purchase. Ask our staff for
          complete promotion details and participating tables.
        </p>
      </section>

      {/* GAMES SECTION */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-yellow-600">
              Tables and pricing
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Something for Every Player
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Whether you are learning, practicing or competing, Q Billiards
              Arena has the right table for your game.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <article
                key={game.name}
                className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-2xl transition group-hover:scale-110">
                  🎱
                </div>

                <h3 className="text-2xl font-black">{game.name}</h3>

                <p className="mt-2 text-lg font-bold text-yellow-600">
                  {game.price}
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                  {game.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/games"
              className="inline-block rounded-xl bg-black px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-gray-800"
            >
              View All Games and Rates
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="bg-[#0b0b0d] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-yellow-400">
              Visit us today
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Q Billiards Arena
            </h2>

            <address className="mt-7 not-italic text-xl leading-9 text-gray-300">
              10500 W Belfort Ave, Unit 200
              <br />
              Houston, TX 77031
            </address>

            <div className="mt-7 border-l-4 border-yellow-400 pl-5">
              <p className="font-bold text-white">Sunday–Thursday</p>
              <p className="text-gray-400">5 PM–2 AM</p>

              <p className="mt-4 font-bold text-white">Friday–Saturday</p>
              <p className="text-gray-400">5 PM–4 AM</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+17134988813"
                className="rounded-xl bg-yellow-400 px-6 py-3 font-black text-black transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                Call 713-498-8813
              </a>

              <a
                href="sms:+17134988813"
                className="rounded-xl border-2 border-white px-6 py-3 font-bold text-white transition hover:bg-white hover:text-black"
              >
                Text Us
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl">
            <iframe
              title="Q Billiards Arena location in Houston"
              src="https://www.google.com/maps?q=10500%20W%20Belfort%20Ave%20Unit%20200%20Houston%20TX%2077031&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </section>
    </main>
  );
}