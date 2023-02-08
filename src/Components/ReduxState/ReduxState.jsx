import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    current: null
}

const Reduxstate = createSlice({
  name: "users",
  initialState,
  reducers: {
    LoginUser: (state, actions) =>{
        state.current = actions.payload
    },
    LogoutUser: (state) =>{
        state.current = null;
    },
  }
});

export const {LoginUser} = Reduxstate.actions

export default Reduxstate.reducer