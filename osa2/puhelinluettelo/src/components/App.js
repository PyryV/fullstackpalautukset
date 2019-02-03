import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter,setFilter ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fullfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  return (
    <div>
      <h2>Puhelinluettelo</h2>
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
      />
      <h3>Numerot:</h3>
      <div>
        <Persons persons={persons} filter={filter} />
      </div>
    </div>
  )

}

export default App