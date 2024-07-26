import Image from "next/image";
import normada from "../public/normagc.png";

function About() {
  return (
    <>
      <section id="about" className="pt-10 bg-[#F5F1F8]  min-h-screen">
        <div className=" px-10 md:px-20 lg:px-40">
          <div>
            <h3 className="font-Montserrat font-medium text-3xl text-[#464DAF] py-1">
              About me
            </h3>
          </div>
          <div className="lg:flex p-10 font-Raleway">
            <div className="relative rounded-full w-40 h-40 mt-5 overflow-hidden md:h-60 md:w-60 ">
              <Image src={normada} alt="" />
            </div>
            <div className="lg:ml-40">
              <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
                Hi, I'm Patricia Granados, an industrial engineer with a passion
                for data analysis and front-end development. I hold an IBM
                certification in data analysis and recently completed a job
                simulation with Accenture.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
                While new to professional data analysis, my experience as a
                remote Front End Developer has given me a strong foundation in
                programming and problem-solving.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
                My industrial engineering background and technical skills allow
                me to leverage data to drive insights and inform decisions. I
                enjoy reading and doing origami, which enhance my creativity and
                continuous learning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
