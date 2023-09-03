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
        font-family: Poppins, sans-serif;
        font-size: 22px;
        font-weight: 500;
        font-style: normal;
        ${"" /* border:1px solid red; */}
    }
`;
