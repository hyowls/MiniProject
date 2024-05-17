import React from 'react'
import DoneItem from './DoneItem';
const Done = ({ doneItems, setDoneItems, deleteItemHandler, cancelItemHandler}) => {
  return (
    <div className='done'>
        <h1>Done !</h1>
        <div className='itemBox'>
          {doneItems.map((item) => {
            return (
              <DoneItem
                key={item.id}
                item={item}
                deleteItemHandler={() => setDoneItems(deleteItemHandler(item.id, doneItems))}
                cancelItemHandler={cancelItemHandler}
              />
            );
          })}
        </div>
      </div>
  )
}

export default Done