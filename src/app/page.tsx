import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Instructor from "@/components/Instructor";
import MusicTestimonialCards from "@/components/TestimonialCards";
import HeroSection from "@/components/ui/HeroSection";
import UpcommingWebinars from "@/components/UpcommingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="bg-black/[0.96] min-h-screen antialiased]">
        <HeroSection/>
        <FeaturedCourses/>
        <WhyChooseUs/>
        <MusicTestimonialCards/>
        <UpcommingWebinars/>
        <Instructor/>
        <Footer/>
    </main>
  );
}
