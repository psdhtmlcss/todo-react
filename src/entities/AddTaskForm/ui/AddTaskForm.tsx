import { useState } from 'react';

type AddTaskFormProps = {
  addNewTask: (name: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({addNewTask}) => {
  const [inputValue, setInputValue] = useState('');
  
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
            addNewTask(inputValue)
            setInputValue('')
          }
        }
      >
        Add task
      </button>
    </div>
  )
}

export default AddTaskForm;