import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Differentials } from "@/components/sections/Differentials";
import { Modalities } from "@/components/sections/Modalities";
import { Transformations } from "@/components/sections/Transformations";
import { Tour } from "@/components/sections/Tour";
import { Plans } from "@/components/sections/Plans";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { Faq } from "@/components/sections/Faq";
import { Location } from "@/components/sections/Location";
import { FaqJsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <main>
      <FaqJsonLd />
      <Hero />
      <Stats />
      <Differentials />
      <Modalities />
      <Transformations />
      <Tour />
      <Plans />
      <AppShowcase />
      <Faq />
      <Location />
    </main>
  );
}
