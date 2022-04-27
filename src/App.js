import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useEffect, useState, useRef } from "react";
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom';
import { useFetchData } from "./useFetchData";

function App() {
  const navigate = useNavigate();
  const [num, setNum] = useState('+976')
  const [password, setPassword] = useState('')

  const recaptchaVerifier = useRef()
  const confirmationResult = useRef()

  const usersData = useFetchData('users')
  console.log(usersData)

  useEffect(() => {
    recaptchaVerifier.current = new RecaptchaVerifier('recaptcha-container', {}, auth);
  }, [])

  const login = async () => {
    try {
      navigate('/home');
      confirmationResult.current = await signInWithPhoneNumber(auth, num, recaptchaVerifier.current)
      console.log(num)
    } catch (err) {
      console.log('error', num)
    }
  }

  const verify = async () => {
    try {
      const result = await confirmationResult.current.confirm(password)
      alert('login sucessful')
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

export default App;
