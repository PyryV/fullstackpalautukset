import React from 'react'
import personService from '../services/persons'

const PersonForm = ({ 
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  setMessage,
  rName,
  setRName,
  setErrorMsg 
}) => {

  const addPerson = (event) => {
    event.preventDefault()

    const exPerson = persons.find(person => person.name === newName)


    if(exPerson) {
      
      if(window.confirm(`${newName} on jo luettelossa. Korvataanko numero uudella?`)) {
      
        personService
          .update({
            ...exPerson,
            number: newNumber
          })
          .then( updatedPerson => {
            setPersons(persons.map(person => person.name === newName ? updatedPerson : person))
            setNewName('')
            setNewNumber('')
            setMessage(`${newName} muutettu onnistuneesti`)
            setTimeout(() => {
              setMessage(null)
            }, 3000)
          })
          .catch(error => {
            setErrorMsg(`${newName} oli jo poistettu luettelosta`)
            setTimeout(() => {
              setErrorMsg(null)
            }, 5000)
            setPersons(removeFromPersons)
            
          })

          
      }
    } else {
      const person = {
        name: newName,
        number: newNumber,
        id: newName
      }
      personService
        .create(person)
        .then(response => {
          if(persons !== undefined) {
            setPersons(persons.concat(response.data))
          } else {
            setPersons([person])
          }
          
          setNewName('')
          setNewNumber('')
        })
      setMessage(`${newName} lisätty onnistuneesti`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }  
  }

  const removePerson = (event) => {
    event.preventDefault()
    var person
    var a = false;
    for(var i=0; i<persons.length; i++) {
      if(persons[i]['name'] === rName) {
        a = true
        const person = persons[i]
      } 
    }
    if(persons.length === 1) {
      persons = []
    }

    if(a) {
      personService
        .remove(person.id)
      personService
        .getAll()
        .then(response => {
          console.log('promise fullfilled')
          console.log(response.data)
          
          setPersons(persons.filter(person => person.name !== rName))
          console.log(persons)
          setRName('')
          setMessage(`${newName} poistettu onnistuneesti`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
    }, [])
    } else {
      window.alert(`${rName} ei ole luettelossa`)
      setRName('')
    }
    
  }

  const removeFromPersons = () => {
    for(var i=0; i<persons.length; i++) {
      if(persons[i].name !== rName) {
        return persons.splice(i, 1)
      }
    }
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleRName = (event) => {
    setRName(event.target.value)
  }

  return(
    <div>


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
      <h3>Poista henkilö</h3>
      <form onSubmit={removePerson}>
        <div>
          poistettava: <input value={rName} onChange={handleRName} />
        </div>
        <div>
          <button type="submit">poista</button>
        </div>

      </form>
    </div>
  )
}

export default PersonForm