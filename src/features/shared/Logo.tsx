import Link from "next/link";

const Logo = ({ href = "/", name }: { href?: string; name: string }) => {
    const getName = name.replace(/-/g, " ");

    return (
        <Link href={href} className="text-3xl font-extrabold capitalize text-primary lg:text-4xl">
            {getName}
        </Link>
    );
};

export default Logo;
