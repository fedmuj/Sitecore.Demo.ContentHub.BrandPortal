import { getAllBrandGuidelines, getBrandGuidelineById } from '@/api/queries/getBrandGuidelines';
import Filter from '@/app/components/Filter';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function BrandBasics({ params }: { params: { id: string } }) {
  const brandGuideline = await getBrandGuidelineById(params.id);
  console.log(params.id);

  const today = new Date();
  if (!brandGuideline) return notFound();

  brandGuideline.tenantPromotions;
  return (
    <div>
      <Filter></Filter>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Campaign Name</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Opportunity Value Generated</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {brandGuideline.tenantPromotions.results.map((campaign, index) => {
            // Convert start and end dates from the campaign to Date objects
            const startDate = new Date(campaign.startDate);
            const endDate = new Date(campaign.enddate);
            let href = `/brands/${params.id}/promotion/${campaign.id}`;
            // Determine campaign status based on current date
            const status =
              today >= startDate && today <= endDate
                ? 'Active'
                : today > endDate
                ? 'Finished'
                : 'Upcoming'; // Assumes a campaign can also be upcoming
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">{campaign.name}</TableCell>
                <TableCell>
                  {new Intl.DateTimeFormat('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  }).format(new Date(startDate))}
                </TableCell>
                <TableCell>
                  {' '}
                  {new Intl.DateTimeFormat('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  }).format(new Date(endDate))}
                </TableCell>
                <TableCell>{campaign.sessionsTypeToSessions.taxonomyLabel['en-US']}</TableCell>
                <TableCell>{campaign.opportunityValue}€</TableCell>
                <TableCell>{status}</TableCell>
                <TableCell>
                  <Button size="sm">
                    <Link href={href}>More Details</Link>
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
