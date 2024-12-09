import styled from "styled-components";
import sprite from "../assets/img/sprite.svg"

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
            width={props.width} 
            height={props.height}
            viewBox={props.viewBox}
            fill={props.fill || "#000000"}
        >
            <use xlinkHref={ `${sprite}#${props.iconId}` } />
        </StyledSvg>
    )
};

const StyledSvg = styled.svg`
    &:hover {
        fill: red;
    }
`