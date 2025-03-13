import Image from "next/image";

import emptyImage from "@/assets/images/empty-cart.svg";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
    title: string;
    description?: string;
    action?: {
        label: string;
        href: string;
    };

    className?: string;
}

const EmptyState = ({ title, description, action, className }: EmptyStateProps) => {
    return (
        <div
            className={cn(
                "flex min-h-[85.1dvh] flex-col items-center justify-center gap-4 py-8 text-center lg:py-16",
                className
            )}
        >
            <div className="mb-4">
                <Image
                    src={emptyImage}
                    alt="Empty state illustration"
                    width={200}
                    height={200}
                    className="size-60 transition-transform duration-300 hover:scale-110"
                />
            </div>
            <h2 className="text-xl font-semibold lg:text-2xl">{title}</h2>
            {description && <p className="max-w-[450px] text-base text-muted-foreground">{description}</p>}
            {action && (
                <Button href={action.href} className="mt-4 min-w-[200px]">
                    {action.label}
                </Button>
            )}
        </div>
    );
};

export default EmptyState;
