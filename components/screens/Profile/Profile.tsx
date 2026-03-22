import { Package, Heart, MapPin, Settings, LogOut } from 'lucide-react';
import ProfileHeader from './components/ProfileHeader';
import ProfileOption from './components/ProfileOption';

const profileOptions = [
    { id: 1, title: 'My Orders', icon: <Package size={20} />, href: '/orders' },
    { id: 2, title: 'Wishlist', icon: <Heart size={20} />, href: '/wishlist' },
    { id: 3, title: 'Saved Addresses', icon: <MapPin size={20} />, href: '/addresses' },
    { id: 4, title: 'Account Settings', icon: <Settings size={20} />, href: '/settings' },
];

export default function Profile() {
    return (
        <div className="min-h-screen pt-8 pb-12 px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl text-bold md:text-4xl text-primary uppercase mb-8 text-center md:text-left tracking-wide">
                My Profile
            </h1>

            <ProfileHeader />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profileOptions.map((opt) => (
                    <ProfileOption
                        key={opt.id}
                        title={opt.title}
                        href={opt.href}
                        icon={opt.icon}
                    />
                ))}

                <ProfileOption
                    title="Logout"
                    icon={<LogOut size={20} />}
                    isDestructive={true}
                />
            </div>
        </div>
    );
}
