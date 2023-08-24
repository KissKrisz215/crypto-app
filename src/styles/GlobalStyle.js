import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
        background-color: ${(props) => props.theme.secondary};
    }
    *{
        color: ${(props) => props.theme.primary};
        font-family: "Poppins";
        font-size: 23px;
        font-weight: 500;
        font-style: normal;
    }
`;
