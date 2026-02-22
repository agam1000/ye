import { HeroSection } from "@/sections/HeroSection";
import { LoreSection } from "@/sections/LoreSection";
import { BudgetSection } from "@/sections/BudgetSection";
import { RewardTiersSection } from "@/sections/RewardTiersSection";
import { ManifestoSection } from "@/sections/ManifestoSection";
import { DonationSection } from "@/sections/DonationSection";
import { FooterSection } from "@/sections/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <LoreSection />
      <BudgetSection />
      <RewardTiersSection />
      <ManifestoSection />
      <DonationSection />
      <FooterSection />
    </main>
  );
}
