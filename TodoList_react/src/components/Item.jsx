import React from 'react'
import Button from './Button';

const Item = ({ item, deleteItemHandler, completeItemHandler }) => {
  return (
    <div className='item-working'>
      <h3>{item.title}</h3>
      <p>{item.context}</p>
      <div className='item-working-btn'>
        <Button color='palegreen' onClick={() => completeItemHandler(item.id)}>
          완료
        </Button>
        <Button color='tomato' onClick={deleteItemHandler}>
          삭제
        </Button>
      </div>
    </div>
  );
};

export default Item