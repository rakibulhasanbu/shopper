import Logo from "@/features/shared/Logo";
import MobileNav from "@/features/shared/MobileNav";
import NavItem from "@/features/shared/NavItem";
import ShoppingCart from "@/features/shared/ShoppingCart";

const ShopNavbar = ({ shop_slug }: { shop_slug: string }) => {
    const navItems = [
        { label: "হোম", href: `/${shop_slug}` },
        { label: "সকল প্রডাক্ট", href: `/${shop_slug}/products` },
    ];

    return (
        <nav className="sticky top-0 z-50 flex h-14 items-center justify-center bg-white lg:h-[80px] lg:py-3">
            <div className="flex w-full items-center justify-between px-4 sm:px-[5%] md:px-[10%] lg:hidden">
                <MobileNav shop_slug={shop_slug} />
                <Logo name={shop_slug} href={`/${shop_slug}`} />
                <ShoppingCart shop_slug={shop_slug} />
            </div>

            <div className="width flex items-center justify-between max-lg:hidden">
                <Logo name={shop_slug} href={`/${shop_slug}`} />
                <ul className="flex items-center gap-4 font-bold lg:gap-8">
                    {navItems.map((item) => (
                        <NavItem key={item.href} label={item.label} href={item.href} />
                    ))}
                    <ShoppingCart shop_slug={shop_slug} />
                </ul>
            </div>
        </nav>
    );
};

export default ShopNavbar;
