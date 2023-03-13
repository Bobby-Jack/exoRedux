import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: {all: []},
    reducers : {
        addUser : (state, action) => {state.all = [...state.all, action.payload]}
    }
})

export const {addUser} = usersSlice.actions;
export default usersSlice.reducer