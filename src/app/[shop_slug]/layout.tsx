import Footer from "@/features/shared/Footer";
import Navbar from "@/features/shared/Navbar";
import { Params } from "@/types";

const Layout = async ({ children, params }: { children: React.ReactNode; params: Params<"shop_slug"> }) => {
    const { shop_slug } = await params;

    return (
        <div>
            <Navbar />
            {children}
            <Footer shop_slug={shop_slug} />
        </div>
    );
};

export default Layout;
