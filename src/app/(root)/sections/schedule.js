"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Schedule() {
  const agendaItems = [
    {
      time: "8:30",
      endTime: "8:45",
      session: "Registration",
      venue: "TLH1",
    },
    {
      time: "8:45",
      endTime: "9:00",
      session: "Welcome Speech",
      venue: "TLH1",
    },
    {
      time: "9:00",
      endTime: "10:30",
      session: "Keynote",
      venue: "TLH1",
    },
    {
      time: "11:00",
      endTime: "13:00",
      session: "Part 1",
      tracks: [
        { name: "Track 1: AI/ML", venue: "LH1" },
        { name: "Track 2: Web & Cloud", venue: "LH2" },
        { name: "Track 3: Mobile", venue: "LH3" },
      ],
    },
    {
      time: "13:00",
      endTime: "14:00",
      session: "Lunch",
    },
    {
      time: "14:00",
      endTime: "15:00",
      session: "Part 2",
    },
    {
      time: "15:30",
      endTime: "17:00",
      session: "AMA",
    },
    {
      time: "17:00",
      endTime: "17:30",
      session: "Vote of Thanks",
    },
  ];

  return (
    <section className="mt-20" id="schedule">
      <div className="container">
        <h1 className="text-5xl font-semibold">Schedule</h1>
        <div className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-16 w-0.5 bg-green-900"></div>

          <div className="space-y-12">
            <div className="relative">
              <div className="absolute top-3 left-0 flex items-center">
                <div className="rounded-md bg-green-500 px-2 py-1 text-xs font-bold text-black">
                  08:30
                </div>
              </div>
              <div className="absolute top-4 left-16 -ml-[6px] h-3 w-3 rounded-full bg-green-500"></div>
              <div className="ml-24">
                <Card className="border-none">
                  <CardContent>
                    <h3 className="font-medium">Registration</h3>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-3 left-0 flex items-center">
                <div className="rounded-md bg-green-500 px-2 py-1 text-xs font-bold text-black">
                  08:45
                </div>
              </div>
              <div className="absolute top-4 left-16 -ml-[6px] h-3 w-3 rounded-full bg-green-500"></div>
              <div className="ml-24">
                <Card className="border-none">
                  <CardContent>
                    <h3 className="font-medium">Welcome Speech</h3>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-3 left-0 flex items-center">
                <div className="rounded-md bg-green-500 px-2 py-1 text-xs font-bold text-black">
                  09:00
                </div>
              </div>
              <div className="absolute top-4 left-16 -ml-[6px] h-3 w-3 rounded-full bg-green-500"></div>
              <div className="ml-24">
                <Card className="border-none">
                  <CardContent>
                    <h3 className="font-medium">Keynote</h3>

                    <Badge className="mt-2 border-green-700 bg-green-800 text-green-400">
                      TLH1
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-3 left-0 flex items-center">
                <div className="rounded-md bg-green-500 px-2 py-1 text-xs font-bold text-black">
                  11:00
                </div>
              </div>
              <div className="absolute top-4 left-16 -ml-[6px] h-3 w-3 rounded-full bg-green-500"></div>
              <div className="ml-24">
                <Card className="border-none">
                  <CardContent>
                    <h3 className="font-medium">Part 1</h3>

                    <div className="mt-4 grid max-w-3xl grid-cols-1 gap-2 sm:grid-cols-3">
                      <div className="rounded-md bg-neutral-800 p-2 text-center">
                        <p className="mb-1 text-xs font-medium">
                          Track 1: AI/ML
                        </p>
                        <Badge
                          variant="outline"
                          className="border-green-600 bg-transparent text-green-400"
                        >
                          LH1
                        </Badge>
                      </div>
                      <div className="rounded-md bg-neutral-800 p-2 text-center">
                        <p className="mb-1 text-xs font-medium">
                          Track 2: Web & Cloud
                        </p>
                        <Badge
                          variant="outline"
                          className="border-green-600 bg-transparent text-green-400"
                        >
                          LH2
                        </Badge>
                      </div>
                      <div className="rounded-md bg-neutral-800 p-2 text-center">
                        <p className="mb-1 text-xs font-medium">
                          Track 3: Mobile
                        </p>
                        <Badge
                          variant="outline"
                          className="border-green-600 bg-transparent text-green-400"
                        >
                          LH3
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-3 left-0 flex items-center">
                <div className="rounded-md bg-green-500 px-2 py-1 text-xs font-bold text-black">
                  13:00
                </div>
              </div>
              <div className="absolute top-4 left-16 -ml-[6px] h-3 w-3 rounded-full bg-green-500"></div>
              <div className="ml-24">
                <Card className="border-none">
                  <CardContent>
                    <h3 className="font-medium">Lunch</h3>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-3 left-0 flex items-center">
                <div className="rounded-md bg-green-500 px-2 py-1 text-xs font-bold text-black">
                  14:00
                </div>
              </div>
              <div className="absolute top-4 left-16 -ml-[6px] h-3 w-3 rounded-full bg-green-500"></div>
              <div className="ml-24">
                <Card className="border-none">
                  <CardContent>
                    <h3 className="font-medium">Part 2</h3>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-3 left-0 flex items-center">
                <div className="rounded-md bg-green-500 px-2 py-1 text-xs font-bold text-black">
                  15:30
                </div>
              </div>
              <div className="absolute top-4 left-16 -ml-[6px] h-3 w-3 rounded-full bg-green-500"></div>
              <div className="ml-24">
                <Card className="border-none">
                  <CardContent>
                    <h3 className="font-medium">AMA</h3>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-3 left-0 flex items-center">
                <div className="rounded-md bg-green-500 px-2 py-1 text-xs font-bold text-black">
                  17:00
                </div>
              </div>
              <div className="absolute top-4 left-16 -ml-[6px] h-3 w-3 rounded-full bg-green-500"></div>
              <div className="ml-24">
                <Card className="border-none">
                  <CardContent>
                    <h3 className="font-medium">Vote of Thanks</h3>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
