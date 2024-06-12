import Navbar from "./Navbar.jsx";
import { GrGallery } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import BgImage from "./../assets/bg-image.jpg";

const Hero = () => {
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
      <main id="home" style={bgImage}>
        <Navbar />
        <div className="flex flex-row">
          <div className="flex flex-col items-start gap-4 mt-10 ml-4 md:ml-8">
            <div className="w-1 h-40 mx-5 mt-4 border-r border-gray-300"></div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-white w-12 h-12 flex justify-center items-center">
                <GrGallery />
              </span>
              <span className="text-white w-12 h-12 flex justify-center items-center">
                <FaInstagram />
              </span>
              <span className="text-white w-12 h-12 flex justify-center items-center">
                <FaXTwitter />
              </span>
            </div>
            <div className="w-1 h-40 mx-5 mt-4 border-r border-gray-300"></div>
          </div>
          <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
            <div className="w-full flex justify-center">
              <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
                <h1 className="md:w-[750px] text-center text-3xl sm:text-5xl md:text-7xl text-white mix-blend-difference ">
                  ROOTS & RADIANCE
                </h1>
                <p className="text-white text-xl mix-blend-difference ">
                  Enchanting frames - Endless Memories
                </p>
                <button className="border border-white hover:border-red-700 py-2 px-4 text-white font-semibold mix-blend-difference">
                  Book a Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
