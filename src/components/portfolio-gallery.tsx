
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';

export interface GalleryImage {
    image: string;
    title: string;
}

export interface PortfolioItem {
    id: string;
    title: string;
    image: string;
    link: string;
    aiHint: string;
    category?: string;
    galleryImages?: GalleryImage[];
}

interface PortfolioGalleryProps {
    isOpen: boolean;
    onClose: () => void;
    portfolioItem: PortfolioItem | null;
    startIndex?: number;
}

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ isOpen, onClose, portfolioItem, startIndex = 0 }) => {
    const [currentIndex, setCurrentIndex] = useState(startIndex);
    const [isLoading, setIsLoading] = useState(true);

    const images = portfolioItem?.galleryImages || [];

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(startIndex);
            setIsLoading(true);
        }
    }, [isOpen, startIndex]);

    const handleNext = useCallback(() => {
        if (images.length > 0) {
            setIsLoading(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
    }, [images.length]);

    const handlePrev = useCallback(() => {
        if (images.length > 0) {
            setIsLoading(true);
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        }
    }, [images.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'ArrowRight') {
                handleNext();
            } else if (e.key === 'ArrowLeft') {
                handlePrev();
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, handleNext, handlePrev, onClose]);

    if (!isOpen || !portfolioItem || images.length === 0) {
        return null;
    }
    
    const currentImage = images[currentIndex];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.95, y: 20, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="relative w-full max-w-5xl h-full max-h-[95vh] flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                                className="relative w-full h-[90%] flex items-center justify-center p-4 md:p-8"
                            >
                                {isLoading && <Skeleton className="w-full h-full max-w-[800px] max-h-[1000px] rounded-lg" />}
                                <Image
                                    src={currentImage.image}
                                    alt={currentImage.title}
                                    width={1000}
                                    height={1200}
                                    className={`object-contain w-auto h-full rounded-lg shadow-2xl transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                                    onLoad={() => setIsLoading(false)}
                                    priority={true}
                                />
                            </motion.div>
                        </AnimatePresence>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center p-2 bg-black/50 rounded-lg backdrop-blur-sm w-auto">
                            <p className="text-white text-base font-semibold">{currentImage.title}</p>
                        </div>
                    </motion.div>
                    
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="absolute top-4 right-4 rounded-full bg-white/20 hover:bg-white/30 text-white h-10 w-10 z-50"
                    >
                        <X className="h-6 w-6" />
                    </Button>

                    {images.length > 1 && (
                        <>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={handlePrev}
                                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 rounded-full bg-white/20 hover:bg-white/30 text-white h-12 w-12 z-50"
                            >
                                <ChevronLeft className="h-8 w-8" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={handleNext}
                                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 rounded-full bg-white/20 hover:bg-white/30 text-white h-12 w-12 z-50"
                            >
                                <ChevronRight className="h-8 w-8" />
                            </Button>
                        </>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PortfolioGallery;
