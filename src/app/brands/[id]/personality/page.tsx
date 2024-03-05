import { getAllBrandGuidelines, getBrandGuidelineById } from '@/api/queries/getBrandGuidelines';
import BottomNav from '@/app/components/BottomNav';
import { BrandGuideline } from '@/interfaces/brandGuideline';
import { notFound } from 'next/navigation';
import PersonalityGrid from './PersonalityGrid';
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default async function BrandPersonality({ params }: { params: { id: string } }) {
  const brandGuideline = await getBrandGuidelineById(params.id);

  if (!brandGuideline) return notFound();

  const characteristics = brandGuideline.brandPersonalityCharacteristics.results;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Campaign</TableHead>
          <TableHead>Start</TableHead>
          <TableHead>End</TableHead>
          <TableHead>Target</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Summer Sale</TableCell>
          <TableCell>Jun 15, 2023</TableCell>
          <TableCell>Jul 15, 2023</TableCell>
          <TableCell>Newsletter Subscribers</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>
            <Button size="sm">See Details</Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Back to School</TableCell>
          <TableCell>Aug 1, 2023</TableCell>
          <TableCell>Sep 1, 2023</TableCell>
          <TableCell>Students & Parents</TableCell>
          <TableCell>Scheduled</TableCell>
          <TableCell>
            <Button size="sm">See Details</Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Fall Fashion</TableCell>
          <TableCell>Sep 15, 2023</TableCell>
          <TableCell>Oct 15, 2023</TableCell>
          <TableCell>Fashion Enthusiasts</TableCell>
          <TableCell>Paused</TableCell>
          <TableCell>
            <Button size="sm">See Details</Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Holiday Cheer</TableCell>
          <TableCell>Nov 1, 2023</TableCell>
          <TableCell>Dec 1, 2023</TableCell>
          <TableCell>Seasonal Shoppers</TableCell>
          <TableCell>Inactive</TableCell>
          <TableCell>
            <Button size="sm">See Details</Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">New Year New You</TableCell>
          <TableCell>Jan 1, 2024</TableCell>
          <TableCell>Feb 1, 2024</TableCell>
          <TableCell>Health & Wellness Seekers</TableCell>
          <TableCell>Scheduled</TableCell>
          <TableCell>
            <Button size="sm">See Details</Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export async function generateStaticParams() {
  const brandGuidelines: BrandGuideline[] = (await getAllBrandGuidelines()) ?? [];

  return brandGuidelines.map((brandGuideline) => ({
    id: brandGuideline.id,
  }));
}
