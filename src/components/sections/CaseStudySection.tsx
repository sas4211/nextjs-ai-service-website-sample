"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function CaseStudySection() {
  const studies = [
    {
      title:
        "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic.",
    },
    {
      title:
        "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords.",
    },
    {
      title:
        "For a national retail chain, we created a social media marketing campaign that increased followers by 25%.",
    },
  ];
return (
      <section className="">
        <div className="flex flex-col gap-8 md:gap-[10px] items-center">
          <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
            <div className="px-5 inline-block font-medium text-h2 rounded-[50px]">
              Case Studies
            </div>
          </Fade>
          <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
            <p className="text-p">
              Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
            </p>
          </Fade>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center rounded-[45px] gap-[40px] mt-[80px] bg-secondary text-white p-8 md:p-[50px]">
  {studies.map((study, index) => (
    <div className="flex justify-center items-center" key={index}>
      <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
        <div>
          <p className="pb-[20px]">{study.title}</p>
          <Link href="/">
            <div className="flex gap-2 items-center">
              <p className="text-primary">Learn more</p>
              <div>
                <Image src="/images/arrow_rotate.png" width={100} height={100} alt="arrow rotate" />
              </div>
            </div>
          </Link>
        </div>
      </Fade>
      {index !== 2 && (
  <div className="mx-4 xl:mx-[64px] hidden md:block">
    <Separator orientation="vertical" className="h-[186px]" />
  </div>
)}
</div>
))}
</div>
</section>
    );
}
