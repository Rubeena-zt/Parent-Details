import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getParent = createAsyncThunk(
  "parent/getParent",
  async (arg, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImFjY2Vzc0NvZGVzIjpbIjEiLCIyIiwiMyJdLCJndWlkIjoiOTk0MjA5NzQtZDYzYS00OGM4LTkyZjktNjZlZjZjZTQxZmUwIiwicm9sZSI6IjAiLCJyZ24iOjAsImRldmljZUlkIjoiMTAwMDEiLCJpZCI6MCwiaXNzIjoiWmFlZW0iLCJpYXQiOjE2ODEzMDIxODMsImV4cCI6MTY4Mzg5NDE4M30.XI4vyEZzcV766r1loNwCa7_AUHpDw4IYPFPhqGn1tVU",
          "Content-Type": "application/json",
          "API-KEY":"zaeemkey1",
        },
      };
      const { data } = await axios.get("http://18.217.209.61:5438/apis/v1/parents?", config);
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
const parentSlice = createSlice({
  name: "parent",
  initialState: {
    data: [],
    isSuccess: false,
    message: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getParent.pending]:(state,{payload})=>{
        state.loading=true;
    },
    [getParent.fulfilled]:(state,{payload})=>{
        state.loading=false;
        state.data=payload;
        state.isSuccess=true
    },
    [getParent.rejected]:(state,{payload})=>{
        state.loading=false;
        state.message=payload;
        state.isSuccess=false
    },
  },
});

export default parentSlice;
