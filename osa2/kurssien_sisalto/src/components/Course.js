import React from 'react'

const Header = (props) => {
  return (
     <>
       <h1>{props.course}</h1>
     </>
  )
}

const Content = ({ parts }) => {
  const rows = () => parts.map(part => 
      <Part 
        key={part.id} 
        name={part.name} 
        exercises={part.exercises}
      />
    ) 
  return (
    <>
      <ul>
        {rows()}
      </ul>
    </>  
  )
}

const Part = (props) => {
  return (
    <>
      <li>{props.name} {props.exercises}</li>
    </>
  )
}

const Total = ({ parts }) => {
  var t = 0;
  const total = parts.reduce( (s, p) => {
    if(p.id > 2){
      t = s + p.exercises
    } else {
      t = s.exercises + p.exercises
    }
    return t
  })  

  return (
    <>
      <p>Yhteensä tehtäviä: {total}</p>
    </>
  )
}

const Course = ({ name,parts }) => {
  return(
      <div>
        <Header course={name} />
        <Content parts={parts} />
        <Total parts={parts} /> 
      </div> 
  )

}

export default Course