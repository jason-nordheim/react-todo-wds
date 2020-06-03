import React, {useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import uuidv4 from 'uuid/v4'


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  /* 
    `useState` accepts an initial value for the state 
    of that component. 

    It returns an array, where the first value is the variable
    holding the value of the state, and the second value is 
    a function we can use to change that state. 
    */ 
  // const [todos, setTodos] = useState([
  //     { id: 1, name: 'todo 1', complete: false},
  //     { id: 2, name: 'todo 2', complete: false},])
  const [todos, setTodos] = useState([])

  /* 
    use ref allows access to other elements/components on the page
    that would normally be outside the scope of the function accessing
    their state/value. 
  */ 
  const todoNameRef = useRef() 

  /* Allows todo to persist between reloads */
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
    
  }, []) // by passing an empty array this will only be called 1 time

  /* save todos as they are created */
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodo = [...todos]
    const todo = newTodo.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodo)
  }

  function handleAddTodo(event) {
    const name = todoNameRef.current.value 
    if (name === '') return // do not create an empty todo 
    console.log(`todo name ${name}`)

    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name, complete: false }] 
    })

    todoNameRef.current.value = null // reset 
  }

  function handlClearTodos(event) {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <> {/*  this is an empty element, which allows us to return 
            multuple elements as a single element */}
      <TodoList todos={todos} toggleTodo={toggleTodo} /> 
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handlClearTodos}>Clear Complete</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
