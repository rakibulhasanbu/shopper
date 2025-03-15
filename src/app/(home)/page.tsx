import { Metadata } from "next";

import { getShops } from "@/actions/shop-actions";
import config from "@/config";
import BenefitsSection from "@/features/home/benefits";
import { CommunitySection } from "@/features/home/community";
import { ContactSection } from "@/features/home/contact";
import { FAQSection } from "@/features/home/faq";
import FeaturesSection from "@/features/home/features";
import { FooterSection } from "@/features/home/footer";
import { HeroSection } from "@/features/home/HeroSection";
import PricingSectionCards from "@/features/home/pricing";
import { ServicesSection } from "@/features/home/services";
import { SponsorsSection } from "@/features/home/SponsorsSection";
import { TeamSection } from "@/features/home/team";
import { TestimonialSection } from "@/features/home/testimonial";
import Navbar from "@/features/shared/navbar";

const Home = async () => {
    const shops = await getShops();
    console.log("shops :>> ", shops);

    return (
        <div>
            <Navbar />
            <HeroSection />
            <SponsorsSection />
            <BenefitsSection />
            <FeaturesSection />
            <ServicesSection />
            <TestimonialSection />
            <CommunitySection />
            <TeamSection />
            <PricingSectionCards />
            <ContactSection />
            <FAQSection />
            <FooterSection />

            {/* <div className="width py-8 max-sm:px-3 lg:py-12">
                <h1 className="pb-6 text-center text-2xl font-semibold text-primary lg:text-3xl">পপুলার প্রডাক্টস</h1>
                <div className="grid min-h-[70dvh] grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">
                    {shops?.data?.map((shop) => <ShopCard key={shop?.id} />)}
                </div>
            </div> */}
        </div>
    );
};

export const metadata: Metadata = {
    metadataBase: new URL(config.serverUrl),
    title: "Home",
    description:
        "Discover quality products at great prices. Shop now for the best deals on our wide selection of items.",
    openGraph: {
        title: config.websiteName || "Hattbar",
        description: "Your One-Stop Shopping Destination",
        type: "website",
        images: [config.openGraphImage],
    },
    twitter: {
        card: "summary_large_image",
        title: config.websiteName || "Hattbar",
        description: "Your One-Stop Shopping Destination",
        images: [config.openGraphImage],
    },
};

export default Home;
