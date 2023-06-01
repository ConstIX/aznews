import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type TypeRightNews = {
   id: string,
   image_url: string,
   title: string,
   pubDate: string
}
interface InterfaceRightNews {
   rightNews: TypeRightNews[],
   status: string
}

export const fetchRightNews = createAsyncThunk('news/NewsStatus', async () => {
   const res = await axios.get(`https://646d04c77b42c06c3b2c6d6e.mockapi.io/home`)
   const data = res.data
   return data as TypeRightNews[]
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