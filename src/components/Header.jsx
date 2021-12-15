
import React from 'react';
import Button from './Button';

// const headingStyle = {
//   color: 'black',
//   padding: '20px',
//   backgroundColor: '#f7f7f7',
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   fontWeight: 'bold',
//   borderTop: '7px solid #ccc',
//   borderBottom: '7px solid #ccc' 
// }

const Header = ({title, toggleForm, toggleBtn}) => {
    // destructure
    // const {title} = props;
    return (
      <div className="header">
          <header >{title}</header> 
          <Button 
          //  style={buttonStyle} 
            buttoncolor={toggleBtn ? 'red' : "skyblue"} 
            buttonText={toggleBtn ? 'Close' : "Add Task Form"} 
            toggleForm={toggleForm}
          />
      </div>
    )
 }
export default Header
