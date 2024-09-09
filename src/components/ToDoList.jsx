import { useToDoContext } from '../context/ToDoContext';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  const { filteredTodos, toggleTodo } = useToDoContext();

  return (
    <ul>
      {filteredTodos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default ToDoList;
