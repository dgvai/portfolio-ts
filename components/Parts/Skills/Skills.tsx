import { ImPower } from "react-icons/im";
import { skillGroups } from "./Skills.constants";
import { Tooltip } from "flowbite-react";
import { Section } from "@/components/Section";

export const Skills = () => (
  <Section Icon={ImPower} title="Expertises">
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
      {skillGroups.map(({ name, skills, BgIcon }, i) => (
        <div key={i} className="group skill-card">
          <BgIcon className="absolute text-9xl bottom-0 opacity-10" />
          <span className="text-sm sm:text-base text-center font-bold">{name}</span>
          <div className="w-full grid grid-cols-3 gap-2 pt-6">
            {skills.map(({ title, Icon }, j) => (
              <div key={j} className="flex justify-center z-10">
                <Tooltip content={title}>
                  <Icon className="text-3xl text-charcoal group-hover:text-whiteboard" />
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);
