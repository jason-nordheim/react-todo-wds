import React, {useState, useRef } from 'react';
import TodoList from './TodoList'

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

  function handleAddTodo(event) {
    const name = todoNameRef.current.value 
    if (name === '') return // do not create an empty todo 
  }

  return (
    <> {/*  this is an empty element, which allows us to return 
            multuple elements as a single element */}
      <TodoList todos={todos} /> 
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
