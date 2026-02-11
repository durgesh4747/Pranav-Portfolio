import NavigationBar from "@/components/custom/NavigationBar";
import HeroSection from "@/components/custom/HeroSection";
import ServicesSection from "@/components/custom/ServiceSection";
import AboutSection from "@/components/custom/AboutSection";
import WorkSection from "@/components/custom/WorkSection";
import ContactSection from "@/components/custom/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full bg-[#0B1220]">
      <NavigationBar />
      <HeroSection />
      <WorkSection/>
      <ServicesSection/>
      <AboutSection/>
      <ContactSection/>
    </main>
  );
}
