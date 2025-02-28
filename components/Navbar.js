"use client";
import {
  CircleX,
  Contact,
  FolderKanbanIcon,
  History,
  Home,
  ListRestart,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="sticky top-0  w-full
    z-40
    navbar-container grid  grid-cols-[25%_75%] gap-1 bg-zinc-50 text-zinc-50 shadow-md"
      >
        <div className="navbar-left p-4">
          <span className="text-2xl font-lobster text-blue-900">
            Serhan Çelik
          </span>
        </div>
        <div className="flex md:hidden text-black ml-auto justify-center items-center pr-5">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {!menuOpen ? <Menu size={40} /> : <CircleX size={40} />}
          </button>
        </div>
        <div className="navbar-right pl-10 ml-auto hidden md:flex ">
          <ul className="navbar-menu flex flex-wrap h-full">
            <Link href="#header">
              <li
                className="navbar-menu-item w-48 flex-1 text-center py-4  text-blue-900 
                    hover:border-b-4 border-blue-400
                    hover:bg-blue-950 hover:text-blue-50"
              >
                <div className="text-xl font-bold flex text-center items-center justify-center">
                  <Home className="mr-2" />
                  Ana Sayfa
                </div>
              </li>
            </Link>
            <Link href="#job-history">
              <li
                className="navbar-menu-item  w-48 text-center py-4  text-blue-900 hover:bg-blue-950
                    hover:border-b-4 border-blue-400
                    hover:text-blue-50"
              >
                <div className="text-xl font-bold flex text-center items-center justify-center">
                  <History className="mr-2" />
                  İş Geçmişi
                </div>
              </li>
            </Link>
            <Link href="#references">
              <li
                className="navbar-menu-item text-center py-4  w-48  text-blue-900 hover:bg-blue-950 
                    hover:border-b-4 border-blue-400
                    hover:text-blue-50"
              >
                <div className="text-xl font-bold flex text-center items-center justify-center">
                  <ListRestart className="mr-2" />
                  Referanslar
                </div>
              </li>
            </Link>

            <Link href="#projects">
              <li
                className="navbar-menu-item text-center py-4 w-48  text-blue-900 hover:bg-blue-950 
                    hover:border-b-4 border-blue-400
                    hover:text-blue-50"
              >
                <div className="text-xl font-bold flex text-center items-center justify-center">
                  <FolderKanbanIcon className="mr-2" />
                  Projeler
                </div>
              </li>
            </Link>
            <Link href="#contact">
              <li
                className="navbar-menu-item text-center py-4 w-48 text-blue-900 hover:bg-blue-950 
                    hover:border-b-4 border-blue-400
                    hover:text-blue-50"
              >
                <div className="text-xl font-bold flex text-center items-center justify-center">
                  <Contact className="mr-2" />
                  İletişim
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div
        className={` ${
          menuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 "
        } transition-all duration-300 md:hidden  ease-in-out absolute w-full  flex-col text-blue-950 p-4`}
      >
        <div className="w-full flex flex-col gap-3 justify-center p-5 bg-blue-900 rounded-md">
          <Link
            className="text-lg  bg-white text-blue-950 w-full text-center rounded-2xl p-2"
            href="#header"
          >
            Ana Sayfa
          </Link>
          <Link
            className="text-lg  bg-white text-blue-950 w-full text-center rounded-2xl p-2"
            href="#job-history"
          >
            İş Geçmişi
          </Link>

          <Link
            className="text-lg  bg-white text-blue-950 w-full text-center rounded-2xl p-2"
            href="#references"
          >
             Referanslar
          </Link>

          <Link
            className="text-lg  bg-white text-blue-950 w-full text-center rounded-2xl p-2"
            href="#projects"
          >
             Projeler
          </Link>

          <Link
            className="text-lg  bg-white text-blue-950 w-full text-center rounded-2xl p-2"
            href="#skills"
          >
             Yetenekler
          </Link>

          <Link
            className="text-lg  bg-white text-blue-950 w-full text-center rounded-2xl p-2"
            href="#contact"
          >
             İletişim
          </Link>
        </div>
      </div>
    </div>
  );
}
