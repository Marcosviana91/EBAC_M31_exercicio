import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Contact, ContactList } from '../../../utils/Types'

const initialState: ContactList = {
  list: []
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    logToConsole: (state, action: PayloadAction<Contact>) => {
      console.log(state)
      console.log(action)
    }
  }
})

export const { logToConsole } = globalSlice.actions
export default globalSlice.reducer
