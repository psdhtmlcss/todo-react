import { useAppDispatch } from '../../../shared/model/useAppDispatch';
import { deleteTask } from '../../../shared/model/reducer/reducer';

const useTask = () => {
  const dispatch = useAppDispatch();

  function deleteCurrentTask(taskId: string) {
    dispatch(deleteTask({id: taskId}))
  }

  return {
    deleteCurrentTask
  }
}

export default useTask;