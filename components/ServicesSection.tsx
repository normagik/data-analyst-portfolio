import Image from "next/image";
import visualization from "../public/visualization_.svg";
import analysis from "../public/analysis_.svg";

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
          <div className="text-center shadow-lg  border border-solid border-gray-200 p-10 rounded-xl my-10">
            <Image />
            <h3 className="text-lg font-medium pt-8 pb-2">Data Cleaning</h3>
            <p className="py-2">loremipsum</p>
            <h4 className="py-4 text-[#464DAF]">Herramientas</h4>
            <p className="text-gray-800 py-1">python</p>
            <p className="text-gray-800 py-1">tableau</p>
          </div>
          <div className="text-center shadow-lg  border border-solid border-gray-200 p-10 rounded-xl my-10">
            <Image src={analysis} alt="" />

            <h3 className="text-lg font-medium pt-8 pb-2">Data Analysis</h3>
            <p className="py-2">loremipsum</p>
            <h4 className="py-4 text-[#464DAF]">Herramientas</h4>
            <p className="text-gray-800 py-1">python</p>
            <p className="text-gray-800 py-1">tableau</p>
          </div>
          <div className="text-center shadow-lg  border border-solid border-gray-200 p-10 rounded-xl my-10">
            <Image src={visualization} alt="" />
            <h3 className="text-lg  font-medium pt-8 pb-2">Visualization</h3>
            <p className="py-2">loremipsum</p>
            <h4 className="py-4 text-[#464DAF]">Herramientas</h4>
            <p className="text-gray-800 py-1">python</p>
            <p className="text-gray-800 py-1">tableau</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
