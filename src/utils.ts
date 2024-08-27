import { Task } from "../model/model";

export default function handleCompletion(id: number, task: string, completed: boolean, setTask: React.Dispatch<React.SetStateAction<Task[]>>) {
  console.log("handleCompletion called");

  setTask(prevTasks =>
    prevTasks.map(t =>
      t.id === id ? { ...t, completed: !completed } : t
    )
  );
}
