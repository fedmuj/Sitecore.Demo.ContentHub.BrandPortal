import { getAllBrandGuidelines, getBrandGuidelineById } from '@/api/queries/getBrandGuidelines';
import BottomNav from '@/app/components/BottomNav';
import { DownloadButton } from '@/app/components/Buttons';
import { BrandCollection, BrandGuideline, MasterAsset } from '@/interfaces/brandGuideline';
import {
  contentHubAssetLinksGenerator,
  getCollectionDownloadLink,
} from '@/utilities/contentHubAssetLoader';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function BrandCollections({ params }: { params: { id: string } }) {
  const getImageLink = (asset: MasterAsset) => {
    return contentHubAssetLinksGenerator(asset?.assetToPublicLink?.results)?.imageLink || '';
  };

  const brandGuideline = await getBrandGuidelineById(params.id);

  if (!brandGuideline) return notFound();

  const hasPublicCollection = brandGuideline.brandCollections.results.some(
    (collection) => collection.isPublic
  );

  return (
    <main className="brand-collections guideline-page-layout">
      <section>
        <h1>Explore the brand collections</h1>
        {hasPublicCollection ? (
          <ul className="collection-grid">
            {brandGuideline.brandCollections.results.map((collection: BrandCollection, i) => {
              return (
                collection.isPublic && (
                  <li key={i} className="collection-grid-item">
                    {collection?.collectionToMasterAsset?.results[0] && (
                      <div className="collection-image-container">
                        <Image
                          src={getImageLink(collection.collectionToMasterAsset.results[0])}
                          alt={collection.description}
                          width={300}
                          height={300}
                          objectFit="contain"
                        />
                      </div>
                    )}
                    <h5 className="collection-name asset-label">{collection.collectionName}</h5>
                    <p className="collection-description">{collection.description}</p>
                    <DownloadButton downloadLink={getCollectionDownloadLink(collection)} />
                  </li>
                )
              );
            })}
          </ul>
        ) : (
          <h3>No collections found</h3>
        )}
      </section>
      <BottomNav
        hasPrevious
        previousCategory="Resources"
        previousTitle="Brand Assets"
        previousLink={`/brands/${brandGuideline.id}/assets`}
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
