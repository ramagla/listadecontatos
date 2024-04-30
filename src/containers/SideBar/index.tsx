import {
  Branding,
  StatementRegistration,
  StatementSearch
} from '../../components/Branding'
import { SearchBar } from '../../components/SearchEnginer'
import { RegisterContact } from '../../components/RegisterContacts'
import { SidebarStyle, SearchRegisterContainer } from './styles'

const Sidebar = () => {
  return (
    <>
      <SidebarStyle>
        <main>
          <SearchRegisterContainer>
            <StatementSearch />
            <SearchBar />
          </SearchRegisterContainer>
          <SearchRegisterContainer>
            <StatementRegistration />
            <RegisterContact />
          </SearchRegisterContainer>
        </main>
        <Branding />
      </SidebarStyle>
    </>
  )
}

export default Sidebar
