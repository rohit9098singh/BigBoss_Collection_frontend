"use client";

import dynamic from "next/dynamic";

const ProductDetail = dynamic(() => import("./ProductDetail"), { ssr: false });

const ProductDetailHOC = () => {
    return (
        <ProductDetail />
    );
};

export default ProductDetailHOC;
