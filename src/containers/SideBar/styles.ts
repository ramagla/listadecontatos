import styled from 'styled-components'
import variables from '../../globalStyles/variables'

export const SidebarStyle = styled.div`
  max-width: 100%;
  height: 100vh;
  background-color: ${variables.sidebarColor};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SearchRegisterContainer = styled.div`
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 15px;
  background-color: ${variables.cardBackgroundColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
