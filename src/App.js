import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
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
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Current Tasks"
      )}
    </div>
  );
}

export default App;
