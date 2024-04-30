import { useDispatch, useSelector } from 'react-redux'
import { SearchStyle } from './styles'
import { changeTerm } from '../../store/reducers/filter'
import { RootReducer } from '../../store'

export const SearchBar = () => {
  const dispatch = useDispatch()
  const { searchTerm } = useSelector((state: RootReducer) => state.filter)
  return (
    <SearchStyle>
      <input
        type="text"
        placeholder="Quem você está procurando?"
        value={searchTerm}
        onChange={(event) => dispatch(changeTerm(event.target.value))}
      />
    </SearchStyle>
  )
}
