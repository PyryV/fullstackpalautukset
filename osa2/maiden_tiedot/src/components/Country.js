import React from 'react'

const Country = ({ country,only }) => {
  if(only) {
    const languages = () => country.languages.map(language =>
      <li key={language.name}>{language.name}</li>
      ) 
    return (
      <div>
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h3>Languages</h3>
        <ul>
          {languages()}
        </ul>
        <img alt="Flag" src={country.flag} widht="200" height="200"/>
      </div>
    )
  }

  return (
    <div>  
        {country.name}
    </div>
    
  )
}

export default Country