import Image from "next/image";
import data3 from "../public/data3.svg";
import data4 from "../public/data4.jpg";

function Portfolio() {
  return (
    <>
      <section id="portafolio" className="pt-20 min-h-screen">
        <div className="px-10 md:px-20 lg:px-40 ">
          <h3 className="font-Montserrat font-medium text-3xl text-[#464DAF] py-1">
            Portafolio
          </h3>
          <div></div>
          <div className="flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap">
            <div className=" basis-1/3 flex-1 group-hover:opacity-50 cursor-pointer">
              <div className="relative block group">
                <Image
                  alt=""
                  src={data4}
                  className="absolute inset-0 rounded-lg w-full h-80 object-cover"
                />
                <div
                  className="relative transition-all rounded-lg opacity-0 
                                group-hover:opacity-80 w-full h-80 bg-[#464DAF]
                                "
                >
                  <p className="text-xl text-black ">test</p>
                </div>
              </div>
            </div>
            <div className=" basis-1/3 flex-1 group-hover:opacity-50 cursor-pointer">
              <div className="relative block group">
                <Image
                  alt=""
                  src={data4}
                  className="absolute inset-0 rounded-lg w-full h-80 object-cover"
                />
                <div
                  className="relative transition-all rounded-lg opacity-0 
                                group-hover:opacity-50 w-full h-80 bg-[#464DAF]
                                "
                >
                  <div className="absolute z-20 ">
                    <p className=" text-center text-2xl group-hover:opacity-100 text-white/100 ">
                      test
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
