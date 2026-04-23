import type { Metadata } from "next";
import ProjectContent from "./ProjectContent";
import ProjectSideNav from "@/components/ProjectSideNav";

export const metadata: Metadata = {
  title: "The White Show — Jinyu Wu",
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "inspiration", label: "Inspiration" },
  { id: "collages", label: "Fashion Collages" },
  { id: "exploration", label: "Exploration" },
  { id: "final-design", label: "Final Design" },
];

export default function TheWhiteShowPage() {
  return (
    <>
      <ProjectSideNav sections={sections} />
      <ProjectContent />
    </>
  );
}
