import React from 'react'
import Person from './Person'

const Persons = ({ persons,filter }) => {
  const rows = () => persons.map(person => 
    <Person 
      key={person.name} 
      name={person.name}
      number={person.number}
      filter={filter}
    />
  ) 



  return(
    <div>
      {rows()}
    </div>
  )
}



export default Persons