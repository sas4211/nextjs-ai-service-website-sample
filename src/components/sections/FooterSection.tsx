"use client";

import React from "react";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import MainButton from "../common/MainButton";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

function FooterSection() {
  const links = ["About us", "Services", "Use Cases", "Pricing", "Blog"];
  const socials = [
    "/images/linkedin_icon.png",
    "/images/facebook_icon.png",
    "/images/twitter_icon.png",
  ];

  return (
    <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
      <section className="bg-secondary rounded-t-[45px] p-8 md:p-[60px]">
        <div className="flex flex-col gap-8 md:flex-row justify-between">
          <div className="flex flex-col md:flex-row gap-[40px]">
            {links.map((link, index) => (
              <p key={index} className="text-white underline text-p">
                {link}
              </p>
            ))}
          </div>
          <div className="flex gap-[20px]">
  {socials.map((social, index) => (
    <div key={index}>
      <Image src={social} width={30} height={30} alt={""} />
    </div>
  ))}
</div>
</div>
<div className="mt-[66px] flex flex-col md:flex-row gap-8 justify-between">
  <div>
    <div className="px-2 bg-primary inline-block font-medium text-[20px] rounded-md">
      Contact Us
    </div>
    <p className="text-white mt-[27px]">Email: info@positivus.com</p>
    <p className="text-white mt-[27px]">Phone: 555-567-8901</p>
    <p className="text-white mt-[27px]">
      Address: 1234 Main St Moonstone City, Stardust State 12345
    </p>
  </div>

  <div className="bg-[#292A32] flex flex-col md:flex-row gap-4 justify-center items-center md:gap-[20px]">
    <Input placeholder="Email" className="h-[58px] rounded-[14px]" />
    <MainButton text="Subscribe to news" classes="bg-primary w-full" />
  </div>
</div>

<div className="my-[25px]">
  <Separator />
</div>
<div className="my-[25px]">
  <Separator />
</div>
<div className="flex flex-col md:flex-row gap-1 md:gap-[40px]">
  <p className="text-white text-p">
    © 2025 AI & Us. All Rights Reserved.
  </p>
  <p className="text-white underline text-p">Privacy Policy</p>
</div>
</section>
</Fade>

  );
}

export default FooterSection;
