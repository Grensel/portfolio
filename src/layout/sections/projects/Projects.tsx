import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Title } from "../../../components/SectionTitle";
import { Project } from "./projectCard/ProjectCard";
import { Container } from "../../../components/Container";

import ProjectImg1 from "../../../assets/img/image.png";
import ProjectImg2 from "../../../assets/img/image.png";
import ProjectImg3 from "../../../assets/img/image.png";

// const ProjectItem1 = {
//   urlImg: ProjectImg1,
//   projectType: "Mental Health",
//   workType: "A Case Study",
//   projectTitle: "Find Peace in Meditation",
//   projectDiscription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
// }

// const ProjectItem2 = {
//   urlImg: ProjectImg2,
//   projectType: "Fashion Show",
//   workType: "A Case Study",
//   projectTitle: "Enjoy Fashion Shows From Home",
//   projectDiscription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
//   ProjectHref: "#",
// }
// const ProjectItem2 = {
//   urlImg: ProjectImg3,
//   projectType: "Barbeque",
//   workType: "Branding",
//   projectTitle: "Chicken Barbeque Never Goes Wrong",
//   projectDiscription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
//   ProjectHref: "#",

// }

// const projectItems = [ ProjectItem1, ProjectItem2, ProjectItem2,]

export const Projects = () => {
  return (
    <StyledProject>
      <Container>
        <FlexWrapper direction={"column"}>
          <Title>
            MY <br />
            PROJECTS
          </Title>
          <FlexWrapper direction={"column"} gap={"80px"}>
            <Project
              urlImg={ProjectImg1}
              projectType={"Mental Health"}
              workType={"A Case Study"}
              projectTitle={"Find Peace in Meditation"}
              projectDiscription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
              }
              href={"#"}
            />
            <Project
              urlImg={ProjectImg2}
              projectType={"Fashion Show"}
              workType={"A Case Study"}
              projectTitle={"Enjoy Fashion Shows From Home"}
              projectDiscription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
              }
              href={"#"}
            />
            <Project
              urlImg={ProjectImg3}
              projectType={"Barbeque"}
              workType={"Branding"}
              projectTitle={"Chicken Barbeque Never Goes Wrong"}
              projectDiscription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
              }
              href={"#"}
            />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledProject>
  );
};

const StyledProject = styled.section``;
