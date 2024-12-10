import styled from "styled-components"
import { Thems } from "../styles/Thems"

export const Logo = () => {
    return (
        <StyledLogo>
            'So3'
        </StyledLogo>
    )
} 

const StyledLogo = styled.a`
    padding: 30px 10px;
    align-self: center;
    font-family: 'Big Shoulders Display', sans-serif;
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 0;
    color: ${Thems.colors.text.title};

    &:hover {
            cursor: pointer;
            border-radius: 20px;
            box-shadow: 1px 1px 15px #20232e32, -1px -1px 15px #545b7837;
            transition: 500ms;
        }

        &:active {
            cursor: pointer;
            background: linear-gradient(145deg, #2e2d2d, #212121);
            color:  #ff0000;
            box-shadow: -1px -5px 15px #41465b, 5px 5px 15px #41465b, inset 5px 5px 10px #212121, inset -5px -5px 10px #212121;
            transition: 1000ms;
        }
`