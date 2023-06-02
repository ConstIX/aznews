import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type TypeVideo = {
   id: string,
   video_url: string,
   title: string
}
interface InterfaceVideo {
   video: TypeVideo[],
   status: string
}

export const fetchVideo = createAsyncThunk('video/fetchVideoStatus', async () => {
   const res = await axios.get(`https://6478e0e5362560649a2e9596.mockapi.io/video`)
   return res.data as TypeVideo[]
})


const initialState: InterfaceVideo = {
   video: [],
   status: 'loading'
}

export const videoSlice = createSlice({
   name: 'video',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchVideo.pending, (state) => {
            state.status = 'loading'
            state.video = []
         })
         .addCase(fetchVideo.fulfilled, (state, action) => {
            state.video = action.payload
            state.status = 'success'
         })
         .addCase(fetchVideo.rejected, (state) => {
            state.status = 'erorr'
            state.video = []
         })
   },
})

export default videoSlice.reducer