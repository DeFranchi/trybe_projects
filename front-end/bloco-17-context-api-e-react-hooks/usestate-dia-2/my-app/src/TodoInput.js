import React, { useState } from "react";

function TodoInput({addTodo}){
    const [newTodo, setNewTodo] = useState("");
    const HandleChange = ({target}) => {
        console.log(setNewTodo(target.value))
    }
    const handleClick = () => {
        setNewTodo(addTodo);
        setNewTodo("");
    }

    return(
        <div>
        <label htmlFor="addTodo">
            Insira uma Tarefa:
            <input
                value={newTodo}
                type='text'
                onChange={HandleChange}
                name='NewTodo'
                id="NewTodo"
            />
        </label>
        <button 
        onClick={handleClick}
        >Add tarefa</button>
    </div>
    )
}
export default TodoInput