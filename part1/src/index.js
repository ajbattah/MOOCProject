import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
    <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return(
        <div>
        <p>{props[0].name} {props[0].exercises}</p>
        <p>{props[1].name} {props[1].exercises}</p>
        <p>{props[2].name} {props[2].exercises}</p>
        </div>
        )
    }


const Content = (props) => {
    console.log(props, "Content function")
    return (
        <div>
            <Part part = {props} />
        </div>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props[0].exercises + props[1].exercises + props[2].exercises}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
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

    return (
      <div>
        <Header course={course}/>
        <Content parts={parts}/>
        <Total parts={parts} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))