import { useState } from "react";
import Gallary from "../components/Gallary";
import Search from "../components/Search";
import { useFetch } from "../hooks/useFetch";
const API = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_APP_SECRET_NAME}&page=1&per_page=18&query=`

function Home() {
  const [url, setUrl] = useState(API + "bmw");
  const { data, isPending, error } = useFetch(url);

  const setNewUrl = (url) => {
    setUrl(API + url);
  };
  return (
    <div className="home-page">
      <h1 className="form-title">Search Any Image:</h1>
      <Search setNewUrl={setNewUrl} />
      {data && <Gallary data={data} />}
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      </div>
  );
}

export default Home;
