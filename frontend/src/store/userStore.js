import { createSlice } from "@reduxjs/toolkit";

export const Users = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    getUser: (state, action) => {
      const data = action.payload;
      data.forEach((el) => {
        state.users.push({
          _id: el._id,
          name: el.name,
          date_birth: el.date_birth,
          img: el.img,
        });
      });
    },
  },
});

export const { getUser } = Users.actions;
export default Users.reducer;
