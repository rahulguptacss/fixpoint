import fs from 'fs';
import path from 'path';
import Breadcrumb from '../../components/section/Breadcrumb/page';
import Pricing from '../../components/section/Pricing/page';
import AnimateOnScroll from '../../components/shared/AnimateOnScroll';
import { RepairTemplateData } from '../../components/types';

export default async function PricingPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as RepairTemplateData;
  const sections = fullData.categories.Repair.sections;

  const breadcrumbData = sections.Breadcrumb?.variants?.RepairBreadcrumbPricing;
  const pricingData = sections.Pricing?.variants?.RepairPricing;

  return (
    <main>
      {breadcrumbData && (
        <AnimateOnScroll>
          <Breadcrumb data={breadcrumbData} />
        </AnimateOnScroll>
      )}
      {pricingData && <Pricing data={pricingData} />}
    </main>
  );
}
