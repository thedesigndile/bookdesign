
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
        id: 'the-power-of-positive-thinking',
        title: "The Power of Positive Thinking",
        image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/Cover.jpg",
        link: `/portfolio/the-power-of-positive-thinking`,
        aiHint: "positive thinking book",
        galleryImages: [
            { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/Cover.jpg", title: "Cover" },
            { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(2).jpg", title: "Page 2" },
            { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(3).jpg", title: "Page 3" },
            { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(4).jpg", title: "Page 4" },
            { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(5).jpg", title: "Page 5" },
            { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(6).jpg", title: "Page 6" },
            { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(7).jpg", title: "Page 7" },
            { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(8).jpg", title: "Page 8" },
            { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(9).jpg", title: "Page 9" },
            { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(10).jpg", title: "Page 10" },
            { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(11).jpg", title: "Page 11" },
            { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(12).jpg", title: "Page 12" },
            { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(13).jpg", title: "Page 13" },
            { image: "https://raw.githubusercontent.com/thedesigndile/bookdesign/master/Localportfolio/Book%20Design/The%20Power%20of%20Positive%20Thinking/1%20(14).jpg", title: "Page 14" },
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
