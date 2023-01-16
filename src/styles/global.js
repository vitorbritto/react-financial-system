import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        background-color: #f4f4f4;
    }

    #root {
        width: 100%;
    }
`;

export default Global;
