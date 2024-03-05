import { getAllBrandGuidelines, getBrandGuidelineById } from '@/api/queries/getBrandGuidelines';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { contentHubAssetLinksGenerator } from '@/utilities/contentHubAssetLoader';
import { Head } from 'next/document';
import Image from 'next/image';

import { notFound } from 'next/navigation';

export default async function BrandBasics({ params }: { params: { id: string; promid: string } }) {
  console.log(params.promid);
  const brandGuideline = await getBrandGuidelineById(params.id);
  // Check that brandGuideline and brandGuideline.tenantPromotions.results are defined
  if (
    !brandGuideline ||
    !brandGuideline.tenantPromotions ||
    !brandGuideline.tenantPromotions.results
  ) {
    // Handle the error appropriately
    return notFound();
  }

  const uniqueResult = brandGuideline.tenantPromotions.results.find((campaign) => {
    return campaign.id === params.promid;
  });
  const today = new Date();
  if (!uniqueResult) return notFound();

  const { imageLink, downloadLink } = contentHubAssetLinksGenerator(
    uniqueResult.sessionToMasterAsset.results[0].assetToPublicLink?.results
  );
  console.log('test ' + imageLink);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold uppercase tracking-wide">
            {uniqueResult.sessionsTypeToSessions.taxonomyLabel['en-US']}
          </h1>
          <div className="border-t-4 border-black w-16 my-2"></div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-8">
          <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
            <Image src={imageLink as string} alt="TEST" width={500} height={300} />
          </div>

          <div className="w-full lg:w-1/2 px-2">
            <div className="pl-4">
              <h2 className="text-xl font-semibold">
                {uniqueResult.sessionToAffMediaType?.taxonomyLabel['en-US']}
              </h2>
              <div className="border-t-2 border-black w-16 my-2"></div>
              <div className="mb-4">
                <h3 className="font-semibold">Display Period</h3>
                <p>
                  {' '}
                  {new Intl.DateTimeFormat('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  }).format(new Date(uniqueResult.startDate))}{' '}
                  -{' '}
                  {new Intl.DateTimeFormat('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  }).format(new Date(uniqueResult.enddate))}
                </p>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold">Opportunity Value</h3>
                <p>{uniqueResult.opportunityValue}€</p>
              </div>
              {uniqueResult.affiliateMedia.results.length > 0 && (
                <div>
                  <h3 className="font-semibold">
                    During the time, the same content also appeared at:
                  </h3>
                  <ol className="list-decimal pl-4">
                    {uniqueResult.affiliateMedia.results.map((affiliateMedia, index) => {
                      return <li>{affiliateMedia.taxonomyLabel['en-US']}</li>;
                    })}
                  </ol>
                </div>
              )}
              <div className='px-4 py-8'>
              <Image src={`https://lamdadev.sitecoresandbox.cloud/api/public/content/05d51ffb53c44e0692a59aecae521dc5?v=19e179b5`} width={200} height={200} alt={'Golden Hall Logo'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
