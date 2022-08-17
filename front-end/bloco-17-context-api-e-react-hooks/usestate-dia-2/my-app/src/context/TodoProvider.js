import React, {useState}from "react";
import TodoConText from "./TodoContext";

function TodoProvider({children}){
    const [todo, setTodo] = useState([]);
  
  const addTodo = (newTodo) => {
    setTodo(todo.concat(newTodo))

  }
  return(
    <div>
        <TodoConText.Provider value={{todo, addTodo}}> 
        {children}
        </TodoConText.Provider>
    </div>
  )
}

export default TodoProvider;