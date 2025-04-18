import { speakersList } from "@/data/speakers";
import Image from "next/image";

const Speakers = () => {
  return (
    <section className="min-h-svh pt-20" id="speakers">
      <div className="container">
        <h1 className="text-5xl font-semibold">Speakers</h1>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {speakersList.map((speaker, index) => (
            <div key={index} className="flex flex-col justify-between border">
              <div className="p-8">
                <h2 className="text-2xl font-semibold">{speaker.name}</h2>
                <div className="text-muted-foreground">
                  {speaker.titles.map((title, i) => (
                    <p key={i}>{title}</p>
                  ))}
                  <p>GitHub Community - Sri Lanka</p>
                </div>
              </div>

              <div className="relative h-80 w-full">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  className="object-cover object-top"
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
