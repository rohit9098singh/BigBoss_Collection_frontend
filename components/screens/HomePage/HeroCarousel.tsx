"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
    {
        id: 4,
        url: "/mainimage.png",
        title: "Bespoke Suiting",
        subtitle: "Made to Measure",
    },
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80",
        title: "New Arrivals",
        subtitle: "The BigBoss Crown Collection",
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80",
        title: "Timeless Elegance",
        subtitle: "Elevate your wardrobe",
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80",
        title: "Winter Exclusives",
        subtitle: "Cozy and Bold",
    },

];

export default function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play interval
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    };

    return (
        <div className="relative w-full h-[50vh] md:h-[90vh] overflow-hidden group mb-10 md:mb-12 ">
            {/* Carousel Images Wrapper */}
            <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {carouselImages.map((slide, index) => (
                    <div key={slide.id} className="min-w-full h-full relative">
                        <Image
                            src={slide.url}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        {/* Gradient Overlay for Text Visibility & Luxury feel */}
                        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 to-transparent" />

                        {/* Text Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                            <span className="text-primary font-serif italic text-lg md:text-2xl mb-4 tracking-wider opacity-90">
                                {slide.subtitle}
                            </span>
                            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight uppercase drop-shadow-lg">
                                {slide.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 hover:scale-110 z-10"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={goToNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 hover:scale-110 z-10"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index
                                ? "bg-primary w-8"
                                : "bg-white/50 w-2 hover:bg-white"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
