import { Metadata } from "next";

const privacyPolicySections = [
    {
        title: "আমরা যে তথ্য সংগ্রহ করি",
        content: "আমরা আপনার কাছ থেকে সরাসরি প্রদত্ত তথ্য সংগ্রহ করি, যার মধ্যে রয়েছে:",
        list: [
            "নাম এবং যোগাযোগের তথ্য",
            "বিলিং এবং শিপিং ঠিকানা",
            "পেমেন্ট সংক্রান্ত তথ্য",
            "অর্ডার ইতিহাস",
            "অ্যাকাউন্ট ক্রেডেনশিয়ালস",
        ],
    },
    {
        title: "আমরা কীভাবে আপনার তথ্য ব্যবহার করি",
        content: "আমরা সংগৃহীত তথ্য ব্যবহার করি:",
        list: [
            "আপনার অর্ডার এবং পেমেন্ট প্রক্রিয়া করতে",
            "আপনার অর্ডার সম্পর্কে আপনার সাথে যোগাযোগ করতে",
            "মার্কেটিং যোগাযোগ পাঠাতে (আপনার সম্মতিতে)",
            "আমাদের সেবা এবং ওয়েবসাইট উন্নত করতে",
            "আইনি বাধ্যবাধকতা মেনে চলতে",
        ],
    },
    {
        title: "তথ্য শেয়ারিং",
        content:
            "আমরা আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের কাছে বিক্রি বা ভাড়া দেই না। আমরা শুধুমাত্র সেই সেবা প্রদানকারীদের সাথে আপনার তথ্য শেয়ার করতে পারি যারা আমাদের ওয়েবসাইট পরিচালনা, ব্যবসা পরিচালনা, বা ব্যবহারকারীদের সেবা প্রদানে সহায়তা করে।",
    },
    {
        title: "নিরাপত্তা",
        content:
            "আমরা আপনার ব্যক্তিগত তথ্য সুরক্ষার জন্য উপযুক্ত নিরাপত্তা ব্যবস্থা বাস্তবায়ন করি। তবে, ইন্টারনেটের মাধ্যমে তথ্য প্রেরণের কোন পদ্ধতিই ১০০% নিরাপদ নয়।",
    },
    {
        title: "কুকিজ",
        content:
            "আমরা আমাদের ওয়েবসাইটে কার্যকলাপ ট্র্যাক করতে এবং আপনার শপিং অভিজ্ঞতা উন্নত করতে কুকিজ এবং অনুরূপ ট্র্যাকিং প্রযুক্তি ব্যবহার করি।",
    },
    {
        title: "আপনার অধিকার",
        content:
            "আপনার ব্যক্তিগত তথ্য অ্যাক্সেস, সংশোধন বা মুছে ফেলার অধিকার আপনার রয়েছে। এই অধিকারগুলি প্রয়োগ করতে চাইলে আমাদের সাথে যোগাযোগ করুন।",
    },
    {
        title: "যোগাযোগ করুন",
        content: "এই গোপনীয়তা নীতি সম্পর্কে আপনার কোন প্রশ্ন থাকলে, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন, ধন্যবাদ।",
    },
];

export const metadata: Metadata = {
    title: "Privacy Policy - Hattbar",
    description: "Hattbar's Privacy Policy",
};

const PrivacyPolicy = () => {
    return (
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="mb-8 text-2xl font-semibold">গোপনীয়তা নীতি</h1>

            <div className="space-y-6">
                {privacyPolicySections.map((section, index) => (
                    <section key={index}>
                        <h2 className="mb-1 text-xl font-medium">{section.title}</h2>
                        <p className="mb-2 text-muted-foreground">{section.content}</p>
                        {section.list && (
                            <ul className="list-disc pl-6 text-muted-foreground">
                                {section.list.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </section>
                ))}
            </div>
        </div>
    );
};

export default PrivacyPolicy;
