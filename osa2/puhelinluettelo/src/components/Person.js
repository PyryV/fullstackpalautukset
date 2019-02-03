import React from 'react'

const Person = ({ name,number,filter }) => {
  if(name.toUpperCase().startsWith(filter.toUpperCase())|| filter ==='') {
    return (
      <div>
      <p>{name} {number}</p>
      </div>
    )
  } 
  return (
    <>
    </>
  )
}

export default Person