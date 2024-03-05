import { fetchGraphQL } from '@/api';
import {
  AllBrandGuidelinesResponse,
  BrandGuideline,
  BrandGuidelineResponse,
} from '@/interfaces/brandGuideline';

const assetToPublicLink = `
  assetToPublicLink {
    results {
      __typename
      relativeUrl
      versionHash
      resource
    }
  }
`;

const masterAsset = `
  __typename
  total
  results {
    __typename
    title
    ${assetToPublicLink}
  }
`;

const brandColor = `
  __typename
  results {
    id
    __typename
    brandGuidelineColorName
    brandGuidelineHexCode
    brandGuidelineColorRGBCode
    brandGuidelineColorCMYKCode
    brandGuidelineColorDescription
  }
`;

const brandFont = `
  results {
    id
    title: taxonomyLabel
    description: taxonomyDescription
    fontToAsset {
      results {
        id
        ${assetToPublicLink}
      }
    }
  }
`;

const brandGuidelineFields = `
  __typename
  id
  brandGuidelineName
  brandGuidelineTagline
  brandGuidelineDescription
  brandGuidelineLogoUse
  brandGuidelineLogoIncorrectUse
  brandGuidelineLogoColorVersions
  brandGuidelineMission
  brandGuidelineVision
  brandGuidelinePurpose
  brandGuidelinePrimaryColor
  brandGuidelineSecondaryColor
  brandGuidelineCreativeFramework
  brandGuidelineTaglineUse
  brandGuidelinePhotographyUse
  coBranding1
  coBranding2

  brandPrimaryColor: brandGuidelineToBrandGuidelinePrimaryColor (first: 100) {
    ${brandColor}
  }

  brandSecondaryColor: brandGuidelineToBrandGuidelineSecondaryColor (first: 100) {
    ${brandColor}
  }

  brandMasterAsset: brandGuidelineToMasterAsset {
    ${masterAsset}
  }

  brandLogos: brandGuidelineToAsset(
    where: {
      assetTypeToAsset: { m_AssetType_ids: "M.AssetType.Logo" }
    }
    orderBy: MODIFIEDON_ASC
    first: 100
  )
  {
    ${masterAsset}
  }

  brandAssets: brandGuidelineToAsset(
    orderBy: MODIFIEDON_ASC
    first: 100
  )
  {
    ${masterAsset}
  }

  brandPersonalityCharacteristics: brandGuideline2PersCharacteristics (first: 100) {
    results {
      id
      title: taxonomyLabel
      description: taxonomyDescription
    }
  }

  brandCollections: brandGuidelineToCollections {
    __typename
    results {
      __typename
      isPublic
      collectionName
      description
      path

      collectionToMasterAsset {
        __typename
        total
        results {
          __typename
          title
          assetToPublicLink(
            first: 1
            where: { resource_eq: "downloadOriginal" }
          ) {
            __typename
            total
            results {
              __typename
              relativeUrl
              versionHash
              resource
            }
          }
        }
      }
    }
  }

  primaryTypeface
  brandPrimaryFont: brandGuidelineToPrimaryFont (first: 100) {
    ${brandFont}
  }
  secondaryTypeface
  brandSecondaryFont: brandGuidelineToSecondaryFont (first: 100) {
    ${brandFont}
  }
  tenantPromotions: promotions(orderBy:ENDDATE_DESC, first: 100) {
    __typename
    total
    results {
      __typename
      id
      name
      opportunityValue
      startDate
      enddate
      sessionsTypeToSessions {
        taxonomyLabel
      }
      sessionToMasterAsset {
        total
        results {
          __typename
          title
          assetToPublicLink {
            results {
              __typename
              relativeUrl
              versionHash
              resource
            }
          }
        }
      }
      ownedMediaType {
        taxonomyLabel
      }
      shopping {
        results {
          taxonomyLabel
        }
      }
      sessionToAffMediaType {
        taxonomyLabel
      }
      affiliateMedia {
        results {
          taxonomyLabel
        }
      }      
    }
  }
  
`;

const brandGuidelinesQuery = `
  query {
    allDemo_BrandGuideline {
      total
      results {
        ${brandGuidelineFields}
      }
    }
  }
`;

export const getAllBrandGuidelines = async (): Promise<BrandGuideline[] | null> => {
  try {
    const results: AllBrandGuidelinesResponse = (await fetchGraphQL(
      brandGuidelinesQuery
    )) as AllBrandGuidelinesResponse;

    return results?.data?.allDemo_BrandGuideline?.results;
  } catch {
    return null;
  }
};

const getBrandGuidelineByIdQuery = (id: string) => `
  query {
    demo_BrandGuideline (id: "${id}") {
      ${brandGuidelineFields}
    }
  }
`;

export const getBrandGuidelineById = async (id: string): Promise<BrandGuideline | null> => {
  try {
    console.log("id " + id)
    const brandGuidelineResponse: BrandGuidelineResponse = (await fetchGraphQL(
      getBrandGuidelineByIdQuery(id)
    )) as BrandGuidelineResponse;
    console.log(brandGuidelineResponse.data.demo_BrandGuideline.brandGuidelineName)
    return brandGuidelineResponse.data.demo_BrandGuideline;
  } catch {
    return null;
  }
};
