import Link from 'next/link';
import Image from 'next/image';
import { BrandGuideline } from '@/interfaces/brandGuideline';
import { contentHubAssetLinksGenerator } from '@/utilities/contentHubAssetLoader';

export default function BrandsListing({ brands }: { brands: BrandGuideline[] | null }) {
  const brandsHeading = !!brands ? (
    <>
      <h6>A comprehensive collection of campaigns impact and content</h6>
      <h1>Tenant Portal</h1>
    </>
  ) : (
    <h1>No Brands found.</h1>
  );

  return (
    <section className="brands-listing">
      <div className="container">
        <Image
          src="/logo-tagline-below.png"
          alt="PLAY! Brands Portal"
          width={150}
          height={65}
          className="logo"
        />
        {brandsHeading}
      </div>
    </section>
  );
}
