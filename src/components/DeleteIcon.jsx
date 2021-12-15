import React from 'react'

const DeleteIcon = ({
      removeTask
    }) => {
    return (
        <>
          <a href='#' 
              className="delete-icon"
              onClick={removeTask}>X
          </a>
       </>
    )
}

export default DeleteIcon
