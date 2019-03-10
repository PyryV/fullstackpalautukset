import React from 'react'
import { voteFor } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import Notification from './Notification'
import Filter from './Filter'

const AnecdoteList = (props) => {
  const filteredAnecdotes = () => {
    if (props.aFilter === '') {
      return props.anecdotes
    }
    return props.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(props.filter.toLowerCase()))
  }
  const vote = (anecdote) => {
    props.anecdotes(voteFor(anecdote.id))
    props.anecdotes(notificationChange(`You voted for: ${anecdote.content}`))
    setTimeout(() => {
      props.store.dispatch(notificationChange(null))
    }, 5000)
    
  }
  
  const sorter = (a,b) => {
    if(a.votes > b.votes) return -1
    if(a.votes < b.votes) return 1
    return 0
  }

  
  
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification store={props.store} />
      <Filter store={props.aFilter}/>
      {filteredAnecdotes().sort(sorter).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    aFilter: state.filter,
    noification: state.notification
  }
}

const mapDispatchToProps = {
  voteFor,
  notificationChange,
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdotes