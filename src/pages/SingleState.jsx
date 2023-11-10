import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function SingleState() {
  const { country } = useParams();
  const url = "https://restcountries.com/v3.1/name/" + country;
  const { data, isPending, error } = useFetch(url);

  return(
    <div className="card">
      <h3>{country}</h3>
    </div>
  )

}

export default SingleState;
