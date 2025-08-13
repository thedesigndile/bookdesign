
import * as React from 'react';
import { getPortfolioItemBySlug, getPortfolioItems } from "@/services/portfolioService";
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const items = await getPortfolioItems();
  return items.map((item) => ({
    slug: item.id,
  }));
}

interface PortfolioItemLayoutProps {
  children: React.ReactNode;
  params: { slug: string };
}

export default async function PortfolioItemLayout({ children, params }: PortfolioItemLayoutProps) {
  const item = await getPortfolioItemBySlug(params.slug);

  if (!item) {
    notFound();
  }
  
  const allItems = await getPortfolioItems();
  const otherItems = allItems.filter(i => i.id !== item.id);

  // We pass the fetched data to the page component via cloned element props.
  // This is a common pattern for passing server-fetched data to client components in Next.js App Router.
  const childrenWithProps = React.cloneElement(children as React.ReactElement, { item, otherItems });

  return <>{childrenWithProps}</>;
}
