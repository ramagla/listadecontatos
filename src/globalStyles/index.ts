import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    list-style: none;
  }
`

export const GeneralContainer = styled.div`
  display: grid;
  grid-template-columns: 280px auto;
`

export default GlobalStyle
