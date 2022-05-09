import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useEffect, useState, useRef, useContext } from "react";
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom';
import { UserContext } from "./userContext";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField'

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
      console.log(result.user.phoneNumber, result.user.uid)
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
      <TextField
        helperText="Please enter your phone number"
        id="demo-helper-text-misaligned"
        label="Phone number"
        value={num} onChange={(e) => { setNum(e.target.value) }}
      />
      <Button onClick={login} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <OutlinedInput placeholder="Please enter here" value={password} onChange={(e) => { setPassword(e.target.value) }} />
      <Button variant="outlined" onClick={verify} > Verify </Button>
      <div id='recaptcha-container'></div>
    </div>
  );
}
