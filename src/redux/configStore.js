import { configureStore } from '@reduxjs/toolkit'
import authSlide from './authSlide'
import nguoiDungSlide from './nguoiDungSlide'

export const store = configureStore({
  reducer: {
    authSlide,
    nguoiDungSlide
  },
})