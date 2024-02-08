import { getAllBrandGuidelines, getBrandGuidelineById } from '@/api/queries/getBrandGuidelines';
import BottomNav from '@/app/components/BottomNav';
import { BrandGuideline } from '@/interfaces/brandGuideline';
import { notFound } from 'next/navigation';
import PersonalityGrid from './PersonalityGrid';

export default async function BrandPersonality({ params }: { params: { id: string } }) {
  const brandGuideline = await getBrandGuidelineById(params.id);

  if (!brandGuideline) return notFound();

  const characteristics = brandGuideline.brandPersonalityCharacteristics.results;

  return (
    <main className="guideline-page-layout">
      <section>
        {!!characteristics.length && (
          <>
            <h1>Explore the characteristics of our brand personality</h1>
            <PersonalityGrid characteristics={characteristics} />
          </>
        )}
      </section>

      <BottomNav
        hasPrevious
        previousCategory="Corporate Messaging"
        previousTitle="Mission, Vision and Purpose"
        previousLink={`/brands/${brandGuideline.id}/mission`}
        hasNext
        nextCategory="Resources"
        nextTitle="Brand Assets"
        nextLink={`/brands/${brandGuideline.id}/assets`}
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
