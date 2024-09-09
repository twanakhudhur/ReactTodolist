import AddToDo from './components/AddToDo';
import FilterComponent from './components/FilterComponent';
import ToDoList from './components/ToDoList';
import { ToDoProvider } from './context/ToDoContext';

const App = () => {
  return (
    <ToDoProvider>
      <div className='container mx-auto p-4'>
        <AddToDo />
        <FilterComponent />
        <ToDoList />
      </div>
    </ToDoProvider>
  );
};

export default App;