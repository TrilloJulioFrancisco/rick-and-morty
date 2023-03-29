import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./NavStyle.css"

export default function NavBar({onSearch}) {
    return (
    <div>
        
        <div className="bttn-conteiner">
        <Link to="/about">
            <button className="button-about">About</button>
        </Link>
        <Link to="/home">
            <button className="button-home">Home</button>
        </Link>
        <Link to="/favorites">
            <button className="button-home">Favs</button>
        </Link>
        <SearchBar onSearch={onSearch} />
        </div>
     </div>
    );
}
