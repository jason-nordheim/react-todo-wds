import React, { useState } from 'react'

export default function TodoList() {
    /* 
        `useState` accepts an initial value for the state 
        of that component. 

        It returns an array, where the first value is the variable
        holding the value of the state, and the second value is 
        a function we can use to change that state. 
    */ 
    const [todos, setTodos] = useState([])
    return (
        <div>
            hello world
        </div>
    )
}
