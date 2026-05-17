import AnimationsSection from "@/components/AnimationsSection";
import HeroSection from "@/components/HeroSection";
import ImagesSection from "@/components/ImagesSection";
import TextSection from "@/components/TextSection";
import VideoSection from "@/components/VideoSection";

export default function RootPage() {
  return (
    <div className="relative overflow-x-hidden">
      <HeroSection />
      <TextSection />
      <ImagesSection />
      <AnimationsSection />
      <VideoSection />
    </div>
  );
}
