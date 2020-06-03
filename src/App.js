import React, {useState} from 'react';
import TodoList from './TodoList'

function App() {
  /* 
    `useState` accepts an initial value for the state 
    of that component. 

    It returns an array, where the first value is the variable
    holding the value of the state, and the second value is 
    a function we can use to change that state. 
    */ 
  const [todos, setTodos] = useState(['todo 1', 'todo 2'])
  return (
    <> {/*  this is an empty element, which allows us to return 
            multuple elements as a single element */}
      <TodoList todos={todos} /> 
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
