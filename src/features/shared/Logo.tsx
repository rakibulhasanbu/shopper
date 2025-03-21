import Link from "next/link";

const Logo = ({ href = "/", name }: { href?: string; name: string }) => {
    return (
        <Link href={href} className="text-3xl font-extrabold text-primary lg:text-4xl">
            {name}
        </Link>
    );
};

export default Logo;
