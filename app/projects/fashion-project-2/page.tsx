import type { Metadata } from "next";
import ProjectContent from "./ProjectContent";
import ProjectSideNav from "@/components/ProjectSideNav";

export const metadata: Metadata = {
  title: "Fashion Project 2 — Jinyu Wu",
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "inspiration", label: "Inspiration" },
  { id: "exploration", label: "Exploration" },
  { id: "final-design", label: "Final Lineup" },
  { id: "photoshoot", label: "Photoshoot" },
];

export default function FashionProject2Page() {
  return (
    <>
      <ProjectSideNav sections={sections} />
      <ProjectContent />
    </>
  );
}
