import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type TypeRightNews = {
   image_url: string,
   link: string,
   title: string
}
interface InterfaceRightNews {
   rightNews: TypeRightNews[],
   status: string
}

export const fetchRightNews = createAsyncThunk('pizza/NewsStatus', async () => {
   const res = await axios.get(`https://newsdata.io/api/1/news?country=uz&apikey=pub_225990e2bfdf029519a51c8174634c7ab512e`)
   const data = res.data.results
   return data.slice(data.length - 6) as TypeRightNews[]
})


const initialState: InterfaceRightNews = {
   rightNews: [],
   status: 'loading'
}

export const rightNewsSlice = createSlice({
   name: 'news',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchRightNews.pending, (state) => {
            state.status = 'loading'
            state.rightNews = []
         })
         .addCase(fetchRightNews.fulfilled, (state, action) => {
            state.rightNews = action.payload
            state.status = 'success'
         })
         .addCase(fetchRightNews.rejected, (state) => {
            state.status = 'erorr'
            state.rightNews = []
         })
   },
})

export default rightNewsSlice.reducer