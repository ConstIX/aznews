import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InterfaceFilter {
   search: string,
   page: number
}

const initialState: InterfaceFilter = {
   search: '',
   page: 1
}

export const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setSearch(state, action: PayloadAction<string>) {
         state.search = action.payload
      },
      setPage(state, action: PayloadAction<number>) {
         state.page = action.payload
      }
   },
})

export const { setSearch, setPage } = filterSlice.actions

export default filterSlice.reducer