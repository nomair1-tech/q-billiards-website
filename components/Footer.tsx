export default function Footer() {
  return (
    <footer className="bg-black px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-black">Q Billiards Arena</h2>

          <p className="mt-4 leading-7 text-gray-400">
            Pool, snooker, Chinese 9-ball, carom billiards, food and late-night
            entertainment in Houston.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-yellow-400">Location</h3>

          <p className="mt-4 leading-7 text-gray-400">
            10500 W Belfort Ave, Unit 200
            <br />
            Houston, TX 77031
            <br />
            713-498-8813
          </p>
        </div>

        <div>
          <h3 className="font-bold text-yellow-400">Hours</h3>

          <p className="mt-4 leading-7 text-gray-400">
            Sunday–Thursday: 5 PM–2 AM
            <br />
            Friday–Saturday: 5 PM–4 AM
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Q Billiards Arena. All rights reserved.
      </div>
    </footer>
  );
}