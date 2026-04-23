import type { Metadata } from "next";
import PasswordGate from "@/components/PasswordGate";
import ProjectContent from "./ProjectContent";

export const metadata: Metadata = {
  title: "Revamping the Event Page Experience — Jinyu Wu",
};

export default function EventPageOverhaulPage() {
  return (
    <PasswordGate projectSlug="eventeny-event-page" password="sketchbook">
      <ProjectContent />
    </PasswordGate>
  );
}
