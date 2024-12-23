import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: number;
  margin?: string;
  height?: string;
  grow?: number;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${(props) => props.direction || "none"};
  flex-wrap: ${(props) => props.wrap || "none"};
  justify-content: ${(props) => props.justify || "none"};
  align-items: ${(props) => props.align || "none"};
  gap: ${(props) => props.gap || "none"}px;
  flex-grow: ${(props) => props.grow || "none"};

  height: ${(props) => props.height || "100%"};
`;
