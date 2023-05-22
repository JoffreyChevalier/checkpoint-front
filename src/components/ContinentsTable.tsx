import { Continent, Continents } from "../utils/DataTypes";

interface Props {
  data: Continents
}

const ContinentsTable = ( props: Props ) => {

  const { data } = props;
  return (
    <div>
      { data && data.continents.map( ( continent: Continent ) => (
        <tr key={ continent.code }>
          <td>{ continent.name }</td>
        </tr>) ) }
    </div>
  );
};

export default ContinentsTable;

