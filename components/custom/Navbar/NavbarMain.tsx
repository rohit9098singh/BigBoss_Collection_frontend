import Link from 'next/link';
import { Search, User, Heart, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

export default function NavbarMain() {
    return (
        <nav className="sticky bg-black md:px-8 top-0 z-50 w-full border-b border-primary/20 ">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-8">
                {/* Logo Section */}
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={60} height={60} className='w-12 h-12' />
                </Link>

                {/* Search Bar */}
                <div className="flex-1 max-w-2xl mx-2 md:mx-6">
                    <div className="relative group w-full flex items-center">
                        <Search className="absolute left-4 w-[18px] h-[18px] text-zinc-400 group-focus-within:text-zinc-100 transition-colors pointer-events-none" />
                        <input
                            type="text"
                            placeholder="Search for products, brands and more..."
                            className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700/80 bg-zinc-800 focus:border-primary rounded-full py-2.5 pl-11 pr-5 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6 shrink-0">
                    <Link href="/profile" className="hidden md:flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group">
                        <User className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                        <span className="text-[11px] font-medium hidden sm:block">Profile</span>
                    </Link>
                    <Link href="/wishlist" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group">
                        <Heart className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                        <span className="text-[11px] font-medium hidden sm:block">Wishlist</span>
                    </Link>
                    <Link href="/cart" className="hidden md:flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group relative">
                        <div className="relative">
                            <ShoppingBag className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                            <span className="absolute -top-1.5 -right-2 bg-primary text-primary-foreground text-[10px] font-bold px-1.5 rounded-full">
                                2
                            </span>
                        </div>
                        <span className="text-[11px] font-medium hidden sm:block">Bag</span>
                    </Link>
                </div>

            </div>
        </nav>
    );
}
