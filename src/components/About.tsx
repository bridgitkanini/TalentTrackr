import Logo from "./../assets/logo.png";

const img21 = "/images/21.jpg";
const img26 = "/images/26.jpg";

const About = () => {
  return (
    <main id="about">
      <div className="flex flex-col items-center justify-center h-[70vh] gap-10 mx-auto md:w-[750px]">
        <h1 className="text-center text-xl sm:text-3xl md:text-5xl">
          About Roots & Radiance
        </h1>
        <p>
          Roots & Radiance Photography is dedicated to capturing the true
          essence of beauty through our unique and vibrant lens. We specialize
          in creating stunning visuals that highlight the natural elegance and
          diversity of our subjects. Our team collaborates with top creatives in
          the advertising industry to produce impactful and memorable campaigns.
          With a focus on authenticity and artistry, we bring out the brilliance
          in every moment we capture. Our state-of-the-art studio and expert
          photographers ensure every shoot is a masterpiece. Discover the
          radiance within and let us tell your story through powerful imagery.
          Roots & Radiance Photography - where every photo shines.
        </p>
      </div>
      <div className="flex flex-col gap-10 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2">
          <div className=" flex flex-col justify-center items-center">
            <h1 className=" text-center text-xl sm:text-3xl md:text-5xl">
              ROOTS & RADIANCE
            </h1>
            <p className="text-xs sm:text-sm md:text-xl text-center">
              Enchanting frames - Endless Memories
            </p>
          </div>
          <div>
            <img src={img21} alt="model image" />
          </div>
          <div>
            <img src={img26} alt="model image" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <svg
              viewBox="0 0 100 100"
              className="w-40 h-40 text-xs sm:text-sm md:text-base"
            >
              <path
                id="lowerCurve"
                d="M 10,50 A 40,40 0 0,1 90,50"
                fill="transparent"
              />
              <text>
                <textPath
                  href="#lowerCurve"
                  startOffset="50%"
                  text-anchor="middle"
                >
                  Your Memories
                </textPath>
              </text>
            </svg>
            <img
              src={Logo}
              alt="logo"
              className="h-20 sm:h-32 md:h-40 -my-32 rounded-[95%]"
            />

            <svg
              viewBox="0 0 100 100"
              className="w-40 h-40 text-xs sm:text-sm md:text-base mt-4 md:mt-8"
            >
              <path
                id="upperCurve"
                d="M 10,50 A 40,40 0 0,0 90,50"
                fill="transparent"
              />
              <text>
                <textPath
                  href="#upperCurve"
                  startOffset="50%"
                  text-anchor="middle"
                >
                  Our Camera Lens
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
