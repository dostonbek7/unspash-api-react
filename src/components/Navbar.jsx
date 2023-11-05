import { Link } from "react-router-dom"
import { useGlobalContext } from "../hooks/useGlobalContext"


function Navbar() {
  const {likedImages, changeMode, mode} = useGlobalContext()

  const changeGlobalMode = ()=>{
    const newMode = mode === 'light' ? 'dark' : 'light'
    changeMode(newMode)
  }


  return (
    <div className="navbar container">
       <h3 className="logo">Unsplash</h3>
       <nav>
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/contact">Contact</Link>
       <Link to="/likedimages">
       Like ❤️ :
        <span>{likedImages.length}</span>
        </Link>
        <Link to='/login'>Login</Link>
         <button className="mode-btn" onClick={changeGlobalMode}>Change Mode</button>
       </nav>
    </div>
  )
}

export default Navbar