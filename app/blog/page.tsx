import fs from "fs";
import path from "path";
import Breadcrumb from "../../components/section/Breadcrumb/page";
import Blog from "../../components/section/Blog/page";
import AnimateOnScroll from "../../components/shared/AnimateOnScroll";
import { RepairTemplateData } from "../../components/types";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const filePath = path.join(process.cwd(), "components", "data", "data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const fullData = JSON.parse(fileContents) as RepairTemplateData;
  const sections = fullData.categories.Repair.sections;

  const breadcrumbData = sections.Breadcrumb?.variants?.RepairBreadcrumbBlog;
  const blogData = sections.Blog?.variants?.RepairBlogPage;

  return (
    <main>
      {breadcrumbData && (
        <AnimateOnScroll>
          <Breadcrumb data={breadcrumbData} />
        </AnimateOnScroll>
      )}
      {blogData && <Blog data={blogData} />}
    </main>
  );
}
