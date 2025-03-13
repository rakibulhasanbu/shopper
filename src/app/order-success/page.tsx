import { Metadata } from "next";

import { getOrderById } from "@/actions/order-actions";
import EmptyState from "@/features/shared/empty-state";
import Logo from "@/features/shared/Logo";
import { SearchParams } from "@/types";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Thank you - Order Success",
    description: "Our representative will contact you very soon",
};

const Page = async ({ searchParams }: { searchParams: SearchParams<"order"> }) => {
    const { order } = await searchParams;

    const orderResponse = await getOrderById(order as string);
    const orderDetails = orderResponse?.data;

    const total = orderDetails?.orderItems.reduce(
        (acc, item) => acc + (item?.product?.discountPrice || item?.productVariant?.discountPrice || 0) * item.quantity,
        0
    );

    if (!order) {
        return (
            <EmptyState
                title="কোন অর্ডার পাওয়া যায়নি"
                description="আপনার অর্ডার পাওয়া যায়নি। দয়া করে আপনার অর্ডার সফলভাবে সম্পন্ন হয়েছে কি না তা পরীক্ষা করুন।"
                action={{ label: "প্রোডাক্টগুলো দেখুন", href: "/products" }}
            />
        );
    }

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString("bn-BD", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const orderItems = orderDetails?.orderItems.map((item) => ({
        name: item?.product.banglaName,
        variant: item?.productVariant?.name,
        price: item?.product?.discountPrice || item?.productVariant?.discountPrice,
        quantity: item?.quantity,
    }));

    return (
        <div className="min-h-screen">
            <div className="width py-12 max-sm:px-3">
                <div className="flex items-center justify-center">
                    <Logo />
                </div>

                <Separator className="my-4 bg-foreground/20 md:mb-8 md:mt-6" />

                <div className="mx-auto max-w-3xl">
                    <div className="flex justify-center max-lg:text-center max-md:flex-col max-md:items-center lg:gap-6">
                        <CheckCircle2 className="mb-4 size-12 text-primary lg:size-16" />
                        <div>
                            <h1 className="mb-1 text-2xl font-semibold text-primary lg:text-3xl">
                                ধন্যবাদ আপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে
                            </h1>
                            <p className="mb-8 text-sm md:text-base lg:text-lg">
                                আমাদের একজন প্রতিনিধি খুব শিঘ্রই আপনার সাথে যোগাযোগ করবে
                            </p>
                        </div>
                    </div>

                    <div className="mb-2 rounded-lg bg-muted p-4 lg:p-6">
                        <p className="mb-2 lg:mb-4 lg:text-lg">ধন্যবাদ। আপনার অর্ডারটি সফলভাবে নেওয়া হয়েছে</p>

                        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                            <div>
                                <p className="text-muted-foreground">Order number:</p>
                                <p className="font-medium">{orderDetails?.orderNumber}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Date:</p>

                                <p className="font-medium">{formatDate(orderDetails?.createdAt ?? "")}</p>
                            </div>

                            <div>
                                <p className="text-muted-foreground">Total:</p>

                                <p className="font-medium">৳ {total}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Payment method:</p>

                                <p className="font-medium"> ক্যাশঅন ডেলিভারি</p>
                            </div>
                        </div>
                    </div>

                    <p className="mb-8 text-muted-foreground">ক্যাশ অন ডেলিভারির সময় টাকা পরিশোধ করুন।</p>

                    <div className="rounded-lg border border-border">
                        <h2 className="border-b p-4 text-lg font-medium">অর্ডার বিবরণ</h2>
                        <div className="p-4">
                            {orderItems?.map((item, index) => (
                                <div key={index} className="flex justify-between py-2">
                                    <div>
                                        <p>
                                            {item?.name} {item?.variant && ` - ${item?.variant} × ${item?.quantity}`}{" "}
                                            {!item?.variant && `× ${item?.quantity}`}
                                        </p>

                                        {item?.variant && (
                                            <p className="text-sm text-foreground/80">
                                                <span className="font-medium">variant: </span> {item?.variant}
                                            </p>
                                        )}
                                    </div>

                                    <p>৳ {item?.price}</p>
                                </div>
                            ))}
                            <div className="mt-4 border-t pt-4">
                                <div className="flex justify-between py-2">
                                    <p>Subtotal:</p>
                                    <p>৳ {total}</p>
                                </div>
                                <div className="flex justify-between py-2">
                                    <p>Shipping:</p>

                                    <p>Free Shipping</p>
                                </div>
                                <div className="flex justify-between py-2">
                                    <p>Payment method:</p>
                                    <p>ক্যাশ অন ডেলিভারি</p>
                                </div>
                                <div className="flex justify-between py-2 font-medium">
                                    <p>Total:</p>

                                    <p>৳ {total}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <Button href="/products" className="h-12 px-12 text-base">
                            আরও শপিং করুন
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
