import { getShops } from "@/actions/shop-actions";
import ShopCard from "@/features/shop/ShopCard";

const ShopsPage = async () => {
    const shops = await getShops();

    return (
        <div className="width py-20">
            <h1 className="pb-4 text-2xl font-bold">All Shops</h1>
            <div className="grid grid-cols-5 gap-4">
                {shops.data.map((shop) => (
                    <ShopCard key={shop.id} shop={shop} />
                ))}
            </div>
        </div>
    );
};

export default ShopsPage;
