"use client";

import { Crown } from "lucide-react";
import Link from "next/link";

const stores = [
    { id: 1, price: "99", label: "UNDER 99", href: "/store/under-99" },
    { id: 2, price: "199", label: "UNDER 199", href: "/store/under-199" },
    { id: 3, price: "299", label: "UNDER 299", href: "/store/under-299" },
    { id: 4, price: "399", label: "UNDER 399", href: "/store/under-399" },
    { id: 5, price: "499", label: "UNDER 499", href: "/store/under-499" },
];

export default function PriceStores() {
    return (
        <section className="py-2 px-4 w-full max-w-7xl mx-auto mb-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {stores.map((store) => (
                    <Link
                        key={store.id}
                        href={store.href}
                        className="group relative flex flex-col items-center justify-center py-6 px-2 bg-black rounded-md"
                    >
                        {/* Shimmer effect on hover */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />

                        <div className="flex flex-col items-center z-10">
                            <Crown className="text-2xl font-bold tracking-widest text-[#FFD700] uppercase" />
                            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#FFD700]/90 uppercase mb-0.5">
                                {store.label}
                            </span>
                            <span className="text-sm font-bold tracking-widest text-[#FFD700] uppercase">
                                Store
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
