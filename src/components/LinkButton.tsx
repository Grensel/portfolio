import styled, { css } from "styled-components";
import { Thems } from "../styles/Thems";

type LinkButtonPropsType = {
    btnType?: "primary"|"outline"
}

export const LinkButton = styled.a.attrs((props)=>(({
    href: props.href || "#",
})))<LinkButtonPropsType>`
    color: ${Thems.colors.text.title};
    font-family: 'Epilogue', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    ${props => props.btnType === "primary" && css<LinkButtonPropsType>`
        padding: 11px 20px;
        background-color: ${Thems.colors.text.title};
        color: ${Thems.colors.primary};

        &:hover {
            box-shadow: 1px 1px 13px #20232e, -1px -1px 13px #545b78;
            color: #d6d6d6;
            transition: 500ms;
        }

        &:active {
            cursor: pointer;
            background: linear-gradient(145deg, #2e2d2d, #212121);
            box-shadow: -1px -5px 15px #41465b, 5px 5px 15px #41465b, inset 5px 5px 10px #212121, inset -5px -5px 10px #212121;
            transition: 500ms;
        }
    `}

    ${props => props.btnType === "outline" && css<LinkButtonPropsType>`
        padding: 11px 10px;
        color: ${Thems.colors.text.title};
        border-radius: 15px;

        &:hover {
            cursor: pointer;
            box-shadow: inset 4px 4px 6px -5px rgba(0,0,0,0.3), inset -4px -4px 6px -5px rgba(255,255,255,0.8), -0.5px -0.5px 5px rgba(255,255,255,1), 0.5px 0.5px 5px rgba(0,0,0,0.25), 0px 12px 10px -15px rgba(0,0,0,0.15);
            transition: 500ms;
        }

        &:active{
            cursor: pointer;
            box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05);
            transition: 500ms;
        }
    `}
`