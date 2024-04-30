import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FilterState = {
  searchTerm: string
}

const initialState: FilterState = {
  searchTerm: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    }
  }
})

export const { changeTerm } = filterSlice.actions
export default filterSlice.reducer
