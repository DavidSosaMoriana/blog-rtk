import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
    {
        id: '1',
        title: 'Learning redux toolkit',
        content: "I've heard good things",
    },
    {
        id: '2',
        title: 'Slices...',
        content: 'The more I say slice, the more I want pizza.',
    },
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,   
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    },
});

//Exportamos esta función para no tener que cambiar el estado de cada post en los diferentes componentes
export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer;
