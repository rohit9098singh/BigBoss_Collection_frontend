import HeroCarousel from "@/components/screens/HomePage/HeroCarousel";
import FeaturedCategories from "@/components/screens/HomePage/FeaturedCategories";
import PriceStores from "@/components/screens/HomePage/PriceStores";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans pb-24">
      <main className="w-full flex-1">
        <HeroCarousel />
        <PriceStores />
        <FeaturedCategories />
      </main>
    </div>
  );
}