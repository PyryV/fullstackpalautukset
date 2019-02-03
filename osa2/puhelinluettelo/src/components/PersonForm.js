import React from 'react'

const PersonForm = ({ 
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber 
}) => {

  const addPerson = (event) => {
    event.preventDefault()

    var a = false;
    for(var i=0; i<persons.length; i++) {
      if(persons[i]['name'] === newName) a = true
    }

    if(a) {
      window.alert(`${newName} on jo luettelossa`)
    } else {
      const person = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(person))
      setNewName('')
      setNewNumber('')
    }  
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return(
    <form onSubmit={addPerson}>
      <div>
        nimi: <input value={newName} onChange={handleNewName} />
      </div>
      <div>
        numero: <input value={newNumber} onChange={handleNewNumber}/>
      </div>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  )
}

export default PersonForm