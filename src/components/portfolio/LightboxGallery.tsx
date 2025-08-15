"use client";

import { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxImage {
	url: string;
	alt: string;
	title?: string;
	description?: string;
}

export function LightboxGallery({ images }: { images: LightboxImage[] }) {
	const [index, setIndex] = useState<number | null>(null);
	const isOpen = index !== null;
	const length = images.length;

	const close = useCallback(() => setIndex(null), []);
	const openAt = useCallback((i: number) => setIndex(i), []);
	const goto = useCallback((dir: 1 | -1) => {
		if (index === null) return;
		setIndex((index + dir + length) % length);
	}, [index, length]);

	// Keyboard navigation
	useEffect(() => {
		function onKey(e: KeyboardEvent) {
			if (!isOpen) return;
			if (e.key === 'Escape') close();
			if (e.key === 'ArrowRight') goto(1);
			if (e.key === 'ArrowLeft') goto(-1);
		}
		document.addEventListener('keydown', onKey);
		return () => document.removeEventListener('keydown', onKey);
	}, [isOpen, goto, close]);

	// Prefetch adjacent images when lightbox open
	useEffect(() => {
		if (index === null) return;
		const prefetch = (i: number) => {
			const img = new window.Image();
			img.src = images[i].url;
		};
		prefetch((index + 1) % length);
		prefetch((index - 1 + length) % length);
	}, [index, images, length]);

	// Basic touch swipe
	const startX = useRef<number | null>(null);
	const onTouchStart = (e: React.TouchEvent) => {
		startX.current = e.touches[0].clientX;
	};
	const onTouchEnd = (e: React.TouchEvent) => {
		if (startX.current === null) return;
		const delta = e.changedTouches[0].clientX - startX.current;
		if (Math.abs(delta) > 40) goto(delta < 0 ? 1 : -1);
		startX.current = null;
	};

	return (
		<div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
				{images.map((img, i) => (
					<button key={`${img.url}-${i}`} className="group relative overflow-hidden rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-primary" onClick={() => openAt(i)} aria-label={`Open image ${i + 1}`}>
						<Image
							src={img.url}
							alt={img.alt}
							width={800}
							height={800}
							className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
							sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
							loading="lazy"
						/>
						<span className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
						<span className="sr-only">{img.title || img.alt}</span>
					</button>
				))}
			</div>

			{isOpen && index !== null && (
				<div role="dialog" aria-modal="true" className="fixed inset-0 z-50 grid place-items-center bg-black/80" onClick={close}>
					<div className="relative w-[95vw] md:w-[85vw] lg:w-[75vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
						<Image
							src={images[index].url}
							alt={images[index].alt}
							width={1600}
							height={1200}
							className="w-full h-auto object-contain select-none"
							priority
						/>
						<div className="absolute top-2 right-2 text-xs text-white/80 bg-black/50 px-2 py-1 rounded-md">{index + 1} / {length}</div>
						{(images[index].title || images[index].description) && (
							<div className="mt-3 text-center text-white">
								<div className="text-base font-medium">{images[index].title}</div>
								{images[index].description && <div className="text-sm text-white/80">{images[index].description}</div>}
							</div>
						)}
						<button className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70" onClick={() => goto(-1)} aria-label="Previous image">
							<ChevronLeft className="w-6 h-6" />
						</button>
						<button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70" onClick={() => goto(1)} aria-label="Next image">
							<ChevronRight className="w-6 h-6" />
						</button>
					</div>
				</div>
			)}
		</div>
	);
}