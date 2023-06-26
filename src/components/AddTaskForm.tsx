import { useState } from 'react';
import {addTask} from '../store/reducer';
import { useAppDispatch } from '../hooks/useAppDispatch';


export default function AddTaskForm() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter the name of the task"
        value={inputValue}
        onChange={(evt) => setInputValue(evt.target.value)}
      />
      <button
        className="btn btn-primary"
        type="button"
        disabled={inputValue.trim().length === 0}
        onClick={(evt) => {
            evt.preventDefault()
            dispatch(
              addTask({title: inputValue})
            )
            setInputValue('')
          }
        }
      >
        Add task
      </button>
    </div>
  )
}