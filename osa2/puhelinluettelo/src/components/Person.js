import React from 'react'
import personService from '../services/persons'

const Person = ({ name,number,persons,setPersons }) => {


  
  return (
    <div>
      {name} {number} 
    </div>
  )


}

export default Person