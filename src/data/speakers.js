import suvinImage from "@public/speakers/Suvin.jpeg";
import chamodImage from "@public/speakers/Chamod.jpeg";
import avinImage from "@public/speakers/Avin.jpeg";
import hiranthaImage from "@public/speakers/Hirantha.jpeg";
import lakinduImage from "@public/speakers/Lakindu.jpg";

export const speakers = {
  suvin: {
    name: "Suvin Kodituwakku",
    titles: ["Senior Software Engineer - WSO2"],
    image: suvinImage,
  },
  chamod: {
    name: "Chamod Shehanka Perera",
    titles: ["Software Engineer II at Circles", "CNCF Ambassador"],
    image: chamodImage,
  },
  avin: {
    name: "Avin Indrasoma",
    titles: ["GitHub Campus Expert"],
    image: avinImage,
  },
  hirantha: {
    name: "Hirantha Pieris",
    titles: ["Senior Engineer (Platform and Cloud) - Sysco LABS Sri Lanka"],
    image: hiranthaImage,
  },
  lakindu: {
    name: "Lakindu Kariyawasam",
    titles: ["Software Engineer (Intern) - WSO2"],
    image: lakinduImage,
  },
};

export const speakersList = [
  speakers.suvin,
  speakers.chamod,
  speakers.avin,
  speakers.hirantha,
  speakers.lakindu,
];
