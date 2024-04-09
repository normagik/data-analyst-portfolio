import Image from "next/image";
import data3 from "../public/data3.svg";
import data4 from "../public/data4.jpg";

function Portfolio() {
  return (
    <>
      <section id="portafolio" className="px-10 md:px-20 lg:px-40">
        <div>
          <h3 className="text-3xl text-[#464DAF] py-1">Portafolio</h3>
          <div></div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className=" basis-1/3 flex-1 group-hover:opacity-50 cursor-pointer">
              <a className="relative block group">
                <Image
                  alt=""
                  src={data3}
                  layout="responsive"
                  className="absolute inset-0 rounded-lg w-full h-full object-cover"
                />
                <div
                  className="relative transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 w-full h-full
                                "
                >
                  <div className="p-2">
                    <p className="text-xl text-black bg-gray-300">test</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="basis-1/3 flex-1 cursor-pointer">
              <Image
                alt=""
                src={data3}
                width={"100%"}
                height={"100%"}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="basis-1/3 flex-1 cursor-pointer">
              <Image
                alt=""
                src={data4}
                width={"100%"}
                height={"100%"}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="basis-1/3 flex-1 cursor-pointer">
              <Image
                alt=""
                src={data4}
                width={"100%"}
                height={"100%"}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="basis-1/3 flex-1 cursor-pointer">
              <Image
                alt=""
                src={data3}
                width={"100%"}
                height={"100%"}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
