import fs from "fs";
import path from "path";
import Breadcrumb from "../../components/section/Breadcrumb/page";
import Contact from "../../components/section/Contact/page";
import AnimateOnScroll from "../../components/shared/AnimateOnScroll";
import { RepairTemplateData } from "../../components/types";

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const filePath = path.join(process.cwd(), "components", "data", "data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const fullData = JSON.parse(fileContents) as RepairTemplateData;
  const sections = fullData.categories.Repair.sections;

  const breadcrumbData = sections.Breadcrumb?.variants?.RepairBreadcrumbContact;
  const contactData = sections.Contact?.variants?.RepairContact;

  return (
    <main>
      {breadcrumbData && (
        <AnimateOnScroll>
          <Breadcrumb data={breadcrumbData} />
        </AnimateOnScroll>
      )}
      {contactData && <Contact data={contactData} />}
    </main>
  );
}
