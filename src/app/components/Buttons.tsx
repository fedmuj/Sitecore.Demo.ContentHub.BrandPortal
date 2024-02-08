import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export function DownloadButton({ downloadLink }: { downloadLink: string }) {
  return (
    <Link
      href={downloadLink}
      target="_blank"
      rel="noopener noreferrer"
      download
      className="button-download"
    >
      <FontAwesomeIcon icon={faDownload} />
      Download
    </Link>
  );
}
