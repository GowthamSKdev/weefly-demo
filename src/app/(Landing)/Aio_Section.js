// import Image from "next/image";

// function AioSection() {
//   return (
//     <div className="max-w-[1440px] mx-auto w-full flex flex-col-reverse lg:flex-row px-6 xl:px-40 justify-center items-center  bg-white text-black font-sans overflow-hidden">
//       {/* Left Section */}
//       <div className="w-full lg:w-1/2 flex justify-center items-center py-12">
//         <div className="max-w-md w-full justify-center text-center lg:text-left">
//           <div
//             data-aos="fade-right"
//             className="flex justify-center lg:justify-start items-center gap-8"
//           >
//             <p className="text-2xl font-sans">Coming soon</p>
//             <p className="text-[72px] lg:text-[100px] font-semibold text-[#EE5128] font-jakarta">
//               AiO
//             </p>
//           </div>
//           <h2
//             data-aos="fade-down"
//             className="text-[32px] lg:text-[40px] font-semibold font-jakarta leading-[150%] lg:mt-5"
//           >
//             WEEFLY TRAVEL AI
//           </h2>
//           <p
//             data-aos="fade-down"
//             className="text-xl lg:text-[30px] font-sans text-gray-700 font-normal lg:mb-3"
//           >
//             Your travel companion
//           </p>
//           <button
//             data-aos="fade-down"
//             className="mt-10 px-8 py-2 text-lg font-jakarta font-semibold bg-[#EE5128] text-white rounded-md hover:bg-orange-700 transition"
//           >
//             Learn more
//           </button>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
//         <div className="w-full max-w-xl relative aspect-[4/3]">
//           <Image
//             data-aos="fade-left"
//             src="/assets/images/AIOimage.png"
//             alt="Aio Section"
//             fill
//             className="object-contain"
//             sizes="(max-width: 1024px) 100vw, 50vw"
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AioSection;
'use client';

import Image from "next/image";

export default function AioSection() {
  return (
    <div className="max-w-[1440px] mx-auto w-full min-h-screen flex flex-col-reverse lg:flex-row px-6 xl:px-40 justify-center items-center bg-white text-black font-sans">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center py-16 lg:py-24 h-full">
        <div className="max-w-md w-full justify-center text-center lg:text-left flex flex-col justify-center h-full">
          <div
            data-aos="fade-right"
            className="flex justify-center lg:justify-start items-center gap-8"
          >
            <p className="text-2xl font-sans">Coming soon</p>
            <p className="text-[72px] lg:text-[100px] font-semibold text-[#EE5128] font-jakarta">
              AiO
            </p>
          </div>
          <h2
            data-aos="fade-down"
            className="text-[32px] lg:text-[40px] font-semibold font-jakarta leading-[150%] lg:mt-5"
          >
            WEEFLY TRAVEL AI
          </h2>
          <p
            data-aos="fade-down"
            className="text-xl lg:text-[30px] font-sans text-gray-700 font-normal lg:mb-3"
          >
            Your travel companion
          </p>
          <button
            data-aos="fade-down"
            className="mt-10 px-8 py-2 text-lg font-jakarta font-semibold bg-[#EE5128] text-white rounded-md hover:bg-orange-700 transition"
          >
            Learn more
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-4 h-full">
        <div className="w-full max-w-xl relative aspect-[4/3] flex justify-center items-center">
          <Image
            data-aos="fade-left"
            src="/assets/images/AIOimage.png"
            alt="Aio Section"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
