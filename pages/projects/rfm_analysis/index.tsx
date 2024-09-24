import { CiClock2 } from "react-icons/ci";
import Image from "next/image";
import normada from "../../../public/normagc.png";
import rfm_img_1 from "../../../public/image_1.jpeg";
import rfm_img_2 from "../../../public/image_2.jpeg";
import rfm_img_3 from "../../../public/image_3.jpeg";
import rfm_img_4 from "../../../public/image_4.jpeg";
import rfm_img_5 from "../../../public/image_5.jpeg";
import rfm_img_6 from "../../../public/image_6.jpeg";
import rfm_img_7 from "../../../public/image_6.jpeg";

function RFM() {
  return (
    <div className="pt-5">
      <div className="text-center bg-[#F5F1F8] mb-10 py-10">
        <h4 className="font-Montserrat font-semibold text-3xl pb-5 text-[#464DAF]">
          RFM Analysis using Python
        </h4>
        <div className="flex flex-row mx-auto my-auto justify-center">
          <div className="mt-1 px-2">
            <div className="rounded-full w-5 h-5 overflow-hidden md:h-5 md:w-5">
              <Image src={normada} alt="" />
            </div>
          </div>
          <p className="font-Raleway text-sm uppercase leading-8 text-gray-800">
            Patricia Granados /
          </p>
          <span className="text-xl px-2 mt-1">
            <CiClock2 />
          </span>

          <p className="font-Raleway text-sm uppercase  leading-8 text-gray-800">
            September 23, 2024
          </p>
        </div>
      </div>
      <div className="mb-10 ">
        <p className="font-Raleway text-xl  leading-8 text-gray-800">
          To start with our RFM analysis we need to import the necessary Python
          libraries
        </p>

        <Image src={rfm_img_1} alt="" />
        <p className="font-Raleway text-xl  leading-8 text-gray-800">
          Then we need to import the dataset, and see what it looks like.
        </p>
        <Image src={rfm_img_2} alt="" />
        <Image src={rfm_img_3} alt="" />
        <Image src={rfm_img_4} alt="" />
        <Image src={rfm_img_5} alt="" />
        <Image src={rfm_img_6} alt="" />
        <Image src={rfm_img_7} alt="" />
      </div>
    </div>
  );
}

export default RFM;
