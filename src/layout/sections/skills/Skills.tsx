import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SkillCard } from "./skillCard/SkillCard";
import { thems } from "../../../styles/Thems";

export const Skills = () => {
  return (
    <StyledSkills>
      <GridBox>
        <SkillCard
          skillTitle={"React"}
          skillNumber={"01"}
          iconId={"react"}
          fill={`${thems.colors.text.second}`}
          description={
            "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
          }
        />
        <SkillCard
          skillNumber={"02"}
          iconId={"js"}
          fill={`${thems.colors.text.second}`}
          skillTitle={"JavaScript"}
          description={
            "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
          }
        />
        <SkillCard
          skillNumber={"03"}
          iconId={"ts"}
          fill={`${thems.colors.text.second}`}
          skillTitle={"TypeScript"}
          description={
            "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
          }
        />
        <SkillCard
          skillNumber={"04"}
          iconId={"html"}
          fill={`${thems.colors.text.second}`}
          skillTitle={"HTML"}
          description={
            "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
          }
        />
        <SkillCard
          skillNumber={"05"}
          iconId={"githubblack"}
          fill={`${thems.colors.text.second}`}
          skillTitle={"GitHub"}
          description={
            "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
          }
        />
        <SkillCard
          skillNumber={"06"}
          iconId={"scv"}
          fill={`${thems.colors.text.second}`}
          skillTitle={"Styled Components"}
          description={
            "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"
          }
        />
      </GridBox>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  padding: 100px 30px;
  ${FlexWrapper} {
    max-width: 1500px;
  }
`;

const GridBox = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(315px, auto));
  gap: 60px 10px;
`;
