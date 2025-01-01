import React from "react";

import { Fade } from "react-awesome-reveal";
import ServiceCard from "../cards/ServiceCard";

export default function ServiceSection() {
  const services = [
    {
      titleTop: "Search engine",
      titleBottom: "optimization",
      bg: "bg-primary",
      titleBg: "bg-white",
      image: "/images/asset-1.svg",
      darkArrow: true,
      link: "/",
    },
    
    {
        titleTop: "Pay-per-click",
        titleBottom: "advertising",
        bg: "bg-primary",
        titleBg: "bg-white",
        image: "/images/asset-2.svg",
        darkArrow: true,
        link: "/",
      },
      {
        titleTop: "Social Media",
        titleBottom: "Marketing",
        bg: "bg-primary",
        titleBg: "bg-white",
        image: "/images/asset-3.svg",
        darkArrow: false,
        link: "/",
      },
      {
        titleTop: "Email",
        titleBottom: "Marketing",
        bg: "bg-primary",
        titleBg: "bg-white",
        image: "/images/asset-4.svg",
        darkArrow: true,
        link: "/",
      },
      {
        titleTop: "Content",
        titleBottom: "Creation",
        bg: "bg-primary",
        titleBg: "bg-white",
        image: "/images/asset-5.svg",
        darkArrow: true,
        link: "/",
      },
      {
        titleTop: "Analytics and",
        titleBottom: "Tracking",
        bg: "bg-primary",
        titleBg: "bg-white",
        image: "/images/asset-6.svg",
        darkArrow: false,
        link: "/",
      },
      
  ];
  return (

<section className="">
  <div className="flex flex-col gap-8 md:gap-[10px] items-center">
    <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
      <div className="px-5 inline-block text-h3 uppercase font-semibold rounded-[50px]">
        Provide Quality Services
      </div>
    </Fade>

    <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
      <p className="">
        At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:
      </p>
    </Fade>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mt-[80px]">
  {services.map((service, index) => (
    <ServiceCard {...service} key={index} />
  ))}
</div>
</section>
);
}


