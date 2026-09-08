import fs from 'fs';
import path from 'path';
import Hero from '../components/section/Hero/page';
import About from '../components/section/About/page';
import Services from '../components/section/Services/page';
import Stats from '../components/section/Stats/page';
import Team from '../components/section/Team/page';
import Blog from '../components/section/Blog/page';
import AnimateOnScroll from '../components/shared/AnimateOnScroll';
import { RepairTemplateData } from '../components/types';

const componentMap: Record<string, any> = {
  "Hero": Hero,
  "About": About,
  "Services": Services,
  "Stats": Stats,
  "Team": Team,
  "Blog": Blog
};

export default async function Home() {
  // Read data from data.json
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as RepairTemplateData;

  const template = fullData.categories.Repair.templateComponents['template-1'];
  const sections = fullData.categories.Repair.sections;
  const components = template.pages.home.components;

  return (
    <main>
      {components.map((comp, index) => {
        const Component = componentMap[comp.key];
        if (!Component) return null;

        // Resolve the actual data from the sections -> variants map
        const sectionData = (sections as any)[comp.key]?.variants[comp.component];
        if (!sectionData) return null;

        return (
          <AnimateOnScroll key={index}>
            <Component data={sectionData} />
          </AnimateOnScroll>
        );
      })}
    </main>
  );
}
