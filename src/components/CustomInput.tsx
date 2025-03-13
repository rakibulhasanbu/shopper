"use client";

import { useFormContext } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface CustomInputProps {
    label: string;
    name: string;
    placeholder?: string;
    type?: string;
}

export const CustomInput = ({ label, name, placeholder, type }: CustomInputProps) => {
    const form = useFormContext();
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="space-y-1">
                    <FormLabel>
                        {label} <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                        <Input {...field} placeholder={placeholder} type={type} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
