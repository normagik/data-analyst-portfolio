import Head from "next/head";
import React, { useState } from "react";

import Hero from "../components/HeroSection";
import About from "../components/AboutMeSection";
import Services from "../components/ServicesSection";
import Portfolio from "../components/PortfolioSection";

function App() {
  return (
    <div className="App">
      <div>
        <Head>
          <title>Patricia Granados Portafolio </title>
          <meta
            name="description"
            content="Data Analyst/Industrial Engineer"
            key="desc"
          ></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-white ">
          <section className=" min-h-screen">
            <Hero />
          </section>
          <About />
          <Services />
          <Portfolio />
        </main>
      </div>
    </div>
  );
}

export default App;
