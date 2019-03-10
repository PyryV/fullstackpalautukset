import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    props.store.dispatch(
      createAnecdote(event.target.anecdote.value)
    )
    props.store.dispatch(
      notificationChange(`You created new anecdote successfully!`)
    )  
    setTimeout(() => {
      props.store.dispatch(
        notificationChange(null)
      ) 
    }, 5000)
    event.target.anecdote.value = ''
  }
  
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name='anecdote' />
        <button type='submit'>create</button>
      </form>
    </div>    

  )
}

export default AnecdoteForm