import fs from 'fs';
import path from 'path';
import Breadcrumb from '../../components/section/Breadcrumb/page';
import BookRepair from '../../components/section/BookRepair/page';
import AnimateOnScroll from '../../components/shared/AnimateOnScroll';
import { RepairTemplateData } from '../../components/types';

export default async function BookPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as RepairTemplateData;
  const sections = fullData.categories.Repair.sections;

  const breadcrumbData = sections.Breadcrumb?.variants?.RepairBreadcrumbBook;
  const bookData = sections.BookRepair?.variants?.RepairBookRepair;

  return (
    <main>
      {breadcrumbData && (
        <AnimateOnScroll>
          <Breadcrumb data={breadcrumbData} />
        </AnimateOnScroll>
      )}
      {bookData && <BookRepair data={bookData} />}
    </main>
  );
}
