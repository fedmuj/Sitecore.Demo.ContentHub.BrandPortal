import Link from 'next/link';
import Image from 'next/image';
import { BrandGuideline } from '@/interfaces/brandGuideline';
import { contentHubAssetLinksGenerator } from '@/utilities/contentHubAssetLoader';

export default function BrandsListing({ brands }: { brands: BrandGuideline[] | null }) {
  const brandsHeading = !!brands ? (
    <>
      <h6>A comprehensive collection of leading sports brands</h6>
      <h1>Discover all your favourite PLAY! brands in one place</h1>
    </>
  ) : (
    <h1>No Brands found.</h1>
  );

  return (
    <section className="brands-listing">
      <div className="container">
        <Image
          src="/brands-portal-logo-dark.svg"
          alt="PLAY! Brands Portal"
          width={430}
          height={65}
          className="logo"
        />
        {brandsHeading}
        <div className="brands-listing-grid">
          {brands?.map((brand) => {
            const { imageLink } = contentHubAssetLinksGenerator(
              brand?.brandMasterAsset?.results[0]?.assetToPublicLink?.results
            );
            return (
              <Link
                href={`/brands/${brand.id}`}
                className="brands-listing-grid-item"
                key={brand.id}
              >
                {imageLink ? (
                  <Image src={imageLink} alt={brand.brandGuidelineName} width={300} height={300} />
                ) : (
                  <></>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
