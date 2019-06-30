import React, { useState, useEffect } from 'react'
import axios from 'axios'

//exercises 2.13 & 2.14 not done yet.

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

const Country = ({toShow, doI}) => {
  if(doI){
    return(
      <div>
        <div key = {toShow.name}>
        <h1>{toShow.name}</h1>
        <div>
          <p>capital {toShow.capital}</p>
          <p>population {toShow.population}</p>
        </div>
        <h3>languages</h3>
        <div>
        <ul>
          {toShow.languages.map(lang => <div key = {lang.iso639_2}><li>{lang.name}</li></div>)}
        </ul>
        </div>
        <div>
        <img src = {toShow.flag} height = "100" width = "175" alt = "flag"/>
        </div>
      </div>
      </div> 
    )
  }
  return('')
}

const ShowCountries = ({shown}) => 
{
  const counter = shown.length
  const [ show , setShow ] = useState(false)
  const showHandler = (event) => {
    event.preventDefault()
    setShow(!show)    
  }

  if (counter === 1) {
    return(
      <div>
      {shown.map(info => 
        <div key = {info.name}>
        <h1>{info.name}</h1>
        <div>
          <p>capital {info.capital}</p>
          <p>population {info.population}</p>
        </div>
        <h3>languages</h3>
        <div>
        <ul>
          {info.languages.map(lang => <div key = {lang.iso639_2}><li>{lang.name}</li></div>)}
        </ul>
        </div>
        <div>
        <img src = {info.flag} height = "100" width = "175" alt = "flag"/>
        </div>
      </div>)
      }
      </div> 
    )
  }
  else if (counter > 10 && counter !== 250) {
    return(
    <div>Too many matches, specify another filter</div>
    )}
  else if(counter <= 10 && counter > 1) {
    return(
      <div>
        {shown.map(country => 
        <div key = {country.name}>{country.name} <button onClick = {showHandler}>show
        </button>
        <Country toShow = {country} doI = {show}/></div>)}
      </div>
    )
    //create new component for printing info of a single country
  }
  return(<div></div>)
}

const App = () => {
  const [ countries , setCountries ] = useState([])
  //const [ counter , setCounter ] = useState(0)
  const [ filt , setFilt] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  //const countryCounter = () => {
   // return(setCounter(countriesFiltered.length))}
    /*if (countryNames.includes(filt)) {
      setCounter(counter + 1)
    }

    else {
      setCounter(0)
    }*/


  const countriesFiltered = countries.filter(countryF => countryF.name.toLowerCase().includes(filt.toLowerCase()))
  //console.log('counter now is', counter, 'countries are', countries) 
  const handleSearch = (event) => setFilt(event.target.value)
 

return(
  <div>
    <div>
      <Filter filterHandler = {handleSearch} filtering = {filt}/>
    </div>
    <div>
      <ShowCountries shown = {countriesFiltered} />
    </div>
  </div>
)
}

export default App;
