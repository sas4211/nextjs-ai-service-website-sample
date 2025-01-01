"use client";

import React from "react";
import MainButton from "../common/MainButton";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

function LetMakeThingsHappenSection() {
  return (
    <section className="bg-accent rounded-[45px] p-[50px] md:p-[60px] relative">
      <div className="md:pr-[22rem]">
        <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
          <p className="text-h3Mobile md:text-h3 font-medium">
            Let&apos;s make things happen
          </p>
        </Fade>

        <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
          <p className="my-[26px]">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
        </Fade>

<Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
  <MainButton
    text="Get your free proposal"
    classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-black"
  />
</Fade>
 </div>

 <div className="absolute-top-8 right-8 hidden md:block">
    <Fade direction="right" delay={200} cascade damping={1e-1} triggerOnce={true}>
    <Image
  src="/images/person_01.png"
  width={275}
  height={275}
  alt="proposal illustration"
/>
</Fade>
</div>
    </section>
  );
}

export default LetMakeThingsHappenSection;
