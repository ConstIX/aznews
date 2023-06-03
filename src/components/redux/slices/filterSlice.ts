import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InterfaceFilter {
   categoryId: number,
   categoryPage: number,
   search: string,
   page: number
}

const initialState: InterfaceFilter = {
   categoryId: 0,
   categoryPage: 1,
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
      },
      setCategorry(state, action: PayloadAction<number>) {
         state.categoryId = action.payload
      },
      setCategorryPage(state, action: PayloadAction<number>) {
         state.categoryPage = action.payload
      }
   },
})

export const { setSearch, setPage, setCategorry, setCategorryPage } = filterSlice.actions

export default filterSlice.reducer