import { Link } from "react-router-dom";
import { useFetchData } from "./useFetchData";

export const Home = () => {
    return (
        <div>
            <h1> Home </h1>
            <Link to='/home'> home </Link>
            <Link to='/about'> about </Link>
        </div>
    );
}
