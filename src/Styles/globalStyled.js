import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body, html{ 
        font-family: 'Open Sans Condensed', sans-serif;
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Montagu Slab', serif;
    }

    :root{
        --color-primary: #403CAA;
        --color-secondary: #11995E;

        --gray-100: #333333;
        --gray-50: #999999;
        --gray-0: #F5F5F5;

        --heading1: 32px;
        --heading2: 28px;
        --heading3: 22px;
        --heading4: 18px;
        --headline: 16px;
        --body: 14px;
        --caption: 12px;

    }

`;
