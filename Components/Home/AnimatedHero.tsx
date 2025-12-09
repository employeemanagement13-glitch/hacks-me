// Components/Home/AnimatedHero.tsx
"use client";

import React from "react";
import HeroContainer from "@/Components/hero/HeroContainer";

export default function AnimatedHero() {
  // HeroContainer now handles all scroll logic itself
  return (
    <main className="pt-10 bg-[#0A0A0A]">
      <HeroContainer />
    </main>
  );
}
