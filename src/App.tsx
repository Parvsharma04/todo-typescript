import { useState } from 'react'
import './app.css'
import Input from './components/Input'
import {Task} from '../model/model'
import TaskCard from './components/TaskCard'

const App:React.FC = () => {
  const [task, setTask] = useState<string>("")
  const [taskList, setTaskList] = useState<Task[]>([])
  
  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault()

    if(task){
      setTaskList(prev=>[...prev, {id:Date.now(), task, completed:false}])
      setTask("");
      console.log(taskList)
    }
  }
  return (
    <>
      <h1>To Do</h1>
      <Input task = {task} setTask = {setTask} handleAdd={handleAdd}/>
      {taskList.map(task=>{
        return (<TaskCard {...task}/>)
      })}
    </>
  )
}

export default App
