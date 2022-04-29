import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./userContext";
import { getAuth, signOut } from "firebase/auth";

export const About = () => {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);

  const logOut = async () => {
    const auth = getAuth()
    try{
        await signOut(auth)
        navigate('/')
    }catch(err){
        console.log(err)
    }
  }

  return (
        <div>
            <h1> About </h1>
            <div>
                {userData.phoneNumber} <br/>
                {userData.uid}
            </div>
            <Link to='/home'> home </Link>
            <Link to='/about'> about </Link>
            <button onClick = {logOut}>Log Out </button>
        </div>
    );
}
