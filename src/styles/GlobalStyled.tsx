import { createGlobalStyle } from "styled-components";
import { Thems } from "./Thems";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .body {
        margin: 0 auto;
        color: ${Thems.colors.text}
    }

    h1 {
        color: ${Thems.colors.text.title};
        font-family: 'Epilogue', sans-serif;
        font-weight: 800;
        font-size: 150px;
        line-height: 170px;
        @media (max-width: 1440px){
        font-size: calc(35px + 115*(100vw/1440));
        line-height: calc(50px + 120*(100vw/1440));
        }

    }

    h3 {
        font-family: 'Epilogue', sans-serif;
        font-size: 140px;
        font-weight: 400;
        line-height: 130px;
        color: ${Thems.colors.text.title};

        @media ${Thems.media.tablet} {
            font-size: 90px;
            line-height: 105px;
        }
    }

    a {
    cursor: pointer;
    text-decoration: none;
    color: ${Thems.colors.text.title};
    font-family: 'Epilogue', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}

a:hover {
}

ul {
    list-style: none;
}

button {
    background-color: unset;
    border: transparent;
    border-radius: 5px;
    cursor: pointer;
}

section:nth-of-type(odd) {
    background-color: ${Thems.colors.primary};
}

section:nth-of-type(even) {
    background-color: ${Thems.colors.second};
}

`;