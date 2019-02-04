import React from 'react'
import Person from './Person'

const Persons = ({ persons,filter,setPersons }) => {
  var newPersons = []
  var a = 0;
  if(filter !== '') {
    for(var i=0; i<persons.length; i++) {
      if(persons[i].name.toUpperCase().startsWith(filter.toUpperCase())) {
        newPersons[a] = persons[i]
        a++
      }
    }
  } else {
    newPersons = persons
  }

  
  if(newPersons !== undefined) {
    const rows = () => newPersons.map(person => 
      <Person 
        key={person.name} 
        name={person.name}
        number={person.number}
        filter={filter}
        persons={persons}
        setPersons={setPersons}
      />
    ) 
    return(
      <div>
        {rows()}
      </div>
    )
  }

  return (
    <>
    </>
  )





}





export default Persons