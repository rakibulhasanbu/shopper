const PageTopBar = ({ title }: { title: string }) => {
    return (
        <div className="flex h-[20dvh] items-center justify-center bg-primary/90 text-center lg:h-[30dvh]">
            <h1 className="text-2xl font-bold text-white lg:text-4xl">{title}</h1>
        </div>
    );
};

export default PageTopBar;
