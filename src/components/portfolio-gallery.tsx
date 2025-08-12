
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from './ui/button';

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
    galleryImages?: GalleryImage[];
}

interface PortfolioGalleryProps {
    isOpen: boolean;
    onClose: () => void;
    portfolioItem: PortfolioItem | null;
}

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ isOpen, onClose, portfolioItem }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = portfolioItem?.galleryImages || [];

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(0);
        }
    }, [isOpen]);

    const handleNext = useCallback(() => {
        if (images.length > 0) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
    }, [images.length]);

    const handlePrev = useCallback(() => {
        if (images.length > 0) {
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

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="relative w-full max-w-4xl h-full max-h-[90vh] flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="relative w-auto h-full"
                            >
                                <Image
                                    src={images[currentIndex].image}
                                    alt={images[currentIndex].title}
                                    width={800}
                                    height={1000}
                                    className="object-contain w-full h-full rounded-lg shadow-2xl"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                    
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="absolute top-4 right-4 rounded-full bg-background/50 hover:bg-background/80 h-10 w-10 z-50"
                    >
                        <X className="h-6 w-6" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 hover:bg-background/80 h-12 w-12 z-50 hidden md:flex"
                    >
                        <ChevronLeft className="h-8 w-8" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 hover:bg-background/80 h-12 w-12 z-50 hidden md:flex"
                    >
                        <ChevronRight className="h-8 w-8" />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PortfolioGallery;
