import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { nguoiDungService } from '../service/nguoiDung';

export const getValueUserApi = createAsyncThunk('nguoiDung/getValueUserApi', async (_,thunkAPI) => {
    const resolve = await nguoiDungService.getListUser();
    console.log(resolve)
    return resolve.data.content
})






const initialState = {
    listNguoiDung: [],
}

const nguoiDungSlide = createSlice({
  name: 'nguoiDung',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getValueUserApi.fulfilled, (state, action) => {
        console.log(action)
        state.listNguoiDung = action.payload
        
    })
  }
});

export const {} = nguoiDungSlide.actions

export default nguoiDungSlide.reducer