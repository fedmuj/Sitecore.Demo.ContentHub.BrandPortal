import { BrandCollection, PublicLink } from '@/interfaces/brandGuideline';

const contentHubBaseUrl =
  `https://${process.env.CH_PREVIEW_API_URL?.replace(/^https?:\/\//, '').split('/')[0]}` ||
  'https://brand-portal-play-demo.sitecoresandbox.cloud';

export const contentHubAssetSrcGenerator = (link: PublicLink) =>
  `${contentHubBaseUrl}/api/public/content/${link?.relativeUrl}?v=${link?.versionHash}`;

export const contentHubAssetSrcGeneratorFromString = (src: string) =>
  `${contentHubBaseUrl}/api/public/content/${src}`;

export const contentHubAssetLinksGenerator = (links: PublicLink[] | undefined) => {
  if (!links) return { imageLink: undefined, downloadLink: undefined };

  const linkToOriginal = links.find((link) => link.resource.toLowerCase() === 'downloadoriginal');
  const linkToPreview =
    links.find((link) => link.resource.toLowerCase() === 'preview') || linkToOriginal;
  const imageLink = !!linkToPreview && contentHubAssetSrcGenerator(linkToPreview as PublicLink);
  const downloadLink =
    !!linkToOriginal && contentHubAssetSrcGenerator(linkToOriginal as PublicLink);

  return {
    imageLink,
    downloadLink,
  };
};

export const getCollectionDownloadLink = (collection: BrandCollection) =>
  `${contentHubBaseUrl}/collections/${collection.path}`;
