import React from "react";
import Card from "./CardItem";
import data4 from "../public/data4.jpg";
import Link from "next/link";

const projects = [
  {
    id: 1,
    src: "/data4.jpg",
    link: "/projects/ab-testing",
    tools: "Python, Tableau",
    title: "A/B Testing | Python | Tableau",
    info: "Lorem ipsum",
  },
  {
    id: 2,
    src: "/data4.jpg",
    link: "/projects/rfm_analysis",
    tools: "Python",
    title: "RFM Analysis | Python",
    info: "Lorem ipsum",
  },
  {
    id: 3,
    src: "/data4.jpg",
    link: "/",
    tools: "Python, Tableau",
    title: " | Tableau | Python",
    info: "Lorem ipsum",
  },
  {
    id: 4,
    src: "/data4.jpg",
    link: "/",
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
          return (
            <Link href={project.link}>
              <Card project={project} key={project.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Data;
