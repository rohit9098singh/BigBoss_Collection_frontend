"use client";

import { Heart, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ProductCardProps {
    id?: string;
    brand?: string;
    name?: string;
    price?: number;
    originalPrice?: number;
    rating?: number;
    reviews?: string | number;
    image?: string;
}

const ProductCard = ({
    id="2131312",
    brand = "Levis",
    name = "Men Crew Neck Sweatshirt",
    price = 1474,
    originalPrice = 2949,
    rating = 4.5,
    reviews = "6",
    image = "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500&auto=format&fit=crop"
}: ProductCardProps) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const router = useRouter();

    const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

    return (
        <div className="group flex flex-col w-full h-full relative bg-white cursor-pointer" onClick={() => {router.push(`/categories/watches/${id}`) }}>

            {/* Image Section */}
            <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover object-top"
                />

                {/* Rating Badge */}
                {rating && (
                    <div className="absolute bottom-2 left-2 bg-green-100 px-1.5 py-0.5 rounded flex items-center gap-1 text-[11px] font-bold text-gray-800 shadow-sm z-10">
                        <span>{rating}</span>
                        <Star size={10} className="fill-teal-600 text-teal-600" />
                        <span className="text-gray-300 font-light mx-px">|</span>
                        <span>{reviews}</span>
                    </div>
                )}

                {/* Desktop Hover Wishlist Overlay */}
                <div className="hidden md:flex absolute bottom-0 left-0 w-full bg-white px-2 py-2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 shadow-[0_-4px_6px_rgba(255,255,255,0.5)]">
                    <button
                        onClick={(e) => { e.preventDefault(); setIsWishlisted(!isWishlisted); }}
                        className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 font-bold text-[13px] tracking-wide text-primary hover:border-primary transition-colors bg-white rounded-sm"
                    >
                        <Heart size={15} className={`transition-colors text-primary duration-200 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
                        WISHLIST
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="pt-2 sm:pt-3 pb-3 px-1.5 sm:px-2 flex flex-col gap-0.5 relative z-20 bg-white">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-[14px] sm:text-[15px] text-gray-900 leading-tight">
                        {brand}
                    </h3>
                    {/* Mobile Wishlist Icon */}
                    <button
                        onClick={(e) => { e.preventDefault(); setIsWishlisted(!isWishlisted); }}
                        className="md:hidden p-1 text-gray-500 focus:outline-none"
                    >
                        <Heart size={16} className={isWishlisted ? "fill-red-500 text-red-500" : ""} />
                    </button>
                </div>

                <p className="text-[12px] sm:text-[16px] text-gray-500 font-light line-clamp-1 leading-snug pr-2 text-primary text-bold">
                    {name}
                </p>

                <div className="flex items-center flex-wrap gap-1 sm:gap-1.5 mt-1 sm:mt-1.5">
                    <span className="font-bold text-[13px] sm:text-[14px] text-gray-900">
                        Rs. {price}
                    </span>
                    {originalPrice && originalPrice > price && (
                        <>
                            <span className="text-[11px] sm:text-xs text-gray-500 line-through">
                                Rs. {originalPrice}
                            </span>
                            <span className="text-[11px] sm:text-xs font-bold text-orange-500">
                                ({discount}% OFF)
                            </span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;