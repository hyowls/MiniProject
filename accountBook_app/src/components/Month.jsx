import React from 'react'

const Month = ({ month, setMonth}) => {
  const months = [1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <div>
      {months.map((month, index) => (
        <button key={index}>{month}월</button>
      ))}
    </div>
  )
}

export default Month