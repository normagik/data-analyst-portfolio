import Data from "./DataAnalysisPortfolio";
import React from "react";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap pt-10">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "font-Montserrat text-lg font-medium px-5 py-3 shadow-lg rounded-xl block border border-solid border-gray-200 leading-normal " +
                  (openTab === 1
                    ? "text-white bg-[#464DAF]"
                    : "text-[#464DAF] bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Data Analysis
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "font-Montserrat text-lg font-medium  px-5 py-3 shadow-lg rounded-xl block border border-solid border-gray-200 leading-normal " +
                  (openTab === 2
                    ? "text-white bg-[#464DAF]"
                    : "text-[#464DAF] bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Tableau
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-4 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Data />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat, commodi hic! Vitae veniam quibusdam facere.
                    Praesentium consectetur, earum natus consequatur,
                    reprehenderit vel illo dolores molestiae quasi sapiente
                    repellat officiis itaque!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
