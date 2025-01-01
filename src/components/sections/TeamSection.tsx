"use client"

import React from "react";
import MainButton from "../common/MainButton";
import { Fade } from "react-awesome-reveal";
import TeamCard from "../cards/TeamCard";

function TeamSection() {
  const teams = [
    {
      name: "John Smith",
      position: "CEO and Founder",
      experience:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      image: "/images/t_1.png",
    },
    {
      name: "Jane Doe",
      position: "Director of Operations",
      experience:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      image: "/images/t_2.png",
    },
    {
        name: "Michael Brown",
        position: "Senior SEO Specialist",
        experience:
          "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
        image: "/images/t_3.png",
      },
      {
        name: "Emily Johnson",
        position: "PPC Manager",
        experience:
          "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
        image: "/images/t_4.png",
      },
      {
        name: "Brian Williams",
        position: "Social Media Specialist",
        experience:
          "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
        image: "/images/t_5.png",
      },
      {
        name: "Sarah Kim",
        position: "Content Creator",
        experience:
          "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
        image: "/images/t_6.png",
      },
    ];
    return (
        <section>
  <div className="flex flex-col gap-8 md:gap-[10px] items-center">
    <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
      <div className="px-2 inline-block font-medium text-h2 rounded-md">
        Team
      </div>
    </Fade>

    <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
  <p className="text-p">
    Meet the skilled and experienced team behind our successful digital marketing strategies
  </p>
</Fade>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mt-[80px]">
  <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
    {teams.map((team, index) => (
      <TeamCard {...team} key={index} />
    ))}
  </Fade>
</div>

<Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
  <div className="mt-[40px] flex justify-end">
    <MainButton
      text="See all team"
      classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-black"
    />
  </div>
</Fade>
</section>
)
};
export default TeamSection;