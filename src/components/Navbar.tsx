import Logo from "./../assets/logo.png";

const DesktopMenus = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Partnerships",
    href: "#partnerships",
  },
  {
    name: "Catalog",
    href: "#catalog",
  },
  {
    name: "Contacts",
    href: "#contacts",
  },
];
const Navbar = () => {
  return (
    <header className="bg-white/80 shadow-lg fixed top-0 w-full z-10">
      <div className="container">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-gray-800 font-bold text-3xl">
            <img src={Logo} alt="logo" className="h-10 inline mr-1" />
          </a>
          {/* Desktop Menu */}
          <div className="hidden sm:block">
            <ul className="flex items-center justify-center gap-4">
              {DesktopMenus.map((menu) => (
                <li>
                  <a
                    href={menu.href}
                    className="text-gray-700 hover:text-red-700 px-4 py-4 inline-block select-none"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden block">
            <ul>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-gray-900 px-4 py-4 inline-block select-none font-semibold text-xl"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
