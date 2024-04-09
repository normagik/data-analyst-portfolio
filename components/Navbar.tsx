import Link from "next/link";
import MobileMenuButton from "./MobileMenuButton";
import MobileDrawer from "./MobileDrawer";
import React, { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav className=" hidden py-10 mb-12 lg:flex px-10 md:px-20 lg:px-40 ">
        <div className="flex mr-auto ">
          <Link href="#inicio">
            <p className="text-xl px-6 cursor-pointer no-underline hover:underline underline-offset-8 decoration-[#464DAF]">
              Inicio
            </p>
          </Link>
          <Link href="#sobre">
            <p className="text-xl px-3 cursor-pointer no-underline hover:underline underline-offset-8 decoration-[#464DAF]">
              Sobre mí
            </p>
          </Link>
          <Link href="#servicios">
            <p className="text-xl px-6  cursor-pointer no-underline hover:underline underline-offset-8 decoration-[#464DAF]">
              Servicios
            </p>
          </Link>
          <Link href="#portafolio">
            <p className="text-xl px-6  cursor-pointer no-underline hover:underline underline-offset-8 decoration-[#464DAF]">
              Portafolio
            </p>
          </Link>
          <Link href="">
            <p className="text-xl px-3  cursor-pointer no-underline hover:underline underline-offset-8 decoration-[#464DAF]">
              Blog
            </p>
          </Link>
        </div>
        <ul className="flex items-center justify-between ">
          <li className="px-4">
            <a>
              {" "}
              <AiFillLinkedin className="cursor-pointer text-2xl hover:text-[#464DAF] " />
            </a>
          </li>
          <li>
            <a>
              {" "}
              <AiFillGithub className="cursor-pointer text-2xl hover:text-[#464DAF] " />
            </a>
          </li>
          <li>
            <a
              className="border-solid border-2 border-[#464DAF] px-4 py-2 rounded-xl ml-8 cursor-pointer hover:bg-[#464DAF] hover:text-white"
              href="#"
            >
              Contáctame
            </a>
          </li>
        </ul>
      </nav>
      <div className="lg:hidden relative flex flex-row my-4">
        <MobileMenuButton onClick={handleDrawerToggle} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>
    </>
  );
}
export default Navbar;
