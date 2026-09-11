import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Breadcrumb from "../../../components/section/Breadcrumb/page";
import Policy from "../../../components/section/Policy/page";
import AnimateOnScroll from "../../../components/shared/AnimateOnScroll";
import { RepairTemplateData } from "../../../components/types";

export const dynamic = "force-dynamic";

function loadPolicy(slug: string) {
  const filePath = path.join(process.cwd(), "components", "data", "data.json");
  const fullData = JSON.parse(fs.readFileSync(filePath, "utf8")) as RepairTemplateData;
  const policy = fullData.categories.Repair.sections.Policy?.variants?.RepairPolicy;
  const page = policy?.pages.find((item) => item.slug === slug);
  return { policy, page };
}

export default async function PolicyRoute({ slug }: { slug: string }) {
  const { policy, page } = loadPolicy(slug);
  if (!policy || !page) notFound();

  const breadcrumb = {
    title: page.breadcrumbTitle,
    paths: [
      { label: "Home", url: "/" },
      { label: page.breadcrumbTitle, url: `/${page.slug}` },
    ],
    bgImage: policy.bgImage,
  };

  return (
    <main>
      <AnimateOnScroll>
        <Breadcrumb data={breadcrumb} />
      </AnimateOnScroll>
      <Policy data={page} />
    </main>
  );
}
