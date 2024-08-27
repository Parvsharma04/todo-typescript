import React from 'react';
import { Task } from '../model/model';
import handleCompletion from '../utils';

interface TaskCardProps extends Task {
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskCard: React.FC<TaskCardProps> = ({ id, task, completed, setTaskList }) => {
  return (
    <div className="taskcard border-white border-2 p-4">
      <input 
        type="checkbox" 
        checked={completed}
        onChange={() => handleCompletion(id, task, completed, setTaskList)}
      />
      <span className={completed ? 'line-through' : ''}> {task}</span>
    </div>
  );
};

export default TaskCard;
