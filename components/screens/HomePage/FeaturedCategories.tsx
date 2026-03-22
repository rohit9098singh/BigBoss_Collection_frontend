"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        id: 1,
        title: "SHIRTS",
        image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_4f8b51d5-fc58-475f-b092-4b68bae0cb0b.jpg?v=1771349752&quality=80",
        href: "/categories/shirts",
    },
    {
        id: 2,
        title: "TROUSERS",
        image: "https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/4c91b6ae-4117-4aac-a97b-78ef219325ee/1772714639.jpeg?w=90",
        href: "/categories/trousers",
    },
    {
        id: 3,
        title: "JEANS",
        image: "https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/59d59218-a414-4995-94c8-4aa61aae9ae0/1772714656.jpeg?w=90",
        href: "/categories/jeans",
    },
    {
        id: 4,
        title: "POLOS",
        image: "https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/aebdc03f-f280-4cf9-8a80-12a648b2025a/1772714669.jpeg?w=90",
        href: "/categories/polos",
    },
    {
        id: 5,
        title: "CARGOS",
        image: "https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/b83959e3-074a-409f-a033-e56e2781ab73/1772714681.jpeg?w=90",
        href: "/categories/cargos",
    },
    {
        id: 6,
        title: "T-SHIRTS",
        image: "https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/5b1d3e8b-adff-4539-8be7-96d8c01c0d12/1772714845.jpeg?w=90",
        href: "/categories/t-shirts",
    },
    {
        id: 7,
        title: "SHORTS",
        image: "https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/04088c7a-3216-4a8b-9b23-e7f7703e1f6b/1772714906.jpeg?w=90",
        href: "/categories/shorts",
    },
    {
        id: 8,
        title: "PLUS SIZE",
        image: "https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/9d62e211-00c9-4b34-9180-28365f3454be/1773834900.jpeg?w=90",
        href: "/categories/plus-size",
    },
    {
        id: 9,
        title: "SHOES",
        image: "https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/0ddd6589-25a3-4d03-91c5-1f411aaaa9b2/1773835424.jpeg?w=90",
        badge: "JUST LAUNCHED",
        href: "/categories/shoes",
    },
    {
        id: 10,
        title: "WATCH",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=80",
        href: "/categories/watches",
    },
    {
        id: 11,
        title: "WEARING ACCESSORIES",
        image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=600&q=80",
        href: "/categories/accessories",
    },
];

export default function FeaturedCategories() {
    return (
        <section className=" px-4 w-full max-w-7xl mx-auto mb-10 md:mb-12">
            <div className="text-center mb-12">
                <h2 className="text-xl md:text-4xl font-extrabold uppercase tracking-tight text-primary">
                    Featured Categories
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={category.href}
                        className="group relative h-[250px] md:h-[350px] w-full overflow-hidden rounded-md bg-muted/10"
                    >
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                            <Image
                                src={category.image}
                                alt={category.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            />
                        </div>

                        {/* Elegant dark gradient moving from bottom halfway up to make text highly legible */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Just Launched Badge */}
                        {category.badge && (
                            <div className="absolute top-4 left-0 right-0 flex justify-center z-10">
                                <span className="px-4 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-black bg-white rounded-full 
                shadow-[0_4px_10px_rgba(0,0,0,0.5)] transform translate-y-[-10px] transition-transform duration-300 group-hover:translate-y-0 opacity-80 group-hover:opacity-100">
                                    {category.badge}
                                </span>
                            </div>
                        )}

                        {/* Category Title */}
                        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10 px-4">
                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider text-white drop-shadow-lg text-center leading-tight
              group-hover:text-primary transition-colors duration-300 group-hover:-translate-y-2 transform">
                                {category.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
