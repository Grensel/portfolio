import { createGlobalStyle } from "styled-components";
import { thems } from "./Thems";

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    line-height: 1.2;
  }

  h1 {
    font-family: 'Epilogue', sans-serif;
    font-weight: 400;
    font-size: 120px;
  }

  h2 {
    font-family: 'Epilogue', sans-serif;
    font-weight: 800;
    font-size: 120px;
    line-height: 112.2px;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${thems.colors.text.title};
    font-family: 'Epilogue', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  input {
    font-family: 'Epilogue', sans-serif;
    font-weight: 400;
  }

  textarea {
    font-family: 'Epilogue', sans-serif;
    font-weight: 400;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: transparent;
    cursor: pointer;
  }

  section {
    padding: 150px 0;
  }

  section:nth-of-type(odd) {
    background-color: ${thems.colors.background.primary};
  }

  section:nth-of-type(even) {
    background-color: ${thems.colors.background.second};
  }
`;
