import type { Metadata } from "next";
import PasswordGate from "@/components/PasswordGate";
import ProjectContent from "./ProjectContent";
import ProjectSideNav from "@/components/ProjectSideNav";

export const metadata: Metadata = {
  title: "Guest Management Tool — Jinyu Wu",
};

export default function GuestManagementPage() {
  return (
    <PasswordGate projectSlug="guest-management" password="sketchbook">
      <ProjectSideNav />
      <ProjectContent />
    </PasswordGate>
  );
}
