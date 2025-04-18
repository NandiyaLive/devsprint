import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { tracks } from "@/data/tracks";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const NotesDialog = ({ track }) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline" size="lg" className="mt-4">
        Register Now
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle className="text-left">Notes</AlertDialogTitle>
        <AlertDialogDescription>
          <ul className="my-2 list-disc space-y-2 pl-4 text-left">
            <li>
              We welcome enthusiastic undergraduate students from the{" "}
              <strong>
                University of Vavuniya, University of Jaffna, and Rajarata
                University of Sri Lanka
              </strong>{" "}
              participate.
            </li>
            <li>
              This event is <strong>open to all eligible undergraduates</strong>
              , not just IEEE members.
            </li>
            <li>
              Please note that each delegate must register for{" "}
              <strong>only one</strong> track.
            </li>
            <li>
              The ticket type <strong>corresponds to the track</strong>, and
              delegates <strong>cannot change</strong> their selected track
              after registration
            </li>
          </ul>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button asChild>
            <a href={track.link} target="_blank" rel="noopener noreferrer">
              Continue
            </a>
          </Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

const Tracks = () => {
  return (
    <section className="pt-20" id="tracks">
      <div className="container">
        <h1 className="text-5xl font-semibold">Tracks</h1>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, index) => (
            <Card key={index}>
              <CardContent className="flex h-full flex-col justify-between">
                <div>
                  <h2 className="mt-4 text-xl font-semibold">{track.title}</h2>
                  <p className="text-muted-foreground mt-2 text-base">
                    {track.description}
                  </p>
                </div>

                <div className="*:ring-background mt-4 flex -space-x-3 *:ring">
                  {track.speakers.map((speaker, index) => (
                    <TooltipProvider key={index}>
                      <Tooltip>
                        <TooltipTrigger>
                          <Avatar className="size-10">
                            <Image src={speaker.image} alt={speaker.name} />
                          </Avatar>
                        </TooltipTrigger>
                        <TooltipContent>{speaker.name}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <NotesDialog track={track} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
