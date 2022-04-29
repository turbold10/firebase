import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useEffect, useState, useRef, useContext } from "react";
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom';
import { UserContext } from "./userContext";
// import { useFetchData } from "./useFetchData";

export const Login = () => {
  const { setUserData, userData } = useContext(UserContext);
  const navigate = useNavigate();
  const [num, setNum] = useState('+976')
  const [password, setPassword] = useState('')

  const recaptchaVerifier = useRef()
  const confirmationResult = useRef()

  useEffect(() => {
    recaptchaVerifier.current = new RecaptchaVerifier('recaptcha-container', {}, auth);
  }, [])

  const login = async () => {
    try {
      confirmationResult.current = await signInWithPhoneNumber(auth, num, recaptchaVerifier.current)
      console.log(num)
    } catch (err) {
      console.log('error', num)
    }
  }

  const verify = async () => {
    try {
      const result = await confirmationResult.current.confirm(password)
      console.log(result.user.phoneNumber,result.user.uid)
      setUserData(result.user)
      console.log(userData)
      alert('login sucessful')
      navigate('/home');
    } catch (err) {
      console.log(err)
      alert('failed')
    }
  }

  return (
    <div>
      <input value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={login}> login </button>
      <input value={password} onChange={(e) => { setPassword(e.target.value) }} />
      <button onClick={verify}> verify </button>
      <div id='recaptcha-container'></div>
    </div>
  );
}
