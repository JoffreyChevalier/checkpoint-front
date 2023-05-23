import ContinentsGrid from '../components/ContinentsGrid'
import { useQuery } from '@apollo/client'
import { GET_CONTINENTS, GET_COUNTRIES_FROM_CONTINENT, GET_COUNTRY } from '../graphQL/continentsQuery'
import { useState } from 'react'
import CountriesGrid from '../components/CountriesGrid'
import CountryModal from '../components/countryModal'

const ContinentsPage = () => {
  const [continentCode, setContinentCode] = useState<string>('')
  const [countryCode, setCountryCode] = useState<string | null>(null)
  const [open, setOpen] = useState<boolean>(false)
  
  console.log(countryCode)
  
  const {data: continentsData} = useQuery(GET_CONTINENTS)
  const {data: countriesData} = useQuery(GET_COUNTRIES_FROM_CONTINENT, {
    variables: {
      code: continentCode,
    },
  })
  
  const {data: countryData} = useQuery(GET_COUNTRY, {
    variables: {
      code: countryCode,
    },
  })
  
  const handleModal = (countryCode: string) => {
    setCountryCode(countryCode)
    setOpen(!open)
  }
  
  return (
    <div className="flex h-screen justify-center items-center bg-slate-100">
      {!countriesData?.continent && <ContinentsGrid continentsData={continentsData}
                                                    setContinentCode={setContinentCode}/>}
      {countriesData?.continent && <CountriesGrid countriesData={countriesData}
                                                  handleModal={handleModal}/>}
      {open && <CountryModal open={open} countryData={countryData} setOpen={setOpen}/>}
    </div>
  )
}

export default ContinentsPage

