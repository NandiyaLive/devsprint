import { speakersList } from "@/data/speakers";
import Image from "next/image";
import gceLogo from "@public/logos/gce.png";
import geLogo from "@public/logos/ge.svg";
import wso2Logo from "@public/logos/wso2.png";
import fotsLogo from "@public/logos/fots.png";
import vvLogo from "@public/logos/vv.png";

const About = () => {
  return (
    <section className="mt-20 pt-20" id="speakers">
      <div className="container">
        <h1 className="text-5xl font-semibold">About</h1>

        <p className="mt-4 mb-8 text-lg">
          DevSprint is a full-day interactive event designed to empower
          undergraduates with hands-on experience across AI, Mobile and Cloud,
          which is organized by IEEE WIE Student Branch of University of
          Vavuniya in collaboration with GitHub Community - Sri Lanka. This
          event provides a dynamic learning experience where participants will
          work with real-world coding, and receive guidance from experienced
          mentors fostering a spirit of innovation.
        </p>

        <hr />

        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <p className="text-sm">Knowledge Partner</p>

            <Image
              src={geLogo}
              alt="GE Logo"
              className="mt-4 h-12 w-auto"
              width={100}
              height={100}
            />
          </div>

          <div>
            <p className="text-sm">Bronze Sponsor</p>
            <Image
              src={wso2Logo}
              alt="WSO2 Logo"
              className="mt-4 h-12 w-auto"
              width={100}
              height={100}
            />
          </div>

          <div className="col-span-2">
            <p className="text-sm">Media Partners</p>
            <div className="grid grid-cols-2 gap-8">
              <Image
                src={vvLogo}
                alt="Vanni Vogue Logo"
                className="mt-4 h-12 w-auto"
                width={100}
                height={100}
              />
              <Image
                src={fotsLogo}
                alt="FOST Media Logo"
                className="mt-4 h-12 w-auto"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
