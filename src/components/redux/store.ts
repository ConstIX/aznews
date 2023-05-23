import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import rightNewsReducer from './slices/rightNewsSlice'

export const store = configureStore({
   reducer: {
      rightNewsReducer
   },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// https://newsdata.io/api/1/news?country=uz&apikey=pub_225990e2bfdf029519a51c8174634c7ab512e&q=%D0%BF%D1%83%D0%BB