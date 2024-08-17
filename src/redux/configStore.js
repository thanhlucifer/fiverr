import { configureStore } from '@reduxjs/toolkit'
import authSlide from './authSlide'
import nguoiDungSlide from './nguoiDungSlide'
import skillSlice from './skillSlice'

export const store = configureStore({
  reducer: {
    authSlide,
    nguoiDungSlide,
    skillSlice
  },
})