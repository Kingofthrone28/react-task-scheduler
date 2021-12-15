import React from 'react'
import Task from "./Task"

const taskStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
}

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
     <div className='task' style={taskStyles}>
         <ul> 
         <div 
          className="disclaimer">
            *please double click to indicate a reminder
          </div>
          {tasks.map((task) => (
            <Task 
              key={task.id} 
              task={task} 
              onDelete={onDelete} 
              onToggle={onToggle} 
            />
          ))}
          </ul>
     </div>
    )
}
export default Tasks
