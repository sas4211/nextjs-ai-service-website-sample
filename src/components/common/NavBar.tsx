"use client";

import { useState } from "react";
import { X } from "lucide-react";
import MainButton from "./MainButton";
import Image from "next/image";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const links = [
    {
      name: "About us",
      link: "/",
    },
    {
      name: "Services",
      link: "/",
    },
    {
      name: "Use Cases",
      link: "/",
    },
    {
      name: "Pricing",
      link: "/",
    },
    {
        name: "Blog",
        link: "/",
    },
  ];
  const toggleMenu = () => {
    setMenu(!menu);
  };
  
  return (
    <div className="md:sticky md:top-0 md:shadow-none z-20">
      {/* DESKTOP */}
      <div className="hidden lg:block animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between mx-4 md:mx-[85px] items-center">
          <div>
            <Image src="/images/logo.png" width={200} height={100} alt="logo" />
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center uppercase select-none">
            {links.map((link, index) => (
              <p 
              key={index}
              className={`hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray`}
              >
                {link.name}
              </p>
            ))}

            <div className="flex items-center gap-[40px] select-none">
                <MainButton text="Get Started Request A Qoute" />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile*/}
      <div
  className={`block lg:hidden shadow-sm fixed top-0 w-full z-[999] bg-white py-4 animate-in 0fade-in 
    zoom-in ${
    menu ? "bg-primary py-2" : ""
  }`}
>
  <div className="flex justify-between mx-[10px]">
    <div className="flex gap-[50px] text-[16px] items-center select-none">
      <Image src="/images/logo.png" width={200} height={100} alt="logo" className="w-[7rem]" />
    </div>
    <div className="flex items-center gap-[40px]">
      {menu ? (
        <X
          className="cursor-pointer animate-in fade-in zoom-in text-black"
          onClick={toggleMenu}
        />
      ) : (
        <Image
        src="/images/hamburger.png"
        width={30}
        height={30}
        alt="logo"
        className="cursor-pointer animate-in fade-in zoom-in"
        onClick={toggleMenu}
        />
        )}
     </div>
    </div>
    {menu ? (
  <div className="my-8 select-none animate-in slide-in-from-right">
    <div className="flex flex-col gap-8 mt-8 mx-4">
      {links.map((link, index) => (
        <p
          key={index}
          className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray"
        >
          {link.name}
        </p>
      ))}
    </div>
    <div className="flex items-center gap-[40px] select-none">
      <MainButton text="Request a quote" />
    </div>
  </div>
) : (
  <div>

  </div>
)}
</div>
</div>
  );
  }


       
export default NavBar;
