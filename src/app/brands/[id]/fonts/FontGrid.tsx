import { DownloadButton } from '@/app/components/Buttons';
import RichText from '@/app/components/RichText';
import { BrandGuidelineFont } from '@/interfaces/brandGuideline';
import { contentHubAssetLinksGenerator } from '@/utilities/contentHubAssetLoader';
import Image from 'next/image';

export default function FontGrid({ fonts }: { fonts: BrandGuidelineFont[] }) {
  return (
    <ul className="font-grid">
      {fonts.map((font) => {
        const fontAsset = font.fontToAsset.results[0];
        const { imageLink, downloadLink } = contentHubAssetLinksGenerator(
          fontAsset.assetToPublicLink?.results
        );

        return !!imageLink && !!downloadLink ? (
          <li key={font.id} className="font-grid-item">
            <Image src={imageLink} alt={fontAsset.title} width={800} height={800} />
            <h5 className="asset-label">{font.title['en-US']}</h5>
            <RichText html={font.description['en-US']} />
            <DownloadButton downloadLink={downloadLink} />
          </li>
        ) : (
          <></>
        );
      })}
    </ul>
  );
}
