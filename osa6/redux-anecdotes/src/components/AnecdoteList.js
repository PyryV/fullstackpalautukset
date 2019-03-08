import React from 'react'
import { voteFor } from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
  const anecdotes = props.store.getState()
  const vote = (id) => {
    props.store.dispatch(voteFor(id))
  }
  
  const sorter = (a,b) => {
    if(a.votes > b.votes) return -1
    if(a.votes < b.votes) return 1
    return 0
  }
  
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort(sorter).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList