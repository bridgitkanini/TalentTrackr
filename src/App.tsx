import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Partnerships from "./components/Partnerships";
import Catalog from "./components/Catalog";
import Contacts from "./components/Contacts";


function App() {
  return (
    <>
      <div>
        <Hero />
        <About />
        <Partnerships />
        <Catalog />
        <Contacts />
      </div>
    </>
  );
}

export default App;
