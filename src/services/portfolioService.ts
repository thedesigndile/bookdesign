import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { PortfolioItem, GalleryImage } from '@/components/portfolio-gallery';

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const portfolioCollection = collection(db, 'bookDesignGallery');
  const portfolioSnapshot = await getDocs(portfolioCollection);

  const items: PortfolioItem[] = portfolioSnapshot.docs.map(doc => {
    const data = doc.data();
    const galleryImages: GalleryImage[] = ((data.images || []) as string[]).map((imgUrl, index) => ({
      image: imgUrl,
      title: `Page ${index + 1}`,
    }));

    // Ensure the cover is the first image in the gallery
    if (data.cover && !galleryImages.some(img => img.image === data.cover)) {
        galleryImages.unshift({ image: data.cover, title: 'Cover' });
    }

    return {
      id: doc.id,
      title: data.title || 'Untitled Project',
      image: data.cover || 'https://placehold.co/400x550.png',
      link: `/portfolio/${doc.id}`,
      aiHint: data.aiHint || 'book cover',
      galleryImages: galleryImages,
    };
  });

  // If Firestore is empty, return some placeholder data
  if (items.length === 0) {
    return getPlaceholderPortfolioItems();
  }

  return items;
}

function getPlaceholderPortfolioItems(): PortfolioItem[] {
    const placeholderItems = [
      {
        id: "placeholder-1",
        title: "The Positive Mind Effect",
        image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/Cover.jpg",
        link: "/portfolio",
        aiHint: "positive thinking book",
        galleryImages: [
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/Cover.jpg", title: "Cover" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(2).jpg", title: "Spread 1" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(3).jpg", title: "Spread 2" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(4).jpg", title: "Spread 3" },
        ]
      },
      {
        id: "placeholder-2",
        title: "Galactic Drifters",
        image: "https://images.unsplash.com/photo-1690906379371-9513895a2615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxzY2ktZmklMjBib29rJTIwY292ZXJ8ZW58MHx8fHwxNzU0NzUwMjU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        link: "/portfolio",
        aiHint: "sci-fi book cover",
        galleryImages: [{image: "https://images.unsplash.com/photo-1690906379371-9513895a2615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxzY2ktZmklMjBib29rJTIwY292ZXJ8ZW58MHx8fHwxNzU0NzUwMjU4fDA&ixlib=rb-4.1.0&q=80&w=1080", title: 'Cover'}]
      },
      {
        id: "placeholder-3",
        title: "The Alchemist's Heir",
        image: "https://images.unsplash.com/photo-1711185900806-bf85e7fe7767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDB8fHx8fDE3NTQ3NTAyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        link: "/portfolio",
        aiHint: "fantasy book cover",
        galleryImages: [{image: "https://images.unsplash.com/photo-1711185900806-bf85e7fe7767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDB8fHx8fDE3NTQ3NTAyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080", title: 'Cover'}]
      },
    ];
    // Add more placeholders if needed
    while (placeholderItems.length < 6) {
        placeholderItems.push({
            id: `placeholder-${placeholderItems.length + 1}`,
            title: "Coming Soon",
            image: "https://placehold.co/400x550.png",
            link: "#",
            aiHint: "placeholder book",
            galleryImages: [],
        });
    }
    return placeholderItems;
}
