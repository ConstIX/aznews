import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type TypeBlog = {
   id: string,
   pubDate: string,
   image_url: any,
   title: string,
   description: string
}
interface InterfaceBlog {
   blog: TypeBlog[],
   status: string
}

export const fetchBlog = createAsyncThunk('pizza/fetchBlogStatus', async (params: Record<string, string>) => {
   const { newsSearch, page } = params
   const res = await axios.get(`https://646d04c77b42c06c3b2c6d6e.mockapi.io/blog?page=${page}&limit=2&${newsSearch}`)
   return res.data as TypeBlog[]
})


const initialState: InterfaceBlog = {
   blog: [],
   status: 'loading'
}

export const blogSlice = createSlice({
   name: 'blog',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchBlog.pending, (state) => {
            state.status = 'loading'
            state.blog = []
         })
         .addCase(fetchBlog.fulfilled, (state, action) => {
            state.blog = action.payload
            state.status = 'success'
         })
         .addCase(fetchBlog.rejected, (state) => {
            state.status = 'erorr'
            state.blog = []
         })
   },
})

export default blogSlice.reducer