import React from "react";

export default function ColorsDemo() {
  return (
    <main className="min-h-screen bg-daisy text-moss p-8">
      <h1 className="text-4xl font-bold mb-6">Color Palette Demo</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Individual Colors */}
        {[
          { name: "Lilac", className: "bg-lilac", hex: "#B8A0B9" },
          { name: "Calendula", className: "bg-calendula", hex: "#DE8554" },
          { name: "Buttercup", className: "bg-buttercup", hex: "#E7C878" },
          { name: "Daisy", className: "bg-daisy", hex: "#F5F0EC" },
          { name: "Petal", className: "bg-petal", hex: "#F8D6C4" },
          { name: "Moss", className: "bg-moss", hex: "#5B623A" },
          { name: "Delphinium", className: "bg-delphinium", hex: "#A8B9C3" },
        ].map((color) => (
          <div
            key={color.name}
            className={`${color.className} rounded-lg shadow p-6 flex flex-col items-start border border-moss`}
          >
            <span className="text-lg font-semibold mb-2 capitalize">
              {color.name}
            </span>
            <span className="text-sm font-mono">{color.hex}</span>
          </div>
        ))}
      </section>

      {/* Recommended Combinations */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold mb-4">Recommended Combinations</h2>
        {/* Hero Section Example */}
        <div className="rounded-lg p-6 bg-moss text-daisy flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Hero Section</h3>
            <p className="mb-2">
              Moss background, Daisy text, Calendula accent button.
            </p>
            <button className="bg-calendula text-white px-4 py-2 rounded shadow font-semibold">
              Get Started
            </button>
          </div>
        </div>
        {/* Card Example */}
        <div className="rounded-lg p-6 bg-daisy text-moss border-lilac border flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Card Example</h3>
            <p className="mb-2">
              Daisy background, Moss text, Lilac border, Petal accent badge.
            </p>
            <span className="inline-block bg-petal text-moss px-3 py-1 rounded-full text-xs font-semibold">
              Petal Badge
            </span>
          </div>
        </div>
        {/* CTA Example */}
        <div className="rounded-lg p-6 bg-calendula text-white flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Call to Action</h3>
            <p className="mb-2">
              Calendula background, white text, Moss border.
            </p>
            <button className="bg-moss text-daisy px-4 py-2 rounded shadow font-semibold">
              Learn More
            </button>
          </div>
        </div>
        {/* Soft Section Example */}
        <div className="rounded-lg p-6 bg-petal text-moss border-buttercup border flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Soft Section</h3>
            <p className="mb-2">
              Petal background, Moss text, Buttercup border.
            </p>
          </div>
        </div>
        {/* Navigation Example */}
        <div className="rounded-lg p-6 bg-delphinium text-moss flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Navigation Example</h3>
            <p className="mb-2">
              Delphinium background, Moss text, Daisy hover.
            </p>
            <nav className="flex gap-2">
              <a
                className="px-3 py-1 rounded bg-daisy text-moss hover:bg-buttercup transition"
                href="#"
              >
                Home
              </a>
              <a
                className="px-3 py-1 rounded bg-daisy text-moss hover:bg-buttercup transition"
                href="#"
              >
                About
              </a>
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
}
