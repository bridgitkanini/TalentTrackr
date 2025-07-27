const img35 = "/images/35.jpg";
const img14 = "/images/14.jpg";
const img34 = "/images/34.jpg";

const Contacts = () => {
  const bgImage = {
    backgroundImage: `url(${img35})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "calc(100vh - 100px)",
    width: "100%",
    "@media (max-width: 768px)": {
      height: "calc(100vh - 50px)",
    },
  };

  return (
    <main id="contacts">
      <div className="flex flex-col items-center justify-center h-[70vh] gap-10 mx-auto md:w-[750px]">
        <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl">
          Contact Us
        </h1>
        <div className="flex flex-col items-center justify-center gap-2">
          <p>
            <strong>Instagram:</strong> @rootsandradiance
          </p>
          <p>
            <strong>Pinterest:</strong> rootsandradianceCo
          </p>
          <p>
            <strong>X:</strong> @rootsandradiance
          </p>
          <p>
            <strong>Email:</strong> rootsandradiance@gmail.com
          </p>
          <p>
            <strong>Tel:</strong> +1 (555) 555-5555
          </p>
        </div>
      </div>
      <div
        style={bgImage}
        className="flex flex-col items-center justify-center"
      >
        <div className="border-[20px] border-black grid grid-cols-4  sm:grid-cols-4 md:grid-cols-4 w-[350px] md:w-[950px] items-center justify-center">
          <div className="h-full w-full">
            <img
              src={img14}
              alt="model image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="bg-neutral-950 h-full flex flex-col justify-center items-center">
            <h1 className="hidden sm:block text-white text-center text-sm sm:text-xl md:text-3xl">
              ROOTS & RADIANCE
            </h1>
            <p className=" text-white text-xs sm:text-xs md:text-sm text-center">
              Enchanting frames - Endless Memories
            </p>
          </div>
          <div>
            <img src={img34} alt="model image" />
          </div>
          <div className="bg-neutral-950  h-full flex flex-col justify-center items-center text-white text-center text-xs sm:text-base md:text-2xl">
            <p>ELEGANT.</p>
            <p>TIMELESS.</p>
            <p>AUTHENTIC.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
