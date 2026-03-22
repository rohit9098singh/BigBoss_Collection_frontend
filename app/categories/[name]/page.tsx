"use client";
import StoreHOC from "@/components/screens/Store/StoreHOC";
import { useParams } from "next/navigation";

const page = () => {
    const { name } = useParams();

    return (
     <StoreHOC />
    );
};

export default page;