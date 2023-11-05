import {FcGoogle} from 'react-icons/fc'
import { signUpLogin } from '../firebase/firebaseConfig'
import { useGlobalContext } from '../hooks/useGlobalContext'

function Login() {
const {addUser, user} = useGlobalContext()

  const login = ()=>{
    signUpLogin()
    .then((result)=>{
      console.log(result);
      addUser(result.user)
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  return (
    <div className='login__card'>
      { !user && <h1>Login with Google account</h1>}
      { user && <>
        <h1 className='form-title'>{user.displayName}</h1>
        <img className='user__image' src={user.photoURL} alt="" />
      </>}
      <button onClick={login} className='login-btn'>
        <span className="btn-inner">
          <span>Google</span>
            <FcGoogle/>
        </span>
        </button>
    </div>
  )
}

export default Login