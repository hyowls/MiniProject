import React from 'react'

const Form = ({ setExpense}) => {
  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const date = formData.get('date')
    const description = formData.get('description')
    const price = formData.get('price')

    const newExpense = {
      id : crypto.randomUUID(),
      date,
      description,
      price
    }
    if(!date.trim() || !description.trim() || !price.trim()) {
      return alert('모든 항목을 입력해주세요')
    } else {
      setExpense((prevExpense) => [...prevExpense, newExpense])
      e.target.reset()
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="date" name='date' />
      <input type="text" placeholder='지출 내용' name='description'/>
      <input type="number" placeholder='지출 가격' name='price'/>
      <button type='submit'>저장하기</button>
    </form>
  )
}

export default Form