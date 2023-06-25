
import AddTaskForm from './AddTaskForm';
import TasksWrapper from './TasksWrapper';

function App() {
  return (
    <div className="container pt-4">
      <h1 className="mb-4">Todo list</h1>
      <AddTaskForm />
      <TasksWrapper />
    </div>
  );
}

export default App;
