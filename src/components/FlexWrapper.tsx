import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    gap?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${(props) => props.direction || "row"};
    flex-wrap: ${(props) => props.wrap || "nowrap"};
    justify-content: ${(props) => props.justify || "center"};
    align-items: ${(props) => props.align || "stretch"};
    gap: ${(props) => props.gap || "none"};

    max-width: 1440px;
    margin: 0 auto;
`;