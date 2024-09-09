import { useToDoContext } from "../context/ToDoContext";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  // const { filteredTodos, toggleTodo } = useToDoContext();
  const { todos, toggleTodo } = useToDoContext();

  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
      {/* {filteredTodos.map((todo) => ( 
         <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
       ))}  */}
    </ul>
  );
};

export default ToDoList;
