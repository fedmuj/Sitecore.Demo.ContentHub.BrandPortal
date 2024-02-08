import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="brand-not-found">
      <h2>Not Found</h2>
      <p>Could not find the requested brand. Are you sure it exists?</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
