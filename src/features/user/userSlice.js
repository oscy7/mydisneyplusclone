import { createSlice } from '@reduxjs/toolkit';
// When the app loads the initate state of user is empty/blank
const initialState = {
    name: '',
    email: '',
    photo: '',

}; 
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setUserLoginDetails: (state, action) => {
        //when user logins, remember the following stuff:
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.photo = action.payload.photo;
      },
  
      setSignOutState: (state) => {
        //when we sign out - set the info we remembered to null.
        state.name = null;
        state.email = null;
        state.photo = null;
      },
    },
  });
export const { setUserLoginDetails, setSignOutState} = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;


export default userSlice.reducer;