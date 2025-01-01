"use client"

import React from "react";

import { Input } from "../ui/input";

import MainButton from "../common/MainButton";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Textarea } from "../ui/textarea";

function ContactUsSection() {
  return (
    <section className="bg-accent flex justify-between w-full rounded-[45px] relative overflow-x-hidden">
      <div className="py-[60px] px-8 md:px-[100px] xl:pr-[500px]">
        <div className="flex flex-col gap-8 md:gap-[10px] items-start">
          <Fade direction="left" delay={200} cascade damping={1e-1} triggerOnce={true}>
            <div className="px-2 inline-block font-medium text-h2 rounded-md">
              Contact Us
            </div>
          </Fade>

          <Fade direction="left" delay={200} cascade damping={1e-1} triggerOnce={true}>
            <p className="text-p">
                Connect with Us: Lets Discuss Your Digital Marketing Needs
                    </p>
                    </Fade>
         </div>

        <Fade direction="left" delay={200} cascade damping={1e-1} triggerOnce={true}>
  <div className="mt-[40px]">
    <div>
      <RadioGroup defaultValue="comfortable" className="flex">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="say_hi" id="r1" />
          <Label htmlFor="r1">Say Hi</Label>
        </div>
        <div className="flex items-center space-x-2">
  <RadioGroupItem value="get_a_quote" id="r2" />
  <Label htmlFor="r2">Get a Quote</Label>
</div>
 </RadioGroup>
    </div>

    <div className="mt-[25px]">
  <p className="pb-[5px]">Name*</p>
  <Input type="text" placeholder="Name" />
</div>

<div className="mt-[25px]">
  <p className="pb-[5px]">Email*</p>
  <Input type="email" placeholder="Email" />
</div>

<div className="mt-[25px]">
  <p className="pb-[5px]">Message*</p>
  <Textarea placeholder="Message" />
</div>
</div>
</Fade>

<Fade direction="left" delay={200} cascade damping={1e-1} triggerOnce={true}>
  <div className="mt-[40px]">
  <MainButton
  text="Send Message"
  classes="bg-secondary text-white text-[18px] w-full md:w-full hover:text-black"
/>
</div>
</Fade>

<div className="hidden xl:block absolute top-0 right-[5rem]">
  <Fade direction="right" delay={200} cascade damping={1e-1} triggerOnce={true}>
    <Image src="/images/contact_illustration.png" width={200} height={200} layout="responsive" alt="" />
  </Fade>
  </div>

</div>
</section>
  );
};
export default ContactUsSection;

              
