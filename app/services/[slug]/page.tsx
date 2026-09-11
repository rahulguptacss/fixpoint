import fs from 'fs';
import path from 'path';
import Breadcrumb from '../../../components/section/Breadcrumb/page';
import ServiceDetail from '../../../components/section/ServiceDetail/page';
import AnimateOnScroll from '../../../components/shared/AnimateOnScroll';
import { RepairTemplateData } from '../../../components/types';

function loadData() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents) as RepairTemplateData;
}

export async function generateStaticParams() {
  const fullData = loadData();
  const items = fullData.categories.Repair.sections.ServiceDetail?.variants?.RepairServiceDetail?.items || [];
  return items.map((item) => ({ slug: item.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fullData = loadData();
  const sections = fullData.categories.Repair.sections;

  const breadcrumbData = sections.Breadcrumb?.variants?.RepairBreadcrumbServiceDetail;
  const detailData = sections.ServiceDetail?.variants?.RepairServiceDetail;

  if (!detailData) return null;

  return (
    <main>
      {breadcrumbData && (
        <AnimateOnScroll>
          <Breadcrumb data={breadcrumbData} />
        </AnimateOnScroll>
      )}
      <AnimateOnScroll>
        <ServiceDetail data={detailData} currentSlug={slug} />
      </AnimateOnScroll>
    </main>
  );
}
