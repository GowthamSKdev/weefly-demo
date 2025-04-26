"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Using your existing AfricanExperienceData array
const AfricanExperienceData = [
  {
    image: "/assets/images/africanExperiences/flights.svg",
    title: "Flights",
  },
  {
    image: "/assets/images/africanExperiences/cabs.svg",
    title: "Cabs",
  },
  {
    image: "/assets/images/africanExperiences/Packages.svg",
    title: "Packages",
  },
  {
    image: "/assets/images/africanExperiences/forex.svg",
    title: "Forex",
  },
  {
    image: "/assets/images/africanExperiences/esim-Icon.svg",
    title: "eSIM",
  },
  {
    image: "/assets/images/africanExperiences/Hotels.svg",
    title: "Hotels",
  },
  {
    image: "/assets/images/africanExperiences/Rentals.svg",
    title: "Rentals",
  },
  {
    image: "/assets/images/africanExperiences/Tours-icon.svg",
    title: "Tours",
  },
  {
    image: "/assets/images/africanExperiences/event-icon.svg",
    title: "Events",
  },
  {
    image: "/assets/images/africanExperiences/Offers.svg",
    title: "Offers",
  },
  {
    image: "/assets/images/africanExperiences/Insurance.svg",
    title: "Insurance",
  },
  {
    image: "/assets/images/africanExperiences/concierge-black.svg",
    title: "Concierge",
  },
  {
    image: "/assets/images/africanExperiences/ferries.svg",
    title: "Ferries",
  },
  {
    image: "/assets/images/africanExperiences/trains.svg",
    title: "Trains",
  },
];

const AfricanExperience = () => {
  const [rotation, setRotation] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Optional: Auto-rotate the circle
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.2) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Circle properties
  const radius = 250;
  const mobileRadius = 150;
  const iconSize = 55;
  const mobileIconSize = 40;
  const totalIcons = AfricanExperienceData.length;

  return (
    <>
      <div className="relative hidden lg:block">
        <div className="overflow-hidden min-h-screen h-full w-full bg-gradient-to-r from-[#fad9cf] to-[#f28c72] relative text-black font-sans flex flex-col lg:flex-row items-center ">
          <div className="w-full bg-gradient-to-t from-[#fad9cf] to-[#f28c72] relative text-black font-sans flex items-center bg-[url('/assets/images/africanExperiences/AfricanExperienceDesktopBg.svg')] bg-no-repeat bg-center bg-cover px-8 lg:px-20">
            <div className="w-full lg:w-1/2 h-full font-jakarta relative">
              <Image
                src={"/assets/images/AfricanExperienceBg.png"}
                height={800}
                width={1200}
                alt="African Experience Background"
                className="absolute mix-blend-plus-lighter -left-20 -top-38"
              />
              <h1 className="font-black tracking-tight text-black @max-xs:text-2xl xl:text-[80px] leading-[150%] z-10">
                Live the <br /> African <br /> Experience
              </h1>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center items-center py-12 lg:py-0">
              <div className="relative w-full max-w-xl aspect-square">
                {/* Center text */}
                <div className="absolute inset-0 right-[7%] flex items-center justify-center z-10">
                  {/* <p className="text-center text-xl lg:text-3xl font-medium max-w-xs">
                Discover Local Options, <br /> Experience the Unexplored!
              </p> */}
                  <p className="text-center text-3xl">
                    Discover Local Options, <br /> Experience the Unexplored!
                  </p>
                </div>

                {/* Circle outline */}
                {/* <div className="absolute inset-0 border-2 border-orange-400 rounded-full"></div> */}

                {/* Icons positioned around the circle */}
                {AfricanExperienceData.map((item, index) => {
                  // Calculate position around the circle

                  const angle = (index * (360 / totalIcons) + rotation) % 360;
                  const radians = (angle * Math.PI) / 180;

                  // Calculate positions (center of circle + offset based on angle)
                  const top = `calc(50% - ${iconSize}px + ${
                    radius * Math.sin(radians)
                  }px)`;
                  const left = `calc(50% - ${iconSize}px + ${
                    radius * Math.cos(radians)
                  }px)`;

                  // const isHovered = hoveredIndex === index;
                  // ${
                  //   isHovered ? "scale-125" : "scale-100"
                  //   }
                  // ${
                  //   isHovered ? "text-black" : "text-gray-800"
                  // }
                  return (
                    <div
                      key={index}
                      className={`absolute transition-all duration-300 flex flex-col items-center hover:scale-125 ease-in-out
                   
                  `}
                      style={{ top, left }}
                      // onMouseEnter={() => setHoveredIndex(index)}
                      // onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="p-2 rounded-full mb-2">
                        <Image
                          src={item.image}
                          alt={item.title}
                          // width={iconSize}
                          // height={iconSize}
                          height={55}
                          width={55}
                          className="object-contain "
                        />
                      </div>
                      <p className={`text-[15px] font-medium font-sans `}>
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* paper element */}
        <Image
          src="/assets/images/banner-bottom.png"
          alt="Decorative bottom banner"
          height={40}
          width={662}
          className="absolute bottom-[-40px] z-30 h-20 w-full object-cover border"
        />
      </div>
      {/* mobile section */}
      <div className="relative lg:hidden ">
        <div className="overflow-hidden h-screen w-full bg-gradient-to-t from-[#fad9cf] to-[#f28c72] relative text-black font-sans flex flex-col items-center px-4">
          <div className="overflow-hidden h-screen w-full bg-gradient-to-t from-[#fad9cf] to-[#f28c72] relative text-black font-sans flex flex-col items-center bg-[url('/assets/images/africanExperiences/africanExprenceMobileBg.svg')] bg-no-repeat bg-center bg-cover">
            <div className="font-jakarta h-full w-full flex justify-center items-center relative flex-1 mx-auto">
              <Image
                src={"/assets/images/AfricanExperienceFullBg.png"}
                alt="African Experience Background"
                className="mix-blend-screen opacity-50 absolute left-0 h-full w-full scale-125 inset-0 sm:scale-[130%] object-contain"
                fill
              />
              <h1 className="font-extrabold font-jakarta text-[36px] leading-[150%] stroke-black stroke-3">
                Live the <br /> African <br /> Experience
              </h1>
            </div>
            <div className="mx-auto relative w-full flex flex-1">
              <div className="relative w-full">
                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <p className="text-center text-base">
                    Discover Local Options, <br /> Experience the Unexplored!
                  </p>
                </div>

                {/* Circle outline */}

                {/* Icons positioned around the circle */}
                {AfricanExperienceData.map((item, index) => {
                  // Calculate position around the circle
                  const totalIcons = AfricanExperienceData.length;
                  const radius = 160;
                  const size = 40;
                  // const angle = index * (360 / totalIcons) * (Math.PI / 180);
                  // const top = `calc(50% - ${size / 2}px + ${
                  //   radius * Math.sin(angle)
                  // }px)`;
                  // const left = `calc(50% - ${size / 2}px + ${
                  //   radius * Math.cos(angle)
                  //   }px)`;

                  const angle = (index * (360 / totalIcons) + rotation) % 360;
                  const radians = (angle * Math.PI) / 180;

                  // Calculate positions (center of circle + offset based on angle)
                  const top = `calc(50% - ${size}px + ${
                    radius * Math.sin(radians)
                  }px)`;
                  const left = `calc(50% - ${size}px + ${
                    radius * Math.cos(radians)
                  }px)`;
                  return (
                    <div
                      key={index}
                      className={`absolute transition-all duration-300 flex flex-col items-center
                   
                  `}
                      style={{ top, left }}
                      // onMouseEnter={() => setHoveredIndex(index)}
                      // onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="p-2 rounded-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          // width={iconSize}
                          // height={iconSize}
                          height={size}
                          width={size}
                          className="object-contain"
                        />
                      </div>
                      <p className={`text-[9px] font-medium font-sans `}>
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/assets/images/banner-bottom.png"
          alt="Decorative bottom banner"
          height={40}
          width={662}
          className="absolute bottom-[-36px] z-30 h-20 w-full object-cover border"
        />
      </div>
      <style jsx global>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }

        @keyframes scrollReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-rotate {
          animation: rotate 25s linear infinite; /* 🔥 corrected */
        }

        .animate-scroll-reverse {
          animation: scrollReverse 25s linear infinite;
        }
      `}</style>
    </>
  );
};

export default AfricanExperience;
