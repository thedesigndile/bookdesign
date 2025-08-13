import { getPortfolioItemBySlug, getPortfolioItems } from "@/services/portfolioService";
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const items = await getPortfolioItems();
  return items.map((item) => ({
    slug: item.id,
  }));
}

export default async function PortfolioItemLayout({ children, params }: { children: React.ReactNode, params: { slug: string } }) {
  const item = await getPortfolioItemBySlug(params.slug);
  const allItems = await getPortfolioItems();

  if (!item) {
    notFound();
  }

  const otherItems = allItems.filter(i => i.id !== item.id);

  // This is a bit of a hack to pass props from a server layout to a client page
  // A better solution might involve a different architecture or context
  const childrenWithProps = React.cloneElement(children as React.ReactElement, { item, otherItems });

  return <>{childrenWithProps}</>;
}
