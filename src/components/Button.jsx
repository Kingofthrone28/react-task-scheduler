import React from 'react'

const Button = ({buttoncolor,buttonText,toggleForm}) => {

  const buttonStyle = {
      color: 'black',
      padding: '10px 20px',
      backgroundColor: buttoncolor,
      border: '0'
    }

  return (
      <div>
        <button 
          onClick={toggleForm} 
          style={buttonStyle} 
          buttoncolor={buttoncolor} 
          className='btn'>{buttonText}</button>
      </div>
    )
 }

export default Button
