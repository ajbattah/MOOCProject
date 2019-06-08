import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
    <h1>{props.course.name}</h1>
    )
}

const Part = (props) => {
    const part = props.part.parts
    return(
        <div>
        <p>{part[0].name} {part[0].exercises}</p>
        <p>{part[1].name} {part[1].exercises}</p>
        <p>{part[2].name} {part[2].exercises}</p>
        </div>
        )
    }

const Content = (props) => {
    return (
        <div>
            <Part part = {props} />
        </div>
    )
}

const Total = (props) => {
    const total = props.parts
    return (
        <p>Number of exercises {total[0].exercises + total[1].exercises + total[2].exercises}</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }

    return (
      <div>
        <Header course={course}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))