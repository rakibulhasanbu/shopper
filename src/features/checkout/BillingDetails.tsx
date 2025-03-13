import { CustomInput } from "@/components/CustomInput";

const BillingDetails = () => {
    return (
        <div className="space-y-4 py-4 lg:space-y-6 lg:py-6">
            <CustomInput name="name" label="আপনার সম্পূর্ণ নাম লিখুন" placeholder="নাম লিখুন" />
            <CustomInput name="address" label="সম্পূর্ণ ঠিকানা পূরণ করুন" placeholder="ঠিকানা লিখুন" />
            <CustomInput name="phone" label="আপনার ফোন নাম্বার" placeholder="ফোন নাম্বার লিখুন" type="tel" />
        </div>
    );
};

export default BillingDetails;
