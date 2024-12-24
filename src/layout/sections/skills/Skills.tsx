import { SkillCard } from "./skillCard/SkillCard";
import { thems } from "../../../styles/Thems";
import React from "react";
import { S } from "./Skills_Styles";
import { Fade } from "react-awesome-reveal";

const SkillData = [
  {
    skillNumber: "01",
    skillTitle: "React",
    iconId: "react",
    fill: `${thems.colors.text.second}`,
    description:
      "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue",
  },
  {
    skillNumber: "02",
    skillTitle: "JavaScript",
    iconId: "js",
    fill: `${thems.colors.text.second}`,
    description:
      "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue",
  },
  {
    skillNumber: "03",
    skillTitle: "TypeScript",
    iconId: "ts",
    fill: `${thems.colors.text.second}`,
    description:
      "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue",
  },
  {
    skillNumber: "04",
    skillTitle: "HTML",
    iconId: "html",
    fill: `${thems.colors.text.second}`,
    description:
      "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue",
  },
  {
    skillNumber: "05",
    skillTitle: "GitHub",
    iconId: "githubblack",
    fill: `${thems.colors.text.second}`,
    description:
      "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue",
  },
  {
    skillNumber: "06",
    skillTitle: "Styled Components",
    iconId: "scv",
    fill: `${thems.colors.text.second}`,
    description:
      "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue",
  },
];

export const Skills: React.FC = () => {
  return (
    <S.Skills id={"skills"}>
      <S.GridBox>
        <Fade cascade={true} damping={0.1}>
          {SkillData.map((s, index) => {
            return (
              <SkillCard
                key={index}
                skillNumber={s.skillNumber}
                iconId={s.iconId}
                skillTitle={s.skillTitle}
                fill={s.fill}
                description={s.description}
              />
            );
          })}
        </Fade>
      </S.GridBox>
    </S.Skills>
  );
};
