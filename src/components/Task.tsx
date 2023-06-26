import type { Task as TaskType } from '../types/types';
import { useAppDispatch } from '../hooks/useAppDispatch';
// import { deleteTask } from '../store/reducer';
import { useLazyDeleteTaskQuery } from '../api/todoApi';

export default function Task({task}: {task: TaskType}) {
  // const dispatch = useAppDispatch();
  const [deleteTask, {isLoading, isError, data}] = useLazyDeleteTaskQuery();

  const deleteButtonHandler = (taskId: number | string) => {
    deleteTask(taskId);
  };

  if (data) {
    alert('deleted');
  }
  return (
    <li className="d-flex justify-content-between align-items-center bg-light rounded-1 mb-1 py-1 px-2">
      <span>{task.title}</span>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={(evt) => deleteButtonHandler(task.id)}
      >Delete</button>
    </li>
  )
}