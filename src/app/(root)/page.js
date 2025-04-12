import Image from "next/image";
import Hero from "./sections/hero";
import Register from "./sections/register";

export default function Home() {
  return (
    <main>
      <Hero />
      <Register />
    </main>
  );
}
