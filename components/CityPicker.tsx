"use Client"

import { Country, City } from "country-state-city"
import  Select  from "react-select"

const options = Country.getAllCountries().map(country => ({
value: {
    latitude: country.latitude,
    longtude: country.longitude,
    isoCode: country.isoCode,
},
label: country.name,
}))

function CityPicker() {
  return (
    <Select 
    options={options} 
    />
  )
}

export default CityPicker