"use client";

import dynamic from 'next/dynamic';

const Profile = dynamic(() => import('./Profile'), { ssr: false });

const ProfileHOC = () => {
    return (
        <Profile />
    );
};

export default ProfileHOC;
