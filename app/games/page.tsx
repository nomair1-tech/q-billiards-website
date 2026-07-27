import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pool and Snooker Rates in Houston",
  description:
    "Explore Q Billiards Arena pricing for American pool, standard and heated snooker, Chinese 9-ball and carom billiards. Competitive hourly rates, free pool promotions and open late in Houston.",

  alternates: {
    canonical: "/games",
  },

  openGraph: {
    title: "Pool and Snooker Rates in Houston | Q Billiards Arena",
    description:
      "Explore hourly pricing for American pool, standard and heated snooker, Chinese 9-ball and carom billiards at Houston's premier billiards club.",
    url: "https://www.qbilliardshtx.com/games",
    type: "website",
    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Q Billiards Arena Houston",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pool and Snooker Rates in Houston | Q Billiards Arena",
    description:
      "See hourly pricing for pool, snooker, Chinese 9-ball and carom billiards at Q Billiards Arena in Houston.",
    images: ["/images/hero/hero.jpg"],
  },
};

const games = [
  {
    name: "American Pool",
    price: "$10 per hour",
    details:
      "Seven-foot and nine-foot pool tables for casual games, practice and competition.",
  },
  {
    name: "Standard Snooker",
    price: "$15 per hour",
    details:
      "Seven full-size snooker tables for recreational and competitive players.",
  },
  {
    name: "Heated Snooker",
    price: "$20 per hour",
    details:
      "Two heated tournament-style snooker tables with consistent playing conditions.",
  },
  {
    name: "Chinese 9-Ball",
    price: "$15 per hour",
    details:
      "Four professional nine-foot Chinese pool tables with rounded pockets.",
  },
  {
    name: "Carom Billiards",
    price: "$15 per hour",
    details:
      "Dedicated carom and three-cushion billiards tables for players of all skill levels.",
  },
];

export default function GamesPage() {
  return (
    <main>
      <section className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.2em] text-yellow-400">
            Tables and rates
          </p>

          <h1 className="mt-3 text-5xl font-black md:text-6xl">
            Games &amp; Pricing
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Play American pool, professional snooker, heated snooker, Chinese
            9-ball and carom billiards at Houston's premier billiards club.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {games.map((game) => (
            <article
              key={game.name}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-2xl">
                🎱
              </div>

              <h2 className="text-3xl font-black">{game.name}</h2>

              <p className="mt-3 text-2xl font-black text-yellow-600">
                {game.price}
              </p>

              <p className="mt-5 leading-7 text-gray-600">
                {game.details}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-yellow-400 p-8 text-black">
          <h2 className="text-3xl font-black">
            Free Pool with Equal Purchase
          </h2>

          <p className="mt-3 max-w-3xl leading-7">
            Enjoy free American pool with equal purchase on participating tables.
            Ask our staff for today's promotion details, current pricing and
            availability.
          </p>
        </div>
      </section>
    </main>
  );
}