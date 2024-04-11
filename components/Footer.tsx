import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiTableau } from "react-icons/si";

function Footer() {
  return (
    <>
      <div className="bg-[#F5F1F8] w-full h-40">
        <div className="flex flex-col pt-10 items-center justify-center ">
          <div>
            <ul className="flex w-36 justify-between">
              <li>
                <a>
                  {" "}
                  <AiFillLinkedin className="cursor-pointer text-4xl text-[#464DAF] hover:text-black " />
                </a>
              </li>
              <li>
                <a>
                  {" "}
                  <AiFillGithub className="cursor-pointer text-4xl text-[#464DAF] hover:text-black " />
                </a>
              </li>
              <li>
                <a>
                  {" "}
                  <SiTableau className="cursor-pointer text-4xl text-[#464DAF] hover:text-black " />
                </a>
              </li>
            </ul>
          </div>
          <p
            className="
           text-[#464DAF] py-5"
          >
            Copyright &#169; 2024 Patricia Granados
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
