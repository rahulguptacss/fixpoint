import fs from 'fs';
import path from 'path';
import Breadcrumb from '../../components/section/Breadcrumb/page';
import BrandsWeRepair from '../../components/section/BrandsWeRepair/page';
import AnimateOnScroll from '../../components/shared/AnimateOnScroll';
import { RepairTemplateData } from '../../components/types';

export default async function BrandsWeRepairPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as RepairTemplateData;
  const sections = fullData.categories.Repair.sections;

  const breadcrumbData = sections.Breadcrumb?.variants?.RepairBreadcrumbBrandsWeRepair;
  const brandsData = sections.BrandsWeRepair?.variants?.RepairBrandsWeRepair;

  return (
    <main>
      {breadcrumbData && (
        <AnimateOnScroll>
          <Breadcrumb data={breadcrumbData} />
        </AnimateOnScroll>
      )}
      {brandsData && (
        <AnimateOnScroll>
          <BrandsWeRepair data={brandsData} />
        </AnimateOnScroll>
      )}
    </main>
  );
}
