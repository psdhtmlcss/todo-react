import Task from './Task';
import { useGetTasksQuery } from '../api/todoApi';

export default function TasksWrapper() {
  const {isLoading, isError, data} = useGetTasksQuery();
  
  return (
    <div>
      {
        isError && <p className="text-center text-danger">Failed to load data.</p>
      }
      {
        isLoading && <p className="text-center text-black-50">Loading...</p>
      }
      <ul className="list-unstyled">
        {
          data?.map((task, index) => index <= 10 && <Task task={task} key={task.id} />)
        }
      </ul>
    </div>
    
  )
}