import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logo.png";
import config from "@/config";

const Logo = ({ isRedirect = true }: { isRedirect?: boolean }) => {
    return config.isShowImageLogo ? (
        <Link href={isRedirect ? "/" : ""}>
            <Image src={logo} alt="logo" width={100} height={80} className="max-md:h-10 max-md:w-20" />
        </Link>
    ) : (
        <Link href={isRedirect ? "/" : ""} className="text-3xl font-extrabold text-primary lg:text-4xl">
            {config.websiteName}
        </Link>
    );
};

export default Logo;
