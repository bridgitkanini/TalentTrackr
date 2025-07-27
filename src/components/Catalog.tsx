const img0 = "/images/00.jpg";
const img1 = "/images/01.jpg";
const img2 = "/images/02.jpg";
const img3 = "/images/03.jpg";
const img4 = "/images/04.jpg";
const img5 = "/images/05.jpg";
const img6 = "/images/06.jpg";
const img7 = "/images/07.jpg";
const img8 = "/images/08.jpg";
const img10 = "/images/10.jpg";
const img11 = "/images/11.jpg";
const img12 = "/images/12.jpg";
const img22 = "/images/22.jpg";
const img24 = "/images/24.jpg";
const img28 = "/images/28.jpg";
const img30 = "/images/30.jpg";

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
    <div id="catalog" className="p-5 md:p-10 lg:pt-24">
      <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 lg:gap-5 [&>div:not(:first-child)]:mt-2 lg:[&>div:not(:first-child)]:mt-5">
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
