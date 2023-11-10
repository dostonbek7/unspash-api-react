import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function CountryList() {
  const { data, isPending, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data &&
          data.map((item) => {
            const {
              name: { common },
              flags: { svg },
              population,
              capital,
              region,
            } = item;
            return (
              <li key={Math.random() * 10} className="card w-full bg-base-100 shadow-xl">
                <Link to={`/singleState/${common}`} className="w-full">
                <figure className="px-10 pt-10">
                  <img
                    src={svg}
                    alt={common + "flag"}
                    className="h-[250px] object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{common}</h2>
                  <div className="text-xl">
                    <p>
                      <span className="font-semibold">Population</span>:
                      {population}
                    </p>
                    <p>
                      <span className="font-semibold">Region</span>: {region}
                    </p>
                    <p>
                      <span className="font-semibold">Capital</span>:
                      {capital ? capital[0] : "No capital"}
                    </p>
                  </div>
                </div>
      </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default CountryList;
