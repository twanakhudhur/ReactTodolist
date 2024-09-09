import { createContext, useState, useContext } from 'react';

const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const toggleTodo = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed' && todo.completed) return true;
    if (filter === 'active' && !todo.completed) return true;
    return false;
  });

  return (
    <ToDoContext.Provider value={{ todos, setTodos, filter, setFilter, filteredTodos, toggleTodo }}>
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDoContext = () => useContext(ToDoContext);