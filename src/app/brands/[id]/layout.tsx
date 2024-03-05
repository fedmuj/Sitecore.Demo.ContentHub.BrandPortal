import { getBrandGuidelineById } from '@/api/queries/getBrandGuidelines';
import Sidebar from './Sidebar/Sidebar';
import HeaderBar from '@/app/components/HeaderBar';

export default async function BrandLayout({
  children,
  params, // will be a page or nested layout
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const brandGuideline = await getBrandGuidelineById(params.id);

  return (
    <>
      <HeaderBar></HeaderBar>
      <section className="grid grid-cols-4 gap-8 px-14">
        <Sidebar brandGuideline={brandGuideline} />
        <div className="col-span-3">{children}</div>
      </section>
    </>
  );
}
