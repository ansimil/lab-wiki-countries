import React from 'react'
import { useParams } from 'react-router-dom' 
import {useState, useEffect} from 'react'
import axios from 'axios'




const CountryDetails = (props) => {

const [country, setCountry] = useState({})
const { countryID } = useParams()

// const [id, setID] = useState(countryID)
const apiURL = `https://ih-countries-api.herokuapp.com/countries/${countryID}`
//console.log(apiURL)

useEffect(() => {
  //console.log(apiURL)
  axios.get(apiURL)
  .then((response) => {
    //console.log(response)
    setCountry(response.data)
    // setID(countryID)
  })
  .catch(err => console.log(err));
  //console.log('Effect firing')

  }, [countryID] ) 

 
  return (
    <div>
    
    <h3>{country?.name?.common}</h3>
    
    </div>
   )
}

export default CountryDetails