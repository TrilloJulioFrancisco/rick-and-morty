import SearchBar from "./SearchBar";


export default function NavBar({onSearch}) {
    return (
    <div>
        <SearchBar onSearch={onSearch} />
     </div>
    )
}
