import Link from 'next/link';
import { Search, User, Heart, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

export default function NavbarMain() {
    return (
        <nav className="sticky bg-black md:px-8 top-0 z-50 w-full border-b border-yellow-400/20 ">
            <div className="container mx-auto px-8 h-20 flex items-center justify-between gap-8">
                {/* Logo Section */}
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={60} height={60} className='w-12 h-12' />
                </Link>

                {/* Search Bar */}
                <div className="flex-1 max-w-2xl mx-2 md:mx-6">
                    <div className="relative group w-full flex items-center">
                        <Search className="absolute left-4 w-4.5 h-4.5 text-zinc-400 group-focus-within:text-yellow-300 transition-colors pointer-events-none" />
                        <input
                            type="text"
                            placeholder="Search for products, brands and more..."
                            className="w-full rounded-full border border-yellow-400/50 bg-zinc-800/90 py-2.5 pl-11 pr-5 text-sm text-zinc-100 placeholder:text-zinc-300 outline-none transition-all duration-300 hover:border-yellow-300/80 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:ring-offset-1 focus:ring-offset-black shadow-[inset_0_2px_4px_rgba(0,0,0,0.35)]"
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6 shrink-0">
                    <Link href="/profile" className="hidden md:flex flex-col items-center gap-1 text-muted-foreground hover:text-yellow-400 transition-colors group">
                        <User className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform text-white" />
                        <span className="text-[11px] font-medium hidden sm:block text-white">Profile</span>
                    </Link>
                    <Link href="/wishlist" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-yellow-400 transition-colors group">
                        <Heart className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform text-white" />
                        <span className="text-[11px] font-medium hidden sm:block text-white">Wishlist</span>
                    </Link>
                    <Link href="/cart" className="hidden md:flex flex-col items-center gap-1 text-muted-foreground hover:text-yellow-400 transition-colors group relative">
                        <div className="relative">
                            <ShoppingBag className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform text-white" />
                            <span className="absolute -top-1.5 -right-2 bg-yellow-400 text-black text-[10px] font-bold px-1.5 rounded-full">
                                2
                            </span>
                        </div>
                        <span className="text-[11px] font-medium hidden sm:block text-white">Bag</span>
                    </Link>
                </div>

            </div>
        </nav>
    );
}
