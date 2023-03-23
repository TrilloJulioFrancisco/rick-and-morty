import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";


export default function NavBar({onSearch}) {
    return (
    <div>
        <SearchBar onSearch={onSearch} />
        <Link to="/about">
            <button>About</button>
        </Link>
        <Link to="/home">
            <button>Home</button>
        </Link>
        
     </div>
    );
}
