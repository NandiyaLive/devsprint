import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const RegistrationDrawer = ({ session }) => {
  return (
    <Drawer className="dark">
      <DrawerTrigger asChild>
        <Button variant="outline" size="lg" className="mt-4">
          Register Now
        </Button>
      </DrawerTrigger>
      <DrawerContent side="bottom" className="h-full">
        <DrawerHeader className="hidden">
          <DrawerTitle className="sr-only">
            Register for {session.title}
          </DrawerTitle>
        </DrawerHeader>

        <iframe src={session.link} className="h-full w-full"></iframe>
      </DrawerContent>
    </Drawer>
  );
};
