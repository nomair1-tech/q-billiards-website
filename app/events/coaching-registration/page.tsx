import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Snooker Coaching Camp Registration | Q Billiards Arena",
  description:
    "Register for the Q Billiards Arena snooker coaching camp in Houston.",
};

const coachingSignupFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfNi8qaKZUe6lM4pFqVkQnz2k5q9-1nysoH-fFbFL1ppEckXQ/viewform?embedded=true";

export default function CoachingRegistrationPage() {
  return (
    <main className="min-h-screen bg-[#f7f0dc]">
      {/* GREEN HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#063d2d] via-[#07523b] to-[#0b6b4b] px-4 pb-28 pt-14 text-white sm:px-6">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-emerald-200/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#f7f0dc]" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-full border border-yellow-300/60 bg-white/10 px-5 py-2.5 text-sm font-black text-yellow-200 backdrop-blur transition hover:bg-yellow-300 hover:text-[#063d2d]"
          >
            ← Back to Events
          </Link>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-yellow-300/50 bg-[#064430]/90 shadow-[0_35px_100px_rgba(2,45,32,0.45)] backdrop-blur">
            <div className="relative aspect-[16/8] w-full bg-[#03291e]">
              <Image
                src="/images/qbilliards-Snooker-Coaching-camp.jpg"
                alt="Q Billiards Arena snooker coaching camp"
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="border-t border-yellow-300/20 bg-gradient-to-r from-[#064430] to-[#087052] px-6 py-10 text-center sm:px-10 sm:py-12">
              <div className="inline-flex rounded-full border border-yellow-300/50 bg-yellow-300/15 px-5 py-2">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-200">
                  Player Registration
                </p>
              </div>

              <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
                Snooker Coaching Camp
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-emerald-50 sm:text-lg">
                Reserve a place in our coaching program and help your player
                develop technique, confidence and match awareness.
              </p>

              <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
                <InfoCard
                  label="Program"
                  value="Snooker Coaching"
                />

                <InfoCard
                  label="Location"
                  value="Q Billiards Arena"
                />

                <InfoCard
                  label="Confirmation"
                  value="Staff Will Contact You"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="relative px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="-mt-16 overflow-hidden rounded-[2rem] border border-[#d9c487] bg-[#fffdf7] shadow-[0_30px_80px_rgba(70,52,10,0.18)]">
            <div className="border-b border-[#e5d7ad] bg-gradient-to-r from-[#fff9e8] via-[#fffdf7] to-[#eef8ef] px-6 py-9 text-center sm:px-10">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#947000]">
                Registration Form
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#104b37] md:text-4xl">
                Reserve Your Coaching Spot
              </h2>

              <p className="mx-auto mt-3 max-w-2xl leading-7 text-[#51635a]">
                Complete the player information below. Our team will contact
                you after the registration is submitted.
              </p>
            </div>

            <div className="bg-[#edf4ec] p-3 sm:p-6">
              <div className="overflow-hidden rounded-2xl border border-[#bfd0c0] bg-white shadow-sm">
                <iframe
                  title="Snooker coaching camp registration form"
                  src={coachingSignupFormUrl}
                  width="100%"
                  height="1150"
                  loading="lazy"
                  className="block min-h-[1150px] w-full border-0 bg-white"
                />
              </div>
            </div>
          </div>

          <RegistrationFooter accent="green" />
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-yellow-200/25 bg-[#043c2c]/70 p-4 shadow-inner">
      <p className="text-xs font-black uppercase tracking-wider text-yellow-200">
        {label}
      </p>

      <p className="mt-2 font-bold text-white">{value}</p>
    </div>
  );
}

function RegistrationFooter({
  accent,
}: {
  accent: "green" | "red";
}) {
  const buttonClass =
    accent === "green"
      ? "bg-[#07523b] hover:bg-[#063d2d]"
      : "bg-[#8f1d2c] hover:bg-[#701521]";

  return (
    <div className="mt-10 text-center">
      <p className="text-sm text-[#5f625a]">Need help registering?</p>

      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <a
          href="tel:+17134988813"
          className={`rounded-xl px-6 py-3 font-black text-white transition ${buttonClass}`}
        >
          Call 713-498-8813
        </a>

        <Link
          href="/events"
          className="rounded-xl border border-[#8c782f] bg-[#fffaf0] px-6 py-3 font-black text-[#665313] transition hover:bg-[#f0d875] hover:text-[#302600]"
        >
          View All Events
        </Link>
      </div>
    </div>
  );
}