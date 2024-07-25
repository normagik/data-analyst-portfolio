import Tabs from "./Tabs";

function Portfolio() {
  return (
    <>
      <section id="portfolio" className="pt-10 min-h-screen">
        <div className="px-10 md:px-20 lg:px-40 ">
          <h3 className="font-Montserrat font-medium text-3xl text-[#464DAF] py-1">
            Portfolio
          </h3>
          <div></div>
          <Tabs />
        </div>
      </section>
    </>
  );
}

export default Portfolio;
