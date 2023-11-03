import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function SinglePages() {
  const data = useContext(GlobalContext)

  const {id} = useParams()
  const url = `https://api.unsplash.com/photos/${id}?client_id=${import.meta.env.VITE_APP_SECRET_NAME}`
  const { data : image, isPending, error } = useFetch(url)


  return <div>
    {isPending && <h1>Loading...</h1>}
    {error && <h1>{error}</h1>}
    {image && <>
    <img className='single-img' src={image.urls.regular} alt={image.alt_description} height={400} />
    <div className="image-description">
    <h4>Description</h4>
    <p>{image.description || 'No description'}</p>
    <hr />
    <h3>Author:</h3>
    <div className='author_desc'>
      <img className='profile_image' src={image.user.profile_image.large} alt="" />
      <h5>{image.user.name}</h5>
      <p><strong>Likes:</strong> {image.likes}💝</p>
      <p><strong>Location:</strong> {image.user.location || 'No location'}</p>
      <p><strong>Views:</strong> {image.views}</p>
    </div>
    </div>
  </>}

    </div>

}

export default SinglePages