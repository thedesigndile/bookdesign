
import type { PortfolioItem, GalleryImage } from '@/components/portfolio-gallery';

const portfolioItems: PortfolioItem[] = [
  {
    id: 'building-a-successful-startup',
    title: 'Building a Successful Startup',
    image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(01).jpg',
    link: '/portfolio/building-a-successful-startup',
    aiHint: 'startup book',
    galleryImages: [
      { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(01).jpg', title: 'Cover' },
      { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(10).jpg', title: 'Page 1' },
      { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(11).jpg', title: 'Page 2' },
      { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(12).jpg', title: 'Page 3' },
      { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(13).jpg', title: 'Page 4' },
      { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(15).jpg', title: 'Page 5' },
      { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(16).jpg', title: 'Page 6' },
    ],
  },
  {
    id: 'the-power-of-positive-thinking',
    title: 'The Power of Positive Thinking',
    image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(1).jpg',
    link: '/portfolio/the-power-of-positive-thinking',
    aiHint: 'positive thinking book',
    galleryImages: [
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(1).jpg', title: 'Cover' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(2).jpg', title: 'Back Cover' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(3).jpg', title: 'Table of Contents' },
    ]
  }
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
