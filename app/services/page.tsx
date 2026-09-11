import fs from 'fs';
import path from 'path';
import Breadcrumb from '../../components/section/Breadcrumb/page';
import Services from '../../components/section/Services/page';
import AnimateOnScroll from '../../components/shared/AnimateOnScroll';
import { RepairTemplateData } from '../../components/types';

export default async function ServicesPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as RepairTemplateData;
  const sections = fullData.categories.Repair.sections;

  const breadcrumbData = sections.Breadcrumb?.variants?.RepairBreadcrumbServices;
  const servicesData = sections.Services?.variants?.RepairServicesPage;

  return (
    <main>
      {breadcrumbData && (
        <AnimateOnScroll>
          <Breadcrumb data={breadcrumbData} />
        </AnimateOnScroll>
      )}
      {servicesData && (
        <AnimateOnScroll>
          <Services data={servicesData} />
        </AnimateOnScroll>
      )}
    </main>
  );
}
