import './App.css';
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails';
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import axios from 'axios'

const apiURL = "https://ih-countries-api.herokuapp.com/countries"

function App() {

const [countries, setCountrieslist] = useState([])

useEffect(() => {
  axios.get(apiURL)
  .then((response) => {
    setCountrieslist(response.data)
  })
  .catch(err => console.log(err));
  },[]) 

return (
    <div className="App">
    <Navbar/>
    <div className="row">
    <div className="list">
    <CountriesList countrieslist={countries}/>
    </div>
    <div className="details">
    <Routes>
    <Route 
        path=":countryID"
        element={ <CountryDetails countrieslist={countries}/> }
    />
    </Routes>
    </div>
      </div>
    </div>
  );
}

export default App;
