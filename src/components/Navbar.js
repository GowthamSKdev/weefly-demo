"use client";
import { Menu, Search, UserCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
// import WeeFlyLogo from "/assets/images/WeeFly-white-logo.svg";
import WeeFlyLogo from "../../public/assets/images/WeeFly-white-logo.svg";
import Image from "next/image";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className={` fixed w-full z-50 top-0 px-10 xl:px-20 text-white font-sans ${
          isScrolled ? "backdrop-blur-lg bg-black/50" : ""
        }`}
      >
        <div
          className={`flex justify-between items-center ${
            isScrolled ? "h-20" : "h-30"
          } transition-all duration-300`}
        >
          <div className="">
            <Image
              // src="../../assets/images/WeeFly-white-logo.svg"
              src={WeeFlyLogo}
              alt="WeeFly"
              className="h-10 lg:h-16"
            />
            {/* <img src={WeeFlyLogo} alt="WeeFly" className="h-10 lg:h-16" /> */}
          </div>
          <div className="items-center gap-10 hidden lg:flex">
            <nav className="flex text-base space-x-10">
              <a href="#">Take a tour</a>
              <a href="about">About us</a>
              <a href="#">Contact us</a>
            </nav>
            <div className="flex items-center divide-x gap-4">
              <form>
                <div className=" flex items-center gap-4">
                  <Search
                    className="cursor-pointer"
                    onClick={() => setIsSearchOpen((prev) => !prev)}
                  />
                  <input
                    type="search"
                    placeholder="Find"
                    className={`${
                      isSearchOpen ? "w-32 pr-2" : "w-0 pr-0"
                    } outline-none ring-0 transition-all duration-300 ease-in-out`}
                  />
                  <button className="hidden" type="submit" />
                </div>
              </form>
              <div className="flex items-center gap-4">
                <button
                  className="bg-orange-600 px-3.5 py-2 flex items-center rounded-md gap-2"
                  suppressHydrationWarning
                >
                  <UserCircle />
                  <span>Login/Register</span>
                </button>
                <Image
                  src="/assets/images/africaflag.png"
                  height={39}
                  width={39}
                  alt="africa flag"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-[12px] lg:hidden cursor-pointer">
            <UserCircle />
            <button className="" onClick={() => setIsMenuOpen((prev) => !prev)}>
              {isMenuOpen ? (
                <X />
              ) : (
                <Image src="/assets/images/menu.svg" height={24} width={24} />
              )}
            </button>
          </div>
          {/* <Menu
            className="lg:hidden cursor-pointer"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          /> */}
        </div>
      </div>
      <div
        className={`bg-black transition-transform ease-in-out duration-300 origin-right fixed lg:hidden right-0 top-0 h-full z-20 ${
          isMenuOpen ? "w-full" : "w-0"
        }`}
      >
        {/* <div className="h-10 flex justify-between items-center px-2">
          <div className="">WeeFly</div>
          <X
            className="lg:hidden cursor-pointer"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
