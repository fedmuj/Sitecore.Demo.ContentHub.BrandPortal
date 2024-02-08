import { getAllBrandGuidelines, getBrandGuidelineById } from '@/api/queries/getBrandGuidelines';
import BottomNav from '@/app/components/BottomNav';
import RichText from '@/app/components/RichText';
import { BrandGuideline, BrandGuidelineColor } from '@/interfaces/brandGuideline';
import { notFound } from 'next/navigation';
import ColorGrid from './ColorGrid';

export default async function BrandColors({ params }: { params: { id: string } }) {
  const brandGuideline = await getBrandGuidelineById(params.id);

  if (!brandGuideline) return notFound();

  const totalPrimaryColors = brandGuideline?.brandPrimaryColor?.results?.length;
  const totalSecondaryColors = brandGuideline?.brandSecondaryColor?.results?.length;

  return (
    <main className="brand-colors guideline-page-layout">
      {brandGuideline.brandGuidelinePrimaryColor && (
        <section>
          <h1>Primary Colors</h1>
          <RichText html={brandGuideline.brandGuidelinePrimaryColor} />
          <ColorGrid colors={brandGuideline.brandPrimaryColor.results} />
        </section>
      )}
      {brandGuideline.brandGuidelineSecondaryColor && (
        <section>
          <h1>Secondary Colors</h1>
          <RichText html={brandGuideline.brandGuidelineSecondaryColor} />
          <ColorGrid colors={brandGuideline.brandSecondaryColor.results} />
        </section>
      )}
      <section className="brand-basics-bottom-nav">
        <BottomNav
          hasPrevious
          previousCategory="Visual Identity"
          previousTitle="Brand basics"
          previousLink={`/brands/${brandGuideline.id}`}
          hasNext
          nextCategory="Visual Identity"
          nextTitle="Brand logo"
          nextLink={`/brands/${brandGuideline.id}/logo`}
        />
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  const brandGuidelines: BrandGuideline[] = (await getAllBrandGuidelines()) ?? [];

  return brandGuidelines.map((brandGuideline) => ({
    id: brandGuideline.id,
  }));
}
