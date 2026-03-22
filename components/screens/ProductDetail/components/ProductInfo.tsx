import { Star } from 'lucide-react';

interface ProductInfoProps {
    product: {
        brand: string;
        name: string;
        price: number;
        originalPrice: number;
        discount: number;
        rating: number;
        reviews: string;
    }
}

export default function ProductInfo({ product }: ProductInfoProps) {
    return (
        <div className="flex flex-col gap-2 border-b border-gray-200 pb-4">
            <h2 className="text-2xl text-gray-900 tracking-wide uppercase">{product.brand}</h2>
            <p className="text-xl text-gray-500">{product.name}</p>

            <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1 border border-gray-300 px-2.5 py-1 rounded-sm text-sm font-bold text-gray-800 shadow-sm cursor-pointer hover:border-gray-400 transition-colors">
                    {product.rating} <Star size={14} className="fill-teal-600 text-teal-600" />
                    <span className="text-gray-300 mx-1 font-light">|</span>
                    <span className="font-normal text-gray-500">{product.reviews} Ratings</span>
                </div>
            </div>

            <div className="flex items-baseline flex-wrap gap-3 mt-4">
                <span className="text-3xl text-gray-900">Rs. {product.price}</span>
                <span className="text-xl text-gray-500 line-through">Rs. {product.originalPrice}</span>
                <span className="text-xl text-orange-500">({product.discount}% OFF)</span>
            </div>
            <p className="text-sm text-teal-700 font-bold mt-1">inclusive of all taxes</p>
        </div>
    );
}
