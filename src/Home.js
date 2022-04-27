import { Link } from "react-router-dom";
import { About } from "./About";
import { useFetchData } from "./useFetchData";

export const Home = () => {
    const phoneNum = useFetchData('phonenum')
    console.log(phoneNum)
    return (
        <div>
            <h1> Home </h1>
            <Link to='/home'> home </Link>
            <Link to='/about'> about </Link>
        </div>
    );
}
