import Image from 'next/image';
import { BrandGuideline } from '@/interfaces/brandGuideline';
import BrandPreview from './BrandPreview';
import SidebarNavSection from './SidebarNavSection';
import Link from 'next/link';

export default function Sidebar({ brandGuideline }: { brandGuideline: BrandGuideline | null }) {
  const SIDEBAR_DATA = [
    {
      sectionName: 'Visual Identity',
      sectionItems: [
        {
          itemName: 'Brand Basics',
          itemSlug: '',
        },
        {
          itemName: 'Brand Colors',
          itemSlug: 'colors',
        },
        {
          itemName: 'Brand Logo',
          itemSlug: 'logo',
        },
        {
          itemName: 'Typography',
          itemSlug: 'fonts',
        },
      ],
    },
    {
      sectionName: 'Corporate Messaging',
      sectionItems: [
        {
          itemName: 'Mission, Vision and Purpose',
          itemSlug: 'mission',
        },
        {
          itemName: 'Personality Characteristics',
          itemSlug: 'personality',
        },
      ],
    },
    {
      sectionName: 'Resources',
      sectionItems: [
        {
          itemName: 'Brand Assets',
          itemSlug: 'assets',
        },
        {
          itemName: 'Collections',
          itemSlug: 'collections',
        },
      ],
    },
  ];

  if (!brandGuideline) return <></>;

  return (
    <aside className="brand-sidebar" aria-label="Sidebar">
      <div className="brand-sidebar-container">
        <Link href={'/'}>
          <Image
            src="/brands-portal-logo-dark.svg"
            alt="PLAY! Brands Portal"
            width={430}
            height={65}
            className="logo"
          />
        </Link>
        <BrandPreview brandGuideline={brandGuideline} />
        <nav>
          <ul className="brand-sidebar-nav">
            {SIDEBAR_DATA.map((section) => (
              <SidebarNavSection
                key={section.sectionName}
                section={section}
                brandId={brandGuideline.id}
              />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
