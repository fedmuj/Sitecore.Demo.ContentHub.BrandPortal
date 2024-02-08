import { getAllBrandGuidelines, getBrandGuidelineById } from '@/api/queries/getBrandGuidelines';
import BottomNav from '@/app/components/BottomNav';
import RichText from '@/app/components/RichText';
import { BrandGuideline } from '@/interfaces/brandGuideline';
import { notFound } from 'next/navigation';

export default async function BrandBasics({ params }: { params: { id: string } }) {
  const brandGuideline = await getBrandGuidelineById(params.id);

  if (!brandGuideline) return notFound();

  const isBasicElementsSectionVisible =
    brandGuideline.brandGuidelineCreativeFramework ||
    brandGuideline.brandGuidelineTaglineUse ||
    brandGuideline.brandGuidelinePhotographyUse;

  const isCoBrandingSectionVisible = brandGuideline.coBranding1 || brandGuideline.coBranding2;

  return (
    <main className="brand-basics guideline-page-layout">
      <section>
        <h1>Main Description</h1>
        <RichText html={brandGuideline.brandGuidelineDescription} />
      </section>
      {isBasicElementsSectionVisible && (
        <section>
          <h1>Basic Elements</h1>
          {brandGuideline.brandGuidelineCreativeFramework && (
            <div>
              <h3>Creative framework</h3>
              <RichText html={brandGuideline.brandGuidelineCreativeFramework} />
            </div>
          )}
          {brandGuideline.brandGuidelineTaglineUse && (
            <div>
              <h3>Tagline use</h3>
              <RichText html={brandGuideline.brandGuidelineTaglineUse} />
            </div>
          )}
          {brandGuideline.brandGuidelinePhotographyUse && (
            <div>
              <h3>Photography use</h3>
              <RichText html={brandGuideline.brandGuidelinePhotographyUse} />
            </div>
          )}
        </section>
      )}
      {isCoBrandingSectionVisible && (
        <section>
          <h1>Co-Branding</h1>
          {brandGuideline.coBranding1 && (
            <div>
              <h3>Introduction</h3>
              <RichText html={brandGuideline.coBranding1} />
            </div>
          )}
          {brandGuideline.coBranding2 && (
            <div>
              <h3>Details</h3>
              <RichText html={brandGuideline.coBranding2} />
            </div>
          )}
        </section>
      )}
      <section className="brand-basics-bottom-nav">
        <BottomNav
          hasNext
          nextCategory="Visual Identity"
          nextTitle="Brand Colors"
          nextLink={`/brands/${brandGuideline.id}/colors`}
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
