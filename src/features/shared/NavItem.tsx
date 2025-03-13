"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const NavItem = ({ label, href }: { label: string; href: string }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <li>
            <Link href={href} className={cn(isActive && "text-primary")}>
                {label}
            </Link>
        </li>
    );
};

export default NavItem;
