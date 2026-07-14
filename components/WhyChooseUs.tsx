import {
  CircleDot,
  Clock3,
  Trophy,
  UtensilsCrossed,
} from "lucide-react";

const features = [
  {
    icon: CircleDot,
    title: "25 Professional Tables",
    description:
      "American pool, standard snooker, heated snooker, Chinese 9-ball and carom billiards.",
  },
  {
    icon: Clock3,
    title: "Open Late",
    description:
      "Open until 2 AM Sunday through Thursday and until 4 AM Friday and Saturday.",
  },
  {
    icon: Trophy,
    title: "Competitive Events",
    description:
      "Pool and snooker tournaments, league play and special events for Houston players.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Drinks",
    description:
      "Fresh food, snacks, house-special drinks and refreshments available while you play.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0b0b0d] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-[0.25em] text-yellow-400">
            Why players choose us
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Why Choose Q Billiards?
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            A modern sports-lounge atmosphere with professional tables, late
            hours, food, drinks and competitive play under one roof.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-2 hover:border-yellow-400/60 hover:bg-white/[0.07] hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black transition duration-300 group-hover:scale-110">
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

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black md:grid-cols-3">
          <div className="p-8 text-center">
            <p className="text-4xl font-black">25</p>

            <p className="mt-2 font-bold uppercase tracking-wider">
              Billiards Tables
            </p>
          </div>

          <div className="border-y border-black/15 p-8 text-center md:border-x md:border-y-0">
            <p className="text-4xl font-black">11,000</p>

            <p className="mt-2 font-bold uppercase tracking-wider">
              Square Feet
            </p>
          </div>

          <div className="p-8 text-center">
            <p className="text-4xl font-black">4 AM</p>

            <p className="mt-2 font-bold uppercase tracking-wider">
              Weekend Closing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}