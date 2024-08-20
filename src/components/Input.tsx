interface Props {
  task:string,
  setTask: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e:React.FormEvent) => void
}

const Input: React.FC<Props> = ({task, setTask, handleAdd} : Props ) => {
  return (
    <form onSubmit={handleAdd}>
      <label>Task :</label>
      <input type="text" placeholder="Enter the task" value={task} onChange={(e)=>setTask(e.target.value) }/>
      <button>Keep</button>
    </form>
  )
}

export default Input
