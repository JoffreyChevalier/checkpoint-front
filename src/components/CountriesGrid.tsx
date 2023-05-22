import { Continent } from "../utils/DataTypes";
import React from "react";

const CountriesGrid = () => {

  return (
    <div>
      <div className="grid grid-flow-dense grid-cols-4">
        { data && data.continents.map( ( continent: Continent ) => (
          <div
            className="flex justify-center items-center w-32 h-24 bg-sky-100 border-2 border-sky-200 hover:bg-sky-200 hover:border-sky-300 cursor-pointer"
            key={ continent.code }
            onClick={ () => setContinentCode( continent.code ) }>
            { continent.name }
          </div>
        ) ) }
      </div>
    </div>
  );
};

export default CountriesGrid;
