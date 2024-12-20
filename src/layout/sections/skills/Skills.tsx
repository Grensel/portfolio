import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SkillCard } from "./skillCard/SkillCard";
import { thems } from "../../../styles/Thems";

export const Skills = () => {
  return (
    <StyledSkills>
      <FlexWrapper justify={"center"} wrap={"wrap"} gap={"60px 8px"}>
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
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  padding: 100px 50px;
`;
