'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export type SidebarSection = {
  sectionName: string;
  sectionItems: {
    itemName: string;
    itemSlug: string;
  }[];
};

export default function SidebarNavSection({
  section,
  brandId,
}: {
  section: SidebarSection;
  brandId: string;
}) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const anyItemActive = section.sectionItems.some(
      (item) =>
        `/brands/${brandId}${!!item.itemSlug ? `/${item.itemSlug}` : ''}` === pathname
    );

    setExpanded(anyItemActive);
  }, [brandId, pathname, section.sectionItems])

  return (
    <li className={`brand-sidebar-nav-section ${expanded ? 'expanded' : ''}`}>
      <button onClick={() => setExpanded(!expanded)}>
        {section.sectionName}
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <ul>
        {section.sectionItems.map((item) => {
          const href = `/brands/${brandId}${!!item.itemSlug ? `/${item.itemSlug}` : ''}`;
          return (
            <li key={item.itemSlug} className="brand-sidebar-nav-link">
              <Link href={href} className={href === pathname ? 'active' : ''}>
                {item.itemName}
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
}
