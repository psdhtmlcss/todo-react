import AddTaskForm from 'widgets/AddTaskForm';
import TasksWrapper from 'widgets/TasksWrapper';

export default function TasksListPage() {
  return (
    <div className="container pt-4">
      <h1 className="mb-4">Todo list</h1>
      <AddTaskForm />
      <TasksWrapper />
    </div>
  )
}