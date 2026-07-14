import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Q Billiards Arena",
  description:
    "View food, snacks, drinks and desserts available at Q Billiards Arena in Houston.",
};

const menuSections = [
  {
    title: "Food",
    items: [
      {
        name: "Double Patty Hamburger with Fries",
        price: "$11.99",
      },
      {
        name: "Fried Chicken Special — 4 Pieces with Fries",
        price: "$9.99",
      },
      {
        name: "Additional 2 Pieces of Chicken",
        price: "$3.00",
      },
      {
        name: "Loaded Fries with Philly Meat",
        price: "Ask Staff",
      },
      {
        name: "Philly Cheesesteak",
        price: "Ask Staff",
      },
      {
        name: "Chicken Tenders with Fries",
        price: "Ask Staff",
      },
    ],
  },
  {
    title: "Snacks",
    items: [
      { name: "Aloo Samosa", price: "$1.99 each" },
      { name: "Mini Beef Samosa — 4 Pieces", price: "$4.99" },
      { name: "Chicken Puff Patties", price: "$2.99 each" },
      { name: "Jalapeño Bombers — 6 Pieces", price: "$7.99" },
      { name: "Cheese Sticks — 5 Pieces", price: "$6.99" },
      { name: "Masala Fries", price: "$5.99" },
    ],
  },
  {
    title: "House Special Drinks",
    items: [
      { name: "Mojito", price: "$6.99" },
      { name: "Limca", price: "$6.99" },
      { name: "Mint Lemonade", price: "$6.99" },
      { name: "Sweet Lassi", price: "$6.99" },
      { name: "Mango Lassi", price: "$7.99" },
    ],
  },
  {
    title: "Cold Drinks",
    items: [
      { name: "Mexican Coke, Fanta or Sprite", price: "$3.99" },
      { name: "Red Bull", price: "$3.99" },
      { name: "Monster", price: "$3.99" },
      { name: "Gatorade", price: "$2.99" },
      { name: "Mineral Water", price: "$2.99" },
    ],
  },
  {
  title: "Hot Drinks",
  items: [
    { name: "Doodh Patti Chai", price: "$2.99" },
    { name: "Nescafé", price: "$2.99" },
  ],
},
];

export default function MenuPage() {
  return (
    <main>
      <section className="bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.2em] text-yellow-400">
            Food and refreshments
          </p>

          <h1 className="mt-3 text-5xl font-black md:text-6xl">
            Our Menu
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Enjoy food, snacks and refreshing drinks while you play.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {menuSections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <h2 className="border-b-4 border-yellow-400 pb-4 text-3xl font-black">
                {section.title}
              </h2>

              <div className="mt-6 space-y-5">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-6 border-b border-gray-100 pb-4"
                  >
                    <h3 className="font-semibold">{item.name}</h3>

                    <p className="whitespace-nowrap font-black text-yellow-600">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Prices and availability are subject to change. Please confirm current
          pricing with club staff.
        </p>
      </section>
    </main>
  );
}