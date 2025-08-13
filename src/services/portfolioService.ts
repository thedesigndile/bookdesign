
import type { PortfolioItem, GalleryImage } from '@/components/portfolio-gallery';

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  return getPlaceholderPortfolioItems();
}

export async function getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | null> {
    const items = await getPortfolioItems();
    const item = items.find(i => i.id === slug);
    return item || null;
}

function getPlaceholderPortfolioItems(): PortfolioItem[] {
    const placeholderItems = [
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
