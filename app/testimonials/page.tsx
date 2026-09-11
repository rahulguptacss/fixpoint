import fs from 'fs';
import path from 'path';
import Breadcrumb from '../../components/section/Breadcrumb/page';
import Testimonials from '../../components/section/Testimonials/page';
import AnimateOnScroll from '../../components/shared/AnimateOnScroll';
import { RepairTemplateData } from '../../components/types';

export default async function TestimonialsPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as RepairTemplateData;
  const sections = fullData.categories.Repair.sections;

  const breadcrumbData = sections.Breadcrumb?.variants?.RepairBreadcrumbTestimonials;
  const testimonialsData = sections.Testimonials?.variants?.RepairTestimonials;

  return (
    <main>
      {breadcrumbData && (
        <AnimateOnScroll>
          <Breadcrumb data={breadcrumbData} />
        </AnimateOnScroll>
      )}
      {testimonialsData && <Testimonials data={testimonialsData} />}
    </main>
  );
}
