import { createSlice } from "@reduxjs/toolkit";
const initialState = { users: [] };

export const Users = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser: (state, action) => {
      const data = action.payload;
      state.users = data.map((el) => ({
        _id: el._id,
        name: el.name,
        date_birth: el.date_birth,
        img: el.img,
      }));
    },
    clearState: () => initialState,
  },
});

export const { getUser, clearState } = Users.actions;
export default Users.reducer;
