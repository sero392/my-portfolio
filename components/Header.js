"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Header() {
  return (
    <div className="header-container grid grid-cols-2 bg-zinc-800">
      <div className="header-left flex flex-col py-[100px] px-7">
        <div className="header-title text-6xl text-zinc-50">
          Merhaba, Ben Serhan
        </div>
        <div className="header-moving-text text-zinc-50 mt-4 text-2xl">
          Ben
          <span className="text-teal-700">
            <Typewriter
              style
              words={[
                " Her şeyden önce insanım",
                " Yazılımcıyım",
                " Frontend Developer'ım",
                " Fullstack Developer'ım",
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
            ></Typewriter>
          </span>
        </div>
        <div className="header-paragraph"></div>
        <div className="header-social-media max-w-[150px] mt-5">
          <ul className="grid grid-cols-4 text-teal-400">
            <li>
              <Instagram size={24} />
            </li>
            <li>
              <Twitter size={24} />
            </li>
            <li>
              <Facebook size={24} />
            </li>
            <li>
              <Linkedin size={24} />
            </li>
          </ul>
        </div>
      </div>
      <div className="header-right">
        <div className="right-image-container h-full flex">
            <Image
              className="border-4 rounded-full shadow-teal-500/30 shadow-xl m-auto border-teal-700"
              width={250}
              height={250}
              alt="Serhan Çelik"
              src="/images/S.jpg"
            />
        </div>
      </div>
    </div>
  );
}
