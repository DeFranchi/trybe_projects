import React, { useContext }from "react";
import TodoConText from "./context/TodoContext";

// receber props num component funcional === receber por parametro
function TodoList(){
    const {todo} = useContext(TodoConText)
    return(
        
            <ul>
                {todo.map((todo, index) => <li key={index}>{todo}</li> )}
              
            </ul>
           
    ); 
}

export default TodoList