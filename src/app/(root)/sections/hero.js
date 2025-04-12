"use client";

import Image from "next/image";
import heroBg from "@public/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-svh w-screen relative text-white">
      <div className="h-full w-full relative">
        <Image
          src={heroBg}
          className="object-cover"
          alt="Hero Background"
          fill
        />
        <div className="absolute h-full w-full bg-black opacity-80" />
      </div>

      <div className="absolute top-0 left-0 h-full w-full z-50">
        <div className="container flex flex-col items-center justify-center h-full">
          <h3 className="text-xl font-semibold">
            April 27 at University of Vavuniya
          </h3>
          <h1 className="text-5xl font-bold text-center mt-8 uppercase leading-tight">
            Let&apos;s embark on an advanced tech journey!
          </h1>

          <div className="grid grid-cols-2 max-w-xl mt-8 gap-8 text-center">
            <div>
              <h2 className="text-6xl mb-1">3</h2>
              <p className="text-xs">Trending Tracks</p>
            </div>
            <div>
              <h2 className="text-6xl mb-1">4</h2>
              <p className="text-xs">Github Campus Experts</p>
            </div>
          </div>

          <Button
            variant="lg"
            className="mt-16 bg-gradient-to-br from-lime-500 to-green-600 text-black rounded-full px-8 py-6 relative z-50 uppercase font-medium"
            asChild
          >
            <Link href="#register">Register Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
