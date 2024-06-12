import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Partnerships from "./components/Partnerships";
import Catalog from "./components/Catalog";

function App() {
  return (
    <>
      <div>
        <Hero />
        <About />
        {/* <Partnerships /> */}
        <Catalog />
      </div>
    </>
  );
}

export default App;
