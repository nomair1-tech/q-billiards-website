import Image from "next/image";

const images = [
  {
    src: "/images/gallery/1.jpeg",
    alt: "Q Billiards Arena gallery photo 1",
  },
  {
    src: "/images/gallery/2.jpeg",
    alt: "Q Billiards Arena gallery photo 2",
  },
  {
    src: "/images/gallery/3.jpeg",
    alt: "Q Billiards Arena gallery photo 3",
  },
  {
    src: "/images/gallery/4.jpeg",
    alt: "Q Billiards Arena gallery photo 4",
  },
  {
    src: "/images/gallery/5.jpeg",
    alt: "Q Billiards Arena gallery photo 5",
  },
  {
    src: "/images/gallery/6.jpeg",
    alt: "Q Billiards Arena gallery photo 6",
  },
  {
    src: "/images/gallery/7.jpeg",
    alt: "Q Billiards Arena gallery photo 7",
  },
  {
    src: "/images/gallery/8.jpeg",
    alt: "Q Billiards Arena gallery photo 8",
  },
  {
    src: "/images/gallery/9.JPG",
    alt: "Q Billiards Arena gallery photo 9",
  },
  {
    src: "/images/gallery/10.JPG",
    alt: "Q Billiards Arena gallery photo 10",
  },
  {
    src: "/images/gallery/11.JPG",
    alt: "Q Billiards Arena gallery photo 11",
  },
  {
    src: "/images/gallery/12.jpeg",
    alt: "Q Billiards Arena gallery photo 12",
  },
  {
    src: "/images/gallery/13.jpeg",
    alt: "Q Billiards Arena gallery photo 13",
  },
  {
    src: "/images/gallery/14.jpeg",
    alt: "Q Billiards Arena gallery photo 14",
  },
  {
    src: "/images/gallery/15.PNG",
    alt: "Q Billiards Arena gallery photo 15",
  },
  {
    src: "/images/gallery/16.png",
    alt: "Q Billiards Arena gallery photo 16",
  },
  {
    src: "/images/gallery/17.png",
    alt: "Q Billiards Arena gallery photo 17",
  },
  {
    src: "/images/gallery/18.jpeg",
    alt: "Q Billiards Arena gallery photo 18",
  },
  {
    src: "/images/gallery/19.jpeg",
    alt: "Q Billiards Arena gallery photo 19",
  },
  {
    src: "/images/gallery/20.jpeg",
    alt: "Q Billiards Arena gallery photo 20",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] text-white">
      {/* PAGE HERO */}
      <section className="border-b border-white/10 px-6 py-20 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="font-bold uppercase tracking-[0.25em] text-yellow-400">
            Q Billiards Arena
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-6xl">
            Inside the Club
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Explore our pool tables, snooker tables, Chinese 9-ball tables,
            tournaments, food and modern sports-lounge atmosphere.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <article
              key={image.src}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl transition duration-300 hover:-translate-y-2 hover:border-yellow-400/60"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="absolute bottom-4 left-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-black text-black opacity-0 transition duration-300 group-hover:opacity-100">
                  PHOTO {index + 1}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}