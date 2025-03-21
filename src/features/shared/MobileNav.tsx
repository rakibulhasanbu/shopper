import Link from "next/link";

import ActiveNav from "@/features/shared/ActiveNav";
import Logo from "@/features/shared/Logo";
import { Text } from "lucide-react";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = ({ shop_slug }: { shop_slug: string }) => {
    const navItems = [
        { label: "হোম", href: `/${shop_slug}` },
        { label: "সকল প্রডাক্ট", href: `/${shop_slug}/products` },
        { label: "কার্ট", href: `/${shop_slug}/cart` },
    ];

    return (
        <Sheet>
            <SheetTrigger>
                <Text className="size-5 cursor-pointer hover:text-primary" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="sr-only">This is for the nav title</SheetTitle>
                    <SheetDescription className="sr-only">This is for the nav description</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col items-start pt-6">
                    <SheetClose asChild>
                        <Logo name={shop_slug.replace(/%20/g, " ")} href={`/${shop_slug}`} />
                    </SheetClose>
                    <ul className="flex flex-col items-start gap-2 pt-4">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <SheetClose asChild>
                                    <Link href={item.href}>
                                        <ActiveNav href={item.href}>{item.label}</ActiveNav>
                                    </Link>
                                </SheetClose>
                            </li>
                        ))}
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
