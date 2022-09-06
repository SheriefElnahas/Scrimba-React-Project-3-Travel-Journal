import './App.css'
import Card from './Card'

import data from './data.js';


function App() {
  const cardElement = data.map(card => {
    return <Card key={card.id} item={card} />
  })
  return (
    <div className="app">
        <header>

            <p>My Travel Journal</p>
        </header>
       {cardElement}
    </div>
  )
}

export default App
