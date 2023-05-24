import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InterfaceFilter {
   search: string,
}

const initialState: InterfaceFilter = {
   search: '',
}

export const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setSearch(state, action: PayloadAction<string>) {
         state.search = action.payload
      }
   },
})

export const { setSearch } = filterSlice.actions

export default filterSlice.reducer