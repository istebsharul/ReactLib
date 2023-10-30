import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';
import { useState } from "react";

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [isTodoEditable, setIsTodoEditable] = useState(false);


    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <div className="text-white flex">
                            <input
                                type="text"
                                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? 'border-black/10 px-2' : 'border-transparent'
                                    } ${todo.completed ? 'line-through' : ''}`}
                                value={todo.text}
                                readOnly={!isTodoEditable}
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <button
                                className="w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                                onClick={() => dispatch(updateTodo(todo.id))}
                            >
                                {isTodoEditable ? '📁' : '✏️'}
                            </button>
                            <button
                                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                                onClick={() => dispatch(removeTodo(todo.id))}
                            >
                                ❌
                            </button>
                        </div>
                    </li >
                ))
                }
            </ul >
        </>
    );
}

export default Todos;



