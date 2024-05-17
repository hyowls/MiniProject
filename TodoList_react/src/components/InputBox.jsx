import React from "react";
import Button from "./Button";

const InputBox = ({ itemTitle, setItemTitle, itemContext, setItemContext, addItemHandler}) => {
  return (
    <div className="input-box">
      <div className="user-input">
        <p>제목</p>
        <input
          className="title-value"
          type="text"
          value={itemTitle}
          onChange={(e) => {
            setItemTitle(e.target.value);
          }}
        />
      </div>
      <div className="user-input">
        <p>내용</p>
        <input
          className="context-value"
          type="text"
          value={itemContext}
          onChange={(e) => {
            setItemContext(e.target.value);
          }}
        />
      </div>
      <Button color="dodgerblue" onClick={addItemHandler}>
        추가하기
      </Button>
    </div>
  );
};

export default InputBox;
