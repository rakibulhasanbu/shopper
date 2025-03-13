"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CustomTabs = ({
    tabLists,
    className,
    activeTab,
    setActiveTab,
}: {
    tabLists: { label: string; value: string }[];
    className?: string;
    activeTab?: string;
    setActiveTab?: (value: string) => void;
}) => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    const onValueChange = (value: string) => {
        if (setActiveTab) {
            setActiveTab(value);
        } else {
            const params = new URLSearchParams(searchParams);
            params.set("section", value);
            router.replace(`${pathname}?${params.toString()}`, { scroll: false });
        }
    };

    return (
        <Tabs
            defaultValue={activeTab || tabLists[0].value}
            className={cn(className, "max-lg:w-full")}
            onValueChange={onValueChange}
        >
            <TabsList>
                {tabLists.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value}>
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
};

export default CustomTabs;
