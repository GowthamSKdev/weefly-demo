// import Image from "next/image";
// import DebugMediaQuery from "@/utils/DebugMediaQuery";

// // import Trains from "../../../public/assets/africanExperience/trains.svg";
// import Trains from "../../../public/assets/images/africanExperiences/trains.svg";
// import Ferries from "../../../public/assets/images/africanExperiences/ferries.svg";
// import Concierge from "../../../public/assets/images/africanExperiences/concierge-black.svg";
// import Insurance from "../../../public/assets/images/africanExperiences/Insurance.svg";
// import Offers from "../../../public/assets/images/africanExperiences/Offers.svg";
// import Events from "../../../public/assets/images/africanExperiences/event-icon.svg";
// import Tours from "../../../public/assets/images/africanExperiences/Tours-icon.svg";
// import Rentals from "../../../public/assets/images/africanExperiences/Rentals.svg";
// import Hotels from "../../../public/assets/images/africanExperiences/Hotels.svg";
// import ESim from "../../../public/assets/images/africanExperiences/esim-Icon.svg";
// import Forex from "../../../public/assets/images/africanExperiences/forex.svg";
// import Packages from "../../../public/assets/images/africanExperiences/Packages.svg";
// import Cabs from "../../../public/assets/images/africanExperiences/cabs.svg";
// import Flights from "../../../public/assets/images/africanExperiences/flights.svg";

// const AfricanExperienceData = [
//   {
//     image: Flights,
//     title: "Flights",
//   },
//   {
//     image: Cabs,
//     title: "Cabs",
//   },
//   {
//     image: Packages,
//     title: "Packages",
//   },
//   {
//     image: Forex,
//     title: "Forex",
//   },
//   {
//     image: ESim,
//     title: "eSIM",
//   },
//   {
//     image: Hotels,
//     title: "Hotels",
//   },
//   {
//     image: Rentals,
//     title: "Rentals",
//   },
//   {
//     image: Tours,
//     title: "Tours",
//   },
//   {
//     image: Events,
//     title: "Events",
//   },
//   {
//     image: Offers,
//     title: "Offers",
//   },
//   {
//     image: Insurance,
//     title: "Insurance",
//   },
//   {
//     image: Concierge,
//     title: "Concierge",
//   },
//   {
//     image: Ferries,
//     title: "Ferries",
//   },
//   {
//     image: Trains,
//     title: "Trains",
//   },
// ];

// function AfricanExperience() {
//   return (
//     <div className="overflow-hidden">
//       <div className="min-h-screen h-full w-full bg-gradient-to-r from-[#fad9cf] to-[#f28c72] relative text-black font-sans flex flex-col lg:flex-row items-center px-20">
//         <DebugMediaQuery />
//         {/* <div className="absolute inset-0 bg-gradient-to-r from-[#fad9cf] to-[#f28c72] z-10"></div> */}
//         <div className="w-1/2 h-full font-jakarta relative">
//           <Image
//             src={"/assets/images/AfricanExperienceBg.png"}
//             height={800}
//             width={1200}
//             alt="African Experience Background"
//             className="absolute mix-blend-plus-lighter -left-20 -top-38"
//           />
//           <h1 className="font-black tracking-tight text-black @max-xs:text-2xl xl:text-[80px] leading-[150%] z-10">
//             Live the <br /> African <br /> Experience
//           </h1>
//         </div>

//         <div className="w-1/2 flex justify-end items-center relative">
//           <div className="w-[670px] h-[670px] rounded-full flex  justify-center items-center relative border overflow-hidden">
//             <p className="text-center text-3xl">
//               Discover Local Options, <br /> Experience the Unexplored!
//             </p>

//             <div className="flex flex-col items-center absolute top-3.5 left-[300px]">
//               <Image
//                 src={Trains}
//                 alt="train"
//                 width={55}
//                 height={55}
//                 className=""
//               />
//               <p>Trains</p>
//             </div>
//             <div className="flex flex-col items-center absolute top-3.5 left-[350px]">
//               <Image
//                 src={Ferries}
//                 alt="Ferries"
//                 width={55}
//                 height={55}
//                 className=""
//               />
//               <p>Ferries</p>
//             </div>
//             <div className="flex flex-col items-center absolute top-3.5 left-[300px]">
//               <Image
//                 src={Trains}
//                 alt="train"
//                 width={55}
//                 height={55}
//                 className=""
//               />
//               <p>Trains</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AfricanExperience;

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
  const radius = 275;
  const iconSize = 55;
  const totalIcons = AfricanExperienceData.length;

  return (
    <div className="overflow-hidden">
      <div className="min-h-screen h-full w-full bg-gradient-to-r from-[#fad9cf] to-[#f28c72] relative text-black font-sans flex flex-col lg:flex-row items-center px-8 lg:px-20">
        {/* <div className="w-full lg:w-1/2 h-full font-sans relative py-12 lg:py-0">
          <div className="absolute mix-blend-plus-lighter -left-20 -top-38 opacity-50">
            <div className="w-96 h-96 bg-orange-200 rounded-full blur-3xl"></div>
          </div>
          <h1 className="font-black tracking-tight text-black text-4xl lg:text-6xl xl:text-7xl leading-tight z-10 relative">
            Live the <br /> African <br /> Experience
          </h1>
        </div> */}

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
            <div className="absolute inset-0 flex items-center justify-center z-10">
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
                  className={`absolute transition-all duration-300 flex flex-col items-center
                   
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
                      className="object-contain"
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
  );
};

export default AfricanExperience;
