import Footer from "@/features/shared/Footer";
import ShopNavbar from "@/features/shared/ShopNavbar";
import { Params } from "@/types";

const Layout = async ({ children, params }: { children: React.ReactNode; params: Params<"shop_slug"> }) => {
    const { shop_slug } = await params;

    return (
        <div>
            <ShopNavbar />
            {children}
            <Footer shop_slug={shop_slug} />
        </div>
    );
};

export default Layout;
