import { getAllBrandGuidelines, getBrandGuidelineById } from '@/api/queries/getBrandGuidelines';
import BottomNav from '@/app/components/BottomNav';
import { BrandGuideline } from '@/interfaces/brandGuideline';
import { notFound } from 'next/navigation';
import RichText from '@/app/components/RichText';
import FontGrid from './FontGrid';

export default async function BrandTypography({ params }: { params: { id: string } }) {
  const brandGuideline = await getBrandGuidelineById(params.id);

  if (!brandGuideline) return notFound();

  return (
    <main className="guideline-page-layout">
      <section>
        {!!brandGuideline.primaryTypeface && (
          <>
            <h1>Main Typography</h1>
            <RichText html={brandGuideline.primaryTypeface} />
          </>
        )}
        <FontGrid fonts={brandGuideline.brandPrimaryFont.results} />
        {!!brandGuideline.secondaryTypeface && (
          <>
            <h1>Secondary Typography</h1>
            <RichText html={brandGuideline.secondaryTypeface} />
          </>
        )}
        <FontGrid fonts={brandGuideline.brandSecondaryFont.results} />
      </section>

      <BottomNav
        hasPrevious
        previousCategory="Visual Identity"
        previousTitle="Brand Logo"
        previousLink={`/brands/${brandGuideline.id}/logo`}
        hasNext
        nextCategory="Corporate Messaging"
        nextTitle="Mission, Vision, Purpose"
        nextLink={`/brands/${brandGuideline.id}/mission`}
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
