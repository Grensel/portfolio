import styled from "styled-components";
import sprite from "../assets/img/sprite.svg"
import { Thems } from "../styles/Thems";

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    fill?: string;
};

export const Icon = (props: IconPropsType) => {
    return (
        <StyledSvg
            width={props.width || "50"} 
            height={props.height || "50"}
            viewBox={props.viewBox || "0 0 50 50"}
            fill={props.fill || `${Thems.colors.second}`}
        >
            <use xlinkHref={ `${sprite}#${props.iconId}` } />
        </StyledSvg>
    )
};

export const StyledSvg = styled.svg`
`