'use client'
import { Button } from '@/components/ui/button';

export default function BrandBasics() {
  // Function to download PDF
  const downloadPDF = () => {
    const pdfUrl = 'https://lamdadev.sitecoresandbox.cloud/api/delivery/local-70f3c29a7b04400eb45a2c112b739e1a?intent=Download&expires=2024-03-05T21%3A52%3A00.3396045%2B00%3A00&entityid=77286&userid=74541&rendition=downloadOriginal&signature=rnQtyiFdzoU'; // Replace with your actual PDF URL
    // Method 1: Directly changing the window location
    // window.location.href = pdfUrl;

    // Method 2: Creating a dynamic link and clicking it
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'Report Zara.pdf'); // Optional: Sets the filename for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex gap-2 mb-4 py-20">
      <input type="date" />
      <input type="date" />
      <Button type="submit" className="bg-black text-white rounded-md">
        Filter
      </Button>
      <Button onClick={downloadPDF} type="submit" className="bg-black text-white rounded-md">
        Generate Report
      </Button>
    </div>
  );
}
