// "use client";
// import Image from "next/image";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import Logo from "../../../public/assets/images/logo-small.svg";

// import ConciergeImg from "../../../public/assets/images/ServiceOffers/Concierge.svg";
// import ConciergeImgMask from "../../../public/assets/images/ServiceOffers/Concierge-orange.svg";

// import MoneyExchangeImg from "../../../public/assets/images/ServiceOffers/MoneyExchange.svg";
// import MoneyExchangeImgMask from "../../../public/assets/images/ServiceOffers/MoneyExchange-orange.svg";
// import ESimImg from "../../../public/assets/images/ServiceOffers/ESim.svg";
// import ESimImgMask from "../../../public/assets/images/ServiceOffers/ESim-orange.svg";
// import ExtraLuggage from "../../../public/assets/images/ServiceOffers/ExtraLuggage.svg";
// import ExtraLuggageMask from "../../../public/assets/images/ServiceOffers/ExtraLuggage-orange.svg";
// import Aos from "aos";
// import { useEffect, useState } from "react";

// const Offers = [
//   {
//     image: "/assets/images/ServiceOffers/Tours.png",

//     title: "Tours",
//   },
//   {
//     image: "/assets/images/ServiceOffers/Events.png",
//     title: "Events",
//   },
//   {
//     image: "/assets/images/ServiceOffers/LastMinite.png",
//     title: "Last minute",
//   },
//   {
//     image: "/assets/images/ServiceOffers/Visa.png",
//     title: "Visa",
//   },
// ];
// const Services = [
//   {
//     image: ConciergeImg,
//     maskImage: ConciergeImgMask,
//     title: "Concierge",
//     description:
//       "Personalized assistance anytime, anywhere simplifying your lifestyle.",
//   },
//   {
//     image: MoneyExchangeImg,
//     maskImage: MoneyExchangeImgMask,
//     title: "Money exchange",
//     description:
//       "Fast, secure, and reliable currency exchange for global transactions.",
//   },
//   {
//     image: ESimImg,
//     maskImage: ESimImgMask,
//     title: "E-sim / Internet",
//     description:
//       "Stay connected globally with instant eSIM internet—fast, secure, reliable.",
//   },
//   {
//     image: ExtraLuggage,
//     maskImage: ExtraLuggageMask,
//     title: "Extra luggage",
//     description:
//       "Carry more with ease affordable extra luggage for your journey.",
//   },
// ];

// function ServiceOfferedSection() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     Aos.init({
//       duration: 800,
//       easing: "ease-in-out",
//     });

//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 640);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return (
//     <div className="sm:px-4 lg:px-20 xl:px-40 py-28 bg-white text-black overflow-hidden">
//       {/* title section */}
//       <div className="header flex flex-col items-start gap-3 lg:gap-5 mb-[44px] lg:mb-16">
//         <h3
//           data-aos="fade-right"
//           className="font-jakarta font-bold text-[30px] xl:text-[45px] text-[#EE5128]"
//         >
//           Services offered
//         </h3>
//         <div className="flex flex-col items-start font-sans font-normal text-[18px] lg:text-[22px]">
//           <p data-aos="fade-right" className="font-semibold xl:font-normal">
//             Explore Africa with Ease
//           </p>
//           <p
//             data-aos="fade-right"
//             className="text-base xl:text-[22px] font-semibold xl:font-normal text-black/50"
//           >
//             Book Flights, Hotels, Cars, Trains & <br className="md:hidden" />{" "}
//             Events, Whether for Work or Play.
//           </p>
//         </div>
//       </div>

//       {isMobile ? (
//         <>
//           <div className="space-y-4">
//             <Swiper
//               modules={[Navigation, Pagination]}
//               spaceBetween={16}
//               slidesPerView={2.2}
//               // pagination={{ clickable: true }}
//               navigation
//               className="offers-swiper"
//             >
//               {Offers.map((offer, index) => (
//                 <SwiperSlide key={index}>
//                   <OfferCard offer={offer} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//             <Swiper
//               modules={[Navigation, Pagination]}
//               spaceBetween={16}
//               slidesPerView={2.2}
//               // pagination={{ clickable: true }}
//               navigation
//               className="offers-swiper"
//             >
//               {Services.map((service, index) => (
//                 <SwiperSlide key={index}>
//                   <ServiceCard service={service} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </>
//       ) : (
//         <>
//           {/* desktop section */}
//           <div className="">
//             {/* title section */}
//             <div className="flex flex-col gap-3">
//               <div className="top-section flex flex-wrap lg:flex-nowrap gap-3">
//                 {Offers.map((offer, index) => (
//                   <OfferCard key={index} offer={offer} />
//                 ))}
//               </div>

//               {/* Offer section */}
//               <div className="bottom-section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3">
//                 {Services.map((service, index) => (
//                   <ServiceCard key={index} service={service} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default ServiceOfferedSection;

// const OfferCard = ({ offer }) => {
//   return (
//     <div
//       data-aos="zoom-out-left"
//       className="w-full sm:w-[48%] lg:w-[23.5%] xl:w-full flex flex-col rounded-md shadow-md bg-white relative h-[217px] lg:h-[400px] xl:hover:pr-40 transition-all duration-300 ease-in-out group overflow-hidden"
//     >
//       <Image
//         src={offer.image}
//         alt={offer.title}
//         fill
//         className="object-cover object-center absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-50 "
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/50 from-30% via-black/30 to-black/0 z-10"></div>
//       <p className="font-semibold translate-x-10 sm:translate-x-0 text-white absolute bottom-6 left-6 text-[14px] sm:text-2xl font-jakarta z-20 w-full">
//         <span className="text-left">{offer.title}</span>
//       </p>
//       <Image
//         src={Logo}
//         alt="logo"
//         height={40}
//         width={40}
//         className="absolute hidden sm:block right-6 bottom-6 z-20 transform xl:translate-x-20 xl:group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
//       />
//     </div>
//   );
// };

// const ServiceCard = ({ service }) => {
//   return (
//     <div
//       data-aos="zoom-in"
//       className="h-full flex flex-col items-center justify-center border-2 rounded-md border-[#EE5128] px-[11px] sm:px-5 py-[28px] sm:py-14 pb-[63px] sm:pb-28 hover:bg-[#EE5128] hover:shadow-2xl shadow-[#EE5128] hover:text-white transition-all duration-300 ease-in-out group"
//     >
//       {/* <div className="bg-[#EE5128] rounded-full p-3 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-white"> */}
//       <div className=" bg-[#EE5128] rounded-full p-2 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-white relative">
//         <Image
//           src={service.image}
//           alt={service.title}
//           // height={46}
//           // width={46}
//           // fill
//           // className="text-red-50 drop-shadow-2xl"
//           className="h-[26px] w-[26px] md:h-[44px] md:w-[44px] group-hover:opacity-0 opacity-100 transition-opacity duration-300 ease-in-out absolute"
//         />
//         <Image
//           src={service.maskImage}
//           alt={service.title}
//           // height={46}
//           // width={46}
//           // fill
//           // className="text-red-50 drop-shadow-2xl"
//           className="h-[26px] w-[26px] md:h-[44px] md:w-[44px]"
//         />

//         {/* {service.image} */}
//       </div>
//       <h3 className="text-[15px] sm:text-[28px] font-jakarta text-left font-bold mt-[26px] sm:mt-11 mb-[7px] sm:mb-3">
//         {service.title}
//       </h3>
//       <p className="font-sans text-[11px] sm:text-[21px] text-center font-normal leading-4 sm:leading-6">
//         {service.description}
//       </p>
//     </div>
//   );
// };

"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Logo from "../../../public/assets/images/logo-small.svg";

import ConciergeImg from "../../../public/assets/images/ServiceOffers/Concierge.svg";
import ConciergeImgMask from "../../../public/assets/images/ServiceOffers/Concierge-orange.svg";

import MoneyExchangeImg from "../../../public/assets/images/ServiceOffers/MoneyExchange.svg";
import MoneyExchangeImgMask from "../../../public/assets/images/ServiceOffers/MoneyExchange-orange.svg";
import ESimImg from "../../../public/assets/images/ServiceOffers/ESim.svg";
import ESimImgMask from "../../../public/assets/images/ServiceOffers/ESim-orange.svg";
import ExtraLuggage from "../../../public/assets/images/ServiceOffers/ExtraLuggage.svg";
import ExtraLuggageMask from "../../../public/assets/images/ServiceOffers/ExtraLuggage-orange.svg";
import Aos from "aos";
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Offers = [
  {
    image: "/assets/images/ServiceOffers/Tours.png",
    title: "Tours",
  },
  {
    image: "/assets/images/ServiceOffers/Events.png",
    title: "Events",
  },
  {
    image: "/assets/images/ServiceOffers/LastMinite.png",
    title: "Last minute",
  },
  {
    image: "/assets/images/ServiceOffers/Visa.png",
    title: "Visa",
  },
];
const Services = [
  {
    image: ConciergeImg,
    maskImage: ConciergeImgMask,
    title: "Concierge",
    description:
      "Personalized assistance anytime, anywhere simplifying your lifestyle.",
  },
  {
    image: MoneyExchangeImg,
    maskImage: MoneyExchangeImgMask,
    title: "Money exchange",
    description:
      "Fast, secure, and reliable currency exchange for global transactions.",
  },
  {
    image: ESimImg,
    maskImage: ESimImgMask,
    title: "E-sim / Internet",
    description:
      "Stay connected globally with instant eSIM internet—fast, secure, reliable.",
  },
  {
    image: ExtraLuggage,
    maskImage: ExtraLuggageMask,
    title: "Extra luggage",
    description:
      "Carry more with ease affordable extra luggage for your journey.",
  },
];

function ServiceOfferedSection() {
  const [isMobile, setIsMobile] = useState(false);
  const offersSwiperRef = useRef(null);
  const servicesSwiperRef = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sm:px-4 lg:px-20 xl:px-40 py-28 bg-white text-black overflow-hidden">
      {/* title section */}
      <div className="flex items-start justify-between">
        <div className="header ml-4 sm:ml-0 flex flex-col items-start gap-3 lg:gap-5 mb-[44px] lg:mb-16">
          <h3
            data-aos="fade-right"
            className="font-jakarta font-bold text-[30px] xl:text-[45px] text-[#EE5128]"
          >
            Services offered
          </h3>
          <div className="flex flex-col items-start font-sans font-normal text-[18px] lg:text-[22px]">
            <p data-aos="fade-right" className="font-semibold xl:font-normal">
              Explore Africa with Ease
            </p>
            <p
              data-aos="fade-right"
              className="text-base xl:text-[22px] font-semibold xl:font-normal text-black/50"
            >
              Book Flights, Hotels, Cars, Trains & <br className="md:hidden" />{" "}
              Events, Whether for Work or Play.
            </p>
          </div>
        </div>
        <Image
          src="/assets/images/ServiceOffers/comingsoon.gif"
          alt="coming soon"
          width={200}
          height={200}
          className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] lg:h-[200px] lg:w-[200px]"
        />
      </div>

      {isMobile ? (
        <>
          <div className=" relative">
            {/* Offers Swiper */}
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={6}
                slidesPerView={2.2}
                // pagination={{
                //   clickable: true,
                //   el: ".offers-pagination",
                //   bulletClass:
                //     "swiper-pagination-bullet bg-gray-300 w-2 h-2 rounded-full mx-1 inline-block",
                //   bulletActiveClass:
                //     "swiper-pagination-bullet-active bg-[#EE5128]",
                // }}
                onSwiper={(swiper) => {
                  offersSwiperRef.current = swiper;
                }}
                className="offers-swiper"
              >
                {Offers.map((offer, index) => (
                  <SwiperSlide key={index}>
                    <OfferCard offer={offer} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons for Offers */}
              <div className="flex justify-center items-center mt-4">
                <div className="offers-pagination"></div>
              </div>

              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-white shadow-md rounded-full p-1 text-black"
                onClick={() => offersSwiperRef.current?.slidePrev()}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-white shadow-md rounded-full p-1 text-black"
                onClick={() => offersSwiperRef.current?.slideNext()}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Services Swiper */}
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={6}
                slidesPerView={2.3}
                // pagination={{
                //   clickable: true,
                //   el: ".services-pagination",
                //   bulletClass:
                //     "swiper-pagination-bullet bg-gray-300 w-2 h-2 rounded-full mx-1 inline-block",
                //   bulletActiveClass:
                //     "swiper-pagination-bullet-active bg-[#EE5128]",
                // }}
                onSwiper={(swiper) => {
                  servicesSwiperRef.current = swiper;
                }}
                className="services-swiper"
              >
                {Services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <ServiceCard service={service} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons for Services */}
              <div className="flex justify-center items-center mt-4">
                <div className="services-pagination"></div>
              </div>

              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-white shadow-md rounded-full p-1 text-black"
                onClick={() => servicesSwiperRef.current?.slidePrev()}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-white shadow-md rounded-full p-1 text-black"
                onClick={() => servicesSwiperRef.current?.slideNext()}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* desktop section */}
          <div className="">
            {/* title section */}
            <div className="flex flex-col gap-[14px] sm:gap-3">
              <div className="top-section flex flex-wrap lg:flex-nowrap sm:gap-3">
                {Offers.map((offer, index) => (
                  <OfferCard key={index} offer={offer} />
                ))}
              </div>

              {/* Offer section */}
              <div className="bottom-section grid sm:grid-cols-2 xl:grid-cols-4 w-full h-full justify-stretch items-stretch gap-3">
                {Services.map((service, index) => (
                  <div className="" key={index}>
                    <ServiceCard service={service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ServiceOfferedSection;

const OfferCard = ({ offer }) => {
  return (
    <div
      data-aos="zoom-out-left"
      className="w-full sm:w-[49%] lg:w-[23.5%] xl:w-full flex flex-col rounded-md shadow-md bg-white relative h-[217px] md:h-[400px] xl:hover:pr-40 transition-all duration-300 ease-in-out group overflow-hidden"
    >
      <Image
        src={offer.image}
        alt={offer.title}
        fill
        className="object-cover object-center absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-50 "
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 from-30% via-black/30 to-black/0 z-10"></div>
      <p className="font-semibold translate-x-10 sm:translate-x-0 text-white absolute bottom-6 left-6 text-[14px] sm:text-2xl font-jakarta z-20 w-full">
        <span className="text-left">{offer.title}</span>
      </p>
      <Image
        src={Logo}
        alt="logo"
        height={40}
        width={40}
        className="absolute hidden sm:block right-6 bottom-6 z-20 transform  xl:translate-x-20 xl:group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
      />
    </div>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <div
      data-aos="zoom-in"
      className="h-full flex flex-col items-center justify-center border-2 rounded-md border-[#EE5128] px-[11px] sm:px-5 py-[28px] sm:py-14 pb-[63px] sm:pb-28 hover:bg-[#EE5128] hover:shadow-2xl shadow-[#EE5128] hover:text-white transition-all duration-300 ease-in-out group"
    >
      <div className=" bg-[#EE5128] rounded-full p-2 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-white relative">
        <Image
          src={service.image}
          alt={service.title}
          className="h-[26px] w-[26px] md:h-[44px] md:w-[44px] group-hover:opacity-0 opacity-100 transition-opacity duration-300 ease-in-out absolute"
        />
        <Image
          src={service.maskImage}
          alt={service.title}
          className="h-[26px] w-[26px] md:h-[44px] md:w-[44px]"
        />
      </div>
      <h3 className="text-[15px] sm:text-[28px] font-jakarta text-left font-bold mt-[26px] sm:mt-11 mb-[7px] sm:mb-3">
        {service.title}
      </h3>
      <p className="font-sans px-1 text-[11px] sm:text-[21px] text-center font-normal leading-4 sm:leading-6">
        {service.description}
      </p>
    </div>
  );
};
