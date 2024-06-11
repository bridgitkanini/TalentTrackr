import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BgImage from "./assets/bg-image.jpg";

function App() {
  const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
  };

  return (
    <>
      <div style={bgImage}>
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
