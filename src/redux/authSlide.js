import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage } from '../util/util';

const initialState = {
    infoUser: getLocalStorage('user')
}

const authSlide = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getInfoUSer: (state, action) => {
       state.infoUser = action.payload
    }
  }
});

export const {getInfoUSer} = authSlide.actions

export default authSlide.reducer