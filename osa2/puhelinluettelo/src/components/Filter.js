import React from 'react'

const Filter = ({ filter,setFilter }) => {

  const handleFilter = (event) => {
    setFilter(event.target.value)
  } 

  return(
    <form>
      <div>
        rajaa nimiä: <input value={filter} onChange={handleFilter}/>
      </div>
    </form>
  )
}

export default Filter