import React from "react";
import img0 from "./../../public/images/00.jpg";
import img1 from "./../../public/images/01.jpg";
import img2 from "./../../public/images/02.jpg";
import img3 from "./../../public/images/03.jpg";
import img4 from "./../../public/images/04.jpg";
import img5 from "./../../public/images/05.jpg";
import img6 from "./../../public/images/06.jpg";
import img7 from "./../../public/images/07.jpg";
import img8 from "./../../public/images/08.jpg";
import img30 from "./../../public/images/30.jpg";
import img10 from "./../../public/images/10.jpg";
import img11 from "./../../public/images/11.jpg";
import img12 from "./../../public/images/12.jpg";
import img28 from "./../../public/images/28.jpg";
import img22 from "./../../public/images/22.jpg";
import img24 from "./../../public/images/24.jpg";

const Catalog = () => {
  const imgGallery = [
    img0,
    img22,
    img1,
    img2,
    img3,
    img24,
    img11,
    img5,
    img6,
    img7,
    img28,
    img8,
    img30,
    img10,
    img4,
    img12,
  ];

  return (
    <div className="p-5 md:p-10">
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 lg:gap-5 [&>div:not(:first-child)]:mt-2 lg:[&>div:not(:first-child)]:mt-5">
        {imgGallery.map((img) => (
          <div className="overflow-hidden">
            <img
              src={img}
              alt="img"
              className="transform transition-transform duration-1000 hover:scale-125 hover:cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
