import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddtask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "See doctor",
      day: "Jan 21st at 1 pm",
      reminder: "true",
    },
    {
      id: 2,
      text: "check on parents",
      day: "Jan 22nd at 10am",
      reminder: "true",
    },
    {
      id: 3,
      text: "ask friend how they're doing",
      day: "Jan 23rd at 12pm",
      reminder: "false",
    },
  ]);

  //TOGGLE ADD TASK UI WITH ADD Button

  //ADD TASK
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //TOGGLE REMINDER
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddtask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Current Tasks"
      )}
    </div>
  );
}

export default App;
