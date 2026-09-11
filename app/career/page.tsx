import fs from "fs";
import path from "path";
import Breadcrumb from "../../components/section/Breadcrumb/page";
import Career from "../../components/section/Career/page";
import Team from "../../components/section/Team/page";
import AnimateOnScroll from "../../components/shared/AnimateOnScroll";
import { RepairTemplateData } from "../../components/types";

export const dynamic = "force-dynamic";

export default async function CareerPage() {
  const filePath = path.join(process.cwd(), "components", "data", "data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const fullData = JSON.parse(fileContents) as RepairTemplateData;
  const sections = fullData.categories.Repair.sections;

  const breadcrumbData = sections.Breadcrumb?.variants?.RepairBreadcrumbCareer;
  const careerData = sections.Career?.variants?.RepairCareer;
  const teamData = sections.Team?.variants?.RepairTeam;

  return (
    <main>
      {breadcrumbData && (
        <AnimateOnScroll>
          <Breadcrumb data={breadcrumbData} />
        </AnimateOnScroll>
      )}
      {careerData && <Career data={careerData} />}
      {teamData && (
        <AnimateOnScroll>
          <Team data={teamData} />
        </AnimateOnScroll>
      )}
    </main>
  );
}
