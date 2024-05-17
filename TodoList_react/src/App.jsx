import React, { useState } from 'react';
import InputBox from './components/InputBox';
import Working from './components/Working';
import Done from './components/Done';
const App = () => {
  const [items, setItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);
  const [itemTitle, setItemTitle] = useState('');
  const [itemContext, setItemContext] = useState('');

  const addItemHandler = () => {
    const newItem = {
      id: new Date().getTime(),
      isDone: false,
      title: itemTitle,
      context: itemContext,
    };
    setItems([...items, newItem]);
    setItemTitle('')
    setItemContext('')
  };

  const deleteItemHandler = (id, deleteList) => {
    const deleteItems = deleteList.filter((item) => item.id !== id);
    return deleteItems;
  };

  const completeItemHandler = (id) => {
    const completedItem = items.find((item) => item.id === id);
    setDoneItems([...doneItems, completedItem]);
    const deleteItems = deleteItemHandler(id, items);
    setItems(deleteItems);
  };

  const cancelItemHandler = (id) => {
    const cancelledItem = doneItems.find((item) => item.id === id);
    setItems([...items, cancelledItem]);
    const deleteItems = deleteItemHandler(id, doneItems);
    setDoneItems(deleteItems);
  };

  return (
    <>
      <InputBox 
        itemTitle={itemTitle}
        setItemTitle={setItemTitle}
        itemContext={itemContext}
        setItemContext={setItemContext}
        addItemHandler={addItemHandler}
      />
      <Working
        items={items}
        setItems={setItems}
        deleteItemHandler={deleteItemHandler}
        completeItemHandler={completeItemHandler}
      />
      <Done 
        doneItems={doneItems}
        setDoneItems={setDoneItems}
        deleteItemHandler={deleteItemHandler}
        cancelItemHandler={cancelItemHandler}
      />
    </>
  );
};

export default App;