import { Button } from "@/components/ui/button";
import aiImage from "@public/ai.jpg";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const sessions = [
  {
    title: "AI/ML",
    description: "Learn about the latest advancements in AI/ML",
    link: "https://lu.ma/embed/event/evt-HDSC1rsKMGPbT2y/simple",
  },
  {
    title: "Web & Cloud",
    description: "Learn about the latest advancements in Web & Cloud",
    link: "https://lu.ma/embed/event/evt-nG3PAGXrFmRwZo7/simple",
  },
  {
    title: "Mobile",
    description: "Learn about the latest advancements in Mobile",
    link: "https://lu.ma/embed/event/evt-WbpucLABz0iMVs1/simple",
  },
];

const Register = () => {
  return (
    <section className="min-h-svh py-20" id="register">
      <div className="container">
        <h1 className="text-3xl font-semibold text-center">Register</h1>

        <div className="grid grid-cols-1 mt-8">
          {sessions.map((session, index) => (
            <div className="w-full border rounded-lg p-4" key={index}>
              <Image
                src={aiImage}
                className="w-full h-96 object-cover rounded-xl"
                alt="AI Image"
              />

              <h2 className="text-xl font-semibold mt-4">AI/ML</h2>

              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline" className="mt-4">
                    Register Now
                  </Button>
                </DrawerTrigger>
                <DrawerContent side="bottom" className="h-full">
                  <DrawerHeader className="hidden">
                    <DrawerTitle className="sr-only ">
                      Register for {session.title}
                    </DrawerTitle>
                  </DrawerHeader>

                  <iframe src={session.link} className="w-full h-full"></iframe>
                </DrawerContent>
              </Drawer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Register;
