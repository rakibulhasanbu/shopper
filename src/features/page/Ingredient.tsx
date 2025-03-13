import Image from "next/image";

const Ingredient = () => {
    const ingredients = [
        {
            name: "চিংড়ি শুটকি",
            imgURL: "/b.png",
        },
        {
            name: "পেঁয়াজ বেরেস্তা",
            imgURL: "/b.png",
        },
        {
            name: "রসুন ভাজা",
            imgURL: "/b.png",
        },
        {
            name: "মরিচের গুঁড়া",
            imgURL: "/b.png",
        },
        {
            name: "সিক্রেট মশলা",
            imgURL: "/b.png",
        },
    ];

    return (
        <div className="page-width py-8">
            <h2 className="pb-4 text-2xl font-semibold lg:pb-6 lg:text-3xl">যে সকল উপাদানে তৈরি?</h2>
            <div className="flex justify-center gap-4 max-lg:flex-wrap lg:justify-between lg:gap-8">
                {ingredients.map((item) => (
                    <div key={item.name} className="center space-y-1 rounded-md border bg-white p-3 lg:w-full lg:p-4">
                        <Image
                            src={item.imgURL}
                            width={160}
                            height={160}
                            alt={item.name}
                            className="size-[130px] lg:size-[160px]"
                        />
                        <p className="text-center text-xl font-medium">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ingredient;
