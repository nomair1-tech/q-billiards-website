import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[750px] overflow-hidden bg-black">
      <Image
        src="/images/hero/hero.jpg"
        alt="Q Billiards Arena Houston"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 flex min-h-[750px] items-center">
        <div className="mx-auto w-full max-w-7xl px-6">

          <p className="animate-fade-up font-bold uppercase tracking-[0.25em] text-yellow-400">
            Houston's Premier Billiards Club
          </p>

          <h1 className="animate-fade-up mt-6 max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl">
            Pool • Snooker • Chinese 9-Ball
          </h1>

          <p className="animate-fade-up mt-8 max-w-3xl text-xl leading-9 text-gray-200">
            Houston's newest entertainment destination featuring
            American Pool, Professional Snooker,
            Chinese Pool,
            Carom Billiards,
            delicious food,
            premium drinks,
            and tournaments.
          </p>

          <div className="animate-fade-up mt-10 flex flex-wrap gap-5">

            <a
              href="https://www.google.com/maps/search/?api=1&query=10500+W+Belfort+Ave+Unit+200+Houston+TX+77031"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-yellow-400 px-8 py-4 text-lg font-black text-black transition hover:scale-105"
            >
              Get Directions
            </a>

            <Link
              href="/games"
              className="rounded-xl border-2 border-white px-8 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-black"
            >
              View Games
            </Link>

          </div>

          <div className="animate-fade-up mt-14 inline-block rounded-2xl bg-yellow-400 px-8 py-6 shadow-xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-black">
              Limited Time
            </p>

            <h2 className="mt-2 text-4xl font-black text-black">
              FREE POOL
            </h2>

            <p className="mt-2 text-lg font-bold text-black">
              with Equal Purchase
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}