import { CountriesFromContinent, Country } from '../utils/DataTypes'
import React from 'react'

interface Props {
  countriesData: CountriesFromContinent | undefined
  handleModal: (countryCode: string) => void
}

const CountriesGrid = (props: Props) => {
  
  const {countriesData, handleModal} = props
  
  return (
    <div>
      <div className="grid grid-flow-dense grid-cols-10">
        {countriesData?.continent && countriesData?.continent.countries.map((country: Country) => (
          <div
            className="flex justify-center items-center text-center w-36 h-24 bg-sky-100 border-2 border-sky-200 hover:bg-sky-200 hover:border-sky-300 cursor-pointer"
          >
            <p className="mr-2">{country.emoji}</p>
            <div
              key={country.code}
              onClick={() => handleModal(country.code)}>
              {country.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CountriesGrid
