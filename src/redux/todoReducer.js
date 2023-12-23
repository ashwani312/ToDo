import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            title: "play cricket",
            compleated: false
        },
        {
            title: "Go to Gym",
            compleated: false
        },
        {
            title: "Read book",
            compleated: true
        },
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            const item = state.todos.find(todo => todo.title === action.payload.title);
            if (item) {

            } else {
                state.todos.unshift(action.payload);
            }
        },
        deleteToDo: (state, action) => {

            state.todos = state.todos.filter(todo => todo.title !== action.payload.title);
        },
        editTheToDo: (state, action) => {

        },
        resetToDo: (state, action) => {
            state.todos = [];
        },
        updateTheToDo: (state, action) => {
            const index = state.todos.findIndex((todo) => todo.title === action.payload);
            if (index >= 0) {
                state.todos[index].compleated = !state.todos[index].compleated;
            }
            const findTodo = state.todos.find((todo) => todo.title === action.payload);
            const filterTheItems = state.todos.filter((todo) => todo !== findTodo);
            state.todos = [...filterTheItems, findTodo ];
        },

    }
});

export const { addToDo, deleteToDo, resetToDo, editTheToDo, updateTheToDo } = todoSlice.actions;


export default todoSlice.reducer;