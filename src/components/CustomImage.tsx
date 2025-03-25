import Image, { ImageProps } from "next/image";

import preview from "@/assets/images/preview.jpeg";

const CustomImage = ({ src = "", alt = "", ...props }: ImageProps) => {
    const isValidUrl = (url: string) => {
        try {
            new URL(url);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    const imageSrc = src && isValidUrl(src as string) ? src : preview;
    return <Image src={imageSrc} alt={alt} {...props} />;
};

export default CustomImage;
