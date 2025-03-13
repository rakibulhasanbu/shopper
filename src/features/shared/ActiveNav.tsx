"use client";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const ActiveNav = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return <span className={cn(isActive && "text-primary")}>{children}</span>;
};

export default ActiveNav;
