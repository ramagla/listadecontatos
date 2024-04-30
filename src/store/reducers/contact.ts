import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContactClass from '../../models/Contact'

type ContactsState = {
  items: ContactClass[]
}

const initialState: ContactsState = {
  items: [
    {
      id: 1,
      name: 'Rafael Almeida',
      email: 'dealmeida.silva@hotmail.com',
      phone: '(11) 92085-0975'
    },
    {
      id: 2,
      name: 'Fulano da Silva Sauro',
      email: 'saurodasilva@silvasauro.com',
      phone: '(14) 2519-4526'
    }
  ]
}
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    delete1: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      )
    },
    edit: (state, action: PayloadAction<ContactClass>) => {
      const contactIndex = state.items.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload
      }
    },
    register: (state, action: PayloadAction<ContactClass>) => {
      const existingContact = state.items.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )
      if (existingContact) {
        alert('Contact already registered')
      } else {
        state.items.push(action.payload)
      }
    }
  }
})

export const { delete1, edit, register } = contactsSlice.actions
export default contactsSlice.reducer
