import fs from 'fs';
import path from 'path';
import Breadcrumb from '../../components/section/Breadcrumb/page';
import Gallery from '../../components/section/Gallery/page';
import AnimateOnScroll from '../../components/shared/AnimateOnScroll';
import { RepairTemplateData } from '../../components/types';

export default async function GalleryPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as RepairTemplateData;
  const sections = fullData.categories.Repair.sections;

  const breadcrumbData = sections.Breadcrumb?.variants?.RepairBreadcrumbGallery;
  const galleryData = sections.Gallery?.variants?.RepairGallery;

  return (
    <main>
      {breadcrumbData && (
        <AnimateOnScroll>
          <Breadcrumb data={breadcrumbData} />
        </AnimateOnScroll>
      )}
      {galleryData && <Gallery data={galleryData} />}
    </main>
  );
}
