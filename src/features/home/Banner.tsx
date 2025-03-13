import Image from "next/image";

import banner from "@/assets/images/banner.jpg";

const Banner = () => {
    return (
        <div className="">
            <Image src={banner} alt="Banner" width={1920} height={1080} className="object-cover" />
        </div>
    );
};

export default Banner;
