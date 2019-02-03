import React from 'react'
import Country from './Country'

const Countries = ({ countries,filter }) => {
  var newCountries = []
  var a = 0;
  for(var i=0; i<countries.length; i++) {
    if(countries[i].name.toUpperCase().startsWith(filter.toUpperCase())) {
      newCountries[a] = countries[i]
      a++
    }
  }

  if(newCountries.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    ) 
  }
  var only = false
  if(newCountries.length===1) only = true
 
    const rows = () => newCountries.map(country =>
        <Country
          key={country.name}
          country={country}
          only={only}
        />
      
    )

  return (
    <div>
      {rows()}
    </div>
  )
}

export default Countries