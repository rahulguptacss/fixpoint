import fs from 'fs';
import path from 'path';
import Breadcrumb from '../../../components/section/Breadcrumb/page';
import TeamDetail from '../../../components/section/TeamDetail/page';
import AnimateOnScroll from '../../../components/shared/AnimateOnScroll';
import { RepairTemplateData } from '../../../components/types';

export default async function TeamDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const filePath = path.join(process.cwd(), 'components', 'data', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const fullData = JSON.parse(fileContents) as RepairTemplateData;
  const sections = fullData.categories.Repair.sections;

  // Reusing the Breadcrumb from "Our Teams"
  const breadcrumbData = sections.Breadcrumb?.variants?.RepairBreadcrumbOurTeams;
  
  // Get all members from Team Page section to find the specific member
  const membersList = sections.Team?.variants?.RepairTeamPage?.members || [];
  const member = membersList.find((m: any) => m.id.toString() === resolvedParams.id);
  
  // Get static detail template
  const detailTemplate = sections.TeamDetail?.variants?.RepairTeamDetail;

  if (!detailTemplate) {
    return null;
  }

  // Merge the static template with the member-specific data
  const teamDetailData = {
    ...detailTemplate,
    name: member?.name || detailTemplate.name,
    role: member?.role || detailTemplate.role,
    image: member?.image || detailTemplate.image,
    socials: member?.socials || detailTemplate.socials,
  };

  return (
    <main>
      {breadcrumbData && (
        <AnimateOnScroll>
          <Breadcrumb data={breadcrumbData} />
        </AnimateOnScroll>
      )}
      <AnimateOnScroll>
        <TeamDetail data={teamDetailData} />
      </AnimateOnScroll>
    </main>
  );
}
