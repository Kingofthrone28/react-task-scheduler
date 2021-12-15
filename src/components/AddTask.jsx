import React from 'react'
import { useState } from 'react'
import Input from './Input';

    const initValues = {
        text:"",
        day:"",
        date:"",
        time:"",
        reminder: false
    }

    const AddTask = ({onAdd}) => {    

      const [values,setValues] = useState(initValues); 

      // Destructure obj in state
      const {
       text,
       day,
       date,
       time,
       reminder
       } = values 
      
      function handleChange (e) {
        
        const {checked} = e.currentTarget
        const {name, value} = e.target;

        setValues({
          ...values,
          [name]: value,
          reminder: checked
      })
    }   

      const onSubmit = (e) =>{
        e.preventDefault()
        if(!text || !day || !date || !time  && !reminder){
           alert("Please enter text in the fields")
          return
        }
        onAdd({text,day,date,time,reminder})
        setValues({
          ...values,
            text:"",
            day:"",
            date:"",
            reminder: false
        })
      }

    return (
        <form className='add-form' onSubmit={onSubmit}>
                {/* <h1>Updated State</h1>
                <p><b>Task</b> :{text}</p>
                <p><b>Day</b>: {day}</p>
                <p><b>Date</b>: {date}</p>
                <p><b>Time</b>: {time}</p> */}
              <div className='form-control'>
                <Input
                  value={text} 
                  type="text"
                  name="text"
                  placeholder="Task:"
                  handleChange={handleChange}  
                />
                <Input
                  value={day} 
                  type="text"
                  name="day"
                  placeholder="Day:"
                  handleChange={handleChange}  
                />
                <Input
                  value={date} 
                  type="text"
                  name="date"
                  placeholder="Date:"
                  handleChange={handleChange}  
                />
                <Input
                  value={time} 
                  type="text"
                  name="time"
                  handleChange={handleChange}  
                  placeholder="Time:"
                />
              </div>
              <div className='form-control'>
                <Input 
                  value={reminder} 
                  check={reminder}
                  name="reminder"
                  type="checkbox"
                  label="Set Reminder" 
                  handleChange={handleChange}
                  />
              </div>
              <div> 
                <Input 
                  type='submit' 
                  value='Save Task' />
              </div>
        </form>
    )
}

export default AddTask
