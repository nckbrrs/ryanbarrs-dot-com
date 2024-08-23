import { createGlobalStyle } from 'styled-components'
import { GlobalStyles as BaseStyles } from 'twin.macro'

// This method of specifying global styles was recommended/provided by
// the docs of twin.macro, the library I use for combining tailwind with styled components
const CustomStyles = createGlobalStyle`
  @font-face {
    font-family: "CanelaDeck-Bold";
    src: url('/CanelaDeck-Bold.otf');
  }

  @font-face {
    font-family: "CanelaDeck";
    src: url('/CanelaDeck.otf');
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(
          rgba(0, 0, 0, 0.2), 
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 1)
        ), url('background.jpg');
    
    background-size: cover;
    background-position: top;

    z-index: -1;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
