import { Metadata } from "next";

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
import Navbar from "@/features/shared/Navbar";

const Home = () => {
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
        </div>
    );
};

export const metadata: Metadata = {
    metadataBase: new URL(config.serverUrl),
    title: "Home",
    description:
        "Discover quality products at great prices. Shop now for the best deals on our wide selection of items.",
    openGraph: {
        title: config.websiteName,
        description: "Your One-Stop Shopping Destination",
        type: "website",
        images: [config.openGraphImage],
    },
    twitter: {
        card: "summary_large_image",
        title: config.websiteName,
        description: "Your One-Stop Shopping Destination",
        images: [config.openGraphImage],
    },
};

export default Home;
