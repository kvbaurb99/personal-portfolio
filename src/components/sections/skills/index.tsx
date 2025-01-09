"use client";
import * as m from "@/paraglide/messages.js";
import { H2, Section } from "@/styles/main";
import { useSkills } from "@/data/sections/skills/data";
import {
  Skill,
  SkillBottomLine,
  SkillContainer,
  SkillsContainer,
} from "./styles/skills";

export default function SkillsSection() {
  const { skills } = useSkills();
  return (
    <Section id="skills">
      <H2>{m.umiejetnosci_techniczne()}</H2>
      <SkillsContainer>
        {skills.map((skill, index) => (
          <SkillContainer key={index}>
            <h3 className="opacity-50">{skill.name}</h3>
            <div className="flex flex-wrap gap-2.5">
              {skill.items.map((item, index) => (
                <Skill
                  rel="nofollow noopener noreferrer"
                  href={item.link ? item.link : "#"}
                  key={index}
                  $isLink={item.link ? true : false}
                >
                  <h4>{item.name}</h4>
                  <SkillBottomLine $isLink={item.link ? true : false} />
                </Skill>
              ))}
            </div>
          </SkillContainer>
        ))}
      </SkillsContainer>
    </Section>
  );
}
