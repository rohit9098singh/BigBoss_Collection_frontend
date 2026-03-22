import { User } from 'lucide-react';

export default function ProfileHeader() {
    return (
        <div className="flex items-center gap-4 mb-8 p-6 border rounded-lg bg-zinc-50/50">
            <div className="w-16 h-16 bg-zinc-200 rounded-full flex items-center justify-center">
                <User size={28} className="text-zinc-600" />
            </div>
            <div>
                <h2 className="text-xl font-bold text-primary">Your Account</h2>
                <p className="text-primary text-bold text-sm">Welcome back to BigBoss Collection</p>
            </div>
        </div>
    );
}
