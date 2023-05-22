import ContinentsTable from "../components/ContinentsTable";
import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../graphQL/continentsQuery";

const Homepage = () => {
  const { data } = useQuery( GET_CONTINENTS )
  console.log( data )
  return (
    <>
      <ContinentsTable data={ data }/>
    </>
  );
};

export default Homepage;

