import React from 'react'

const Button = ({ children, onClick, color }) => {
  if (color) {
    return (
      <button className='btn-layout' style={{ backgroundColor: color }} onClick={onClick}>
        {children}
      </button>
    );
  }
  return <button className='btn-layout' onClick={onClick}>{children}</button>;
};
export default Button;