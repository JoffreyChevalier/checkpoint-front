import { CountryDetails } from '../utils/DataTypes'

interface Props {
  open: boolean
  countryData: CountryDetails | undefined
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const countryModal = (props: Props) => {
  const {open, countryData, setOpen} = props
  console.log(countryData)
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center w-1/4 h-1/4 bg-sky-100 border-2 border-sky-200">
          <div className="flex justify-end w-full">
            <button className="w-8 h-8 bg-sky-100 border-2 border-sky-200 hover:bg-sky-200 hover:border-sky-300"
                    onClick={() => setOpen(!open)}>
              X
            </button>
          </div>
          <div className="flex flex-col justify-center items-center w-full h-full">
            <p className="text-4xl">{countryData?.country?.name}</p>
            <p className="text-2xl">{countryData?.country?.capital}</p>
            <p className="text-2xl">{countryData?.country?.currency}</p>
            <p className="text-2xl">{countryData?.country?.languages[0].name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default countryModal

