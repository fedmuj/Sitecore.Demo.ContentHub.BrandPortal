import Image from 'next/image';
import { BrandGuideline } from '@/interfaces/brandGuideline';
import BrandPreview from './BrandPreview';
import SidebarNavSection from './SidebarNavSection';
import Link from 'next/link';

export default function Sidebar({ brandGuideline }: { brandGuideline: BrandGuideline | null }) {
  const SIDEBAR_DATA = [
    {
      sectionName: 'Marketing Campaigns',
      sectionItems: [
        {
          itemName: 'Promotions List',
          itemSlug: '',
        }
      ],
    },
    
    {
      sectionName: 'Resources',
      sectionItems: [
        {
          itemName: 'Tenant Assets',
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
