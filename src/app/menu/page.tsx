"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import MenuSection from "@/components/sections/MenuSection";
import SplitText from "@/components/react-bits/SplitText";
import MagicBento from "@/components/react-bits/MagicBento";

import PageBanner from "@/components/layout/PageBanner";

export default function MenuPage() {
  const specials = [
    {
      title: "Truffle Risotto",
      description: "Wild mushrooms, aged parmesan, fresh black truffle shavings.",
      label: "Chef's Choice",
      color: "#120F17"
    },
    {
      title: "Wagyu Ribeye",
      description: "Grade A5 Wagyu, charred asparagus, red wine reduction.",
      label: "Signature",
      color: "#120F17"
    },
    {
      title: "Gold Leaf Opera Cake",
      description: "Almond sponge, coffee syrup, French buttercream, 24k gold leaf.",
      label: "Dessert",
      color: "#120F17"
    }
  ];

  return (
    <PageWrapper>
      <PageBanner 
        title="Exquisite Menu"
        subtitle="A Journey of Flavors"
      />
      <div className="pb-24 px-4 bg-[#050505] min-h-screen">
        {/* Chef's Specials */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Seasonal Specials</h2>
            <div className="w-16 h-[1px] bg-gold mx-auto"></div>
          </div>
          <MagicBento 
            cards={specials}
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={10}
            glowColor="212, 175, 55"
          />
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/5 pt-24">
          <MenuSection />
        </div>
      </div>
    </PageWrapper>
  );
}

