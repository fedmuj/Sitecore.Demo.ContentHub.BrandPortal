export interface BrandGuideline {
  id: string;
  brandGuidelineName: string;
  brandGuidelineTagline: Record<string, string>;
  brandGuidelineDescription: string;
  brandGuidelineLogoUse: string;
  brandGuidelineLogoIncorrectUse: string;
  brandGuidelineLogoColorVersions: string;
  brandGuidelineMission: string;
  brandGuidelineVision: string;
  brandGuidelinePurpose: string;
  brandGuidelinePrimaryColor: string;
  brandPrimaryColor: {
    results: BrandGuidelineColor[];
  };
  brandGuidelineSecondaryColor: string;
  brandSecondaryColor: {
    results: BrandGuidelineColor[];
  };
  brandMasterAsset: {
    results: MasterAsset[];
  };
  brandLogos: {
    results: MasterAsset[];
  };
  brandAssets: {
    results: MasterAsset[];
  };
  brandGuidelineCreativeFramework: string;
  brandGuidelineTaglineUse: string;
  brandGuidelinePhotographyUse: string;
  coBranding1: string;
  coBranding2: string;
  brandPersonalityCharacteristics: {
    results: PersonalityCharacteristic[];
  };
  brandCollections: {
    results: BrandCollection[];
  };
  primaryTypeface: string;
  brandPrimaryFont: {
    results: BrandGuidelineFont[];
  };
  secondaryTypeface: string;
  brandSecondaryFont: {
    results: BrandGuidelineFont[];
  };
}

export interface BrandGuidelineColor {
  id: string;
  brandGuidelineColorName: string;
  brandGuidelineHexCode: string;
  brandGuidelineColorDescription: Record<string, string>;
  brandGuidelineColorRGBCode?: string;
  brandGuidelineColorCMYKCode?: string;
}

export interface BrandGuidelineFont {
  id: string;
  title: Record<string, string>;
  description: Record<string, string>;
  fontToAsset: {
    results: MasterAsset[];
  };
}

export interface MasterAsset {
  id: string;
  title: string;
  assetToPublicLink?: {
    results: PublicLink[];
  };
}

export interface PublicLink {
  id: string;
  relativeUrl: string;
  versionHash: string;
  resource: string;
}

export interface PersonalityCharacteristic {
  id: string;
  title: Record<string, string>;
  description: Record<string, string>;
}

export interface BrandCollection {
  id: string;
  isPublic: boolean;
  collectionName: string;
  description: string;
  path: string;
  collectionToMasterAsset: {
    results: MasterAsset[];
  };
}

export interface AllBrandGuidelinesResponse {
  data: {
    allDemo_BrandGuideline: {
      results: BrandGuideline[];
    };
  };
}

export interface BrandGuidelineResponse {
  data: {
    demo_BrandGuideline: BrandGuideline;
  };
}
