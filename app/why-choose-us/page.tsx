import fs from 'fs';
import path from 'path';
import Breadcrumb from '../../components/section/Breadcrumb/page';
import WhyChooseUs from '../../components/section/WhyChooseUs/page';
import Team from '../../components/section/Team/page';
import AnimateOnScroll from '../../components/shared/AnimateOnScroll';
import { RepairTemplateData } from '../../components/types';

export default async function WhyChooseUsPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as RepairTemplateData;
  const sections = fullData.categories.Repair.sections;

  const breadcrumbData = sections.Breadcrumb?.variants?.RepairBreadcrumbWhyChooseUs;
  const whyChooseUsData = sections.WhyChooseUs?.variants?.RepairWhyChooseUs;
  const teamData = sections.Team?.variants?.RepairTeam;

  return (
    <main>
      {breadcrumbData && (
        <AnimateOnScroll>
          <Breadcrumb data={breadcrumbData} />
        </AnimateOnScroll>
      )}
      {whyChooseUsData && (
        <AnimateOnScroll>
          <WhyChooseUs data={whyChooseUsData} />
        </AnimateOnScroll>
      )}
      {teamData && (
        <AnimateOnScroll>
          <Team data={teamData} />
        </AnimateOnScroll>
      )}
    </main>
  );
}
