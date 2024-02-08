import { getAllBrandGuidelines } from '@/api/queries/getBrandGuidelines';
import BrandsListing from './home/BrandsListing';

export default async function Home() {
  const brands = await getAllBrandGuidelines();

  return (
    <main>
      <BrandsListing brands={brands} />
    </main>
  );
}
