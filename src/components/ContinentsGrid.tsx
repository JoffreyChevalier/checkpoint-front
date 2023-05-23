import { Continent, Continents } from '../utils/DataTypes'
import React from 'react'

interface Props {
  continentsData: Continents
  setContinentCode: React.Dispatch<React.SetStateAction<string>>
}

const ContinentsGrid = (props: Props) => {
  
  const {continentsData, setContinentCode} = props
  return (
    <div className="grid grid-flow-dense grid-cols-4">
      {continentsData && continentsData.continents.map((continent: Continent) => (
        <div
          className="flex justify-center items-center w-32 h-24 bg-sky-100 border-2 border-sky-200 hover:bg-sky-200 hover:border-sky-300 cursor-pointer"
          key={continent.code}
          onClick={() => setContinentCode(continent.code)}>
          {continent.name}
        </div>
      ))}
    </div>
  )
}

export default ContinentsGrid

