import React from 'react'

const List = ({ expense }) => {
  return (
    <div>
      <ul>
        {expense.map((item) => (
          <li key={item.id}>
            <p>{item.date}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List