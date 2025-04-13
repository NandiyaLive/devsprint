"use client";

import Countdown from "@/components/countdown";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import heroBg from "@public/hero-bg.jpg";
import Image from "next/image";

const Hero = () => {
  const targetDate = new Date("2025-04-26T08:00:00+05:30");

  return (
    <section className="relative h-svh w-screen">
      <div className="relative h-full w-full">
        <Image
          src={heroBg}
          className="object-cover"
          alt="Hero Background"
          fill
        />
        <div className="absolute h-full w-full bg-black opacity-80" />
      </div>

      <div className="absolute top-0 left-0 z-50 mt-16 h-full w-full">
        <div className="container flex h-full flex-col items-center justify-center gap-20">
          <Logo />

          <div className="flex flex-col items-center gap-8">
            <h1 className="sm:text-7xxl text-center text-5xl leading-tight font-bold uppercase">
              Let&apos;s embark on an advanced tech journey!
            </h1>

            <Button
              variant="primary"
              size="xl"
              className="relative z-50"
              onClick={() => scrollToSection("tracks")}
            >
              Explore Tracks
            </Button>
          </div>
        </div>
      </div>

      <Countdown
        className="absolute -bottom-28 left-1/2 -translate-x-1/2"
        targetDate={targetDate}
      />
    </section>
  );
};

export default Hero;
