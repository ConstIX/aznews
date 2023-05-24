import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type TypeBlog = {
   link: string,
   pubDate: string,
   image_url: any,
   title: string,
   description: string
}
interface InterfaceBlog {
   blog: TypeBlog[],
   status: string
}

export const fetchBlog = createAsyncThunk('pizza/fetchBlogStatus', async () => {
   const res = await axios.get(`https://newsdata.io/api/1/news?country=uz&apikey=pub_225990e2bfdf029519a51c8174634c7ab512e&q=%D0%BF%D1%83%D0%BB`)
   const data = res.data.results
   return data
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