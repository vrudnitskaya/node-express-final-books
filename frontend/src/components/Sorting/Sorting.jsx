import CustomSelect from "../Form/CustomSelect";
import { sortingOptions } from '../Form/selectData';

const Sorting = ({ sortOption, setSortOption }) => {
    const handleOption = (value) => {
        setSortOption(value);
    };
    return (
        <>
            <p className="font-semibold mb-2">Sort By:</p>
            <CustomSelect
                options={sortingOptions}
                multiple={false}
                onChange={handleOption}
                value={sortOption}
            />
            <hr className="border-t border-green mt-6 mb-4" />
        </>

    )
};

export default Sorting;