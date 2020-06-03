import React from 'react';
import TodoList from './TodoList'

function App() {
  return (
    <> {/*  this is an empty element, which allows us to return 
            multuple elements as a single element */}
      <TodoList /> 
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
