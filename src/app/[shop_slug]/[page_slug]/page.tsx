import { getLandingPageBySlug } from "@/actions/landing-page-options";
import { getProductBySlug } from "@/actions/product-actions";
import Banner from "@/features/page/Banner";
import Features from "@/features/page/Features";
import Ingredient from "@/features/page/Ingredient";
import Offer from "@/features/page/Offer";
import OfferTime from "@/features/page/OfferTime";
import OrderForm from "@/features/page/OrderForm";
import { Params } from "@/types";

const Page = async ({ params }: { params: Params<"page_slug" | "shop_slug"> }) => {
    const { page_slug, shop_slug } = await params;

    const product = await getProductBySlug(shop_slug);

    const landingPage = await getLandingPageBySlug(page_slug);

    console.log("landingPage :>> ", landingPage);
    return (
        <div className="bg-[#F8F6F8]">
            <Banner shop_slug={shop_slug} />
            <OfferTime />
            <Offer />
            <Ingredient />
            <Features />
            <OrderForm product={product?.data} />
        </div>
    );
};

export default Page;
