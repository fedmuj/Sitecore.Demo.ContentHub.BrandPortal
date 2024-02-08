import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <Link href="/" className="header-logo">
        <Image src="/play-logo-icon.svg" alt="P" width={41} height={52} />
        <span className="text-[41px] font-bold text-blue">PLAY!</span>
        <span className="text-[41px]"> Brands Portal</span>
      </Link>
    </header>
  );
}
