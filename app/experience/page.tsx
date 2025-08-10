import * as React from "react";

import { Card } from "@/app/components/card";
import { Separator } from "@/app/components/seperator";
import { Navigation } from "../components/nav";
import { KanbanIcon } from "lucide-react";

type TimelineEntry = {
  date: string;
  title: string;
  content: string;
  jobDescription?: string;
  type?: "Remote" | "Onsite";
};

const timelineData: TimelineEntry[] = [
  {
    date: "May. 2024 - Present",
    title: "Zinary",
    jobDescription: "Mentor",
    type: "Remote",
    content:
      "Mentored students in a nine-month front-end development bootcamp, covering HTML, CSS, JavaScript, and React, while guiding them in building portfolio-level applications and supporting their transition into freelancing or contributing to open-source projects.",
  },
  {
    date: "April. 2023 - Present",
    title: "Elbar",
    jobDescription: "Front-end Developer",
    type: "Remote",
    content:
      "Built modern single-page applications using React and Tailwind CSS with a focus on performance, integrating dynamic location-based features through the Neshan Maps API, and collaborating closely with back-end teams to contribute to full-stack functionality.",
  },
  {
    date: "July. 2022 - Mar. 2023",
    title: "APSignals",
    jobDescription: "Mentor Assistant",
    type: "Remote",
    content:
      "Supported web development learners through workshops and one-on-one sessions, facilitating their learning by providing additional guidance, resources, and personalized assistance.",
  },
];

export default function ExperincePage() {
  return (
    <>
      <Navigation />
      <div className="px-6 pt-20 mx-auto gap-8 max-w-7xl lg:px-8 flex flex-col md:gap-8 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Experience
          </h2>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className=" text-gray-100">
          <div className="container flex pb-12 max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
            <div className="min-h-full mt-6 w-1 bg-white border" />
            <div className="relative h-full flex flex-col gap-4">
              {timelineData.map((entry, index) => (
                <div key={index} className="relative ps-8">
                  <div className="bg-zinc-100 absolute -left-[9.7px] top-3.5 flex h-4 w-4 items-center justify-center rounded-full" />
                  <div className="flex justify-between items-center">
                    <h4 className="rounded-xl text-zinc-100 pt-2 text-xl font-bold tracking-tight">
                      {entry.title}
                    </h4>
                    <h5 className="text-md text-zinc-100 text-muted-foreground rounded-xl tracking-tight">
                      {entry.jobDescription} ({entry.type})
                    </h5>
                  </div>
                  <h5 className="text-md text-muted-foreground rounded-xl tracking-tight">
                    {entry.date}
                  </h5>
                  <div>
                    <div
                      className="prose text-zinc-400 dark:prose-invert text-foreground"
                      dangerouslySetInnerHTML={{ __html: entry.content }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
