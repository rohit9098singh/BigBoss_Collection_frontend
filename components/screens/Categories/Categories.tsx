import Link from "next/link";

const categoriesList = [
    { id: 1, title: "SHIRTS", href: "/categories/shirts" },
    { id: 2, title: "TROUSERS", href: "/categories/trousers" },
    { id: 3, title: "JEANS", href: "/categories/jeans" },
    { id: 4, title: "POLOS", href: "/categories/polos" },
    { id: 5, title: "CARGOS", href: "/categories/cargos" },
    { id: 6, title: "T-SHIRTS", href: "/categories/t-shirts" },
    { id: 7, title: "SHORTS", href: "/categories/shorts" },
    { id: 8, title: "PLUS SIZE", href: "/categories/plus-size" },
    { id: 9, title: "SHOES", href: "/categories/shoes" },
    { id: 10, title: "WATCH", href: "/categories/watches" },
    { id: 11, title: "WEARING ACCESSORIES", href: "/categories/accessories" },
];

const categoryImages: Record<string, string> = {
    "SHIRTS": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=80",
    "TROUSERS": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop&q=80",
    "JEANS": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=80",
    "POLOS": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=80",
    "CARGOS": "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=500&auto=format&fit=crop&q=80",
    "T-SHIRTS": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=80",
    "SHORTS": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&auto=format&fit=crop&q=80",
    "PLUS SIZE": "https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?w=500&auto=format&fit=crop&q=80",
    "SHOES": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80",
    "WATCH": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&auto=format&fit=crop&q=80",
    "WEARING ACCESSORIES": "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&auto=format&fit=crop&q=80",
};

const categoryGradients: Record<string, string> = {
    "SHIRTS": "from-pink-300 via-purple-300 to-indigo-400",
    "TROUSERS": "from-blue-200 via-cyan-300 to-teal-300",
    "JEANS": "from-indigo-300 via-purple-300 to-pink-300",
    "POLOS": "from-rose-300 via-fuchsia-300 to-pink-400",
    "CARGOS": "from-orange-200 via-orange-300 to-rose-300",
    "T-SHIRTS": "from-emerald-300 via-teal-300 to-cyan-300",
    "SHORTS": "from-sky-300 via-blue-300 to-indigo-300",
    "PLUS SIZE": "from-pink-300 via-rose-300 to-red-300",
    "SHOES": "from-violet-300 via-purple-300 to-fuchsia-300",
    "WATCH": "from-slate-300 via-gray-400 to-zinc-400",
    "WEARING ACCESSORIES": "from-yellow-200 via-amber-300 to-orange-400"
};

const formatTitle = (title: string) => {
    return title.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
};

export default function CategoriesPage() {
    return (
        <div className="min-h-screen bg-white pt-8 pb-24 px-4 w-full max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <h1 className="text-2xl md:text-5xl font-black uppercase tracking-tight text-gray-900">
                    All Categories
                </h1>
                <div className="w-16 md:w-24 h-1 bg-gray-900 mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
                {categoriesList.map((category) => (
                    <Link
                        key={category.id}
                        href={category.href}
                        className="group relative flex h-28 md:h-40 bg-[#fcf8fa] hover:bg-[#f5eef2] transition-colors overflow-hidden border rounded-xl border-primary"
                    >
                        {/* Text Content */}
                        <div className="flex-1 p-3 md:p-6 z-10 w-1/2">
                            <h3 className="text-[15px] md:text-2xl font-medium text-gray-800 tracking-wide mt-1 md:mt-0">
                                {formatTitle(category.title)}
                            </h3>
                        </div>

                        {/* Image Circle Container */}
                        <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-end pr-3 md:pr-6 pointer-events-none z-10">
                            <div className={`w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden bg-gradient-to-br ${categoryGradients[category.title] || 'from-pink-300 to-purple-300'} relative transform group-hover:scale-105 transition-transform duration-500 shadow-sm`}>
                                <img
                                    src={categoryImages[category.title] || 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&q=80'}
                                    alt={category.title}
                                    className="w-full h-full object-cover object-top mix-blend-multiply opacity-90"
                                />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
