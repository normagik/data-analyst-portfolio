import Image from "next/image";
import normada from "../public/normagc.png";

function About() {
  return (
    <>
      <section id="sobre" className="pt-10 bg-[#F5F1F8]  min-h-screen">
        <div className=" px-10 md:px-20 lg:px-40">
          <div>
            <h3 className="font-Montserrat font-medium text-3xl text-[#464DAF] py-1">
              Sobre mí
            </h3>
          </div>
          <div className="lg:flex p-10 font-Raleway">
            <div className="relative rounded-full w-40 h-40 mt-5 overflow-hidden md:h-60 md:w-60 ">
              <Image src={normada} alt="" />
            </div>
            <div className="lg:ml-40">
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
