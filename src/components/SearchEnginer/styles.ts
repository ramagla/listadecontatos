import { styled } from 'styled-components'
import variables from '../../globalStyles/variables'

export const SearchStyle = styled.div`
  input {
    width: 100%;
    border-radius: 7px;
    margin-top: 5px;
    color: ${variables.sidebarColor};
    outline: none;
    border: ${variables.mainSectionColor} solid 0.001px;
    padding: 8px 8px;
    background-color: transparent;
  }
  ::-webkit-input-placeholder {
    color: ${variables.sidebarColor};
  }
  ::-ms-input-placeholder {
    color: ${variables.sidebarColor};
  }
`
