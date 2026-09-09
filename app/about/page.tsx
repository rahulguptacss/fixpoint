import fs from 'fs';
import path from 'path';
import Breadcrumb from '../../components/section/Breadcrumb/page';
import About from '../../components/section/About/page';
import Stats from '../../components/section/Stats/page';
import WhyChooseUs from '../../components/section/WhyChooseUs/page';
import AnimateOnScroll from '../../components/shared/AnimateOnScroll';
import { RepairTemplateData } from '../../components/types';

export default async function AboutPage() {
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as RepairTemplateData;
  const sections = fullData.categories.Repair.sections;

  const breadcrumbData = sections.Breadcrumb?.variants?.RepairBreadcrumb;
  const aboutData = sections.About?.variants?.RepairAbout;
  const statsData = sections.Stats?.variants?.RepairStats;
  const whyChooseUsData = sections.WhyChooseUs?.variants?.RepairWhyChooseUs;

  return (
    <main>
      {breadcrumbData && (
        <AnimateOnScroll>
          <Breadcrumb data={breadcrumbData} />
        </AnimateOnScroll>
      )}
      {aboutData && (
        <AnimateOnScroll>
          <About data={aboutData} />
        </AnimateOnScroll>
      )}
      {statsData && (
        <AnimateOnScroll>
          <Stats data={statsData} />
        </AnimateOnScroll>
      )}
      {whyChooseUsData && (
        <AnimateOnScroll>
          <WhyChooseUs data={whyChooseUsData} />
        </AnimateOnScroll>
      )}
    </main>
  );
}
