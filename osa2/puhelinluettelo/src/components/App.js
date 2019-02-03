import React, { useState } from 'react'
import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'


const App = () => {
  const [ persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567' 
    },
    {
      name: 'Ari Arila',
      number: '050-1234567'
    },
    {
      name: 'Puuha Pete',
      number: '040-0000001'
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter,setFilter ] = useState('')

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