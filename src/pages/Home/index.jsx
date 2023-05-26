import React, { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import CategoryTab from "./CategoryTab";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Testomnial from "./Testomonial";
import Contact from "./Contact";

const Home = () => {
  useEffect(() => {
    document.title = "CAR GALAXY || Home ";
  }, []);

  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <Gallery />
      </div>
      <Container>
        <h1 className="text-3xl font-semibold text-center my-8">
          Shop By Category
        </h1>
        <div>
          <CategoryTab />
        </div>
        <div>
          <Testomnial />
        </div>
      </Container>
      <div className="bg-slate-100">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
