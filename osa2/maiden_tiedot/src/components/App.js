import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import Countries from './Countries'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fullfilled')
        setCountries(response.data)
      })
  },[])

  return(
    <div>
      <div>
        <Filter 
          filter={filter}
          setFilter={setFilter}
        />
      </div>
      <div>
       <Countries
          countries={countries}
          filter={filter}
        />
      </div>
    </div>

  )
}

export default App