import React, { useState } from 'react'
import data from './data'
import List from './List'
import ListAssignment from './ListAssignment'
function App() {
  
  return (
    <main>
      <section className='container'>
        
        {/* <List peoplelist={people} />
        <button onClick={() => setPeople([])}>clear all</button> */}
        <ListAssignment peoplelist={data} />
        
      </section>
    </main>
  )
}

export default App
