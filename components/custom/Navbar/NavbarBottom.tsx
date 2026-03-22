import { Home, MenuIcon, ShoppingBag, User } from "lucide-react"
import Link from "next/link"

const NavbarBottom = () => {
    return (
        <div className="sticky md:hidden px-2 bg-black bottom-0 z-50 w-full border-b border-primary/20 ">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-8">
                {/* Actions */}
                    <Link href="/" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group">
                        <Home className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                    <Link href="/categories" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group">
                        <MenuIcon className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                    <Link href="/profile" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group">
                        <User className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                    <Link href="/cart" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group relative">
                        <div className="relative">
                            <ShoppingBag className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                            <span className="absolute -top-1.5 -right-2 bg-primary text-primary-foreground text-[10px] font-bold px-1.5 rounded-full">
                                2
                            </span>
                        </div>
                    </Link>
            </div>
        </div>
    )
}

export default NavbarBottom