import fs from "fs";
import path from "path";
import Breadcrumb from "../../components/section/Breadcrumb/page";
import Sitemap from "../../components/section/Sitemap/page";
import AnimateOnScroll from "../../components/shared/AnimateOnScroll";
import { RepairTemplateData } from "../../components/types";

export const dynamic = "force-dynamic";

export default async function SitemapPage() {
  const filePath = path.join(process.cwd(), "components", "data", "data.json");
  const fullData = JSON.parse(fs.readFileSync(filePath, "utf8")) as RepairTemplateData;
  const sitemapData = fullData.categories.Repair.sections.Sitemap?.variants?.RepairSitemap;

  const breadcrumb = {
    title: "Sitemap",
    paths: [
      { label: "Home", url: "/" },
      { label: "Sitemap", url: "/sitemap" },
    ],
    bgImage: "/img/footerbg.png",
  };

  return (
    <main>
      <AnimateOnScroll>
        <Breadcrumb data={breadcrumb} />
      </AnimateOnScroll>
      {sitemapData && <Sitemap data={sitemapData} />}
    </main>
  );
}
