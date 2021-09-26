import "./NavBar.scss";
import { Link } from 'react-router-dom';

export default function NavBar () {
    return (

        <div className="wrapper">
            <h1><Link to="/Home">Home</Link>  </h1>
            <h1><Link to="/About">About</Link> </h1>
            <h1> <Link to="/Portfolio">Portfolio</Link></h1>
            <h1><Link to="/Contact">Contact</Link></h1>
        </div>
        
)

}