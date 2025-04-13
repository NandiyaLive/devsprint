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
                    {track.topic}
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
                <Button variant="outline" size="lg" className="mt-4" asChild>
                  <a
                    href={track.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
