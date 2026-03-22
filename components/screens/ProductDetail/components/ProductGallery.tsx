import { useState } from 'react';

export default function ProductGallery({ images }: { images: string[] }) {
    const [selected, setSelected] = useState(images[0]);

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex flex-row md:flex-col gap-3 overflow-x-auto md:w-20 lg:w-24 shrink-0 scrollbar-hide">
                {images.map((img, i) => (
                    <button
                        key={i}
                        onClick={() => setSelected(img)}
                        className={`w-16 md:w-full aspect-[3/4] shrink-0 border-2 transition-colors ${selected === img ? 'border-primary' : 'border-transparent hover:border-gray-200'
                            }`}
                    >
                        <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
            <div className="flex-1 w-full aspect-[3/4] bg-gray-100 relative">
                <img src={selected} alt="Product Detail" className="w-full h-full object-cover object-top" />
            </div>
        </div>
    );
}
