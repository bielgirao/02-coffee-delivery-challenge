import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    body {
        margin: 0 auto;
        background: ${props => props.theme['background']};
    }

    :focus {
        outline: 0;
    }
    
    button {
        border: 0
    }
    
    h1, h2, h3, h4, h5 {
        font-family: 'Baloo 2', sans-serif;
        line-height: ${props => props.theme['lineHeight-normal']};
        color: ${props => props.theme['base-subtitle']};
    }
    
    h1 {
        font-size: 2.5rem;
        font-weight: 800;
        color: ${props => props.theme['base-title']};
    }

    h2 {
        font-size: 2rem;
        font-weight: 800;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 800;
    }

    h4 {
        font-size: 1.25rem;
        font-weight: 700;
    }
    
    h5 {
        font-size: 1.125rem;
        font-weight: 700;
    }
    
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`