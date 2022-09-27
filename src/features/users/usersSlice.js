import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '0', name: 'Jim Morrison' },
    { id: '1', name: 'Kurt Cobain' },
    { id: '2', name: 'Amy Winehouse' },
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducer: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
