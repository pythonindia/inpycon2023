import fs from "fs";
import MiscLayout from "../components/miscLayout";

import Travel from "../components/travel";

interface CoCPageProps {
  markdownContent: string;
}

export default function CoCPage({ markdownContent }: CoCPageProps) {
  return (
    <MiscLayout>
      <Travel />
    </MiscLayout>
  );
}
