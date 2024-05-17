import React from "react";
import Item from "./Item";
const Working = ({ items, setItems, deleteItemHandler, completeItemHandler}) => {
  return (
    <div className="working">
      <h1>Working !</h1>
      <div className='itemBox'>
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              deleteItemHandler={() =>
                setItems(deleteItemHandler(item.id, items))
              }
              completeItemHandler={completeItemHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Working;
