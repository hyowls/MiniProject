import React from 'react'
import Button from './Button';

const DoneItem = ({ item, deleteItemHandler, cancelItemHandler }) => {
  return (
    <div className='item-done'>
      {item.title}
      <br />
      {item.context}
      <div>
        <Button color='khaki' onClick={() => cancelItemHandler(item.id)}>
          취소
        </Button>
        <Button color='tomato' onClick={deleteItemHandler}>
          삭제
        </Button>
      </div>
    </div>
  );
};
export default DoneItem;