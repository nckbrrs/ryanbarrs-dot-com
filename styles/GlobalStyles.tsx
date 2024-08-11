import { createGlobalStyle } from 'styled-components'
import { GlobalStyles as BaseStyles } from 'twin.macro'

// This method of specifying global styles was recommended/provided by
// the docs of twin.macro, the library I use for combining tailwind with styled components
const CustomStyles = createGlobalStyle`
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
  
  body {

    background: linear-gradient(
          rgba(0, 0, 0, 0.2), 
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 1)
        ), url('background2.jpg');
    
    background-size: cover;
    background-attachment: fixed;
    background-position: center;

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
