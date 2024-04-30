import { useSelector } from 'react-redux'
import { Contact } from '../../components/Contact'
import { MainSectionStyle } from './styles'
import { RootReducer } from '../../store'

export const MainSection = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)
  const { searchTerm } = useSelector((state: RootReducer) => state.filter)

  const filterContacts = () => {
    return items.filter(
      (item) => item.name.toLowerCase().search(searchTerm.toLowerCase()) >= 0
    )
  }

  return (
    <MainSectionStyle>
      <ul>
        {filterContacts().map((c) => (
          <li key={c.id}>
            <Contact id={c.id} name={c.name} email={c.email} phone={c.phone} />
          </li>
        ))}
      </ul>
    </MainSectionStyle>
  )
}
