
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { PortfolioItem, GalleryImage } from '@/components/portfolio-gallery';

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  try {
    const portfolioCollection = collection(db, 'bookDesignGallery');
    const portfolioSnapshot = await getDocs(portfolioCollection);

    if (portfolioSnapshot.empty) {
      console.log('No documents found in Firestore, using placeholder data.');
      return getPlaceholderPortfolioItems();
    }
    
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

    return items;
  } catch (error) {
    console.error("Error fetching from Firestore, falling back to placeholder data:", error);
    return getPlaceholderPortfolioItems();
  }
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
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(2).jpg", title: "Page 1" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(3).jpg", title: "Page 2" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(4).jpg", title: "Page 3" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(5).jpg", title: "Page 4" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(6).jpg", title: "Page 5" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(7).jpg", title: "Page 6" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(8).jpg", title: "Page 7" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(9).jpg", title: "Page 8" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(10).jpg", title: "Page 9" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(11).jpg", title: "Page 10" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(12).jpg", title: "Page 11" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(13).jpg", title: "Page 12" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(14).jpg", title: "Page 13" },
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
