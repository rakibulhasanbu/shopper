"use client";

import LottiePlayer from "@/features/shared/LottiePlayer";

import { useIsMobile } from "@/hooks/useIsMobile";
import { Separator } from "@/components/ui/separator";

const Offer = () => {
    const isMobile = useIsMobile();
    return (
        <div className="bg-[#FFE6D3] py-8 text-center max-md:px-4">
            <h2 className="text-2xl font-medium md:text-3xl">
                ৫০০ গ্রাম এর পূর্বমূল্য <span className="font-sans text-destructive line-through">১২০০</span> টাকা এখন
                ছাড়ে <span className="font-sans text-green-500">৯৫০ </span>
                টাকা
            </h2>
            <div className="relative mx-auto flex max-w-4xl items-center justify-center gap-4 py-5 md:py-8">
                <Separator className="w-1/3 bg-foreground/80 md:w-[45%]"></Separator>
                <span className="text-2xl font-semibold">%</span>
                <LottiePlayer
                    className="absolute -top-[70%] lg:-top-[90%]"
                    width={isMobile ? "160" : "300"}
                    height={isMobile ? "160" : "300"}
                    src="https://lottie.host/c3eb7ec2-5a5f-45b0-a805-444a493811e3/wLUl6rsBAR.lottie"
                />
                <Separator className="w-1/3 bg-foreground/80 md:w-[45%]"></Separator>
            </div>
            <h2 className="text-2xl font-medium md:text-3xl">
                <span className="font-sans">১</span> কেজি এর পূর্বমূল্য{" "}
                <span className="text-destructive line-through">২২০০</span> টাকা এখন ছাড়ে{" "}
                <span className="font-sans text-green-500">১৮০০</span> টাকা
            </h2>
        </div>
    );
};

export default Offer;
