import React from "react";
import Card from "./CardItem";
import data4 from "../public/data4.jpg";

const projects = [
  {
    id: 1,
    src: "/data4.jpg",
    tools: "Python, Tableau",
    title: "A/B Testing | Python | Tableau",
    info: "Lorem ipsum",
  },
  {
    id: 2,
    src: "/data4.jpg",
    tools: "Python, Tableau",
    title: "RFM Analysis | Tableau | Python",
    info: "Lorem ipsum",
  },
  {
    id: 3,
    src: "/data4.jpg",
    tools: "Python, Tableau",
    title: " | Tableau | Python",
    info: "Lorem ipsum",
  },
  {
    id: 4,
    src: "/data4.jpg",
    tools: "Python, Tableau",
    title: " | Tableau | Python",
    info: "Lorem ipsum",
  },
];
function Data() {
  return (
    <>
      <div className="flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap">
        {projects.map((project: any) => {
          return <Card project={project} key={project.id} />;
        })}
      </div>
    </>
  );
}

export default Data;
