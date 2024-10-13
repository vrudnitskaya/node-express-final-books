import { ageCategories, allGenres, genresByAgeCategory, readingStatus } from "../Form/selectData";

const Filters = ({ setFilters }) => {
    const combinedGenresByAge = Object.values(genresByAgeCategory).flat();
    const allCombinedGenres = [...allGenres, ...combinedGenresByAge].sort((a, b) => a.label < b.label ? -1 : 1);

    const handleFilterChange = (e) => {
        const { name, value, checked } = e.target;
        setFilters((prevFilters) => {
            const filterArray = prevFilters[name];
            if (checked) {
                return {
                    ...prevFilters,
                    [name]: [...filterArray, value]
                };
            } else {
                return {
                    ...prevFilters,
                    [name]: filterArray.filter((item) => item !== value)
                };
            }
        });
    };

    return (
        <div className="flex sm:flex-col gap-4 sm:gap-0">
            <div>
                <p className="font-semibold mb-2">Age Category:</p>
                <div className="flex gap-2 flex-wrap">
                    {ageCategories.map(({ label, value }) => (
                        <label key={value}>
                            <input type="checkbox" name="ageCategory" value={value}
                                onChange={handleFilterChange} className="mr-1"
                            />
                            {label}
                        </label>
                    ))}
                </div>
                <hr className="border-t border-green my-4 hidden sm:block" />
            </div>
            <div>
                <p className="font-semibold mb-2">Reading Status:</p>
                <div className="flex gap-2 flex-wrap">
                    {readingStatus.map(({ label, value }) => (
                        <label key={value}>
                            <input type="checkbox" name="status" value={value}
                                onChange={handleFilterChange} className="mr-1"
                            />
                            {label}
                        </label>
                    ))}
                </div>

                <hr className="border-t border-green my-4 hidden sm:block" />
            </div>
            <div>
                <p className="font-semibold mb-2">Genres:</p>
                <div className="flex gap-2 sm:flex-wrap flex-col sm:h-fit">
                    {allCombinedGenres.map(({ label, value }) => (
                        <label key={value}>
                            <input type="checkbox" name="genre" value={value}
                                onChange={handleFilterChange} className="mr-1"
                            />
                            {label}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Filters;