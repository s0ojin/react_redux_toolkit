import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "sujin" },
  { id: 1, name: "hongdoo" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
