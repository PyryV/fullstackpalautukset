import React from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList'


const App = (props) => {
  
  return (
    <div>
      <AnecdoteList /> 
      <AnecdoteForm store={props.store}/>
    </div>
  )
}

export default App
