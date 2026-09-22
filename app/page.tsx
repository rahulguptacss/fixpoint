import Hero from '../components/section/Hero/page';
import About from '../components/section/About/page';
import Services from '../components/section/Services/page';
import Stats from '../components/section/Stats/page';
import Team from '../components/section/Team/page';
import Blog from '../components/section/Blog/page';
import fullData from '../components/data/data.json';
import { RepairTemplateData } from '../components/types';

const componentMap: Record<string, any> = {
  Hero,
  About,
  Services,
  Stats,
  Team,
  Blog,
};

export default async function Home() {
  const data = fullData as RepairTemplateData;
  const template = data.categories.Repair.templateComponents['template-1'];
  const sections = data.categories.Repair.sections;
  const components = template.pages.home.components;

  return (
    <main>
      {components.map((comp, index) => {
        const Component = componentMap[comp.key];
        if (!Component) return null;
        const sectionData = (sections as any)[comp.key]?.variants[comp.component];
        if (!sectionData) return null;
        return <Component key={index} data={sectionData} />;
      })}
    </main>
  );
}
