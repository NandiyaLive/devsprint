"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Schedule() {
  return (
    <section className="mt-20" id="schedule">
      <div className="container">
        <h1 className="text-5xl font-semibold">Schedule</h1>
        <div className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-16 w-0.5 bg-green-900"></div>

          <div className="space-y-8">
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

                    <Badge className="border-green-600 bg-transparent text-green-400">
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
                      <div className="rounded-md bg-neutral-800 p-2">
                        <p className="mb-1 text-xs font-medium">
                          Track 1: Artificial Intelligence
                        </p>
                        <Badge
                          variant="outline"
                          className="border-green-600 bg-transparent text-green-400"
                        >
                          LH1
                        </Badge>
                      </div>
                      <div className="rounded-md bg-neutral-800 p-2">
                        <p className="mb-1 text-xs font-medium">
                          Track 2: Cloud Applications
                        </p>
                        <Badge
                          variant="outline"
                          className="border-green-600 bg-transparent text-green-400"
                        >
                          LH2
                        </Badge>
                      </div>
                      <div className="rounded-md bg-neutral-800 p-2">
                        <p className="mb-1 text-xs font-medium">
                          Track 3: Mobile App Development
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
