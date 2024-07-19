import { useState } from 'react'

import './App.css'
import Card from './components/Card'
import motivationalQuotes from './data.js'

function App() {

  function createCard(content){
    return (
      <Card 
      id={content.id}
      key={content.id}
      quote={content.quote}
      author={content.author}
      emoji={content.emoji}
      />
    )

  }

  return (
    <>
    <div className="quotes-grid">
      {motivationalQuotes.map(createCard)}
    </div>

    </>
  )
}

export default App
