import { useAppDispatch } from 'shared/model/useAppDispatch';
import {addTask} from '../../../shared/model/reducer/reducer';

const useAddTask = () => {
  const dispatch = useAppDispatch();

  function addNewTask(name: string) {
    dispatch(
      addTask({name: name})
    )
  }

  return {
    addNewTask
  }
}

export default useAddTask;