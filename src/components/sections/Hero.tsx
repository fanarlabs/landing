"use client";

import Image from "next/image";
import LightRays from "@/components/LightRays";
import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";
import StarBorder from "@/components/StarBorder";
import ShinyText from "@/components/ShinyText";

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

      {/* Vignette */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center w-full max-w-5xl">
        {/* Pill badge with StarBorder + ShinyText */}
        <div className="mb-10">
          <StarBorder
            as="div"
            color="#d4a843"
            speed="5s"
            thickness={1}
          >
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/fanar-logo-dark.png"
                alt="Fanar"
                width={18}
                height={18}
                className="w-[18px] h-[18px]"
                priority
              />
              <ShinyText
                text="AI-Powered Apps Company"
                speed={3}
                color="#888"
                shineColor="#d4a843"
                className="text-sm font-medium"
              />
            </div>
          </StarBorder>
        </div>

        {/* Headline */}
        <SplitText
          text="AI-Powered Apps for Everyday Life."
          className="text-[clamp(2.25rem,6vw,5.5rem)] font-extrabold tracking-[-0.03em] text-white leading-[1.05] w-full"
          delay={40}
          duration={0.7}
          splitType="words"
          tag="h1"
          textAlign="center"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />

        {/* Subtitle */}
        <div className="mt-8 max-w-2xl mx-auto">
          <BlurText
            text="Like a lighthouse guiding ships through darkness, we illuminate the path forward with intelligent technology — not the other way around."
            className="text-lg md:text-xl text-white/40 leading-relaxed text-center"
            delay={50}
            animateBy="words"
            direction="bottom"
          />
        </div>

        {/* CTA Button */}
        <a
          href="#products"
          className="mt-10 group relative inline-flex items-center justify-center rounded-full bg-gold/90 px-8 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-gold hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(212,168,67,0.5)]"
        >
          <span className="absolute inset-0 rounded-full bg-gold/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
          <span className="relative">Explore Our Products</span>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium">
          scroll
        </span>
        <div
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          style={{ animation: "pulse-scroll 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
