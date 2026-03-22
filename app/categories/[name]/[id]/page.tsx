"use client";
import ProductDetailHOC from "@/components/screens/ProductDetail/ProductDetailHOC";
import { useParams } from "next/navigation";

const page = () => {
    const { id } = useParams();

    return (
        <ProductDetailHOC />
    );
};

export default page;
