import './App.css';
import React, { useLayoutEffect } from 'react';

const textJX = "Lista de tarefas"
const elementh1 = <h1>{textJX}</h1>
const task = (value) => {
  return (
   
    <li>{value}</li>

  )
}
const toDo = ['Estudar', 'comer', 'passar com o Bidu', 'ver a aula', 'dormir']

class App extends React.Component {
  render() {
    return (
      <><><div className='app'>{elementh1}</div></>
      <><ul>{toDo.map(element => task(element))}</ul></></>
      
    )
  }
}
export default App;

