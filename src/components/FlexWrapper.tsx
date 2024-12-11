import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    margin?: string
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${(props) => props.direction || "row"};
    flex-wrap: ${(props) => props.wrap || "nowrap"};
    justify-content: ${(props) => props.justify || "flex-start"};
    align-items: ${(props) => props.align || "stretch"};
    gap: ${(props) => props.gap || "none"};
    margin: ${(props) => props.margin || "none"};
`;