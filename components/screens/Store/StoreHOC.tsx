"use client"
import dynamic from "next/dynamic"

const Store = dynamic(() => import("./Store"), { ssr: false })
const StoreHOC = () => {
    return (
        <Store />
    )
}

export default StoreHOC