import Image from "next/image";

import Logo from "@/features/shared/Logo";

import { Button } from "@/components/ui/button";

const Banner = () => {
    return (
        <div className="w-full bg-[url('https://superiorfoodbazar.com/wp-content/uploads/2024/06/Red-BG_11zon.webp')] bg-cover bg-no-repeat max-md:pb-8">
            <div className="page-width flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12 lg:px-12">
                <Image src="/b.png" alt="Banner" width={480} height={480} className="object-cover max-md:h-[260px]" />
                <div className="flex flex-col justify-center gap-4 max-md:items-center max-md:pt-8 lg:py-16">
                    <Logo isRedirect={false} />
                    <h1 className="text-4xl font-semibold text-[#FFF200] lg:text-5xl">চিংড়ি বালাচাও</h1>
                    <p className="text-xl font-medium text-white max-md:text-center lg:pb-4 lg:pt-2">
                        এটি খুবই সুস্বাদু ও মুখরোচক রেডি টু ইট খাবার। এটি চট্টগ্রাম ও কক্সবাজারের একটি ঐতিহ্যবাহী খাবার
                        যা অনেকে চিংড়ি চানাচুরও বলে থাকে।
                    </p>
                    <Button href="#order" className="h-11 w-fit text-xl max-md:hidden" size="lg">
                        অর্ডার করতে চাই
                    </Button>
                </div>
            </div>
            <div className="flex items-center justify-center pt-4">
                <Button href="#order" className="h-11 w-fit text-xl md:hidden" size="lg">
                    অর্ডার করতে চাই
                </Button>
            </div>
        </div>
    );
};

export default Banner;
