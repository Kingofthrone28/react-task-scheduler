import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css';
import UtilAsync from './components/base/Utilasync';


const App = () => {

  //Hooks used to set/update state with function setter 
  // uses db.json file to fetch tasks data
  const [toggleTask, setToggleTask ] = useState(true);
  const [tasks, setTasks] = useState([]);

  // add task 
    //generate a random ID 
    // const id = Math.floor(Math.random() * 1000) + 1
    // const newDataTask = {...tasks, ...task};
    // console.log(id);
  const addTask = async (task) => {
    await UtilAsync(`http://localhost:5001/tasks/`,`POST`,task);
    setTasks([...tasks, task])
  }
  // // delete task 
  // const deleteTask = (id) => {
  //   console.log("DELETE", id) 
  //   // only show the new array of unmatched ids, 
  //   // filter returns the unmatched set of ids, so the matched id doesn't show
  //   const removeSetTask = tasks.filter((task) =>task.id !== id)
  //   setTasks(removeSetTask)
  //   console.log(setTasks(removeSetTask))
  // }

  // delete task 
  const deleteTask = async (id) => {
    await UtilAsync(`http://localhost:5001/tasks/${id}`,`DELETE`); 
    // only show the new array of unmatched ids, 
    // filter returns the unmatched set of ids, so the matched id doesn't show
    const removeSetTask = tasks.filter((task) =>task.id !== id)
    setTasks(removeSetTask)
  }

  //toggle reminder
  const toggleReminder = (id) => {
   console.log("REMINDER");
   console.log(id); 
   const setReminder = tasks.map(
     (task) => {
       return task.id === id ? { ...task, reminder: !task.reminder } : task;
     })
    setTasks(setReminder)
  }
  
  useEffect(()=>{
    const fetchTask = async () => {
      const serverTask = await UtilAsync(`http://localhost:5001/tasks/`,`GET`);
      setTasks(serverTask)
    }
    fetchTask();
  },[]);

  return (
    <div className="container">
      <Header 
        toggleForm={() => setToggleTask(!toggleTask)} 
        title="Schedule Update" 
        toggleBtn={!toggleTask}
        />
      {// form controlled component to add task
        !toggleTask && 
        <AddTask onAdd={addTask} />
      }
      {tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleReminder} 
        />
        ) : <div className="no-task">No Task Available</div>
      }
    </div>
  );
}

export default App;

