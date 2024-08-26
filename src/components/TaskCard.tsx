import {Task} from '../../model/model'

const TaskCard = ({_id, task, completed}: Task) => {
  return (
    <>
    <div className="taskcard border-white border-2 p-4">
      <span>{task}</span>
      {!completed && <span>NotDone</span>}
    </div>
    </>
  )
}

export default TaskCard
