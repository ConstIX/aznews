import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InterfaceCart {
   value: number,
}
const initialState: InterfaceCart = {
   value: 0,
}

export const firstSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addCart(state, action: PayloadAction<number>) {
         state.value = action.payload
      }
   }
})


export const { addCart } = firstSlice.actions

export default firstSlice.reducer