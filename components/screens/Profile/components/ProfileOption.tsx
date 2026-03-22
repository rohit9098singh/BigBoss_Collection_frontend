import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
    title: string;
    href?: string;
    icon: ReactNode;
    isDestructive?: boolean;
}

export default function ProfileOption({ title, href, icon, isDestructive = false }: Props) {
    const className = `flex items-center gap-4 p-5 border rounded-lg transition-colors ${isDestructive ? 'hover:bg-red-50 text-red-600 border-red-100' : 'hover:bg-zinc-50 text-zinc-800'
        }`;

    const content = (
        <>
            <div className="p-2 bg-white border rounded-full shadow-sm">
                {icon}
            </div>
            <span className="font-medium text-lg">{title}</span>
        </>
    );

    if (href) {
        return (
            <Link href={href} className={className}>
                {content}
            </Link>
        );
    }

    return (
        <button className={`w-full text-left ${className}`}>
            {content}
        </button>
    );
}
