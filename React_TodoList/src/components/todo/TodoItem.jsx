import React from 'react'

const TodoItem = ({ todo, setTodos }) => {
  const {id, content, title, isDone} = todo;
  const deleteTodo = () => {
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id));
  }

  const toggleTodo = () => {
    setTodos((prev)=> prev.map((todo)=> todo.id === id ? {...todo, isDone : !todo.isDone } : todo))
  }

  return (
    <div className='item-box'>
      <h3 className='item-title'>{title}</h3>
      <p className='item-content'>{content}</p>
      <div>
        <button onClick={toggleTodo}>{isDone ? "취소" : "완료"}</button>
        <button onClick={deleteTodo}>삭제</button>
      </div>
    </div>
  )
}

export default TodoItem