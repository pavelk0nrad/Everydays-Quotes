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
    <div className='container'>
      <h1 className='display'>Citáty na každý den</h1>
        <div className='today-quotes'>
          <p>Dnešní citát: </p>
          <p className='display-quote'> {motivationalQuotes[0].quote}</p>
          <p> {motivationalQuotes[0].author}</p>
          <p>Co je smyslem citátů na každý den? Každý den ti algoritmus vybere náhodný citát z databáze. I když stránku obnovíš, tento citát ti osud vybral na dnešní den. Musíš se jím tedy řídit.</p>
          <p>Pakliže jsi netrpělivý, prohlédni si zatím databázi citátů niže.</p>
        </div>
        <div className="quotes-grid">
          {motivationalQuotes.map(createCard)}
        </div>

    </div>
  )
}

export default App
