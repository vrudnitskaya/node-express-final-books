import Icon from '../../assets/icons/search.png';

const Search = ({ setSearch, search, onSearch }) => {
    const handleInputChange = (e) => {
        setSearch({ ...search, term: e.target.value, isSubmitted: false });
    };

    return (
        <form className="bg-pureWhite border-2 border-grey rounded-md p-2 my-5 w-3/4 sm:w-1/3 flex justify-between" onSubmit={onSearch}>
            <input
                id="search"
                name="search"
                placeholder="Search by title, author or ISBN..."
                value={search.term}
                onChange={handleInputChange}
                className="flex-1 focus:border-transparent focus:outline-none"
            />
            <button type='submit' aria-label='search button'>
                <img src={Icon} className='w-6' alt='search icon' />
            </button>
        </form>
    );
};

export default Search;