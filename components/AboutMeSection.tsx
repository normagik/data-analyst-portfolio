import Image from "next/image";
import normada from "../public/normagc.png";

function About() {
  return (
    <>
      <section id="sobre" className="pt-20 bg-[#F5F1F8]  min-h-screen">
        <div className=" px-10 md:px-20 lg:px-40">
          <div>
            <h3 className="font-Montserrat font-medium text-3xl text-[#464DAF] py-1">
              Sobre mí
            </h3>
          </div>
          <div className="lg:flex p-10 font-Raleway">
            <div className="relative rounded-full w-40 h-40 mt-5 overflow-hidden md:h-60 md:w-60 ">
              <Image src={normada} alt="" layout="fill" objectFit="cover" />
            </div>
            <div className="lg:ml-40">
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
                ¡Hola, mi nombre es Patricia!
              </p>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
                Soy Ingeniera Industrial y de Sistemas
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
