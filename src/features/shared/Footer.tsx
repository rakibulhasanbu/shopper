import Link from "next/link";

const Footer = ({ shop_slug }: { shop_slug: string }) => {
    return (
        <div className="w-full bg-primary py-4 text-white">
            <div className="width flex items-center justify-between gap-2 max-lg:flex-col max-lg:text-sm">
                <p>
                    Copyright ©{new Date().getFullYear()} {shop_slug}. All rights reserved.
                </p>
                <div className="flex items-center gap-2">
                    <Link href={`/privacy-policy`} className="cursor-pointer hover:underline">
                        Privacy & Policy
                    </Link>
                    <Link href={`/terms-conditions`} className="cursor-pointer hover:underline">
                        Terms & Conditions
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
