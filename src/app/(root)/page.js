import About from "./sections/about";
import Hero from "./sections/hero";
import Schedule from "./sections/schedule";
import Speakers from "./sections/speakers";
import Tracks from "./sections/tracks";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Speakers />
      <Tracks />
      <Schedule />
    </main>
  );
}
