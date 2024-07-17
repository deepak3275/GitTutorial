import Gallery from "./Gallery"
import SearchForm from "./SearchForm"
import ThemeToggle from "./ThemeToggle"

console.log(ThemeToggle,"ThemeToggle")

const ImagesSearch = () => {
    return (
        <div className="ds">
            <ThemeToggle />
            <SearchForm />
            <Gallery />
        </div>
    )
}


export default ImagesSearch