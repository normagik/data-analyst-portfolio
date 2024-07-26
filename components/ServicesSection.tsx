import Image from "next/image";
import visualization from "../public/visualization_.svg";
import analysis from "../public/analysis_.svg";
import cleaning from "../public/cleaning_.svg";

function Services() {
  return (
    <>
      <section
        id="services"
        className="pt-10 px-10 md:px-20 lg:px-40 min-h-screen"
      >
        <div>
          <h3 className="font-Montserrat font-medium text-3xl text-[#464DAF] py-1">
            Services
          </h3>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-left shadow-lg  border border-solid border-gray-200 p-10 rounded-xl my-10">
            <Image src={cleaning} alt="cleaning" />
            <h3 className="text-lg font-medium pt-8 pb-2">Data Cleaning</h3>
            <div className="w-60">
              <p className="py-2  text-left">
                Transform raw data into a valuable asset. Through meticulous
                preparation and refinement, I help you achieve data that is
                accurate, consistent, and analysis-ready.
              </p>
            </div>
          </div>
          <div className="text-left shadow-lg  border border-solid border-gray-200 p-10 rounded-xl my-10">
            <Image className="pt-2" src={analysis} alt="analysis" />
            <h3 className="text-lg font-medium pt-8 pb-2">Data Analysis</h3>
            <div className="w-60">
              <p className="py-2  ">
                Unlock the stories within your data. I delve into your datasets
                to uncover patterns, trends, and insights that inform strategic
                decisions and drive business growth.
              </p>
            </div>
          </div>
          <div className="text-left shadow-lg  border border-solid border-gray-200 p-10 rounded-xl my-10">
            <Image src={visualization} alt="visualization" />
            <h3 className="text-lg  font-medium pt-8 pb-2">Visualization</h3>
            <div className="w-60">
              <p className="py-2  ">
                Transform data into compelling visuals. I create intuitive and
                impactful visual representations that make complex information
                easy to understand and act upon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
