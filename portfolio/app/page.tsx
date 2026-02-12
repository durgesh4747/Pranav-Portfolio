import NavigationBar from "@/components/custom/NavigationBar";
import HeroSection from "@/components/custom/HeroSection";
import ServicesSection from "@/components/custom/ServiceSection";
import AboutSection from "@/components/custom/AboutSection";
import WorkSection from "@/components/custom/WorkSection";
import ContactSection from "@/components/custom/ContactSection";
import { client } from "@/sanity/lib/client";

export interface Project {
  _id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  description?: string;
  duration?: string;
}

const query = `*[_type == "work"] | order(_createdAt desc){
  _id,
  title,
  category,
  "videoUrl": link,
  description,
  duration
}`;

export const revalidate = 60; // every minute
export default async function Home() {
  const projects: [Project] = await client.fetch(query);
  return (
    <main className="flex flex-col bg-[#0B1220] overflow-hidden">
      <NavigationBar />
      <HeroSection />
      <WorkSection projects={projects} />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
