import React, { useState, useEffect } from 'react'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'
import personService from '../services/persons'
import '../index.css'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="success">
      {message}
    </div>
  )
}

const Error = ({ message }) => {
  if(message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ rName, setRName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter,setFilter ] = useState('')
  const [ message, setMessage ] = useState(null)
  const [ errorMsg, setErrorMsg ] = useState(null)

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        console.log('promise fullfilled')
        setPersons(response.data)
      })
  }, [])

  



  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Notification message={message} />
      <Error message={message}/>
      <Filter 
        filter={filter}
        setFilter={setFilter}
      />
      <h3>Lisää uusi:</h3>
      <PersonForm 
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        message={message}
        setMessage={setMessage}
        rName={rName}
        setRName={setRName}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      />
      <h3>Numerot:</h3>
      <div>
        <Persons 
          persons={persons} 
          filter={filter} 
          setPersons={setPersons}
        />
      </div>
    </div>
  )

}



export default App