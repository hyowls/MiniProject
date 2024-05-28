import React from 'react'
import Layout from './components/Layout'
import TodoContainer from './components/todo/TodoContainer'

const App = () => {
  return (
    <main>
      <Layout>
        <TodoContainer />
      </Layout>
    </main>
  )
}

export default App
