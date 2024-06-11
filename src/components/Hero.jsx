import React from "react";

const Hero = () => {
  return (
    <>
      <main>
        <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
          <h1 className="md:w-[750px] text-center text-3xl sm:text-5xl md:text-7xl text-white mix-blend-difference ">Roots & Radiance</h1>
          <p className="text-white text-xl mix-blend-difference ">Enchanting frames - Endless Memories</p>
          <button className="border border-white hover:border-red-700 py-2 px-4 text-white font-semibold mix-blend-difference">Book a Session</button>
        </div>
      </main>
    </>
  );
};

export default Hero;
