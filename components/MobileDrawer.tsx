import Link from "next/link";
import { AiFillLinkedin, AiFillGithub, AiOutlineClose } from "react-icons/ai";
import { SiTableau } from "react-icons/si";

function MobileDrawer({ isOpen, onClose }) {
  return (
    <div
      className={`fixed  font-Montserrat flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black  transition-transform duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button className="absolute right-7 top-4 p-3" onClick={onClose}>
        <AiOutlineClose className="text-2xl text-[#464DAF]" />
      </button>
      <ul className="flex flex-col justify-center items-center space-y-4">
        <li className="text-3xl hover:text-[#464DAF]" onClick={onClose}>
          <Link href="#inicio">Home</Link>
        </li>
        <li className="text-3xl hover:text-[#464DAF]" onClick={onClose}>
          <Link href="#sobre">About me</Link>
        </li>
        <li className="text-3xl hover:text-[#464DAF]" onClick={onClose}>
          <Link href="#servicios">Services</Link>
        </li>
        <li className="text-3xl hover:text-[#464DAF]" onClick={onClose}>
          <Link href="#portafolio">Portfolio</Link>
        </li>
        <div className="justify-between flex w-32 ">
          <li>
            <a
              href={
                "https://www.linkedin.com/in/norma-patricia-granados-carrasco-3b9ab1183"
              }
              target={"_blank"}
              rel={"noreferrer"}
              className="mr-4"
            >
              <AiFillLinkedin className="cursor-pointer text-3xl  text-[#464DAF] hover:text-black " />
            </a>
          </li>
          <li>
            <a
              href={"https://github.com/normagik"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <AiFillGithub className="cursor-pointer text-3xl  text-[#464DAF] hover:text-black" />
            </a>
          </li>
          <li>
            <a>
              {" "}
              <SiTableau className="cursor-pointer text-3xl  text-[#464DAF] hover:text-black" />
            </a>
          </li>
        </div>
        <li>
          <a
            className="border-solid border-2 border-[#464DAF] px-4 py-2 mt-8 rounded-xl  cursor-pointer bg-[#464DAF] text-white hover:bg-white hover:text-black"
            onClick={onClose}
            href="#contacto"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
export default MobileDrawer;
