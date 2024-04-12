import Image from "next/image";
import data3 from "../public/data3.svg";
import data4 from "../public/data4.jpg";

function Data() {
  return (
    <>
      <div className="flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap">
        <div className=" basis-1/3 flex-1  cursor-pointer">
          <div className=" relative block group">
            <Image
              alt=""
              src={data4}
              className="absolute inset-0 rounded-lg w-full h-80 object-cover"
            />
            <div
              className=" relative transition-all rounded-lg bg-transparent
                               w-full h-80  group-hover:bg-[#464DAF]/50
                                "
            >
              <p className="relative z-20  text-center text-2xl opacity-0 group-hover:opacity-100 text-white ">
                test
              </p>
            </div>
          </div>
        </div>
        <div className=" basis-1/3 flex-1  cursor-pointer">
          <div className=" relative block group">
            <Image
              alt=""
              src={data4}
              className="absolute inset-0 rounded-lg w-full h-80 object-cover"
            />
            <div
              className=" relative transition-all rounded-lg bg-transparent
                               w-full h-80  group-hover:bg-[#464DAF]/50
                                "
            >
              <p className="relative z-20  text-center text-2xl opacity-0 group-hover:opacity-100 text-white ">
                test
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Data;
