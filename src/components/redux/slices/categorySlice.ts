import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type TypeCategory = {
   id: string,
   image_url: any,
   title: string,
   content: string
}
interface InterfaceCategory {
   category: TypeCategory[],
   status: string
}

export const fetchCategory = createAsyncThunk('category/fetchCategoryStatus', async (params: Record<string, string>) => {
   const { category, categoryPage } = params
   const res = await axios.get(`https://6478e0e5362560649a2e9596.mockapi.io/catnews?page=${categoryPage}&limit=4&${category}`)
   return res.data as TypeCategory[]
})


const initialState: InterfaceCategory = {
   category: [],
   status: 'loading'
}

export const categorySlice = createSlice({
   name: 'blog',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchCategory.pending, (state) => {
            state.status = 'loading'
            state.category = []
         })
         .addCase(fetchCategory.fulfilled, (state, action) => {
            state.category = action.payload
            state.status = 'success'
         })
         .addCase(fetchCategory.rejected, (state) => {
            state.status = 'erorr'
            state.category = []
         })
   },
})

export default categorySlice.reducer