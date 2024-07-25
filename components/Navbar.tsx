import Link from "next/link";
import MobileMenuButton from "./MobileMenuButton";
import MobileDrawer from "./MobileDrawer";
import React, { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiTableau } from "react-icons/si";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav className=" hidden font-Montserrat py-10 mb-12 lg:flex px-10 md:px-20 lg:px-40 ">
        <div className="flex mr-auto ">
          <Link href="/#home">
            <p className="text-xl px-6 cursor-pointer no-underline hover:text-[#464DAF] hover:underline underline-offset-8 decoration-[#464DAF]">
              Home
            </p>
          </Link>
          <Link href="/#about">
            <p className="text-xl px-3 cursor-pointer no-underline hover:text-[#464DAF] hover:underline underline-offset-8 decoration-[#464DAF]">
              About me
            </p>
          </Link>
          <Link href="/#services">
            <p className="text-xl px-6  cursor-pointer no-underline hover:text-[#464DAF] hover:underline underline-offset-8 decoration-[#464DAF]">
              Services
            </p>
          </Link>
          <Link href="/#portfolio">
            <p className="text-xl px-6  cursor-pointer no-underline hover:text-[#464DAF] hover:underline underline-offset-8 decoration-[#464DAF]">
              Portfolio
            </p>
          </Link>
        </div>
        <ul className="flex items-center justify-between ">
          <li className="px-4">
            <a
              href={
                "https://www.linkedin.com/in/norma-patricia-granados-carrasco-3b9ab1183"
              }
              target={"_blank"}
              rel={"noreferrer"}
            >
              <AiFillLinkedin className="cursor-pointer text-3xl text-[#464DAF] hover:text-black " />
            </a>
          </li>
          <li>
            <a
              href={"https://github.com/normagik"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <AiFillGithub className="cursor-pointer text-3xl text-[#464DAF] hover:text-black " />
            </a>
          </li>
          <li className="px-4">
            <a>
              {" "}
              <SiTableau className="cursor-pointer text-3xl text-[#464DAF] hover:text-black " />
            </a>
          </li>
          <li>
            <a
              className="border-solid border-2 border-[#464DAF] px-4 py-2 rounded-xl ml-8 cursor-pointer bg-[#464DAF] text-white hover:bg-white hover:text-black"
              href="/#contact"
            >
              Contact
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
