import React, { useState } from "react";
import { FolderCard } from "./SkillCard";
import { SkillModal } from "./SkillModal";
import { skillData } from "@/data/TSdata";

export const SkillSection = () =>  {
  const [selected, setSelected] = useState<null | "language" | "framework" | "tool">(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 text-primary">
      <h1 className="text-8xl mb-8 uppercase">Skills</h1>

      <div className="flex flex-col sm:flex-row gap-6">
        <FolderCard
        title="Language"
        onClick={() => setSelected("language")}
        isActive={selected === "language"}
        />
        <FolderCard
        title="Framework"
        onClick={() => setSelected("framework")}
        isActive={selected === "framework"}
        />
        <FolderCard
        title="Tool"
        onClick={() => setSelected("tool")}
        isActive={selected === "tool"}
        />      
      </div>

      <SkillModal
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        title={`My ${selected?.toUpperCase()} Skills`}
        skills={selected ? skillData[selected] : []}
      />
    </div>
  );
}
