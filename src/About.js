import { Link } from "react-router-dom";
import { useFetchData } from "./useFetchData";

export const About = () => {
    const about = useFetchData('about')
    console.log(about)
    return (
        <div>
            <h1> About </h1>
            <Link to='/home'> home </Link>
            <Link to='/about'> about </Link>
        </div>
    );
}
