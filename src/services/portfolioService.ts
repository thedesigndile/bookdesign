
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

  const slug = docId;
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
  // We will default to placeholder data because Firestore rules are not public.
  return getPlaceholderPortfolioItems();
}

export async function getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | null> {
    // We will default to placeholder data because Firestore rules are not public.
    const items = getPlaceholderPortfolioItems();
    const item = items.find(i => i.id === slug);
    return item || null;
}


function getPlaceholderPortfolioItems(): PortfolioItem[] {
    const placeholderItems = [
      {
        id: 'the-positive-mind-effect',
        title: "The Positive Mind Effect",
        image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/Cover.jpg?raw=true",
        link: `/portfolio/the-positive-mind-effect`,
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
            { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(12).jpg?raw=true", title: "Page 11" },
            { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(13).jpg?raw=true", title: "Page 12" },
            { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(14).jpg?raw=true", title: "Page 13" },
        ]
      },
      {
        id: 'building-a-successful-startup',
        title: 'Building a Successful Startup',
        image: 'https://placehold.co/400x550.png',
        link: '/portfolio/building-a-successful-startup',
        aiHint: 'startup business book',
        galleryImages: [
          { image: 'https://placehold.co/800x1100.png', title: 'Cover' },
          { image: 'https://placehold.co/800x1100.png', title: 'Chapter 1' },
        ],
      },
       {
        id: 'personal-budgeting-saving',
        title: 'Personal Budgeting & Saving',
        image: 'https://placehold.co/400x550.png',
        link: '/portfolio/personal-budgeting-saving',
        aiHint: 'finance book cover',
        galleryImages: [
          { image: 'https://placehold.co/800x1100.png', title: 'Cover' },
          { image: 'https://placehold.co/800x1100.png', title: 'Worksheet' },
        ],
      },
      {
        id: 'the-art-of-storytelling',
        title: 'The Art of Storytelling',
        image: 'https://placehold.co/400x550.png',
        link: '/portfolio/the-art-of-storytelling',
        aiHint: 'creative writing book',
        galleryImages: [
          { image: 'https://placehold.co/800x1100.png', title: 'Cover' },
        ],
      },
      {
        id: 'modern-graphic-design',
        title: 'Modern Graphic Design',
        image: 'https://placehold.co/400x550.png',
        link: '/portfolio/modern-graphic-design',
        aiHint: 'design principles book',
        galleryImages: [
          { image: 'https://placehold.co/800x1100.png', title: 'Cover' },
        ],
      },
      {
        id: 'a-journey-through-history',
        title: 'A Journey Through History',
        image: 'https://placehold.co/400x550.png',
        link: '/portfolio/a-journey-through-history',
        aiHint: 'history book',
        galleryImages: [
          { image: 'https://placehold.co/800x1100.png', title: 'Cover' },
        ],
      },
    ];
    return placeholderItems;
}
