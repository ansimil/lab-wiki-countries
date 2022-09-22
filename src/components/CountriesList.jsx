import { React } from 'react'
import { Link } from 'react-router-dom'


const CountriesList = (props) => {

  return (
    props.countrieslist.map((country) => {
    return (
    <div>
    <Link className="link" to={country.alpha3Code}>{country.name.common}</Link>
    </div>
    )
  })
  )
}

export default CountriesList