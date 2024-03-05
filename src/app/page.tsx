import { getAllBrandGuidelines } from '@/api/queries/getBrandGuidelines';
import BrandsListing from './home/BrandsListing';
import Login from './components/Login';

export default async function Home() {
  const brands = await getAllBrandGuidelines();

  return (
    <main>
      <BrandsListing brands={brands} />
      <Login></Login>
    </main>
  );
}
