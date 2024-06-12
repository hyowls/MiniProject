import React, { useState } from 'react'
import { MainLayout, SectionLayout } from '../styled/Layout'
import Form from '../components/Form'
import List from '../components/List'
import Month from '../components/Month'


const Home = () => {
  const [expense, setExpense] = useState([])
  const [month, setMonth] = useState(0)
  return (
    <MainLayout>
      <SectionLayout>
        <Form setExpense={setExpense}/>
      </SectionLayout>
      <SectionLayout>
        <Month month={month} setMonth={setMonth}/>
      </SectionLayout>
      <SectionLayout>
        <List expense={expense} />
      </SectionLayout>
    </MainLayout>
  )
}

export default Home