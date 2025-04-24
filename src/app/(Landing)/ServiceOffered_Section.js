import Image from "next/image";
import Logo from "../../../public/assets/images/logo-small.svg";

import ConciergeImg from "../../../public/assets/images/ServiceOffers/Concierge.svg";
import ConciergeImgMask from "../../../public/assets/images/ServiceOffers/Concierge-orange.svg";

import MoneyExchangeImg from "../../../public/assets/images/ServiceOffers/MoneyExchange.svg";
import MoneyExchangeImgMask from "../../../public/assets/images/ServiceOffers/MoneyExchange-orange.svg";
import ESimImg from "../../../public/assets/images/ServiceOffers/ESim.svg";
import ESimImgMask from "../../../public/assets/images/ServiceOffers/ESim-orange.svg";
import ExtraLuggage from "../../../public/assets/images/ServiceOffers/ExtraLuggage.svg";
import ExtraLuggageMask from "../../../public/assets/images/ServiceOffers/ExtraLuggage-orange.svg";

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
  return (
    <div className="px-4 lg:px-20 xl:px-40 py-28 bg-white text-black overflow-hidden">
      {/* title section */}
      <div className="header flex flex-col items-start gap-3 lg:gap-5 mb-[44px] lg:mb-16">
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
            Book Flights, Hotels, Cars, Trains & Events, Whether for Work or
            Play.
          </p>
        </div>
      </div>

      {/* title section */}
      <div className="flex flex-col gap-3">
        <div className="top-section flex flex-wrap lg:flex-nowrap gap-3">
          {Offers.map((offer, index) => (
            <div
              key={index}
              data-aos="zoom-out-left"
              className="sm:w-[48%] lg:w-[23.5%] xl:w-full w-full flex flex-col rounded-md shadow-md bg-white relative h-[400px] xl:hover:pr-40 transition-all duration-300 ease-in-out group overflow-hidden"
            >
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover object-center absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-50 "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 from-30% via-black/30 to-black/0 z-10"></div>
              <p className="font-semibold text-white absolute bottom-6 left-6 text-2xl font-jakarta z-20 w-full">
                <span>{offer.title}</span>
              </p>
              <Image
                src={Logo}
                alt="logo"
                height={40}
                width={40}
                className="absolute right-6 bottom-6 z-20 transform xl:translate-x-20 xl:group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>

        {/* Offer section */}
        <div className="bottom-section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3">
          {Services.map((service, index) => (
            <div
              data-aos="zoom-in"
              className="flex flex-col items-center justify-center border-2 rounded-md border-[#EE5128] px-5 py-14 pb-28 hover:bg-[#EE5128] hover:text-white transition-all duration-300 ease-in-out group"
              key={index}
            >
              {/* <div className="bg-[#EE5128] rounded-full p-3 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-white"> */}
              <div className="bg-[#EE5128] rounded-full p-3 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-white relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  height={46}
                  width={46}
                  // className="text-red-50 drop-shadow-2xl"
                  className="group-hover:opacity-0 opacity-100 transition-opacity duration-300 ease-in-out absolute"
                />
                <Image
                  src={service.maskImage}
                  alt={service.title}
                  height={46}
                  width={46}
                  // className="text-red-50 drop-shadow-2xl"
                  className=""
                />

                {/* {service.image} */}
              </div>
              <h3 className="text-2xl sm:text-[28px] font-jakarta text-left font-bold mt-11 mb-3">
                {service.title}
              </h3>
              <p className="font-sans text-lg sm:text-[21px] text-center font-normal leading-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceOfferedSection;
