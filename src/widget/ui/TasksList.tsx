import Task from '../../entities/Task/ui/Task';
import {useAppSelector} from '../../shared/model/useAppSelector';
import useTask from 'features/deleteTask/model';

export default function TasksList() {
  const state = useAppSelector(state => state.todo);
  const {deleteCurrentTask} = useTask();
  return (
    <ul className="list-unstyled">
      {
        state.map(task => <Task name={task.name} id={task.id} deleteTask={deleteCurrentTask} key={task.id} />)
      }
    </ul>
  )
}