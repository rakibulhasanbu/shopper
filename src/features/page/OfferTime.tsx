"use client";

import { useEffect, useState } from "react";

import LordIcon from "@/features/shared/LordIcon";

const TIMER_DURATION = 56 * 60; // 56 minutes in seconds
const STORAGE_KEY = "offerTimeEndAt";

const OfferTime = () => {
    const [timeLeft, setTimeLeft] = useState<number>(TIMER_DURATION);

    useEffect(() => {
        // Check if there's a saved end time in localStorage
        const savedEndTime = localStorage.getItem(STORAGE_KEY);
        const now = Math.floor(Date.now() / 1000);

        if (savedEndTime) {
            const endTime = parseInt(savedEndTime);
            if (endTime > now) {
                // Timer still running, calculate remaining time
                setTimeLeft(endTime - now);
            } else {
                // Timer expired, start new timer
                const newEndTime = now + TIMER_DURATION;
                localStorage.setItem(STORAGE_KEY, newEndTime.toString());
                setTimeLeft(TIMER_DURATION);
            }
        } else {
            // No saved timer, start new one
            const endTime = now + TIMER_DURATION;
            localStorage.setItem(STORAGE_KEY, endTime.toString());
        }

        // Start the countdown
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    // Reset timer when it reaches zero
                    const newEndTime = Math.floor(Date.now() / 1000) + TIMER_DURATION;
                    localStorage.setItem(STORAGE_KEY, newEndTime.toString());
                    return TIMER_DURATION;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Convert seconds to hours, minutes, seconds
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="mx-auto flex max-w-3xl items-center justify-between py-6 max-md:flex-col">
            <LordIcon src="https://cdn.lordicon.com/wsdieofl.json" />

            <div className="text-center">
                <p className="mb-2 text-2xl font-semibold text-foreground/90">অফারের সময় বাকি মাত্র</p>
                <div className="space-x-3 text-4xl font-medium text-destructive">
                    <span>{String(hours).padStart(2, "0")}</span>
                    <span>:</span>
                    <span>{String(minutes).padStart(2, "0")}</span>
                    <span>:</span>
                    <span>{String(seconds).padStart(2, "0")}</span>
                </div>
                <p className="mt-1.5 space-x-8 font-medium max-md:text-sm">
                    <span>ঘন্টা</span>
                    <span>মিনিট</span>
                    <span>সেকেন্ড</span>
                </p>
            </div>
        </div>
    );
};

export default OfferTime;
