// "use client";

// import { useEffect } from "react";

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import HeroSection from "./Hero_Section";
// import ServiceOfferedSection from "./ServiceOffered_Section";
// import PaymentOptionSection from "./PaymentOption_Section";
// import AioSection from "./Aio_Section";
// import ContactUsSection from "./ContactUs_Section";
// import ExploreAfrica from "./ExploreAfrica_Section";
// import Subscribe_Section from "./Subscribe_Section";
// import OurStory_Section from "./OurStory_Section";
// import AfricanExperience from "./AfricanExperience_Section";
// import Aos from "aos";

// export default function Home() {
//   useEffect(() => {
//     Aos.init({
//       // duration: 1000,
//       // once: true,
//     });
//   }, []);
//   return (
//     <div className="flex flex-col">
//       <Navbar />
//       <HeroSection suppressHydrationWarning />
//       <ServiceOfferedSection />
//       <PaymentOptionSection />
//       <AfricanExperience />
//       <AioSection />
//       <ContactUsSection />
//       <ExploreAfrica />
//       <OurStory_Section />
//       <Subscribe_Section />
//       <Footer />
//     </div>
//   );
// }
"use client";

import { useEffect } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "./Hero_Section";
import ServiceOfferedSection from "./ServiceOffered_Section";
import PaymentOptionSection from "./PaymentOption_Section";
import AioSection from "./Aio_Section";
import ContactUsSection from "./ContactUs_Section"; // your Travel Tech Section
import ExploreAfrica from "./ExploreAfrica_Section";
import Subscribe_Section from "./Subscribe_Section";
import OurStory_Section from "./OurStory_Section";
import AfricanExperience from "./AfricanExperience_Section";
import Aos from "aos";
import "aos/dist/aos.css"; // very important

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden min-h-screen">
      <Navbar />
      <HeroSection suppressHydrationWarning />
      <ServiceOfferedSection />
      <PaymentOptionSection />
      <AfricanExperience />
      <AioSection />
      <ContactUsSection /> {/* Travel Tech Revolution Section */}
      <ExploreAfrica />
      <OurStory_Section />
      <Subscribe_Section />
      <Footer />
    </div>
  );
}
