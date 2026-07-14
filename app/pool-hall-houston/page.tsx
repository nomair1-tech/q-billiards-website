import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pool Hall in Houston | Q Billiards Arena",
  description:
    "Looking for the best pool hall in Houston? Q Billiards Arena offers professional pool tables, snooker, Chinese 8 Ball, poker room rentals, weekly tournaments, delicious food, and free pool promotions.",
};

export default function PoolHallHoustonPage() {
  return (
    <main className="bg-white text-black">

      {/* Hero */}
      <section className="bg-black py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-5xl font-black md:text-6xl">
            Best Pool Hall in Houston
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-300">
            Welcome to <span className="font-bold text-yellow-400">Q Billiards Arena</span>,
            one of Houston's newest destinations for pool, snooker, Chinese 8 Ball,
            carom billiards, poker events, tournaments, and great food.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <h2 className="mb-8 text-4xl font-black">
          Why Players Choose Q Billiards Arena
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl border p-8 shadow">

            <h3 className="mb-4 text-2xl font-bold">
              Professional Tables
            </h3>

            <ul className="space-y-3 text-lg">
              <li>🎱 American Pool Tables</li>
              <li>🎱 Professional Snooker Tables</li>
              <li>🎱 Chinese 8 Ball Tables</li>
              <li>🎱 Heated Carom Tables</li>
            </ul>

          </div>

          <div className="rounded-2xl border p-8 shadow">

            <h3 className="mb-4 text-2xl font-bold">
              More Than Just Pool
            </h3>

            <ul className="space-y-3 text-lg">
              <li>🍔 Fresh Food Menu</li>
              <li>🥤 Drinks & Refreshments</li>
              <li>♠️ Poker Room Rental</li>
              <li>🏆 Weekly Tournaments</li>
            </ul>

          </div>

        </div>

      </section>

      {/* Free Pool */}

      <section className="bg-yellow-400 py-16">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-5xl font-black">
            FREE Pool Promotion
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9">
            Take advantage of our popular
            <strong> Free Pool with Equal Purchase</strong> promotion.
            It's one of the best values for pool players in Houston and a
            great way to enjoy time with friends while saving money.
          </p>

        </div>

      </section>

      {/* Weekly Events */}

      <section className="mx-auto max-w-6xl px-6 py-20">

        <h2 className="mb-8 text-4xl font-black">
          Weekly Events
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-xl border p-6">
            <h3 className="text-2xl font-bold">
              Tuesday Pool Tournament
            </h3>

            <p className="mt-3 text-lg">
              Every Tuesday • 9 PM • $10 Entry
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="text-2xl font-bold">
              Friday Pool Tournament
            </h3>

            <p className="mt-3 text-lg">
              Every Friday • 9 PM • $10 Entry
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="text-2xl font-bold">
              Thursday Snooker Tournament
            </h3>

            <p className="mt-3 text-lg">
              1-Red Snooker • $20 Entry
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="text-2xl font-bold">
              Poker Tournaments
            </h3>

            <p className="mt-3 text-lg">
              Starting Soon
            </p>
          </div>

        </div>

      </section>

      {/* Location */}

      <section className="bg-gray-100 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-black">
            Conveniently Located in Southwest Houston
          </h2>

          <p className="mt-8 text-xl leading-9">

            Q Billiards Arena is located at

            <br />

            <strong>
              10500 W Bellfort Ave, Unit 200
            </strong>

            <br />

            Houston, Texas 77031

          </p>

          <p className="mt-8 text-lg">
            Whether you're looking for a competitive match,
            practicing your game, hosting a poker tournament,
            or enjoying a night out with friends,
            Q Billiards Arena offers one of Houston's premier cue sports experiences.
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-black p-12 text-center text-white">

          <h2 className="text-5xl font-black">
            Ready to Play?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-xl">
            Visit Houston's newest billiards destination today.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="rounded-xl bg-yellow-400 px-8 py-4 text-xl font-bold text-black"
            >
              Contact Us
            </Link>

            <a
              href="tel:7134988813"
              className="rounded-xl border border-white px-8 py-4 text-xl font-bold"
            >
              Call (713) 498-8813
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}