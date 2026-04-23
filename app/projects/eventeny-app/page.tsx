import type { Metadata } from "next";
import PasswordGate from "@/components/PasswordGate";
import ProjectContent from "./ProjectContent";
import ProjectSideNav from "@/components/ProjectSideNav";

export const metadata: Metadata = {
  title: "Eventeny App for Attendees — Jinyu Wu",
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "challenge-solution", label: "Challenge & Solution" },
  { id: "research", label: "Research" },
  { id: "design-process", label: "Design Decisions" },
  { id: "reflection", label: "Reflection" },
];

export default function EventenyAppPage() {
  return (
    <PasswordGate projectSlug="eventeny-app" password="sketchbook">
      <ProjectSideNav sections={sections} />
      <ProjectContent />
    </PasswordGate>
  );
}
