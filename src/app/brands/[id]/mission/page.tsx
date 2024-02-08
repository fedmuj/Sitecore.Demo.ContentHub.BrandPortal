import { getAllBrandGuidelines, getBrandGuidelineById } from '@/api/queries/getBrandGuidelines';
import BottomNav from '@/app/components/BottomNav';
import { BrandGuideline } from '@/interfaces/brandGuideline';
import { notFound } from 'next/navigation';
import RichText from '@/app/components/RichText';

export default async function BrandMission({ params }: { params: { id: string } }) {
  const brandGuideline = await getBrandGuidelineById(params.id);

  if (!brandGuideline) return notFound();

  return (
    <main className="guideline-page-layout">
      <section className="grid grid-cols-2 gap-8">
        {!!brandGuideline.brandGuidelineMission && (
          <div>
            <h1>Mission</h1>
            <RichText html={brandGuideline.brandGuidelineMission} />
          </div>
        )}
        {!!brandGuideline.brandGuidelineVision && (
          <div>
            <h1>Vision</h1>
            <RichText html={brandGuideline.brandGuidelineVision} />
          </div>
        )}
        {!!brandGuideline.brandGuidelinePurpose && (
          <div>
            <h1>Purpose</h1>
            <RichText html={brandGuideline.brandGuidelinePurpose} />
          </div>
        )}
      </section>

      <BottomNav
        hasPrevious
        previousCategory="Visual Identity"
        previousTitle="Typography"
        previousLink={`/brands/${brandGuideline.id}/fonts`}
        hasNext
        nextCategory="Corporate Messaging"
        nextTitle="Personality Characteristics"
        nextLink={`/brands/${brandGuideline.id}/personality`}
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
