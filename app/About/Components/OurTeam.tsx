import Image from "next/image";

import { FaLinkedinIn } from "react-icons/fa6";
import { useIsVisible } from "../../JS_Scripts/Visible";
import { useRef } from "react";

import Ops from "./TeamMembers/DirectorOfOps";
import CIO from "./TeamMembers/ChiefInformationOfficer";
import Engineering from "./TeamMembers/DirectorOfEngineering";
import Research from "./TeamMembers/DirectorOfResearch";
import CFO from "./TeamMembers/ChiefFinancialOfficer";

export default function OurTeam() {
  return (
    <section className="bg-[#0474BC] relative overflow-hidden flex flex-col md:flex-row h-[700px] w-full">
      <CFO />
      <Research />
      <Engineering />
      <CIO />
      <Ops />
    </section>
  );
}
