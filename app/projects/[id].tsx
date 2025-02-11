import {
  SectionPrevNextNavigation,
  SectionProjectAwards,
  SectionProjectCollaborators,
  SectionProjectDescription,
  SectionProjectHeader,
  SectionProjectSnapshots,
  SectionProjectTags,
} from "@/components";

export default function ProjectDetails() {
  return (
    <div className="px-6">
      <SectionProjectHeader />
      <div className="border-t border-[#ffffff90]">
        <SectionProjectDescription />
        <SectionProjectTags />
        <SectionProjectAwards />
        <SectionProjectCollaborators />
        <SectionProjectSnapshots />
      </div>
      <SectionPrevNextNavigation />
    </div>
  );
}
