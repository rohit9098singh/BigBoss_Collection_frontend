import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import ProductActions from './components/ProductActions';
import ProductDetailsDescription from './components/ProductDetailsDescription';
import Rating from './components/Rating';

const mockProduct = {
    id: "2131312",
    brand: "Levis",
    name: "Men Crew Neck Sweatshirt",
    price: 1474,
    originalPrice: 2949,
    discount: 50,
    rating: 4.5,
    reviews: "6k",
    images: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=800&auto=format&fit=crop"
    ]
};

export default function ProductDetail() {
    return (
        <div className="w-full mx-auto px-4 md:px-0 md:max-w-7xl mt-4 md:mt-8 pb-16">
            {/* Main Product Wrapper */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-14">

                {/* Left Side: Photo Gallery */}
                <div className="w-full lg:w-[55%]">
                    <ProductGallery images={mockProduct.images} />
                </div>

                {/* Right Side: Information & Action Hierarchy */}
                <div className="w-full lg:w-[45%] flex flex-col mt-2 lg:mt-0">
                    <ProductInfo product={mockProduct} />
                    <ProductActions />
                    <ProductDetailsDescription />
                </div>

            </div>
            <Rating />
        </div>
    );
}
