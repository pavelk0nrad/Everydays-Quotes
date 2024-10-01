import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import motivationalQuotes from './data.js';
import Finding from './components/Finding';

function createCard(content) {
  return (
    <Card
      id={content.id}
      key={content.id}
      quote={content.quote}
      author={content.author}
      emoji={content.emoji}
    />
  );
}

function App() {
  const countOfQuotes = motivationalQuotes.length;
  const [filteredQuotes, setFilteredQuotes] = useState(motivationalQuotes);

  function generateScoreFromDayAndMonth() {
    const now = new Date();
    const dayOfWeek = now.getDay(); // Den v týdnu (0 - 6)
    const month = now.getMonth(); // Měsíc (0 - 11)

    // Normalizace
    const normalizedDayOfWeek = dayOfWeek / 6; // Den v týdnu (0 - 6) na (0 - 1)
    const normalizedMonth = month / 11; // Měsíc (0 - 11) na (0 - 1)

    // Výpočet skóre jako vážený průměr
    const score = (normalizedDayOfWeek + normalizedMonth) / 2 * countOfQuotes;

    return Math.round(score);
  }

  const result = generateScoreFromDayAndMonth();

  const handleSearch = (searchTerm) => {
    const filtered = motivationalQuotes.filter((quote) =>
      quote.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredQuotes(filtered);
  };

  const authors = [...new Set(motivationalQuotes.map((quote) => quote.author))];

  return (
    <div className='container'>
      <div className="hero">
      <h1 className='display'>Citáty na každý den</h1>
      <div className='today-quotes'>
        <div className="card-header">
          <h2>Dnešní citát:</h2>
        </div>
        <p className='display-quote'>{motivationalQuotes[result].quote}</p>
        <p>{motivationalQuotes[result].author}</p>
        <hr />
        </div>
        <div className="main">
        <p>Co je smyslem citátů na každý den? Každý den ti algoritmus vybere náhodný citát z databáze. I když stránku obnovíš, tento citát ti pro tebe osud vybral na dnešní den. Musíš se jím tedy řídit.</p>
          <div className="finder">
              
              <Finding onSearch={handleSearch} authors={authors} />
          </div>
        </div>
      </div>
      <div className="quotes-grid">
        {filteredQuotes.map(createCard)}
      </div>
    </div>
  );
}

export default App;
