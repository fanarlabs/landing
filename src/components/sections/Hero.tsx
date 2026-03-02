"use client";

import Image from "next/image";
import LightRays from "@/components/LightRays";
import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* LightRays background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#d4a843"
          raysSpeed={0.5}
          followMouse={true}
          mouseInfluence={0.05}
          lightSpread={1.2}
          rayLength={2.5}
          fadeDistance={1.2}
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center max-w-3xl">
        {/* Fanar Logo */}
        <Image
          src="/images/fanar-logo-dark.png"
          alt="Fanar"
          width={160}
          height={160}
          className="w-26 h-26 md:w-40 md:h-40"
          priority
        />

        {/* Tagline */}
        <SplitText
          text="AI-Powered Apps for Everyday Life"
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white"
          delay={50}
          duration={0.8}
          splitType="words"
          tag="h1"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />

        {/* Subtitle */}
        <BlurText
          text="Like a lighthouse guiding ships through darkness, we illuminate the path forward with intelligent technology."
          className="text-lg md:text-xl text-white/60 max-w-xl"
          delay={80}
          animateBy="words"
          direction="bottom"
        />

        {/* CTA Button */}
        <a
          href="#products"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-black shadow-[0_0_24px_rgba(212,168,67,0.4)] transition-all hover:shadow-[0_0_32px_rgba(212,168,67,0.6)] hover:scale-105"
        >
          Explore Our Products
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
          scroll
        </span>
        <div
          className="w-px h-8 bg-white/20"
          style={{ animation: "pulse-scroll 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
