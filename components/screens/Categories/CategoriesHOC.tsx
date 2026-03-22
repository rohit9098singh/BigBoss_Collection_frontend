"use client";

import dynamic from 'next/dynamic';

const Categories = dynamic(() => import('./Categories'), { ssr: false });

const CategoriesHOC = () => {
    return (
        <Categories />
    );
};

export default CategoriesHOC;