import Task from './Task';
import {useAppSelector} from '../hooks/useAppSelector';

export default function TasksWrapper() {
  const state = useAppSelector(state => state.todo);
  return (
    <ul className="list-unstyled">
      {
        state.map(task => <Task task={task} key={task.id} />)
      }
    </ul>
  )
}