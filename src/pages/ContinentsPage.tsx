import ContinentsGrid from "../components/ContinentsGrid";
import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../graphQL/continentsQuery";
import { useState } from "react";
import CountriesGrid from "../components/CountriesGrid";

const ContinentsPage = () => {
  const [ continentCode, setContinentCode ] = useState( "" );
  const [ countries, setCountries ] = useState( [] );
  const { data: continents } = useQuery( GET_CONTINENTS )

  handleContinentClick = ( code: string ) => {
    setContinentCode( code );

  }

  useEffect( () => {

  }, [ continentCode ] );

  return (
    <div className="flex h-screen justify-center items-center bg-slate-100">
      <ContinentsGrid continents={ continents } setContinentCode={ setContinentCode }/>
      <CountriesGrid/>
    </div>
  );
};

export default ContinentsPage;

