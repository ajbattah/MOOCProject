import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
    return (<button onClick={handleClick}>
      {text}
    </button>)   
}

const Header = ({text}) => <h1>{text}</h1>

const App = (props) => {
    
    const randomSelection = () => {
        return(
            Math.floor((Math.random() * props.anecdotes.length))
        )
    }

    const votesArray = new Array(props.anecdotes.length).fill(0)
    const [selected, setSelected] = useState(randomSelection)
    const [votes, setVotes] = useState(votesArray)
    const [maxVoteIndex, setMaxVoteIndex] = useState(0)
    const selectAnecdote = () => setSelected(randomSelection)
    const castVote = () => {
        //console.log(copy[selected])
        //return(copy[selected] += 1)
        const newVoteCount = [...votes]
        newVoteCount[selected] += 1
        setVotes(newVoteCount)
        findMaxVotes()
    }
    const findMaxVotes = () => {
        const votesCopy = [...votes]
        const maxVoted = Math.max(...votesCopy)
        const maxIndex = votesCopy.indexOf(maxVoted)
        setMaxVoteIndex(maxIndex)
        //console.log(maximumVote)
        //const maxIndex = props.anecdotes.indexOf(maximumVote)
        //console.log(maxIndex)
        //setMaxVote(maxIndex)
    }
    //console.log('copy', copy, 'selected', selected, 'copy selected', copy[selected])
    //console.log('votes', votes)

    return (
        <div>
            <Header text='Anecdote of the day'/>
            <p>{props.anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <Button handleClick={castVote} text='vote'/>
            <Button handleClick={selectAnecdote} text='Next Anecdote'/>
            <Header text='Anecdote with most votes'/>
            <p>{props.anecdotes[maxVoteIndex]}</p>
            <p>has {votes[maxVoteIndex]} votes</p>
        </div>
        )
    }

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)