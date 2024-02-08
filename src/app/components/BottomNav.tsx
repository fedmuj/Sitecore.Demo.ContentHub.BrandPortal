import Link from 'next/link';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type BottomNavProps = {
  hasPrevious?: boolean;
  previousCategory?: string;
  previousTitle?: string;
  previousLink?: string;
  hasNext?: boolean;
  nextCategory?: string;
  nextTitle?: string;
  nextLink?: string;
};

export default function BottomNav({
  hasPrevious,
  previousCategory,
  previousTitle,
  previousLink,
  hasNext,
  nextCategory,
  nextTitle,
  nextLink,
}: BottomNavProps) {
  return (
    <nav className="bottom-nav">
      {hasPrevious && (
        <Link href={previousLink ?? '#'}>
          <div>
            <span className="bottom-nav-category">{previousCategory}</span>
            <span className="bottom-nav-title">{previousTitle}</span>
          </div>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
      )}
      {hasNext && (
        <Link href={nextLink ?? '#'}>
          <FontAwesomeIcon icon={faChevronRight} />
          <div>
            <span className="bottom-nav-category">{nextCategory}</span>
            <span className="bottom-nav-title">{nextTitle}</span>
          </div>
        </Link>
      )}
    </nav>
  );
}
