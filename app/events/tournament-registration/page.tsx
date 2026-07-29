import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "One-Red Tournament Registration | Q Billiards Arena",
  description:
    "Register for the weekly Q Billiards Arena One-Red snooker tournament.",
};

const tournamentSignupFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScnlB_pUAS7FBO_DDFeDE5lCyKY-6kUHTLn4QLGsIVmogPb3g/viewform?embedded=true";

export default function TournamentRegistrationPage() {
  return (
    <main className="min-h-screen bg-[#f7eee7]">
      {/* BURGUNDY HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#55111c] via-[#791727] to-[#a02334] px-4 pb-28 pt-14 text-white sm:px-6">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-red-200/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#f7eee7]" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-full border border-yellow-300/60 bg-white/10 px-5 py-2.5 text-sm font-black text-yellow-100 backdrop-blur transition hover:bg-yellow-300 hover:text-[#55111c]"
          >
            ← Back to Events
          </Link>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-yellow-300/40 bg-[#721525]/90 shadow-[0_35px_100px_rgba(73,10,21,0.5)] backdrop-blur">
            <div className="relative aspect-[16/8] w-full bg-[#3a0911]">
              <Image
                src="/images/QbiliardsArena-one-red-snooker-tournament.png"
                alt="Q Billiards Arena weekly One-Red snooker tournament"
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="border-t border-yellow-300/20 bg-gradient-to-r from-[#681221] to-[#a02334] px-6 py-10 text-center sm:px-10 sm:py-12">
              <div className="inline-flex rounded-full border border-yellow-300/50 bg-yellow-300/15 px-5 py-2">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-100">
                  Tournament Registration
                </p>
              </div>

              <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
                Weekly One-Red Tournament
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-red-50 sm:text-lg">
                Register for the fast and unforgiving One-Red Snooker format at
                Q Billiards Arena.
              </p>

              <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
                <TournamentInfoCard
                  label="Format"
                  value="One-Red Snooker"
                />

                <TournamentInfoCard
                  label="Open To"
                  value="Pool & Snooker Players"
                />

                <TournamentInfoCard
                  label="Location"
                  value="Q Billiards Arena"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="relative px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="-mt-16 overflow-hidden rounded-[2rem] border border-[#d9b5ad] bg-[#fffaf7] shadow-[0_30px_80px_rgba(91,19,31,0.18)]">
            <div className="border-b border-[#ead1c9] bg-gradient-to-r from-[#fff5ee] via-[#fffaf7] to-[#fbe9e6] px-6 py-9 text-center sm:px-10">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a02334]">
                Player Signup
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#681221] md:text-4xl">
                Add Your Name to the Player List
              </h2>

              <p className="mx-auto mt-3 max-w-2xl leading-7 text-[#6e5657]">
                Complete your player information below to register for the
                upcoming One-Red Tournament.
              </p>
            </div>

            <div className="bg-[#f7e9e6] p-3 sm:p-6">
              <div className="overflow-hidden rounded-2xl border border-[#d8bbb5] bg-white shadow-sm">
                <iframe
                  title="Weekly One-Red tournament registration form"
                  src={tournamentSignupFormUrl}
                  width="100%"
                  height="1150"
                  loading="lazy"
                  className="block min-h-[1150px] w-full border-0 bg-white"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-[#6e5e59]">
              Questions about the tournament?
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href="tel:+17134988813"
                className="rounded-xl bg-[#8f1d2c] px-6 py-3 font-black text-white transition hover:bg-[#701521]"
              >
                Call 713-498-8813
              </a>

              <Link
                href="/events"
                className="rounded-xl border border-[#9d7b24] bg-[#fffaf0] px-6 py-3 font-black text-[#665313] transition hover:bg-[#f0d875] hover:text-[#302600]"
              >
                View All Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TournamentInfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-yellow-200/25 bg-[#57101c]/70 p-4 shadow-inner">
      <p className="text-xs font-black uppercase tracking-wider text-yellow-100">
        {label}
      </p>

      <p className="mt-2 font-bold text-white">{value}</p>
    </div>
  );
}