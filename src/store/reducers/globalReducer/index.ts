import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Contact, ContactList } from '../../../utils/Types'

const fakeContacts: ContactList = {
  list: [
    {
      id: 'contact_1',
      name: 'Maria do Bairro',
      tel: '00_00000-0000',
      email: 'teste@email.com'
    },
    {
      id: 'contact_2',
      name: 'Maria José',
      tel: '00_00000-0000',
      email: 'teste@email.com'
    },
    {
      id: 'contact_3',
      name: 'Maria de Souza',
      tel: '00_00000-0000',
      email: 'teste@email.com'
    },
    {
      id: 'contact_4',
      name: 'Marcio dos Campos',
      tel: '00_00000-0000',
      email: 'teste@email.com'
    },
    {
      id: 'contact_5',
      name: 'Marcio dos Campos 2',
      tel: '00_00000-0000',
      email: 'teste@email.com'
    },
    {
      id: 'contact_6',
      name: 'Maria dos Campos 2',
      tel: '00_00000-0000',
      email: 'teste@email.com'
    },
    {
      id: 'contact_7',
      name: 'Mario Menezes',
      tel: '00_00000-0000',
      email: 'teste@email.com'
    }
  ]
}

const initialState: ContactList = {
  list: []
}

const globalSlice = createSlice({
  name: 'contactList',
  initialState: fakeContacts,
  reducers: {
    logToConsole: (state, action: PayloadAction<Contact>) => {
      console.log(state)
      console.log(action)
    },
    addContact: (state, action: PayloadAction<Contact>) => {
      state.list = [...state.list, action.payload]
    }
  }
})

export const { logToConsole, addContact } = globalSlice.actions
export default globalSlice.reducer
