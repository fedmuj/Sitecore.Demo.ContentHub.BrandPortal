import { DownloadButton } from '@/app/components/Buttons';
import { MasterAsset } from '@/interfaces/brandGuideline';
import { contentHubAssetLinksGenerator } from '@/utilities/contentHubAssetLoader';
import Image from 'next/image';

export default function AssetGrid({ images: asset }: { images: MasterAsset[] }) {
  return (
    <ul className="asset-grid">
      {asset.map((image) => {
        const { imageLink, downloadLink } = contentHubAssetLinksGenerator(
          image.assetToPublicLink?.results
        );

        return !!imageLink && !!downloadLink ? (
          <li key={image.id}>
            <Image src={imageLink} alt={image.title} width={300} height={300} />
            <p className="asset-label">{image.title}</p>
            <DownloadButton downloadLink={downloadLink} />
          </li>
        ) : (
          <></>
        );
      })}
    </ul>
  );
}
