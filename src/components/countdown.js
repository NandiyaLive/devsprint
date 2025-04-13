"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";

const Countdown = ({ className, targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeUnits = ["days", "hours", "minutes", "seconds"];

  const timerComponents = timeUnits.map((interval) => (
    <div key={interval} className="flex flex-col items-center">
      <h1 className="text-4xl font-bold md:text-7xl">
        {timeLeft[interval] !== undefined ? timeLeft[interval] : 0}
      </h1>
      <p className="text-muted-foreground text-sm md:text-base">{interval}</p>
    </div>
  ));

  return (
    <div className={cn("container", className)}>
      <Card className="my-8 w-full">
        <CardContent>
          {Object.keys(timeLeft).length ? (
            <div className="grid grid-cols-4 gap-4">{timerComponents}</div>
          ) : (
            <p className="text-center text-xl">Time&apso;s up!</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Countdown;
