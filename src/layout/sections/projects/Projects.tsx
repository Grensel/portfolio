import React from "react";
import { S } from "./Projects_Styled";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Title } from "../../../components/SectionTitle";
import { Project } from "./projectCard/ProjectCard";
import { Container } from "../../../components/Container";

import ProjectImg1 from "../../../assets/img/image.png";
import ProjectImg2 from "../../../assets/img/image.png";
import ProjectImg3 from "../../../assets/img/image.png";

const projectData = [
  {
    urlImg: ProjectImg1,
    projectType: "Mental Health",
    workType: "A Case Study",
    projectTitle: "Find Peace in Meditation",
    projectDiscription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    href: "#",
  },
  {
    urlImg: ProjectImg2,
    projectType: "Fashion Show",
    workType: "A Case Study",
    projectTitle: "Enjoy Fashion Shows From Home",
    projectDiscription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    href: "#",
  },
  {
    urlImg: ProjectImg3,
    projectType: "Barbeque",
    workType: "Branding",
    projectTitle: "Chicken Barbeque Never Goes Wrong",
    projectDiscription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    href: "#",
  },
];

export const Projects: React.FC = () => {
  return (
    <S.Project>
      <Container>
        <FlexWrapper direction={"column"}>
          <Title>
            MY <br />
            PROJECTS
          </Title>
          <FlexWrapper direction={"column"} gap={80}>
            {projectData.map((p, index) => {
              return (
                <Project
                  key={index}
                  urlImg={p.urlImg}
                  projectType={p.projectType}
                  workType={p.workType}
                  projectTitle={p.projectTitle}
                  projectDiscription={p.projectDiscription}
                  href={p.href}
                />
              );
            })}
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.Project>
  );
};
