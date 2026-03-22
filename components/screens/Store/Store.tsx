"use client"

import ProductCard from "@/components/custom/ProductCard/ProductCard";
import { useParams } from "next/navigation";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const sortOptions = [
    "Recommended",
    "What's New",
    "Popularity",
    "Better Discount",
    "Price: High to Low",
    "Price: Low to High",
    "Customer Rating"
];

const Store = () => {
    const params = useParams();
    const slug = params["under-slug"] || params["name"] || "Fashion";
    const formattedSlug = typeof slug === 'string' ? slug.replace('-', ' ') : slug;

    return (
        <div className="flex flex-col min-h-screen px-2 sm:px-4 pb-12 w-full max-w-7xl mx-auto mt-4 sm:mt-6">

            {/* Filter & Sort Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-200 pb-4 gap-4 w-full ">

                <h1 className="text-3xl text-bold md:text-4xl text-primary uppercase text-center md:text-left tracking-wide">
                    {formattedSlug} Store
                </h1>
                <div className="flex items-center gap-3 w-full px-2 py-1 border border-primary sm:w-auto justify-between sm:justify-start">
                    <span className="text-sm text-gray-500 shrink-0">Sort by:</span>
                    <Select defaultValue={sortOptions[0]}>
                        <SelectTrigger className="w-full sm:w-[180px] border-none shadow-none font-bold text-gray-900 bg-white">
                            <SelectValue placeholder="Sort selected" />
                        </SelectTrigger>
                        <SelectContent className="bg-background text-black">
                            <SelectGroup>
                                {sortOptions.map((option) => (
                                    <SelectItem key={option} value={option} className="cursor-pointer font-medium bg-background">
                                        {option}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] sm:gap-6 bg-gray-200 sm:bg-transparent border-t border-b sm:border-0 border-gray-200 w-full overflow-hidden">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="bg-white">
                        <ProductCard />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Store;