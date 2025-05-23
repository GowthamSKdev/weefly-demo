// "use client";

// import Image from "next/image";

// import { ArrowLeftRightIcon, MapPin, User } from "lucide-react";
// import TakeOffPlane from "../../../public/assets/images/TakeOffPlane.svg";
// import LandingPlane from "../../../public/assets/images/LandingPlane.svg";
// import DateFrom from "../../../public/assets/images/DateFrom.svg";
// import DateTo from "../../../public/assets/images/DateTo.svg";
// import TravelerIcon from "../../../public/assets/images/TravelerIcon.svg";
// import { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const HeroSection = () => {
//   const [departureDate, setDepartureDate] = useState(null);
//   const [returnDate, setReturnDate] = useState(null);
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [travelers, setTravelers] = useState(1);
//   const [travelClass, setTravelClass] = useState("Economy");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log({
//       from,
//       to,
//       departureDate,
//       returnDate,
//       travelers,
//       travelClass,
//     });
//   };

//   return (
//     <>
//       <div
//         className={`min-h-screen relative bg-white/10 bg-[url('/assets/images/banner-img.png')]
//         bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4 lg:px-10 xl:px-20 overflow-hidden `}
//       >
//         <div className="h-full w-full flex flex-col justify-center items-center">
//           <div className="mt-10 h-full w-full flex flex-col justify-center items-center gap-2">
//             <h1
//               data-aos="fade-up"
//               className="text-4xl xl:text-5xl font-semibold text-center font-jakarta text-white"
//             >
//               Transforming <br className="sm:hidden" /> African Travel
//             </h1>
//             <div data-aos="fade-up" className="relative pl-20 hidden lg:block">
//               <Image
//                 src={"/assets/images/paper.svg"}
//                 alt="banner-2"
//                 height={171}
//                 width={662}
//                 className="relative h-20 mix-blend-screen"
//               />
//               <p className="absolute top-7 left-36 z-[1px] text-black font-semibold text-base font-sans">
//                 Hassle Free Local Payment Options with Lowest Prices!
//               </p>
//             </div>
//             <div
//               data-aos="fade-up"
//               className="relative block lg:hidden mt-4 mb-4"
//             >
//               <Image
//                 src={"/assets/images/paper-mobile.png"}
//                 alt="banner-2"
//                 height={100}
//                 width={443}
//                 className="relative h-20 -mb-10"
//               />
//               <p className="absolute top-5 left-13 leading-5 z-[1px] text-black font-semibold text-sm sm:text-base font-sans text-center">
//                 Hassle Free Local Payment Options
//                 <br className="block lg:hidden" /> with Lowest Prices!
//               </p>
//             </div>

//             <div className="w-full -mb-30 mt-10 font-sans block z-10">
//               <p
//                 data-aos="fade-left"
//                 className="text-[18px] tracking-wider text-white font-bold mb-6 font-sans"
//               >
//                 Book your Trip now!
//               </p>

//               <form
//                 onSubmit={handleSearch}
//                 className="bg-white rounded-lg shadow-lg"
//               >
//                 <div className="flex flex-col md:flex-row">
//                   <div className="flex flex-row flex-1">
//                     {/* From Location */}
//                     <div className="flex items-center p-4 border-b md:border-b-0  border-gray-200 flex-1">
//                       <div className="mr-3"></div>
//                       <div>
//                         <label className="block text-xs text-gray-500">
//                           <Image
//                             src={TakeOffPlane}
//                             alt="TakeOffPlane"
//                             height={32}
//                             width={32}
//                           />
//                         </label>
//                         <div className="flex items-center mt-3.5">
//                           <MapPin className="h-4 w-4 text-gray-500" />
//                           <select
//                             name="leavingFrom"
//                             id="leavingFrom"
//                             className="block w-full placeholder:text-gray-400 text-black focus:outline-none appearance-none"
//                             value={from}
//                             onChange={(e) => setFrom(e.target.value)}
//                           >
//                             <option value="" disabled>
//                               Leaving From
//                             </option>
//                             <option value="johannesburg">
//                               Johannesburg, South Africa
//                             </option>
//                             <option value="cape-town">
//                               Cape Town, South Africa
//                             </option>
//                             <option value="durban">Durban, South Africa</option>
//                           </select>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Swap Icon */}
//                     <div className="md:flex items-center justify-center p-2 my-auto">
//                       <button
//                         type="button"
//                         onClick={() => {
//                           const temp = from;
//                           setFrom(to);
//                           setTo(temp);
//                         }}
//                         className="bg-[#EE5128] rounded-full p-2"
//                       >
//                         {/* <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 text-white"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
//                         />
//                       </svg> */}
//                         <ArrowLeftRightIcon className="h-5 w-5 text-white" />
//                       </button>
//                     </div>

//                     {/* To Location */}
//                     <div className="flex items-center p-4 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
//                       <div className="mr-3"></div>
//                       <div>
//                         <label className="block text-xs text-black">
//                           <Image
//                             src={LandingPlane}
//                             alt="LandingPlane"
//                             height={32}
//                             width={32}
//                           />
//                         </label>
//                         <div className="flex items-center mt-3.5">
//                           <MapPin className="h-4 w-4 text-gray-500" />
//                           <select
//                             name="leavingFrom"
//                             id="leavingFrom"
//                             className="block w-full placeholder:text-gray-400 text-black focus:outline-none appearance-none"
//                             value={to}
//                             onChange={(e) => setTo(e.target.value)}
//                           >
//                             <option value="" disabled>
//                               Going to
//                             </option>
//                             <option value="johannesburg">
//                               Johannesburg, South Africa
//                             </option>
//                             <option value="cape-town">
//                               Cape Town, South Africa
//                             </option>
//                             <option value="durban">Durban, South Africa</option>
//                           </select>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex flex-1">
//                     {/* Departure Date */}
//                     <div className="flex items-center p-4 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
//                       <div className="mr-3"></div>
//                       <div className="relative">
//                         <label className="block text-xs text-gray-500">
//                           <Image
//                             src={DateFrom}
//                             alt="DateFrom"
//                             height={32}
//                             width={32}
//                           />
//                         </label>
//                         <div className="flex items-center mt-3.5">
//                           <DatePicker
//                             selected={departureDate}
//                             onChange={(date) => setDepartureDate(date)}
//                             placeholderText="Date from"
//                             className="block w-full placeholder:text-gray-400 text-black z-20 focus:outline-none"
//                             dateFormat="MMM d, yyyy"
//                             popperClassName="z-[50px]"
//                             popperProps={{
//                               positionFixed: true,
//                             }}
//                           />
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4 text-gray-400 absolute left-[65%] sm:left-[53%]  pointer-events-none"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M19 9l-7 7-7-7"
//                             />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Return Date */}
//                     <div className="flex items-center p-4 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
//                       <div className="mr-3"></div>
//                       <div className="relative w-full">
//                         <label className="block text-xs text-gray-500">
//                           <Image
//                             src={DateTo}
//                             alt="DateTo"
//                             height={32}
//                             width={32}
//                           />
//                         </label>
//                         <div className="flex items-center mt-3.5">
//                           <DatePicker
//                             selected={returnDate}
//                             onChange={(date) => setReturnDate(date)}
//                             placeholderText="Return Date"
//                             className="block w-full placeholder:text-gray-400 text-black focus:outline-none"
//                             dateFormat="MMM d, yyyy"
//                             minDate={departureDate}
//                           />
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4 text-gray-400 absolute left-[65%] sm:left-[55%] pointer-events-none"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M19 9l-7 7-7-7"
//                             />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-1 items-center sm:items-stretch">
//                     {/* Travelers */}
//                     <div className="flex items-center relative p-4 border-b-0 md:border-b-0 md:border-r border-gray-200 flex-1">
//                       <div className="mr-3"></div>
//                       <div>
//                         <label className="block text-xs text-gray-500">
//                           {/* {travelers} Traveler{travelers > 1 ? "s" : ""} */}
//                           <Image
//                             src={TravelerIcon}
//                             alt="TravelerIcon"
//                             height={32}
//                             width={32}
//                           />
//                         </label>
//                         <div className="flex items-center mt-3.5 relative">
//                           <select
//                             className="block w-full placeholder:text-gray-400 text-black focus:outline-none appearance-none bg-transparent"
//                             value={travelClass}
//                             onChange={(e) => setTravelClass(e.target.value)}
//                           >
//                             <option value="" className="text-gray-400">
//                               Select
//                             </option>
//                             <option value="Economy">Economy</option>
//                             <option value="Premium Economy">
//                               Premium Economy
//                             </option>
//                             <option value="Business">Business</option>
//                             <option value="First">First</option>
//                           </select>
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4 text-gray-400 absolute right-0 pointer-events-none"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M19 9l-7 7-7-7"
//                             />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Search Button */}
//                     <div className="p-4 my-auto md:my-0 md:p-0">
//                       <button
//                         type="submit"
//                         className="w-full text-2xl font-jakarta sm:min-w-[200px] max-w-[200px] md:h-full bg-[#EE5128] hover:bg-orange-600 text-white font-semibold py-2 px-8 md:px-12 rounded-md md:rounded-none md:rounded-r-md"
//                       >
//                         Search
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//         <Image
//           src={`/assets/images/banner-bottom.png`}
//           alt="banner-bottom"
//           height={40}
//           width={662}
//           className="w-full absolute -bottom-[26px] md:-bottom-[40px] object-cover h-20"
//         />
//       </div>
//     </>
//   );
// };

// export default HeroSection;
"use client";

import Image from "next/image";
import { ArrowLeftRightIcon, MapPin } from "lucide-react";
import TakeOffPlane from "../../../public/assets/images/TakeOffPlane.svg";
import LandingPlane from "../../../public/assets/images/LandingPlane.svg";
import DateFrom from "../../../public/assets/images/DateFrom.svg";
import DateTo from "../../../public/assets/images/DateTo.svg";
import TravelerIcon from "../../../public/assets/images/TravelerIcon.svg";
import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HeroSection = () => {
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [travelClass, setTravelClass] = useState("Economy");

  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isPaperVisible, setIsPaperVisible] = useState(false);
  const [isBookTripVisible, setIsBookTripVisible] = useState(false);

  const headingRef = useRef(null);
  const paperRef = useRef(null);
  const bookTripRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const headingObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsHeadingVisible(true);
    }, observerOptions);

    const paperObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsPaperVisible(true);
    }, observerOptions);

    const bookTripObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsBookTripVisible(true);
    }, observerOptions);

    if (headingRef.current) headingObserver.observe(headingRef.current);
    if (paperRef.current) paperObserver.observe(paperRef.current);
    if (bookTripRef.current) bookTripObserver.observe(bookTripRef.current);

    return () => {
      if (headingRef.current) headingObserver.unobserve(headingRef.current);
      if (paperRef.current) paperObserver.unobserve(paperRef.current);
      if (bookTripRef.current) bookTripObserver.unobserve(bookTripRef.current);
    };
  }, []);

  const transitionBase = "transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]";

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({
      from,
      to,
      departureDate,
      returnDate,
      travelClass,
    });
  };

  return (
    <>
      <div className="min-h-screen relative bg-white/10 bg-[url('/assets/images/banner-img.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4 lg:px-10 xl:px-20 overflow-hidden">
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="mt-10 h-full w-full flex flex-col justify-center items-center gap-2">
            
            {/* Heading */}
            <h1
              ref={headingRef}
              className={`text-4xl xl:text-5xl font-semibold text-center font-jakarta text-white ${transitionBase} ${
                isHeadingVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              Transforming <br className="sm:hidden" /> African Travel
            </h1>

            {/* Paper Image Desktop */}
            <div
              ref={paperRef}
              className={`relative pl-20 hidden lg:block ${transitionBase} ${
                isPaperVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <Image
                src={"/assets/images/paper.svg"}
                alt="banner-2"
                height={171}
                width={662}
                className="relative h-20 mix-blend-screen"
              />
              <p className="absolute top-7 left-36 z-[1px] text-black font-semibold text-base font-sans">
                Hassle Free Local Payment Options with Lowest Prices!
              </p>
            </div>

            {/* Paper Image Mobile */}
            <div className="relative block lg:hidden mt-4 mb-4">
              <Image
                src={"/assets/images/paper-mobile.png"}
                alt="banner-2"
                height={100}
                width={443}
                className="relative h-20 -mb-10"
              />
              <p className="absolute top-5 left-13 leading-5 z-[1px] text-black font-semibold text-sm sm:text-base font-sans text-center">
                Hassle Free Local Payment Options
                <br className="block lg:hidden" /> with Lowest Prices!
              </p>
            </div>

            {/* Booking Form Section */}
            <div
              ref={bookTripRef}
              className={`w-full -mb-30 mt-10 font-sans block z-10 ${transitionBase} ${
                isBookTripVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              <p className="text-[18px] tracking-wider text-white font-bold mb-6 font-sans">
                Book your Trip now!
              </p>

              <form
                onSubmit={handleSearch}
                className="bg-white rounded-lg shadow-lg"
              >
                <div className="flex flex-col md:flex-row">
                  {/* From and To Section */}
                  <div className="flex flex-row flex-1">
                    {/* From Location */}
                    <div className="flex items-center p-4 border-b md:border-b-0 border-gray-200 flex-1">
                      <div className="mr-3"></div>
                      <div>
                        <label className="block text-xs text-gray-500">
                          <Image src={TakeOffPlane} alt="TakeOffPlane" height={32} width={32} />
                        </label>
                        <div className="flex items-center mt-3.5">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <select
                            className="block w-full placeholder:text-gray-400 text-black focus:outline-none appearance-none"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                          >
                            <option value="" disabled>Leaving From</option>
                            <option value="johannesburg">Johannesburg</option>
                            <option value="cape-town">Cape Town</option>
                            <option value="durban">Durban</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Swap Button */}
                    <div className="md:flex items-center justify-center p-2 my-auto">
                      <button
                        type="button"
                        onClick={() => {
                          const temp = from;
                          setFrom(to);
                          setTo(temp);
                        }}
                        className="bg-[#EE5128] rounded-full p-2"
                      >
                        <ArrowLeftRightIcon className="h-5 w-5 text-white" />
                      </button>
                    </div>

                    {/* To Location */}
                    <div className="flex items-center p-4 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
                      <div className="mr-3"></div>
                      <div>
                        <label className="block text-xs text-black">
                          <Image src={LandingPlane} alt="LandingPlane" height={32} width={32} />
                        </label>
                        <div className="flex items-center mt-3.5">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <select
                            className="block w-full placeholder:text-gray-400 text-black focus:outline-none appearance-none"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                          >
                            <option value="" disabled>Going to</option>
                            <option value="johannesburg">Johannesburg</option>
                            <option value="cape-town">Cape Town</option>
                            <option value="durban">Durban</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Departure and Return Date Section */}
                  <div className="flex flex-1">
                    {/* Departure Date */}
                    <div className="flex items-center p-4 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
                      <div className="mr-3"></div>
                      <div className="relative">
                        <label className="block text-xs text-gray-500">
                          <Image src={DateFrom} alt="DateFrom" height={32} width={32} />
                        </label>
                        <div className="flex items-center mt-3.5">
                          <DatePicker
                            selected={departureDate}
                            onChange={(date) => setDepartureDate(date)}
                            placeholderText="Date from"
                            className="block w-full placeholder:text-gray-400 text-black focus:outline-none"
                            dateFormat="MMM d, yyyy"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Return Date */}
                    <div className="flex items-center p-4 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
                      <div className="mr-3"></div>
                      <div className="relative w-full">
                        <label className="block text-xs text-gray-500">
                          <Image src={DateTo} alt="DateTo" height={32} width={32} />
                        </label>
                        <div className="flex items-center mt-3.5">
                          <DatePicker
                            selected={returnDate}
                            onChange={(date) => setReturnDate(date)}
                            placeholderText="Return Date"
                            className="block w-full placeholder:text-gray-400 text-black focus:outline-none"
                            dateFormat="MMM d, yyyy"
                            minDate={departureDate}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Traveler and Search */}
                  <div className="flex flex-1 items-center sm:items-stretch">
                    {/* Traveler */}
                    <div className="flex items-center relative p-4 border-b-0 md:border-b-0 md:border-r border-gray-200 flex-1">
                      <div className="mr-3"></div>
                      <div>
                        <label className="block text-xs text-gray-500">
                          <Image src={TravelerIcon} alt="TravelerIcon" height={32} width={32} />
                        </label>
                        <div className="flex items-center mt-3.5 relative">
                          <select
                            className="block w-full placeholder:text-gray-400 text-black focus:outline-none appearance-none bg-transparent"
                            value={travelClass}
                            onChange={(e) => setTravelClass(e.target.value)}
                          >
                            <option value="" className="text-gray-400">Select</option>
                            <option value="Economy">Economy</option>
                            <option value="Premium Economy">Premium Economy</option>
                            <option value="Business">Business</option>
                            <option value="First">First</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Search Button */}
                    <div className="p-4 my-auto md:my-0 md:p-0">
                      <button
                        type="submit"
                        className="w-full text-2xl font-jakarta sm:min-w-[200px] max-w-[200px] md:h-full bg-[#EE5128] hover:bg-orange-600 text-white font-semibold py-2 px-8 md:px-12 rounded-md md:rounded-none md:rounded-r-md"
                      >
                        Search
                      </button>
                    </div>
                  </div>

                </div>
              </form>

            </div>

          </div>
        </div>

        {/* Bottom Banner Image */}
        <Image
          src={`/assets/images/banner-bottom.png`}
          alt="banner-bottom"
          height={40}
          width={662}
          className="w-full absolute -bottom-[26px] md:-bottom-[40px] object-cover h-20"
        />
      </div>
    </>
  );
};

export default HeroSection;
