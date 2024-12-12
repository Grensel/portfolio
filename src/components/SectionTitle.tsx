import styled, { css } from "styled-components";
import { Thems } from "../styles/Thems";

type TitleComponentType = {
    color?: "second"
}
export const Title = styled.h2<TitleComponentType>`
    color: ${Thems.colors.text.title};

    ${props => props.color === "second" && css<TitleComponentType>`
        color: ${Thems.colors.primary};
    `}
`