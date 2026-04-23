import type { Metadata } from "next";
import PasswordGate from "@/components/PasswordGate";
import ProjectContent from "./ProjectContent";
import ProjectSideNav from "@/components/ProjectSideNav";

export const metadata: Metadata = {
  title: "Bawbab Delivery Navigation — Jinyu Wu",
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "challenge-solution", label: "Challenge & Solution" },
  { id: "final-design", label: "Final Design" },
  { id: "research", label: "Research" },
  { id: "design-process", label: "Design Process" },
  { id: "reflection", label: "Next Steps" },
];

export default function BawbabPage() {
  return (
    <PasswordGate projectSlug="bawbab-delivery-navigation" password="sketchbook">
      <ProjectSideNav sections={sections} />
      <ProjectContent />
    </PasswordGate>
  );
}
