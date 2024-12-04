import { createGlobalStyle } from "styled-components";
import { Thems } from "./Thems";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
    }

    .body {
        max-width: 100%;
        margin: 0 auto;
        color: ${Thems.colors.text}
    }

    a {
    cursor: pointer;
    text-decoration: none;
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

section {
    padding: 35px 0;
}

section:nth-of-type(odd) {
    background-color: ${Thems.colors.primary};
}

section:nth-of-type(even) {
    background-color: ${Thems.colors.second};
}

`;