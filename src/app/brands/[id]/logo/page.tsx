import { getAllBrandGuidelines, getBrandGuidelineById } from '@/api/queries/getBrandGuidelines';
import BottomNav from '@/app/components/BottomNav';
import { BrandGuideline } from '@/interfaces/brandGuideline';
import { notFound } from 'next/navigation';
import LogoList from './LogoList';
import RichText from '@/app/components/RichText';
import AssetGrid from '../assets/AssetGrid';

export default async function BrandLogo({ params }: { params: { id: string } }) {
  const brandGuideline = await getBrandGuidelineById(params.id);

  if (!brandGuideline) return notFound();

  return (
    <main className="guideline-page-layout">
      <section>
        {!!brandGuideline.brandGuidelineLogoUse && (
          <>
            <h1>Logo Usage</h1>
            <RichText html={brandGuideline.brandGuidelineLogoUse} />
          </>
        )}
        <LogoList logos={brandGuideline.brandLogos.results} />
        {!!brandGuideline.brandGuidelineLogoIncorrectUse && (
          <>
            <h1>{`Logo do's and don'ts`}</h1>
            <RichText html={brandGuideline.brandGuidelineLogoIncorrectUse} />
          </>
        )}
        {!!brandGuideline.brandGuidelineLogoColorVersions && (
          <>
            <h1>Color versions</h1>
            <RichText html={brandGuideline.brandGuidelineLogoColorVersions} />
          </>
        )}
      </section>

      <BottomNav
        hasPrevious
        previousCategory="Visual Identity"
        previousTitle="Brand colors"
        previousLink={`/brands/${brandGuideline.id}/colors`}
        hasNext
        nextCategory="Visual Identity"
        nextTitle="Typography"
        nextLink={`/brands/${brandGuideline.id}/fonts`}
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
