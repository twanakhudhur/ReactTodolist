// import { createContext, useState, useContext } from 'react';

// const ToDoContext = createContext();

// export const ToDoProvider = ({ children }) => {
//   const [todos, setTodos] = useState([]);
//   const [filter, setFilter] = useState('all');

//   const toggleTodo = id => {
//     setTodos(prevTodos =>
//       prevTodos.map(todo => 
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const filteredTodos = todos.filter(todo => {
//     if (filter === 'all') return true;
//     if (filter === 'completed' && todo.completed) return true;
//     if (filter === 'active' && !todo.completed) return true;
//     return false;
//   });

//   return (
//     <ToDoContext.Provider value={{ todos, setTodos, filter, setFilter, filteredTodos, toggleTodo }}>
//       {children}
//     </ToDoContext.Provider>
//   );
// };

// export const useToDoContext = () => useContext(ToDoContext);

/////////////////////////////////////////////////////////////////////////
import React, { createContext, useContext, useReducer } from 'react';

const ToDoContext = createContext();

const initialState = {
  todos: [],
  filter: 'all',
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [{ id: Date.now(), text: action.payload, completed: false }, ...state.todos],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export const ToDoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = text => {
    dispatch({ type: 'ADD_TODO', payload: text });
  };

  const toggleTodo = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const setFilter = filter => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'all') return true;
    if (state.filter === 'completed' && todo.completed) return true;
    if (state.filter === 'active' && !todo.completed) return true;
    return false;
  });

  return (
    <ToDoContext.Provider value={{ 
      todos: filteredTodos,
      toggleTodo,
      setFilter,
      addTodo
    }}>
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDoContext = () => useContext(ToDoContext);

