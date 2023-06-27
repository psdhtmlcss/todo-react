import AddTaskForm from 'entities/AddTaskForm/ui/AddTaskForm';
import TasksList from 'widget/ui/TasksList';
import Container from 'shared/ui/Container/Container';
import PageHeader from 'entities/PageHeader/ui/PageHeader';
import useAddTask from 'features/addTask/model';

const TasksListPage = () => {
  const {addNewTask} = useAddTask();
  return (
    <Container>
      <PageHeader title="Toto list" />
      <AddTaskForm addNewTask={addNewTask} />
      <TasksList />
    </Container>
  )
}

export default TasksListPage;