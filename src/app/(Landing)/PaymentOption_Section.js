// "use client";
// import Image from "next/image";
// import { useState } from "react";

// import Brand1 from "../../../public/assets/images/PaymentBrands/brand1.png";
// import Brand2 from "../../../public/assets/images/PaymentBrands/brand2.png";
// import Brand3 from "../../../public/assets/images/PaymentBrands/brand3.png";
// import Brand4 from "../../../public/assets/images/PaymentBrands/brand4.png";
// import Brand5 from "../../../public/assets/images/PaymentBrands/brand5.png";
// import Brand6 from "../../../public/assets/images/PaymentBrands/brand6.png";
// import Brand7 from "../../../public/assets/images/PaymentBrands/brand7.png";
// import Brand8 from "../../../public/assets/images/PaymentBrands/brand8.png";
// import Brand9 from "../../../public/assets/images/PaymentBrands/brand9.png";
// import Brand10 from "../../../public/assets/images/PaymentBrands/brand10.png";
// import Brand11 from "../../../public/assets/images/PaymentBrands/brand11.png";
// // import Brand12 from "../../../public/assets/images/PaymentBrands/brand12.png";
// // import Brand13 from "../../../public/assets/images/PaymentBrands/brand13.png";

// const PaymentBrands = [
//   { id: 1, src: Brand1, alt: "Visa" },
//   { id: 2, src: Brand2, alt: "Mastercard" },
//   { id: 3, src: Brand3, alt: "PayPal" },
//   { id: 4, src: Brand4, alt: "American Express" },
//   { id: 5, src: Brand5, alt: "Discover" },
//   { id: 6, src: Brand6, alt: "Stripe" },
//   { id: 7, src: Brand7, alt: "UnionPay" },
//   { id: 8, src: Brand8, alt: "Razorpay" },
//   { id: 9, src: Brand9, alt: "Apple Pay" },
//   { id: 10, src: Brand10, alt: "Google Pay" },
//   { id: 11, src: Brand11, alt: "Samsung Pay" },
// ];

// export default function PaymentOptionSection() {
//   return (
//     <div className="px-10 lg:px-20 xl:px-40 py-20 bg-white flex justify-center items-center pb-[169px] relative">
//       <div className="flex flex-col gap-14">
//         <div className="flex flex-col">
//           <h2 className="text-center font-semibold text-2xl lg:text-4xl font-jakarta mt-4 text-black">
//             Enjoy Secure & Flexible Payment Options
//           </h2>
//           <p className="font-base font-sans text-base lg:text-xl text-center lg:leading-8 mt-4 text-black/80 xl:px-40">
//             We make paying for your travel easy and stress free. Choose from a
//             wide range of trusted local and international payment methods as
//             well as debit/credit cards.
//           </p>
//         </div>
//         <div className="max-w-7xl">
//           <LogoMarquee logos={PaymentBrands} />
//         </div>
//       </div>
//       <Image
//         src={`/assets/images/banner-bottom.png`}
//         alt="banner-bottom"
//         height={40}
//         width={662}
//         className="w-full absolute -bottom-[25px] object-cover h-20 border z-10"
//       />
//     </div>
//   );
// }

// const LogoMarquee = ({ logos }) => {
//   const [isPaused, setIsPaused] = useState(false);

//   const firstRow = logos.slice(0, 6);
//   const secondRow = logos.slice(6);

//   return (
//     <div className="px-20 py-16 ">
//       <div className=" w-full overflow-hidden">
//         {/* Row 1 */}
//         <div className="mb-8">
//           <div
//             className="flex space-x-12 animate-scroll"
//             style={{ animationPlayState: isPaused ? "paused" : "running" }}
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//           >
//             {[...firstRow, ...firstRow].map((logo, index) => (
//               <div
//                 key={`row1-${index}`}
//                 className="flex items-center justify-center bg-white rounded-lg p-4 min-w-40 h-24"
//               >
//                 <Image
//                   src={logo.src}
//                   alt={`${logo.alt} logo`}
//                   width={100}
//                   height={50}
//                   className="object-contain max-h-12"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Row 2 */}
//         <div>
//           <div
//             className="flex space-x-12 animate-scroll-reverse"
//             style={{ animationPlayState: isPaused ? "paused" : "running" }}
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//           >
//             {[...secondRow, ...secondRow].map((logo, index) => (
//               <div
//                 key={`row2-${index}`}
//                 className="flex items-center justify-center bg-white rounded-lg min-w-40 p-4 h-24"
//               >
//                 <Image
//                   src={logo.src}
//                   alt={`${logo.alt} logo`}
//                   width={100}
//                   height={50}
//                   className="object-contain max-h-12"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         @keyframes scrollReverse {
//           0% {
//             transform: translateX(-50%);
//           }
//           100% {
//             transform: translateX(0);
//           }
//         }

//         .animate-scroll {
//           animation: scroll 30s linear infinite;
//         }

//         .animate-scroll-reverse {
//           animation: scrollReverse 30s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

"use client";
import Image from "next/image";
import { useState } from "react";

import Brand1 from "../../../public/assets/images/PaymentBrands/brand1.png";
import Brand2 from "../../../public/assets/images/PaymentBrands/brand2.png";
import Brand3 from "../../../public/assets/images/PaymentBrands/brand3.png";
import Brand4 from "../../../public/assets/images/PaymentBrands/brand4.png";
import Brand5 from "../../../public/assets/images/PaymentBrands/brand5.png";
import Brand6 from "../../../public/assets/images/PaymentBrands/brand6.png";
import Brand7 from "../../../public/assets/images/PaymentBrands/brand7.png";
import Brand8 from "../../../public/assets/images/PaymentBrands/brand8.png";
import Brand9 from "../../../public/assets/images/PaymentBrands/brand9.png";
import Brand10 from "../../../public/assets/images/PaymentBrands/brand10.png";
import Brand11 from "../../../public/assets/images/PaymentBrands/brand11.png";

const PaymentBrands = [
  { id: 1, src: Brand1, alt: "Visa" },
  { id: 2, src: Brand2, alt: "Mastercard" },
  { id: 3, src: Brand3, alt: "PayPal" },
  { id: 4, src: Brand4, alt: "American Express" },
  { id: 5, src: Brand5, alt: "Discover" },
  { id: 6, src: Brand6, alt: "Stripe" },
  { id: 7, src: Brand7, alt: "UnionPay" },
  { id: 8, src: Brand8, alt: "Razorpay" },
  { id: 9, src: Brand9, alt: "Apple Pay" },
  { id: 10, src: Brand10, alt: "Google Pay" },
  { id: 11, src: Brand11, alt: "Samsung Pay" },
];

export default function PaymentOptionSection() {
  return (
    <div className="relative flex items-center justify-center px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40 py-16 sm:py-20 pb-[169px] bg-white">
      <div className="flex flex-col gap-10 sm:gap-14 w-full">
        <div className="text-center px-4 sm:px-8">
          <h2
            data-aos="zoom-in-up"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black font-jakarta"
          >
            Enjoy Secure & Flexible Payment Options
          </h2>
          <p
            data-aos="zoom-in-up"
            className="mt-4 text-sm sm:text-base lg:text-xl text-black/80 leading-relaxed sm:leading-8 xl:px-40"
          >
            We make paying for your travel easy and stress free. Choose from a
            wide range of trusted local and international payment methods as
            well as debit/credit cards.
          </p>
        </div>

        <div className="w-full">
          <LogoMarquee logos={PaymentBrands} />
        </div>
      </div>

      <Image
        src="/assets/images/banner-bottom.png"
        alt="Decorative bottom banner"
        height={40}
        width={662}
        className="absolute bottom-[-25px] z-10 h-20 w-full object-cover border"
      />
    </div>
  );
}

const LogoMarquee = ({ logos }) => {
  const [isPaused, setIsPaused] = useState(false);
  const firstRow = logos.slice(0, 6);
  const secondRow = logos.slice(6);

  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-10">
      <div className="w-full overflow-hidden">
        {/* Row 1 */}
        <div className="mb-6 sm:mb-8">
          <div
            className="flex gap-6 sm:gap-12 animate-scroll whitespace-nowrap"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...firstRow, ...firstRow].map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="flex items-center justify-center rounded-lg bg-white p-2 sm:p-4 min-w-[100px] h-20 sm:h-24"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt || `Brand ${index + 1}`}
                  width={100}
                  height={50}
                  className="object-contain max-h-10 sm:max-h-12"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div>
          <div
            className="flex gap-6 sm:gap-12 animate-scroll-reverse whitespace-nowrap"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...secondRow, ...secondRow].map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="flex items-center justify-center rounded-lg bg-white p-2 sm:p-4 min-w-[100px] h-20 sm:h-24"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt || `Brand ${index + 7}`}
                  width={100}
                  height={50}
                  className="object-contain max-h-10 sm:max-h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
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

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scrollReverse 25s linear infinite;
        }
      `}</style>
    </div>
  );
};
