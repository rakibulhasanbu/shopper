"use client";

import Image from "next/image";

import BillingDetails from "@/features/checkout/BillingDetails";
import OrderFormWrapper from "@/features/page/OrderFormWrapper";
import { CircleDot } from "lucide-react";

import { Product } from "@/types/product-type";
import { Button } from "@/components/ui/button";

const OrderForm = ({ product }: { product?: Product }) => {
    console.log(product);

    return (
        <OrderFormWrapper>
            <div className="lg:py-20" id="order">
                <div className="page-width flex gap-10 rounded-lg border bg-white px-4 py-12 max-lg:flex-col lg:gap-16 lg:px-10">
                    <div className="w-full lg:w-[55%]">
                        <h2 className="font-medium lg:text-xl">অর্ডার সম্পর্কিত তথ্য</h2>
                        <BillingDetails />
                    </div>
                    <div className="w-full lg:w-[45%]">
                        <h2 className="font-medium lg:text-xl">আপনার অর্ডার</h2>
                        <div className="py-6">
                            <div className="flex items-center border-b border-dashed border-foreground/20 pb-3 max-lg:justify-between max-lg:text-sm lg:pb-4">
                                <p className="lg:w-[70%]">প্রোডাক্ট</p>
                                <p className="lg:w-[30%]">সাবটোটাল</p>
                            </div>
                            <div className="overflow-y-auto md:max-h-[50dvh]">
                                {product && (
                                    <div key={`${product.id}-${product.id}`} className="flex items-center py-2.5">
                                        <div className="flex w-[70%] items-center gap-2">
                                            <Image
                                                src={product.photoURL || ""}
                                                alt={product.name || ""}
                                                width={100}
                                                height={100}
                                                className="h-16 w-16 rounded-sm"
                                            />
                                            <div>
                                                <p>{product.name}</p>
                                                {product?.productVariant[0]?.name && (
                                                    <p className="text-sm text-muted-foreground">
                                                        Variant: {product?.productVariant[0]?.name}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="w-[30%]">
                                            <span>
                                                1 × ৳{" "}
                                                {product?.productVariant[0]?.discountPrice || product?.discountPrice}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4 border-y border-dashed border-foreground/20 py-3 max-lg:text-sm">
                                <div className="flex items-center justify-between">
                                    <p className="w-[70%]">সাবটোটাল</p>
                                    <p className="w-[30%]">৳ {product?.discountPrice || product?.price}</p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <p className="w-[70%]">শিপিং প্রসেস</p>
                                    <p className="w-[30%]">Free Shipping</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-3 font-medium">
                                <p className="w-[70%]">টোটাল</p>
                                <p className="w-[30%]">৳ {product?.discountPrice || product?.price}</p>
                            </div>
                        </div>

                        <div className="bg-primary/10 p-4 lg:p-6">
                            <h2 className="flex items-center gap-3 pb-4 font-medium lg:text-lg">
                                <CircleDot className="size-5 text-primary" />
                                ক্যাশঅন ডেলিভারি
                            </h2>
                            <div className="relative flex items-center gap-2 bg-white p-2 px-3 max-lg:text-sm">
                                <p className="z-20">পন্য হাতে পেয়ে মূল্য পরিশোধ করবেন</p>
                                <span className="absolute -top-px left-7 z-0 h-4 w-4 -translate-y-1/2 rotate-45 bg-white"></span>
                            </div>
                        </div>

                        <div className="pt-10">
                            <Button type="submit" className="h-12 w-full text-base lg:h-14 lg:text-lg">
                                অর্ডার করুন ৳ {product?.discountPrice || product?.price}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </OrderFormWrapper>
    );
};

export default OrderForm;
