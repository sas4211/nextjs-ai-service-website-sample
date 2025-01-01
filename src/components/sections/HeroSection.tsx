"use client";

import React from "react";
import MainButton from "../common/MainButton";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between w-full">
      <div className="md:w-[50%]">
        <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
          <p className="text-h1Mobile md:text-h1 text-black font-bold leading-tight">We are Help <br /> to Achieve your <br /> success
          </p>
        </Fade>

        <Fade direction="right" delay={200} cascade damping={1e-1} triggerOnce={true}>
          <div className="block md:hidden my-[35px]">
            <Image
              src="/images/home_02.svg"
              width="600"
              height="600"
              alt="microphone illustration"
            />
          </div>
        </Fade>

        <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
  <p className="text-p text-black my-[20px] md:my-[35px]">
    
      Our digital marketing agency helps businesses grow and succeed online
      through a range of services including SEO, PPC, social media marketing,
      and content creation.
    </p>
</Fade>
    

<Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
  <MainButton
    text="Book a consultation"
    classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-primary"
  />
</Fade>

</div>
<Fade direction="right" delay={200} cascade damping={1e-1} triggerOnce={true}>
  <div className="hidden md:block">
    <Image
      src="/images/home_02.svg"
      width={600}
      height={600}
      alt="microphone illustration"
    />
  </div>
</Fade>

</section>
  );
}

export default HeroSection;
