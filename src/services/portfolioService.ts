
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
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(12).jpg', title: 'Spread 4' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(13).jpg', title: 'Spread 5' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(15).jpg', title: 'Spread 6' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(16).jpg', title: 'Spread 7' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(17).jpg', title: 'Spread 8' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(18).jpg', title: 'Spread 9' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(19).jpg', title: 'Spread 10' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(2).jpg', title: 'Spread 11' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(20).jpg', title: 'Spread 12' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(21).jpg', title: 'Spread 13' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(22).jpg', title: 'Spread 14' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(23).jpg', title: 'Spread 15' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(24).jpg', title: 'Spread 16' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(25).jpg', title: 'Spread 17' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(26).jpg', title: 'Spread 18' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(3).jpg', title: 'Spread 19' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(4).jpg', title: 'Spread 20' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(5).jpg', title: 'Spread 21' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(6).jpg', title: 'Spread 22' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(7).jpg', title: 'Spread 23' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(8).jpg', title: 'Spread 24' },
        { image: 'https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/Bulding%20a%20Successful%20Startup/1%20(9).jpg', title: 'Spread 25' },
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
