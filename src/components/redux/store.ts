import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import rightNewsReducer from './slices/rightNewsSlice'
import blogReducer from './slices/blogSlice'
import filterReducer from './slices/filterSlice'
import videoReducer from './slices/videoSlice'
import categoryReducer from './slices/categorySlice'

export const store = configureStore({
   reducer: {
      rightNewsReducer,
      blogReducer,
      filterReducer,
      videoReducer,
      categoryReducer
   },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

