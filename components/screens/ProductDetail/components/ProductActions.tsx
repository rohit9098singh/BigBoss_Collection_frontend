import { ShoppingBag, Heart } from 'lucide-react';
import { useState } from 'react';

export default function ProductActions() {
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
    const [selectedSize, setSelectedSize] = useState('M');

    return (
        <div className="py-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900 tracking-wide">SELECT SIZE</h3>
                <button className="text-sm text-primary font-bold uppercase tracking-widest hover:underline">Size Chart</button>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
                {sizes.map(size => (
                    <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 rounded-full border flex items-center justify-center font-bold text-sm transition-all shadow-sm ${selectedSize === size
                                ? 'border-primary text-primary bg-primary/5 ring-1 ring-primary'
                                : 'border-gray-300 text-gray-700 hover:border-gray-800 hover:text-black'
                            }`}
                    >
                        {size}
                    </button>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-primary text-primary-foreground py-4 rounded-sm flex items-center justify-center gap-3 font-bold text-sm tracking-widest uppercase transition-opacity hover:opacity-90 shadow-sm active:scale-[0.98]">
                    <ShoppingBag size={18} />
                    Add To Bag
                </button>
                <button className="flex-1 border border-gray-300 bg-white py-4 rounded-sm flex items-center justify-center gap-3 font-bold text-sm tracking-widest uppercase text-gray-900 hover:border-gray-900 transition-colors shadow-sm active:scale-[0.98]">
                    <Heart size={18} className="text-gray-500" />
                    Wishlist
                </button>
            </div>
        </div>
    );
}
