import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(
    new Array(anecdotes.length + 1).join('0').split('').map(parseFloat)
  )
  const[max, setMax] = useState(0)
  var n = anecdotes.length
  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    if(copy[selected] > copy[max]){
      setMax(selected)
      console.log('id1', selected, 'id2', max)
      console.log(copy[selected], copy[max])
    }  
    setVotes(copy)
    
  }

  
  
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>{votes[selected]} votes</p>
      <button onClick={() => setSelected(Math.floor(Math.random() * n))}>Random anecdote</button>
      <button onClick={handleVote}>Vote</button>
      <h2>Most votes</h2>
      <p>{props.anecdotes[max]}</p>
      <p>{votes[max]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
