import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch Live | Q Billiards Arena",
  description: "Watch live matches from Q Billiards Arena.",
};

export default function LivePage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-7xl p-4">
        <div className="overflow-hidden rounded-2xl border border-neutral-700 bg-black shadow-2xl">
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/dg6kfdekgFc?autoplay=1&rel=0"
              title="Q Billiards Arena Live Stream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </main>
  );
}