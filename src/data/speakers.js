import avinImage from "@public/speakers/Avin.jpeg";
import chamodImage from "@public/speakers/Chamod.jpeg";
import lakinduImage from "@public/speakers/Lakindu.jpg";
import suvinImage from "@public/speakers/Suvin.jpeg";

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
  speakers.lakindu,
];
