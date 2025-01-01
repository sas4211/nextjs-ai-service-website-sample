"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

interface IProps {
  titleTop: string;
  titleBottom: string;
  bg: string;
  titleBg: string;
  image: string;
  darkArrow?: boolean;
  link?: string;
}
function ServiceCard({
    titleTop,
    titleBottom,
    bg,
    titleBg,
    image,
    darkArrow = true,
    link = "/",
  }: IProps) {
    return (
      <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
        <div
          className={cn(
            bg,
            "rounded-[45px] p-8 md:p-[50px]"
          )}
        >
          <div className="flex justify-between gap-4">
            <div className="block">
              {/* Content here */}
              <div
  className={cn(
    "bg-accent text-h3Mobile md:text-h3 rounded-[50px] px-3",
    titleBg
  )}
>
  {titleTop}{" "}
</div>
<div
  className={cn(
    "bg-primary text-h3Mobile md:text-h3 rounded-[50px] inline-block mt-3 px-3",
    titleBg
  )}
>
  {titleBottom}{" "}
</div>
</div>
<div>
<Image src={image} width={200} height={200} layout="responsive" alt="card icon" />
</div>
</div>

<Link href={link}>
  <div className="flex gap-2 items-center">
    <div>
      {darkArrow ? (
        <Image src="/images/arrow_dark.png" alt="dark arrow icon" width={50} height={50} />
      ) : (
        <Image src="/images/arrow_light.png" alt="light arrow icon" width={50} height={50} />
      )}
    </div>
    <p className={cn("text-p", darkArrow ? "text-black" : "text-white")}>
      Learn more
    </p>
  </div>
</Link>
</div>
</Fade>
    );
}
export default ServiceCard;

  