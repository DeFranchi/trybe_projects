import './App.css';
import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoProvider from './context/TodoProvider';

function App() {
  return (
    <div>
      <TodoProvider>
        <TodoInput /> 
        <TodoList />
      </TodoProvider>
    </div>
  );
  }

export default App;
