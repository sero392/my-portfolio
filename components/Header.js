import { GetData } from "@/utils/ApiUtil";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import TypeWriter from "./TypeWriter";

async function getData() {
  const url = process.env.NEXT_PUBLIC_SITE_URL;

  const response = await GetData(url + "api/about");
  return await response.json();
}

export default async function Header() {
  const response = await getData();
  return (
    <div id="header" className="header-container  bg-blue-950 flex flex-wrap flex-col lg:flex-row">
      <div className="header-left flex flex-col flex-1  py-[100px] px-7 order-last lg:order-first">
        <div className="header-title text-6xl text-zinc-50">
          Merhaba, Ben Serhan
        </div>
        <div className="header-moving-text text-zinc-50 mt-4 text-2xl">
          Ben
          <span className="text-blue-50">
            <TypeWriter
              words={[
                " Her şeyden önce insanım",
                " Yazılımcıyım",
                " Frontend Developer'ım",
                " Fullstack Developer'ım",
              ]}
            ></TypeWriter>
          </span>
        </div>

        <div className="header-moving-text text-zinc-50 mt-4 text-sm">
          <span className="text-blue-50 italic">{response?.data?.AboutText}</span>
        </div>
        <div className="header-paragraph"></div>
        <div className="header-social-media max-w-[150px] mt-5">
          <ul className="grid grid-cols-4 text-blue-50">
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
      <div className="header-right  flex flex-1 justify-center pt-10 lg:pt-0">
        <div className="right-image-container h-full flex">
          <Image
            priority={true}
            className="border-4 rounded-full shadow-blue-200
            hover:shadow-blue-400
            transition-shadow duration-500 shadow-lg hover:shadow-2xl
             m-auto border-blue-50"
            width={250}
            height={250}
            alt="Serhan Çelixk"
            src="/images/S.jpg"
          />
        </div>
      </div>
    </div>
  );
}
