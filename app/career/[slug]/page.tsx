import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Breadcrumb from "../../../components/section/Breadcrumb/page";
import CareerDetail from "../../../components/section/CareerDetail/page";
import AnimateOnScroll from "../../../components/shared/AnimateOnScroll";
import { RepairTemplateData } from "../../../components/types";

export const dynamic = "force-dynamic";

function loadData() {
  const filePath = path.join(process.cwd(), "components", "data", "data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents) as RepairTemplateData;
}

export async function generateStaticParams() {
  const fullData = loadData();
  const jobs = fullData.categories.Repair.sections.CareerDetail?.variants?.RepairCareerDetail?.jobs || [];
  return jobs.map((job) => ({ slug: job.slug }));
}

export default async function CareerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fullData = loadData();
  const sections = fullData.categories.Repair.sections;
  const breadcrumbData = sections.Breadcrumb?.variants?.RepairBreadcrumbCareerDetail;
  const detailData = sections.CareerDetail?.variants?.RepairCareerDetail;
  const job = detailData?.jobs.find((item) => item.slug === slug);

  if (!detailData || !job) notFound();

  return (
    <main>
      {breadcrumbData && (
        <AnimateOnScroll>
          <Breadcrumb data={breadcrumbData} />
        </AnimateOnScroll>
      )}
      <CareerDetail data={detailData} job={job} />
    </main>
  );
}
