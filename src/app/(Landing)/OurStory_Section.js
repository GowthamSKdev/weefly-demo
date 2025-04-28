// // 'use client';

// // import Image from 'next/image';
// // import { useEffect, useRef, useState } from 'react';

// // export default function OurStory() {
// //   const sectionRef = useRef(null);
// //   const [isVisible, setIsVisible] = useState(false);

// //   const imageAnimationClass = isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0';
// //   const textAnimationClass = isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0';
// //   const mobileAnimationClass = isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'; // ✅ Added for mobile scroll

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         setIsVisible(entry.isIntersecting);
// //       },
// //       { threshold: 0.1 }
// //     );
// //     if (sectionRef.current) observer.observe(sectionRef.current);
// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <section
// //       ref={sectionRef}
// //       className="relative px-4 sm:px-6 py-10 sm:py-14 bg-gradient-to-b sm:bg-none"
// //       style={{
// //         backgroundImage: 'linear-gradient(to right, #EE512800 0%, #EE512833 100%)',
// //       }}
// //     >
// //       {/* ✅ Mobile Background gradients */}
// //       <div className="block md:hidden absolute inset-0 z-0 pointer-events-none">
// //         <div className="absolute top-0 left-0 w-[50px] h-full bg-gradient-to-r from-[#EE512833] to-transparent" />
// //         <div className="absolute top-0 left-0 w-full h-[220px] bg-gradient-to-b from-[#EE512833] via-[#EE51281A] to-transparent" />
// //         <div className="absolute top-[340px] left-0 w-full h-[calc(100%-340px)] bg-gradient-to-b from-transparent via-white to-white" />
// //       </div>

// //         {/* ✅ Mobile Layout */}
// //   <div className={`relative z-10 block md:hidden space-y-8 transition-all duration-1000 ease-in-out ${mobileAnimationClass}`}>
// //     <div className="relative w-full max-w-[400px] mx-auto">
// //       <div className="relative z-10 overflow-hidden border-2 border-white w-full rounded-lg">
// //         <Image
// //           src="/assets/ourstory/ourstory-img.png"
// //           alt="Our Story"
// //           width={500}
// //           height={500}
// //           className="w-full h-auto rounded-lg"
// //         />
// //       </div>
// //       <div className="absolute bottom-[-6px] right-[-6px] w-[90%] h-[92%] border-r-[8px] border-b-[12px] border-[#EE512880] z-0" />
// //     </div>

// //     <div className="text-left px-2 sm:px-4">
// //       <h4 className="text-lg font-jakarta text-[#0F172A] mb-1">Our Story</h4>
// //       <h2 className="text-3xl font-jakarta text-[#F15623] font-semibold mb-5 leading-snug">
// //         Born in Africa, Built for the World
// //       </h2>
// //       <p className="text-base text-gray-700 font-lato mb-6 leading-[1.7rem] tracking-tight">
// //         What started as a simple idea for making travel across Africa easier, smarter, and more connected,
// //         has now taken form into a powerful and comprehensive booking platform. We’re a team of passionate
// //         travelers, tech innovators, and local experts united by a shared vision: to unlock the beauty,
// //         culture, and opportunity within Africa through seamless and convenient travel experiences.
// //       </p>
// //       <p className="text-base text-black font-lato font-bold mb-6 leading-[1.8rem] tracking-tight">
// //         This is more than a platform. It’s a movement. A celebration of Africa, built by Africans, for the world.
// //       </p>
// //       <button className="bg-[#F15623] text-white font-lato px-5 py-2 rounded-md hover:bg-[#d54417] transition">
// //         Know more
// //       </button>
// //     </div>
// //   </div>

// //   {/* ✅ iPad Layout */}
// //   <div className="hidden md:flex lg:hidden max-w-[920px] mx-auto items-center justify-between gap-8 relative z-10 px-4 py-8">
// //     <div className={`w-[52%] text-left px-2 transition-all duration-1000 ease-in-out ${textAnimationClass}`}>
// //       <h4 className="text-base font-jakarta text-[#0F172A] mb-1">Our Story</h4>
// //       <h2 className="text-[26px] font-jakarta text-[#F15623] font-semibold mb-4 leading-snug">
// //         Born in Africa, Built for the World
// //       </h2>
// //       <p className="text-[14px] text-gray-700 font-lato mb-5 leading-[1.6rem] tracking-tight">
// //         What started as a simple idea for making travel across Africa easier, smarter, and more connected,
// //         has now taken form into a powerful and comprehensive booking platform.
// //       </p>
// //       <p className="text-[14px] text-black font-lato font-bold mb-6 leading-[1.7rem] tracking-tight">
// //         This is more than a platform. It’s a movement. A celebration of Africa, built by Africans, for the world.
// //       </p>
// //       <button className="bg-[#F15623] text-white font-lato px-4 py-2 rounded-md hover:bg-[#d54417] transition text-sm">
// //         Know more
// //       </button>
// //     </div>

// //     <div className={`w-[48%] relative flex justify-end mt-4 md:mt-0 transition-all duration-1000 ease-in-out ${imageAnimationClass}`}>
// //       <div className="relative z-10 rounded-lg overflow-hidden border-2 border-white w-[330px] h-[360px]">
// //         <Image
// //           src="/assets/ourstory/ourstory-img.png"
// //           alt="Our Story"
// //           width={330}
// //           height={360}
// //           className="w-full h-full object-cover rounded-lg"
// //         />
// //       </div>

// //       {/* ✅ iPad L Shapes */}
// //       <div className="absolute bottom-[-10px] right-[-8px] w-[300px] h-[320px] border-r-[8px] border-b-[12px] border-[#EE512880] z-0 rounded-bl-md hidden md:block lg:hidden" />
// //       <div className="absolute bottom-[-12px] right-[-10px] w-[150px] h-[500px] border-r-[10px] border-b-[14px] border-[#EE512880] z-0 rounded-bl-md hidden lg:block laptop:hidden" />
// //       <div className="absolute bottom-[-27px] right-[-27px] w-[465px] h-[475px] border-r-[14px] border-b-[24px] border-[#EE512880] z-0 rounded-bl-md hidden laptop:block" />
// //     </div>
// //   </div>

// //   {/* ✅ Desktop Layout */}
// //   <div className="hidden lg:flex max-w-[1200px] mx-auto items-start justify-between gap-12 relative z-10 px-4 py-12">
// //     <div className={`w-full max-w-[500px] text-left transition-all duration-1000 ease-in-out ${textAnimationClass}`}>
// //       <h4 className="text-xl font-[Plus Jakarta Sans] font-bold text-[#0F172A] mb-3 ml-1">Our Story</h4>
// //       <h2 className="text-5xl font-[Plus Jakarta Sans] text-[#F15623] font-semibold mb-6 leading-snug">
// //         Born in Africa, Built for<br />the World
// //       </h2>
// //       <p className="text-lg font-lato text-gray-700 mb-6 leading-[1.9rem] tracking-tight">
// //         What started as a simple idea for making travel across Africa easier,<br />
// //         smarter, and more connected, has now taken form into a powerful<br />
// //         and comprehensive booking platform. We’re a team of passionate<br />
// //         travelers, tech innovators, and local experts united by a shared<br />
// //         vision: to unlock the beauty, culture, and opportunity within Africa<br />
// //         through seamless and convenient travel experiences.
// //       </p>
// //       <p className="text-lg font-lato text-black font-bold mb-8 leading-[2rem] tracking-tight">
// //         This is more than a platform. It’s a movement.<br />
// //         A celebration of Africa, built by Africans, for<br />
// //         the world.
// //       </p>
// //       <button className="bg-[#F15623] text-white font-lato px-5 py-2 rounded-md hover:bg-[#d54417] transition text-lg">
// //         Know more
// //       </button>
// //     </div>

// //     <div className={`w-full max-w-[500px] relative flex justify-center transition-all duration-1000 ease-in-out ${imageAnimationClass}`}>
// //       <div className="relative z-10 rounded-lg overflow-hidden border-2 border-white w-fit">
// //         <Image
// //           src="/assets/ourstory/ourstory-img.png"
// //           alt="Our Story"
// //           width={500}
// //           height={500}
// //           className="rounded-lg"
// //         />
// //       </div>
// //       <div className="absolute bottom-[-13px] right-[-13px] w-[450px] h-[495px] border-r-[14px] border-b-[24px] border-[#EE512880] z-0" />
// //     </div>
// //   </div>

// // </section>

// //   );
// // }
// 'use client';

// import Image from 'next/image';
// import { useEffect, useRef, useState } from 'react';

// export default function OurStory() {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         } else {
//           setIsVisible(false);
//         }
//       },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative px-4 sm:px-6 py-10 sm:py-14 bg-gradient-to-b sm:bg-none"
//       style={{
//         backgroundImage: 'linear-gradient(to right, #EE512800 0%, #EE512833 100%)',
//       }}
//     >
//       {/* ✅ Background Gradient for Mobile */}
//       <div className="block md:hidden absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute top-0 left-0 w-[50px] h-full bg-gradient-to-r from-[#EE512833] to-transparent" />
//         <div className="absolute top-0 left-0 w-full h-[220px] bg-gradient-to-b from-[#EE512833] via-[#EE51281A] to-transparent" />
//         <div className="absolute top-[340px] left-0 w-full h-[calc(100%-340px)] bg-gradient-to-b from-transparent via-white to-white" />
//       </div>

//       {/* ✅ Mobile Layout */}
//       <div className="relative z-10 block md:hidden space-y-8">
//         {/* Image */}
//         <div className={`relative w-full max-w-[400px] mx-auto transform transition duration-1000 ${
//           isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
//         }`}>
//           <div className="relative z-10 overflow-hidden border-2 border-white w-full rounded-lg">
//             <Image
//               src="/assets/ourstory/ourstory-img.png"
//               alt="Our Story"
//               width={500}
//               height={500}
//               className="w-full h-auto rounded-lg"
//             />
//           </div>
//           <div className="absolute bottom-[-6px] right-[-6px] w-[90%] h-[92%] border-r-[8px] border-b-[12px] border-[#EE512880] z-0" />
//         </div>

//         {/* Text */}
//         <div className="text-left px-2 sm:px-4 space-y-4">
//           <h4 className={`text-lg font-jakarta text-[#0F172A] transform transition duration-700 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//           }`}>
//             Our Story
//           </h4>

//           <h2 className={`text-3xl font-jakarta text-[#F15623] font-semibold leading-snug transform transition duration-700 delay-100 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//           }`}>
//             Born in Africa, Built for the World
//           </h2>

//           <p className={`text-base text-gray-700 font-lato leading-[1.7rem] tracking-tight transform transition duration-700 delay-200 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//           }`}>
//             What started as a simple idea for making travel across Africa easier,<br />
//             smarter, and more connected, has now taken form into a powerful<br />
//             and comprehensive booking platform. We’re a team of passionate<br />
//             travelers, tech innovators, and local experts united by a shared<br />
//             vision: to unlock the beauty, culture, and opportunity within Africa<br />
//             through seamless and convenient travel experiences.
//           </p>

//           <p className={`text-base text-black font-lato font-bold leading-[1.8rem] tracking-tight transform transition duration-700 delay-300 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//           }`}>
//             This is more than a platform. It’s a movement.<br />
//             A celebration of Africa, built by Africans, for<br />
//             the world.
//           </p>

//           <div className={`transform transition duration-700 delay-400 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//           }`}>
//             <button className="bg-[#F15623] text-white font-lato px-5 py-2 rounded-md hover:bg-[#d54417] transition">
//               Know more
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ✅ iPad + Desktop Layout */}
//       <div className="hidden md:flex flex-col lg:flex-row max-w-[1200px] mx-auto items-start justify-between gap-12 relative z-10 px-4 py-12">
//         {/* Text Left Side */}
//         <div className="w-full max-w-[500px] text-left space-y-4">
//           <h4 className={`text-xl font-[Plus Jakarta Sans] font-bold text-[#0F172A] transform transition duration-700 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//           }`}>
//             Our Story
//           </h4>

//           <h2 className={`text-5xl font-[Plus Jakarta Sans] text-[#F15623] font-semibold mb-6 leading-snug transform transition duration-700 delay-100 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//           }`}>
//             Born in Africa, Built for the World
//           </h2>

//           <p className={`text-lg font-lato text-gray-700 leading-[1.9rem] tracking-tight transform transition duration-700 delay-200 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//           }`}>
//             What started as a simple idea for making travel across Africa easier,<br />
//             smarter, and more connected, has now taken form into a powerful<br />
//             and comprehensive booking platform. We’re a team of passionate<br />
//             travelers, tech innovators, and local experts united by a shared<br />
//             vision: to unlock the beauty, culture, and opportunity within Africa<br />
//             through seamless and convenient travel experiences.
//           </p>

//           <p className={`text-lg font-lato text-black font-bold leading-[2rem] tracking-tight transform transition duration-700 delay-300 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//           }`}>
//             This is more than a platform. It’s a movement.<br />
//             A celebration of Africa, built by Africans, for<br />
//             the world.
//           </p>

//           <div className={`transform transition duration-700 delay-400 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//           }`}>
//             <button className="bg-[#F15623] text-white font-lato px-5 py-2 rounded-md hover:bg-[#d54417] transition text-lg">
//               Know more
//             </button>
//           </div>
//         </div>

//         {/* Image Right Side */}
//         <div className={`w-full max-w-[500px] relative flex justify-center transform transition duration-1000 ${
//           isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
//         }`}>
//           <div className="relative z-10 rounded-lg overflow-hidden border-2 border-white w-fit">
//             <Image
//               src="/assets/ourstory/ourstory-img.png"
//               alt="Our Story"
//               width={500}
//               height={500}
//               className="rounded-lg"
//             />
//           </div>
//           <div className="absolute bottom-[-13px] right-[-13px] w-[450px] h-[495px] border-r-[14px] border-b-[24px] border-[#EE512880] z-0" />
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function OurStory() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // ✅ Set true once
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  

  return (
    <section
      ref={sectionRef}
      className="relative px-4 sm:px-6 py-10 sm:py-14 bg-gradient-to-b sm:bg-none"
      style={{
        backgroundImage: 'linear-gradient(to right, #EE512800 0%, #EE512833 100%)',
      }}
    >
      {/* ✅ Background Gradient for Mobile */}
      <div className="block md:hidden absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[50px] h-full bg-gradient-to-r from-[#EE512833] to-transparent" />
        <div className="absolute top-0 left-0 w-full h-[220px] bg-gradient-to-b from-[#EE512833] via-[#EE51281A] to-transparent" />
        <div className="absolute top-[340px] left-0 w-full h-[calc(100%-340px)] bg-gradient-to-b from-transparent via-white to-white" />
      </div>

      {/* ✅ Mobile Layout */}
      <div className="relative z-10 block md:hidden space-y-8">
        {/* Image for Mobile */}
        <div className={`relative w-full max-w-[400px] mx-auto transform transition-transform duration-1000 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <div className="relative z-10 overflow-hidden border-2 border-white w-full rounded-lg">
            <Image
              src="/assets/ourstory/ourstory-img.png"
              alt="Our Story"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="absolute bottom-[-6px] right-[-6px] w-[90%] h-[92%] border-r-[8px] border-b-[12px] border-[#EE512880] z-0" />
        </div>

        {/* Text for Mobile */}
        <div className="text-left px-2 sm:px-4 space-y-4">
  <div className="space-y-0">
    <h4 className={`text-xl font-jakarta text-[#0F172A] transform transition duration-700 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 '
    }`}>
      Our Story
    </h4>

    <h2 className={`text-3xl font-jakarta text-[#F15623] font-semibold leading-snug transform transition duration-700 delay-100 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`}>
      Born in Africa, Built for the World
    </h2>
  </div>

  <p className={`text-base text-gray-700 font-lato leading-[1.7rem] tracking-tight transform transition duration-700 delay-200 ${
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
  }`}>
    What started as a simple idea for making travel across Africa easier, smarter, and more connected,
    has now taken form into a powerful and comprehensive booking platform. We’re a team of passionate
    travelers, tech innovators, and local experts united by a shared vision: to unlock the beauty, culture,
    and opportunity within Africa through seamless and convenient travel experiences.
  </p>

  <p className={`text-base text-black font-lato font-bold leading-[1.8rem] tracking-tight transform transition duration-700 delay-300 ${
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
  }`}>
    This is more than a platform. It’s a movement. A celebration of Africa, built by Africans, for the world.
  </p>

  <div className={`transform transition duration-700 delay-400 ${
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
  }`}>
    <button className="bg-[#F15623] text-white font-lato px-5 py-2 rounded-md hover:bg-[#d54417] transition">
      Know more
    </button>
  </div>
</div>
</div>

      {/* ✅ iPad + Desktop Layout */}
      <div className="hidden md:flex flex-col lg:flex-row max-w-[1200px] mx-auto items-start justify-between gap-12 relative z-10 px-4 py-12">
        {/* Text Side */}
        <div className="w-full max-w-[500px] text-left space-y-4">
          <h4 className={`text-xl font-[Plus Jakarta Sans] font-bold text-[#0F172A] transform transition duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Our Story
          </h4>

          <h2 className={`text-5xl font-[Plus Jakarta Sans] text-[#F15623] font-semibold mb-6 leading-snug transform transition duration-700 delay-100 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Born in Africa, Built for the World
          </h2>

          <p className={`text-lg font-lato text-gray-700 leading-[1.9rem] tracking-tight transform transition duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            What started as a simple idea for making travel across Africa easier,<br />
            smarter, and more connected, has now taken form into a powerful<br />
            and comprehensive booking platform. We’re a team of passionate<br />
            travelers, tech innovators, and local experts united by a shared<br />
            vision: to unlock the beauty, culture, and opportunity within Africa<br />
            through seamless and convenient travel experiences.
          </p>

          <p className={`text-lg font-lato text-black font-bold leading-[2rem] tracking-tight transform transition duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            This is more than a platform. It’s a movement.<br />
            A celebration of Africa, built by Africans, for<br />
            the world.
          </p>

          <div className={`transform transition duration-700 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <button className="bg-[#F15623] text-white font-lato px-5 py-2 rounded-md hover:bg-[#d54417] transition text-lg">
              Know more
            </button>
          </div>
        </div>

        {/* Image Side */}
        <div className={`w-full max-w-[500px] relative flex justify-center transform transition-transform duration-1000 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <div className="relative z-10 rounded-lg overflow-hidden border-2 border-white w-fit">
            <Image
              src="/assets/ourstory/ourstory-img.png"
              alt="Our Story"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="absolute bottom-[-13px] right-[-13px] w-[450px] h-[495px] border-r-[14px] border-b-[24px] border-[#EE512880] z-0" />
        </div>
      </div>
    </section>
  );
}
