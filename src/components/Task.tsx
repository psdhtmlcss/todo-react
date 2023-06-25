import type { Task as TaskType } from '../types/types';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { deleteTask } from '../store/reducer';

export default function Task({task}: {task: TaskType}) {
  const dispatch = useAppDispatch();
  return (
    <li className="d-flex justify-content-between align-items-center bg-light rounded-1 mb-1 py-1 px-2">
      <span>{task.name}</span>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={(evt) => {
            evt.preventDefault()
            dispatch(deleteTask({id: task.id}))
          }
        }
      >Delete</button>
    </li>
  )
}