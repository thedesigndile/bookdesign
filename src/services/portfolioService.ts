
import type { PortfolioItem, GalleryImage } from '@/components/portfolio-gallery';

const portfolioItems: PortfolioItem[] = [
  {
    id: 'building-a-successful-startup',
    title: 'Building a Successful Startup',
    image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(1).png',
    link: '/portfolio/building-a-successful-startup',
    aiHint: 'startup business book',
    galleryImages: [
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(1).png', title: 'Cover' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(3).png', title: 'Back Cover' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(4).png', title: 'Title Page' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(01).jpg', title: 'Spread 1' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(10).jpg', title: 'Spread 2' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(11).jpg', title: 'Spread 3' },
    ],
  },
  {
    id: 'the-art-of-storytelling',
    title: 'The Art of Storytelling',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2786&auto=format&fit=crop',
    link: '/portfolio/the-art-of-storytelling',
    aiHint: 'writing book author',
    galleryImages: [
        { image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2786&auto=format&fit=crop', title: 'Cover' },
        { image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2940&auto=format&fit=crop', title: 'Interior Spread' },
    ],
  },
];

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  // In a real app, this would fetch from a CMS or database.
  return Promise.resolve(portfolioItems);
}

export async function getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | null> {
    const items = await getPortfolioItems();
    const item = items.find(i => i.id === slug);
    return item || null;
}
