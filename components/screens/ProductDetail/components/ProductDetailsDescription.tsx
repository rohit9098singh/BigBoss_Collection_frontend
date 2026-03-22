import { FileText } from "lucide-react";

export default function ProductDetailsDescription() {
    return (
        <div className="py-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2 tracking-wide uppercase">
                Product Details <FileText size={18} />
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6 font-light">
                Navy blue and solid sweatshirt has a crew neck, long sleeves, and a ribbed hem. Made from premium combed cotton which is highly breathable and comfortable on the skin for all occasion wear.
            </p>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-sm mt-4">
                <div className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                    <span className="text-gray-400 font-light">Sleeve Length</span>
                    <span className="font-medium text-gray-800 text-base">Long Sleeves</span>
                </div>
                <div className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                    <span className="text-gray-400 font-light">Neck</span>
                    <span className="font-medium text-gray-800 text-base">Crew Neck</span>
                </div>
                <div className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                    <span className="text-gray-400 font-light">Pattern</span>
                    <span className="font-medium text-gray-800 text-base">Solid</span>
                </div>
                <div className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                    <span className="text-gray-400 font-light">Material</span>
                    <span className="font-medium text-gray-800 text-base">100% Cotton</span>
                </div>
            </div>
        </div>
    );
}
