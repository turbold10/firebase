import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./userContext";
import { getAuth, signOut } from "firebase/auth";
import { useFetchData } from "./useFetchData";

export const About = () => {
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation()
    const path = location.pathname.slice(1)

    const { data } = useFetchData(path)
    console.log(data)

    const logOut = async () => {
        const auth = getAuth()
        try {
            await signOut(auth)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1> About </h1>
            {/* <div>
                {userData.phoneNumber} <br />
                {userData.uid}
            </div> */}
            {
                data.map((el, i) => {
                    return (
                        <h1 key={i}>
                            {el.tem}
                       </h1>
                    )
                })
            }
            <Link to='/home'> home </Link>
            <Link to='/about'> about </Link>
            <button onClick={logOut}>Log Out </button>
        </div>
    );
}
