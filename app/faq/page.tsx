import fs from "fs";
import path from "path";
import Breadcrumb from "../../components/section/Breadcrumb/page";
import Faq from "../../components/section/Faq/Faq";
import AnimateOnScroll from "../../components/shared/AnimateOnScroll";
import { RepairTemplateData } from "../../components/types";

export const dynamic = "force-dynamic";

export default async function FaqPage() {
  const filePath = path.join(process.cwd(), "components", "data", "data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const fullData = JSON.parse(fileContents) as RepairTemplateData;
  const sections = fullData.categories.Repair.sections;

  const breadcrumbData = sections.Breadcrumb?.variants?.RepairBreadcrumbFaq;
  const faqData = sections.Faq?.variants?.RepairFaq;

  return (
    <main>
      {breadcrumbData && (
        <AnimateOnScroll>
          <Breadcrumb data={breadcrumbData} />
        </AnimateOnScroll>
      )}
      {faqData && <Faq data={faqData} />}
    </main>
  );
}
