import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const email = e.target[0].value;
    const password = e.target[1].value;
    

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className='logo'>Chat App</span>
        <span className='title'>Ragister</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Enter your email' />
          <input type="password" placeholder='Enter your password'/>
          <button>Login</button>
          {err && <span>Somthing went wrong</span>}
        </form>
        <p>You don't have an account?<Link to="/register"> ragister</Link></p>
      </div>
      
    </div>
  )
}

export default Login
