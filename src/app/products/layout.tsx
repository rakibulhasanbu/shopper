import Navbar from "@/features/shared/Navbar";

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className="width mt-14">{children}</div>
        </div>
    );
};

export default ProductsLayout;
