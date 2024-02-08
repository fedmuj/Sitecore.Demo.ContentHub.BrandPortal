import { BrandGuideline } from '@/interfaces/brandGuideline';
import { contentHubAssetLinksGenerator } from '@/utilities/contentHubAssetLoader';
import Image from 'next/image';

export default function BrandPreview({
  brandGuideline,
}: {
  brandGuideline: BrandGuideline | null;
}) {
  if (!brandGuideline) return <></>;

  const { imageLink } = contentHubAssetLinksGenerator(
    brandGuideline?.brandMasterAsset?.results[0]?.assetToPublicLink?.results
  );

  return (
    <div className="brand-preview">
      <div className="brand-preview-logo">
        {imageLink
          ? <Image src={imageLink} alt={brandGuideline.brandGuidelineName} width={235} height={195} />
          : <></>
        }
      </div>
      <div className="brand-preview-content">
        <table>
          <tbody>
            <tr>
              <td className="label">Name</td>
              <td className="content">{brandGuideline.brandGuidelineName}</td>
            </tr>
            <tr>
              <td className="label">Slogan</td>
              <td className="content">{brandGuideline.brandGuidelineTagline['en-US']}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
