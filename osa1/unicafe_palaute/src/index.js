import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = () => <h1>Anna palautetta</h1>

const Statistics = ({ g,n,b }) => {
  var total = 0
  var avg = 0
  var prc = 0
  if(g>0 || n>0 || b>0) {
    total = g+n+b 
    avg = (g - b)/total
    prc = (g/total) * 100

    return (
      <div>
      <h2>Arvosanamäärät</h2>
      <table>
        <tbody>
          <Statistic name='Hyvä' value={g}/>
          <Statistic name='Neutraali' value={n}/>
          <Statistic name='Huono' value={b}/>
          <Statistic name='Yhteensä arvioita' value={total}/>
          <Statistic name='Keskiarvo' value={avg}/>
          <Statistic name='Palautteesta positiivistä:' value={prc} p='%'/>
        </tbody>
      </table>
      </div>
    )
  } 
  return (
    <div>
      <h2>Arvosanamäärät</h2>
      <p>Ei yhtään palautetta annettu</p>
    </div>
  )
}

const Statistic = ({ name, value, p }) => {
  return (
    <tr>
      <td>{name}: {value}{p}</td>
    </tr>
    
  )
} 

const Button = ({ handleClick, name }) => {
  return (
    <button onClick={handleClick}>
      {name}
    </button>
  )  
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <Header />
      <Button handleClick={handleGoodClick} name='Hyvä'/>
      <Button handleClick={handleNeutralClick} name='Neutraali'/>
      <Button handleClick={handleBadClick} name='Huono'/>
      <Statistics g={good} n={neutral} b={bad}/>
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)