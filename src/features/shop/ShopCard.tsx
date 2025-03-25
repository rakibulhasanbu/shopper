import Image from "next/image";
import Link from "next/link";

import { Shop } from "@/types/shop-type";

const ShopCard = ({ shop }: { shop: Shop }) => {
    return (
        <Link href={`/${shop.slug}`} className="center gap-2 border p-4 hover:bg-gray-100">
            <Image src={shop.photoURL} alt={shop.name} width={100} height={100} />
            <p>{shop.name}</p>
        </Link>
    );
};

export default ShopCard;
