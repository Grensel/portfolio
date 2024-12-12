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
            box-shadow: 1px 1px 15px #a1a2a530, 1px 1px 15px #a1a4ad37;
            transition: 500ms;
        }

        &:active {
            cursor: pointer;
            background: linear-gradient(145deg, #2e2d2d, #212121);
            color:  #ff0000;
            transition: 1000ms;
        }
`