import Image from "next/image";

function Services() {
  return (
    <>
      <section id="servicios" className="mt-20 px-10 md:px-20 lg:px-40">
        <div>
          <h3 className="text-3xl text-[#464DAF] py-1">Servicios</h3>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image />
            <h3 className="text-lg font-medium pt-8 pb-2">Data Analysis</h3>
            <p className="py-2">loremipsum</p>
            <h4 className="py-4 text-[#464DAF]">Herramientas</h4>
            <p className="text-gray-800 py-1">python</p>
            <p className="text-gray-800 py-1">tableau</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image />
            <h3 className="text-lg font-medium pt-8 pb-2">Análisis</h3>
            <p className="py-2">loremipsum</p>
            <h4 className="py-4 text-[#464DAF]">Herramientas</h4>
            <p className="text-gray-800 py-1">python</p>
            <p className="text-gray-800 py-1">tableau</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image />
            <h3 className="text-lg  font-medium pt-8 pb-2">Visualización</h3>
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
