
import type { PortfolioItem, GalleryImage } from '@/components/portfolio-gallery';

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  // All placeholder items have been removed as requested.
  // You can add your new portfolio items here in the future.
  const items: PortfolioItem[] = [
    // Example of a new item structure:
    /*
    {
      id: 'your-project-id',
      title: 'Your Project Title',
      image: 'https://your-image-url.com/cover.jpg',
      link: '/portfolio/your-project-id',
      aiHint: 'some keywords',
      galleryImages: [
        { image: 'https://your-image-url.com/gallery1.jpg', title: 'Gallery Image 1' },
        { image: 'https://your-image-url.com/gallery2.jpg', title: 'Gallery Image 2' },
      ],
    },
    */
  ];
  return items;
}

export async function getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | null> {
    const items = await getPortfolioItems();
    const item = items.find(i => i.id === slug);
    return item || null;
}
