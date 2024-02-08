import { DownloadButton } from '@/app/components/Buttons';
import { MasterAsset } from '@/interfaces/brandGuideline';
import { contentHubAssetLinksGenerator } from '@/utilities/contentHubAssetLoader';
import Image from 'next/image';

export default function LogoList({ logos }: { logos: MasterAsset[] }) {
  return (
    <ul className="logo-list">
      {logos.map((logo) => {
        const { imageLink, downloadLink } = contentHubAssetLinksGenerator(
          logo.assetToPublicLink?.results
        );

        return !!imageLink && !!downloadLink ? (
          <li key={logo.id}>
            <Image src={imageLink} alt={logo.title} width={300} height={300} />
            <p className="asset-label">{logo.title}</p>
            <DownloadButton downloadLink={downloadLink} />
          </li>
        ) : (
          <></>
        );
      })}
    </ul>
  );
}
