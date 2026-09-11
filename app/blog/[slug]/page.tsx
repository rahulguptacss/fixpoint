import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Breadcrumb from "../../../components/section/Breadcrumb/page";
import BlogDetail from "../../../components/section/BlogDetail/page";
import AnimateOnScroll from "../../../components/shared/AnimateOnScroll";
import { RepairTemplateData } from "../../../components/types";

function loadData() {
  const filePath = path.join(process.cwd(), "components", "data", "data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents) as RepairTemplateData;
}

export async function generateStaticParams() {
  const fullData = loadData();
  const posts = fullData.categories.Repair.sections.BlogDetail?.variants?.RepairBlogDetail?.posts || [];
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fullData = loadData();
  const sections = fullData.categories.Repair.sections;
  const breadcrumbData = sections.Breadcrumb?.variants?.RepairBreadcrumbBlogDetail;
  const detailData = sections.BlogDetail?.variants?.RepairBlogDetail;
  const post = detailData?.posts.find((item) => item.slug === slug);

  if (!detailData || !post) notFound();

  return (
    <main>
      {breadcrumbData && (
        <AnimateOnScroll>
          <Breadcrumb data={breadcrumbData} />
        </AnimateOnScroll>
      )}
      <BlogDetail data={detailData} post={post} />
    </main>
  );
}
