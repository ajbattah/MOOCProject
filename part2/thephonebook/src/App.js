import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SingleContact = ({personName , personNumber}) => <p>{personName} {personNumber}</p>

const AddContactForm = ({submit, nameUpdated, nameChanger, numberUpdated, numberChanger}) => {
  return(
    <div>
      <form onSubmit = {submit}>
          <div>
            Name: <input value = {nameUpdated} onChange = {nameChanger} />
          </div>
          <div>
            Number: <input value = {numberUpdated} onChange = {numberChanger} />
          </div>
          <div>
            <button type = "submit">add</button>
          </div>
      </form>
    </div>
  )
}

const Filter = ({filterHandler, filtering}) =>
  { 
    return(
    <div>
      <form>
        <div>
          Filter contacts with:<input type = 'search' value = {filtering} onChange={filterHandler}/>
        </div>
      </form>
    </div>
    )
  }

const Contacts = ({names}) => 
  {
      return(
    <div>
      {names.map(person => 
      <div key = {person.name}>
        <SingleContact personName = {person.name} personNumber = {person.number}/> 
      </div>
      )
      }
    </div>
      )
  }

const App = () => {
 /* const [ persons, setPersons] = useState([
      { name: 'Arto Hellas',
        number: '040-1234567' },
      { name: 'Anas Battah',
      number: '040-3705154' },
      { name: 'Duma Narnias',
        number: '040-7654321'},
      { name: 'Dummy Ananas',
        number: '1234567898'
        }
  ]) */
  const [ persons, setPersons] = useState([])
  const namesArray = persons.map(person => person.name)
  const [ names, SetNames] = useState(namesArray) //gets names to array to check existing names
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filt, setFilt ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  , []) 
  
  const namesToShow = persons.filter(nameFilt => nameFilt.name.toLowerCase().includes(filt.toLowerCase()))

  const addNew = (event) => {
    event.preventDefault()

    if (namesArray.includes(newName)){
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
      return
    }
    else{
    const newObj = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newObj))
    SetNames(names.concat(newName))
  }
    setNewName('')
    setNewNumber('')
    setFilt('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilter = (event) => {
    return(setFilt(event.target.value))  
  }

  return (
    <div>
      <h2>Filter phonebook</h2>
      <Filter filterHandler = {handleFilter} filtering = {filt}/>
      <h2>Add new contact</h2>
      <AddContactForm submit = {addNew} nameUpdated = {newName} 
      nameChanger ={handleNameChange} numberUpdated = {newNumber} numberChanger = {handleNumberChange}/>
      <h2>Phonebook</h2>
      <Contacts names = {namesToShow}/>
    </div>
  )
}

export default App