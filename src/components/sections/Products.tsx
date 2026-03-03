"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

function DaylstCard() {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-daylst/30 hover:bg-white/[0.07]">
      {/* Card Header */}
      <div className="mb-6 flex items-center gap-4">
        <Image
          src="/images/daylst-logo-dark.png"
          alt="Daylst"
          width={40}
          height={48}
          className="h-12 w-10 object-contain"
        />
        <div>
          <h3 className="text-xl font-semibold text-white">Daylst</h3>
          <p className="text-sm text-white/50">AI-Powered Routine Coach</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-daylst animate-pulse" />
          <span className="text-xs text-white/50">Live</span>
        </div>
      </div>

      <p className="mb-6 text-sm leading-relaxed text-white/60">
        Your intelligent daily routine companion that learns, adapts, and
        evolves with you.
      </p>

      <ul className="mb-8 space-y-3">
        <li className="text-sm text-white/50">
          <span className="font-medium text-white/80">
            AI-Generated Routines
          </span>
          <span className="text-white/40">
            {" "}
            — Tell it your goal; it builds a personalized plan in seconds
          </span>
        </li>
        <li className="text-sm text-white/50">
          <span className="font-medium text-white/80">
            Behavioral Learning
          </span>
          <span className="text-white/40">
            {" "}
            — Every interaction teaches it more about how you live
          </span>
        </li>
        <li className="text-sm text-white/50">
          <span className="font-medium text-white/80">
            Energy-Aware Scheduling
          </span>
          <span className="text-white/40">
            {" "}
            — Schedules tasks around your natural energy patterns
          </span>
        </li>
        <li className="text-sm text-white/50">
          <span className="font-medium text-white/80">
            Version-Controlled Routines
          </span>
          <span className="text-white/40">
            {" "}
            — Track how your routines evolve over time
          </span>
        </li>
      </ul>

      <a
        href="https://daylst.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-daylst/30 px-6 py-2.5 text-sm font-medium text-daylst transition-all hover:bg-daylst/10"
      >
        Visit daylst.com
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

function TouridaCard() {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-tourida/30 hover:bg-white/[0.07]">
      {/* Card Header */}
      <div className="mb-6 flex items-center gap-4">
        <Image
          src="/images/tourida-logo-dark.png"
          alt="Tourida"
          width={96}
          height={40}
          className="h-10 w-24 object-contain"
        />
        <div>
          <h3 className="text-xl font-semibold text-white">Tourida</h3>
          <p className="text-sm text-white/50">AI Travel Companion</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-tourida" />
          <span className="text-xs text-white/50">Coming Soon</span>
        </div>
      </div>

      <p className="mb-6 text-sm leading-relaxed text-white/60">
        Your smart travel companion that finds the perfect stays, activities,
        and adventures tailored to you.
      </p>

      <ul className="mb-8 space-y-3">
        <li className="text-sm text-white/50">
          <span className="font-medium text-white/80">
            Hostel & Hotel Finder
          </span>
          <span className="text-white/40">
            {" "}
            — Personalized accommodation matching
          </span>
        </li>
        <li className="text-sm text-white/50">
          <span className="font-medium text-white/80">Activity Matching</span>
          <span className="text-white/40">
            {" "}
            — Discover experiences that fit your travel style
          </span>
        </li>
        <li className="text-sm text-white/50">
          <span className="font-medium text-white/80">
            Camping & Adventure
          </span>
          <span className="text-white/40">
            {" "}
            — Off-the-beaten-path recommendations
          </span>
        </li>
      </ul>

      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-2.5 text-sm font-medium text-white/30 cursor-not-allowed">
        Stay Updated
      </span>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="relative bg-black py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/40">
            Our Products
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Intelligent apps that adapt to you
          </h2>
        </div>

        {/* Product Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          <DaylstCard />
          <TouridaCard />
        </div>
      </div>
    </section>
  );
}
