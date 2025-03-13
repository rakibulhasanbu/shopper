import Image from "next/image";

import { Check } from "lucide-react";

const Features = () => {
    const features = [
        "গরম ধোয়া ওঠা সাদা ভাতের সাথে।",
        "ভূনা খিচুড়ি ও পোলাও-এর সাথে।",
        "গরম গরম খুদের ভাতের সাথে।",
        "মুড়ি মাখা বা মুড়ি ভর্তার সাথে।",
        "আলু ভর্তার সাথে মিশিয়ে।",
        "রান্না করা বিভিন্ন শাকের সাথে।",
        "চানাচুরের মতো সরাসরি।",
    ];

    return (
        <div className="w-full bg-black bg-[url('https://superiorfoodbazar.com/wp-content/uploads/2024/06/Red-BG_11zon.webp')] bg-cover bg-no-repeat">
            <div className="page-width grid py-8 lg:grid-cols-3 lg:gap-8">
                <div className="flex flex-col justify-center gap-3 lg:gap-4">
                    <h2 className="text-3xl font-semibold text-[#FFF200] lg:text-4xl">যেভাবে সংরক্ষণ করবেন</h2>
                    <p className="text-xl text-white lg:text-2xl">
                        চিংড়ি বালাচাও সম্পূর্ণ দেশি পেঁয়াজ ও রসুনের বেরেস্তা দিয়ে তৈরি বলে সহজে নরম হওয়ার আশঙ্কা
                        নেই। অনায়াসে ৬ থেকে ৭ মাস রেখে খেতে পারবেন। ফ্রিজে রাখার প্রয়োজন নেই, সাধারণ জায়গায় বোতলের
                        মুখ ভালভাবে আটকিয়ে রাখলে মচমচে থাকবে বহুদিন।
                    </p>
                </div>
                <Image src="/b.png" alt="Features" width={400} height={400} />
                <div className="flex flex-col justify-center gap-3 lg:gap-4">
                    <h2 className="text-3xl font-semibold text-[#FFF200] lg:text-4xl">যেভাবে খাওয়া যায়</h2>
                    <ul className="flex flex-col gap-2">
                        {features.map((feature) => (
                            <li
                                key={feature}
                                className="flex items-center gap-2 border-b-2 text-xl text-white last:border-b-0 lg:text-2xl"
                            >
                                <span className="flex size-4 items-center justify-center rounded-full bg-green-500 lg:size-5">
                                    <Check className="size-3 lg:size-3.5" />
                                </span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Features;
