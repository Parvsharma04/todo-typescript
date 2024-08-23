import {Task} from '../../model/model'

const TaskCard = ({id, task, completed}: Task) => {
  return (
    <div className="taskcard">
      <p>{task}</p>
      {!completed && return <p>NotDone</p>}
    </div>
  )
}

export default TaskCard
