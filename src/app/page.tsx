import Hero from "@/components/home/Hero";
import BrandIntro from "@/components/home/BrandIntro";
import CategoryGrid from "@/components/home/CategoryGrid";
import VisualStory from "@/components/home/VisualStory";
import WhyKJ from "@/components/home/WhyKJ";
import ProductDiscovery from "@/components/home/ProductDiscovery";
import LifestyleSection from "@/components/home/LifestyleSection";
import HomeCTA from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <CategoryGrid />
      <VisualStory />
      <WhyKJ />
      <ProductDiscovery />
      <LifestyleSection />
      <HomeCTA />
    </>
  );
}
