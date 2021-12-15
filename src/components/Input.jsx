import React from 'react'

const Input = ({
    label,
    handleChange,
    check,
    name,
    placeholder,
    value,
    type
}) => {
    return (
        <>
        <div className="form-control input">
         <label>{label}</label>
           <input
            value={value}
            type={type}
            checked={check}
            name={name} 
            onChange={handleChange}
            placeholder={placeholder}
            />
         </div>
        </>
    )
}

export default Input
