"use client";

import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

function LogoGroupSection() {
  return (
    <section>
      <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
        <div className="hidden md:block w-full">
          <Image
            src="/images/logo_group_desktop.png"
            width={100}
            height={100}
            alt="logo group"
            className="w-full object-cover saturate-0"
          />
        </div>
      </Fade>
      <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
  <div className="block md:hidden w-full">
    <Image
      src="/images/logo_group_mobile.png"
      width={100}
      height={100}
      alt="logo group"
      className="w-full object-cover saturate-0"
    />
  </div>
</Fade>

</section>
);
}

export default LogoGroupSection;
