import React from 'react'
import DeleteIcon from './DeleteIcon'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <>
      <li 
        className={`task${task.reminder ? ' reminder' : ``}`} 
        style={{textAlign:"left"}} 
        onDoubleClick={() => onToggle(task.id)}
        >
          {// filter through all key/value entries except for "id"
          // then return the value only on new array set
            Object.entries(task)
              .filter((item) => item[0] !== 'id' )
                .map((item)=>{
                  return <div className="item" key={item}>{item[1]}</div>
              }
            )
           }
            <DeleteIcon 
              colorType="red" 
              cursorType="pointer"
              cursorPos="right"
              removeTask={()=>onDelete(task.id)}
           />
      </li>
    </>
  )
}
export default Task
