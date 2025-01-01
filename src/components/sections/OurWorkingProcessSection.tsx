"use client";

import React, { useState } from "react";
import WorkingProcessCard from "../cards/WorkingProcessCard";
import { Accordion } from "../ui/accordion";

function OurWorkingProcessSection() {
  const processes = [
    {
      label: "01",
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and more.",
    },
    {
      label: "02",
      title: "Research and Strategy Development",
      description:
        "02 - During the initial consultation, we will discuss your business goals and objectives, target audience, and more.",
    },
    {
        label: "03",
        title: "Implementation",
        description:
          "03 - During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      },
      {
        label: "04",
        title: "Monitoring and Optimization",
        description:
          "04 - During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      },
      {
        label: "05",
        title: "Reporting and Communication",
        description:
          "05 - During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      },
      {
        label: "06",
        title: "Continual Improvement",
        description:
          "06 - During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      }
    ]
      const [value, setValue] = useState("");

const handleAccordionChange = (value: string) => {
  setValue(value);
};

return (
  <section>
    <div className="flex flex-col gap-8 md:gap-[10px] items-center">
      <div className="px-5 inline-block font-medium text-h3 rounded-[50px]">
        Our Working Process
    </div>
    <p className="text-p">
        Our working process is designed to ensure that you receive the best possible service. Step By Step Guide to Achieving Your Business Goals
    </p>
    </div>
    <div className="mt-[80px]">
    <Accordion
          type="single"
          collapsible
          className="w-full"
          onValueChange={handleAccordionChange}
        >
          {processes.map((process, index) => (
            <WorkingProcessCard
              {...process}
              currentValue={value}
              key={index} // Prefer `id` if available
            />
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default OurWorkingProcessSection;