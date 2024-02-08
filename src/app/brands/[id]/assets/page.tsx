import { getAllBrandGuidelines, getBrandGuidelineById } from '@/api/queries/getBrandGuidelines';
import BottomNav from '@/app/components/BottomNav';
import { BrandGuideline } from '@/interfaces/brandGuideline';
import { notFound } from 'next/navigation';
import AssetGrid from './AssetGrid';

export default async function BrandAssets({ params }: { params: { id: string } }) {
  const brandGuideline = await getBrandGuidelineById(params.id);

  if (!brandGuideline) return notFound();

  return (
    <main className="guideline-page-layout">
      <section>
        <h1>Explore our downloadable assets</h1>
        <AssetGrid images={brandGuideline.brandAssets.results} />
      </section>

      <BottomNav
        hasPrevious
        previousCategory="Corporate Messaging"
        previousTitle="Personality Characteristics"
        previousLink={`/brands/${brandGuideline.id}/personality`}
        hasNext
        nextCategory="Resources"
        nextTitle="Collections"
        nextLink={`/brands/${brandGuideline.id}/collections`}
      />
    </main>
  );
}

export async function generateStaticParams() {
  const brandGuidelines: BrandGuideline[] = (await getAllBrandGuidelines()) ?? [];

  return brandGuidelines.map((brandGuideline) => ({
    id: brandGuideline.id,
  }));
}
