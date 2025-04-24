import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "./Hero_Section";
import ServiceOfferedSection from "./ServiceOffered_Section";
import PaymentOptionSection from "./PaymentOption_Section";
import AioSection from "./Aio_Section";
import ContactUsSection from "./ContactUs_Section";
import ExploreAfrica from "./ExploreAfrica_Section";
import Subscribe_Section from "./Subscribe_Section";
import OurStory_Section from "./OurStory_Section";
import AfricanExperience from "./AfricanExperience_Section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection suppressHydrationWarning />
      <ServiceOfferedSection />
      <PaymentOptionSection />
      <AfricanExperience />
      <AioSection />
      <ContactUsSection />
      <ExploreAfrica />
      <OurStory_Section />
      <Subscribe_Section />
      <Footer />
    </div>
  );
}
