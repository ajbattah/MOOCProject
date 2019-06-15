import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => <h1>{text}</h1>

const Statistics = ({text, stat}) => {
if(text === 'positive'){
    return(<tr><td>{text}</td><td>{stat}</td><td>%</td></tr>)
}
else{
    return(<tr><td>{text}</td><td>{stat}</td></tr>)
}
}

const Button = ({ handleClick, text }) => {
    return (<button onClick={handleClick}>
      {text}
    </button>)   
}

const Feedback = ({all, good, neutral, bad, avg}) => {
if (all === 0){
    return(<p>No feedback given</p>)
}
return(
    <table>
        <tbody>
        <Statistics text='good' stat={good}/>
        <Statistics text='neutral' stat={neutral}/>
        <Statistics text='bad' stat={bad}/>
        <Statistics text ='all' stat={all}/>
        <Statistics text = 'average' stat={avg/all}/>
        <Statistics text = 'positive' stat={good/all}/>
        </tbody>
    </table>)
}
  
const App = (props) => {
     // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [avg, setAvg] = useState(0)

    const goodClick = () => {
        setGood(good + 1)
        setAll(all + 1)
        setAvg(avg + 1)
    }
    const neutralClick = () => {
        setNeutral(neutral + 1)
        setAll(all + 1)
    }
    
    const badClick = () => {
        setBad(bad + 1)
        setAll(all + 1)
        setAvg(avg - 1)
    }
  
    return (
        <div>
          <Header text='give feedback' />
          <Button handleClick={goodClick} text='good'/>
          <Button handleClick={neutralClick} text='neutral'/>
          <Button handleClick={badClick} text='bad'/>
          <Header text='statistics' />
          <Feedback all={all} good={good} bad={bad} neutral={neutral} avg={avg}/>  
        </div>
      )
    }
ReactDOM.render(
  <App />, 
  document.getElementById('root')
)