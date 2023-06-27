import type { Task as TaskType } from '../../../shared/config/types/types';
import { FC } from 'react';

const Task: FC<TaskType> = ({name, id, deleteTask}) => {
  return (
    <li className="d-flex justify-content-between align-items-center bg-light rounded-1 mb-1 py-1 px-2">
      <span>{name}</span>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={() => deleteTask(id)}
      >Delete</button>
    </li>
  )
}

export default Task;