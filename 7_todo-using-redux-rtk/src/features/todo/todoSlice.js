import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            if (action.payload.trim().length > 0) {  // checking if input is not Empty
                const todo = {
                    id: nanoid(),
                    text: action.payload
                }
                state.todos.push(todo)
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const todoToUpdate = state.todos.find((todo) => todo.id === action.payload.id)
            // console.log(todoToUpdate.text)
            if (todoToUpdate) {
                todoToUpdate.text = action.payload.text
            }
        },
        toggleComplete: (state, action) => {

        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer