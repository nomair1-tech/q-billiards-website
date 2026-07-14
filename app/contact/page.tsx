import type { Metadata } from "next";
import {
  Camera,
  Clock3,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Share2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Q Billiards Arena",
  description:
    "Contact Q Billiards Arena in Houston for pool, snooker, Chinese 9-ball, poker room rentals, tournaments, food and late-night entertainment.",
};

const socialLinks = [
  {
    name: "Facebook",
    handle: "Q Billiards",
    href: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    handle: "@QBilliards_HTX",
    href: "https://www.instagram.com/QBilliards_HTX/",
  },
  {
    name: "TikTok",
    handle: "@QBilliards_HTX",
    href: "https://www.tiktok.com/@QBilliards_HTX",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,197,24,0.18),transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="font-black uppercase tracking-[0.25em] text-yellow-400">
            Get in Touch
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Contact Q Billiards Arena
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Contact us about table availability, tournaments, poker-room
            rentals, private events or general questions about the club.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <Phone className="text-yellow-400" size={34} />

            <h2 className="mt-6 text-2xl font-black">Call Us</h2>

            <p className="mt-4 leading-7 text-gray-400">
              Call for table availability, tournament registration and room
              reservations.
            </p>

            <a
              href="tel:+17134988813"
              className="mt-6 inline-block font-black text-yellow-400 hover:underline"
            >
              (713) 498-8813
            </a>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <Mail className="text-yellow-400" size={34} />

            <h2 className="mt-6 text-2xl font-black">Email</h2>

            <p className="mt-4 leading-7 text-gray-400">
              Send us questions about events, tournaments and business
              inquiries.
            </p>

            <a
              href="mailto:qbilliards59@gmail.com"
              className="mt-6 inline-block break-all font-black text-yellow-400 hover:underline"
            >
              QBilliards59@gmail.com
            </a>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <Camera className="text-yellow-400" size={34} />

            <h2 className="mt-6 text-2xl font-black">Social Media</h2>

            <p className="mt-4 leading-7 text-gray-400">
              Follow us for tournament announcements, club updates, photos and
              promotions.
            </p>

            <div className="mt-6 space-y-2">
              <p className="font-black text-yellow-400">Facebook: Q Billiards</p>
              <p className="font-black text-yellow-400">
                Instagram: @QBilliards_HTX
              </p>
              <p className="font-black text-yellow-400">
                TikTok: @QBilliards_HTX
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <Clock3 className="text-yellow-400" size={34} />

            <h2 className="mt-6 text-2xl font-black">Business Hours</h2>

            <div className="mt-5 space-y-4 text-gray-300">
              <div>
                <p>Sunday–Thursday</p>
                <p className="font-black text-yellow-400">5 PM–2 AM</p>
              </div>

              <div>
                <p>Friday–Saturday</p>
                <p className="font-black text-yellow-400">5 PM–4 AM</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <div className="flex items-center gap-3">
            <Share2 className="text-yellow-400" size={30} />

            <h2 className="text-3xl font-black">Follow Q Billiards</h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-black/40 p-6 transition hover:-translate-y-1 hover:border-yellow-400"
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">
                  {social.name}
                </p>

                <p className="mt-2 text-lg font-bold text-white">
                  {social.handle}
                </p>
              </a>
            ))}
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Replace the Facebook link in the code with your exact Facebook page
            URL when available.
          </p>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-white px-6 py-20 text-black">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-yellow-600">
              Visit Us
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Q Billiards Arena
            </h2>

            <div className="mt-8 flex gap-4">
              <MapPin className="mt-1 shrink-0 text-yellow-600" size={30} />

              <address className="not-italic text-lg leading-8">
                10500 W Belfort Ave, Unit 200
                <br />
                Houston, TX 77031
              </address>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=10500+W+Belfort+Ave+Unit+200+Houston+TX+77031"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 font-black text-black transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                <Navigation size={22} />
                Get Directions
              </a>

              <a
                href="sms:+17134988813"
                className="rounded-xl border-2 border-black px-7 py-4 font-black text-black transition hover:bg-black hover:text-white"
              >
                Text Us
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <iframe
              title="Q Billiards Arena Map"
              src="https://www.google.com/maps?q=10500%20W%20Belfort%20Ave%20Unit%20200%20Houston%20TX%2077031&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-yellow-400 p-10 text-center text-black md:p-14">
          <h2 className="text-4xl font-black md:text-5xl">Ready to Play?</h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8">
            Visit us for pool, snooker, Chinese 9-ball, carom billiards, weekly
            tournaments, poker-room rentals, food and late-night entertainment.
          </p>

          <a
            href="tel:+17134988813"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-black px-8 py-4 text-lg font-black text-white transition hover:-translate-y-1"
          >
            <Phone size={20} />
            Call (713) 498-8813
          </a>
        </div>
      </section>
    </main>
  );
}