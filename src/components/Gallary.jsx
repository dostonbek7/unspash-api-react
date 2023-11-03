import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";



function Gallary({ data: { results } }) {
  const { addNewImages } = useContext(GlobalContext);
  return (
    <div className="gallary">
      <ul>
        {results.map((image) => {
          return (
            <li key={image.id}>
              <Link to ={`singlepages/${image.id}`}>
                <img
                  src={image.urls.regular}
                  alt={image.alt_description}
                  width={300}
                  height={300}
                />
              </Link>
              <button onClick={() => addNewImages(image)} className="heart">
                Liked 💖
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Gallary;
