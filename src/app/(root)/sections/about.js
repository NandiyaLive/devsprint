import { speakersList } from "@/data/speakers";
import Image from "next/image";
import gceLogo from "@public/logos/gce.png";
import wso2Logo from "@public/logos/wso2.png";

const About = () => {
  return (
    <section className="mt-20 pt-20" id="speakers">
      <div className="container flex flex-col gap-4">
        <h1 className="text-5xl font-semibold">About</h1>

        <p className="text-lg">
          DevSprint is a full-day interactive event designed to empower
          undergraduates with hands-on experience across AI, Mobile and Cloud,
          which is organized by IEEE WIE Student Branch of University of
          Vavuniya in collaboration with GitHub Community - Sri Lanka. This
          event provides a dynamic learning experience where participants will
          work with real-world coding, and receive guidance from experienced
          mentors fostering a spirit of innovation.
        </p>

        <hr />

        <div className="grid max-w-xl grid-cols-2 gap-8">
          <div>
            <h2 className="text-6xl">3</h2>
            <p className="mt-2 text-xs">Trending Tracks</p>
          </div>

          <div>
            <h2 className="text-6xl">5</h2>
            <p className="mt-2 text-xs">Github Campus Experts</p>
          </div>
        </div>

        <hr />

        <div className="grid max-w-xl grid-cols-2 gap-8">
          <div>
            <p>Title Sponsor</p>

            <Image
              src={gceLogo}
              alt="GCE Logo"
              className="mt-4 h-16 w-auto"
              width={100}
              height={100}
            />
          </div>

          <div>
            <p>Bronze Sponsor</p>
            <Image
              src={wso2Logo}
              alt="WSO2 Logo"
              className="mt-4 h-16 w-auto"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
