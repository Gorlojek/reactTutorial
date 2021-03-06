import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { AddTask } from "./components/AddTask"

import { useState } from "react"

function App() {
  const [tasks, setTask] = useState([
    {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      }
])
const addTask = (task) => {
 console.log(task); 
}

const deleteTask = (id) => {
  setTask(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTask(tasks.map((task) => task.id === id 
  ? { ...task, reminder: !task.reminder} : task))

}
  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No Tasks to Show'
      )}
    </div>    
  );
}

export default App;
