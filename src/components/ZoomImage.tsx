"use client";

import { useState } from "react";
import Image from "next/image";

interface ZoomImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const ZoomImage = ({ src, alt, width, height }: ZoomImageProps) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [showZoom, setShowZoom] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPosition({ x, y });
    };

    return (
        <div
            className="relative aspect-square w-full overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowZoom(true)}
            onMouseLeave={() => setShowZoom(false)}
        >
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="h-full w-full object-cover"
                priority
                quality={100}
            />
            {showZoom && (
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundSize: "200% 200%",
                        backgroundPosition: `${position.x}% ${position.y}%`,
                    }}
                />
            )}
        </div>
    );
};

export default ZoomImage;
