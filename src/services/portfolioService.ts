import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { PortfolioItem, GalleryImage } from '@/components/portfolio-gallery';

const PLACEHOLDER_ID_SLUG = 'the-positive-mind-effect';

function dataToPortfolioItem(docId: string, data: any): PortfolioItem {
  const imageUrls = Array.isArray(data.images) ? data.images : [];
  
  const galleryImages: GalleryImage[] = imageUrls.map((imgUrl: string, index: number) => ({
    image: imgUrl.replace(
      "https://github.com/thedesigndile/bookdesign/blob/master/",
      "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/"
    ).replace('?raw=true', '') + '?raw=true',
    title: `Page ${index + 1}`,
  }));

  const coverImage = data.cover ? 
    data.cover.replace(
      "https://github.com/thedesigndile/bookdesign/blob/master/",
      "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/"
    ).replace('?raw=true', '') + '?raw=true' 
    : 'https://placehold.co/400x550.png';

  if (coverImage && !galleryImages.some(img => img.image === coverImage)) {
      galleryImages.unshift({ image: coverImage, title: 'Cover' });
  }

  // Handle special case for link
  const slug = docId === 'positiveThinking' ? PLACEHOLDER_ID_SLUG : docId;
  const link = `/portfolio/${slug}`;

  return {
    id: slug,
    title: data.title || 'Untitled Project',
    image: coverImage,
    link: link,
    aiHint: data.aiHint || 'book cover',
    galleryImages: galleryImages,
  };
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  try {
    const portfolioCollection = collection(db, 'bookDesignGallery');
    const portfolioSnapshot = await getDocs(portfolioCollection);

    if (portfolioSnapshot.empty) {
      console.log('No documents found in Firestore, using placeholder data.');
      return getPlaceholderPortfolioItems();
    }
    
    const items: PortfolioItem[] = portfolioSnapshot.docs.map(doc => 
      dataToPortfolioItem(doc.id, doc.data())
    );

    return items;
  } catch (error) {
    console.error("Error fetching from Firestore, falling back to placeholder data:", error);
    return getPlaceholderPortfolioItems();
  }
}

export async function getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | null> {
    try {
        // Handle placeholder special case
        if (slug === PLACEHOLDER_ID_SLUG) {
            const items = getPlaceholderPortfolioItems();
            return items.find(item => item.id === PLACEHOLDER_ID_SLUG) || null;
        }

        const docRef = doc(db, 'bookDesignGallery', slug);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return dataToPortfolioItem(docSnap.id, docSnap.data());
        } else {
            // Fallback for the old ID if slug is not found
            if (slug === 'the-positive-mind-effect') {
                const legacyDocRef = doc(db, 'bookDesignGallery', 'positiveThinking');
                const legacyDocSnap = await getDoc(legacyDocRef);
                if (legacyDocSnap.exists()) {
                    return dataToPortfolioItem(legacyDocSnap.id, legacyDocSnap.data());
                }
            }
        }
        console.warn(`No portfolio item found for slug: ${slug}`);
        return null;

    } catch (error) {
        console.error(`Error fetching portfolio item by slug ${slug}:`, error);
        // Fallback for placeholder on error as well
        if (slug === PLACEHOLDER_ID_SLUG) {
            const items = getPlaceholderPortfolioItems();
            return items.find(item => item.id === PLACEHOLDER_ID_SLUG) || null;
        }
        return null;
    }
}


function getPlaceholderPortfolioItems(): PortfolioItem[] {
    const placeholderItems = [
      {
        id: PLACEHOLDER_ID_SLUG,
        title: "The Positive Mind Effect",
        image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/Cover.jpg?raw=true",
        link: `/portfolio/${PLACEHOLDER_ID_SLUG}`,
        aiHint: "positive thinking book",
        galleryImages: [
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/Cover.jpg?raw=true", title: "Cover" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(2).jpg?raw=true", title: "Page 1" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(3).jpg?raw=true", title: "Page 2" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(4).jpg?raw=true", title: "Page 3" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(5).jpg?raw=true", title: "Page 4" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(6).jpg?raw=true", title: "Page 5" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(7).jpg?raw=true", title: "Page 6" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(8).jpg?raw=true", title: "Page 7" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(9).jpg?raw=true", title: "Page 8" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(10).jpg?raw=true", title: "Page 9" },
          { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(11).jpg?raw=true", title: "Page 10" },
        ]
      }
    ];
    return placeholderItems;
}
