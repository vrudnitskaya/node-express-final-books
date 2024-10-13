import Select from 'react-tailwindcss-select';

const CustomSelect = ({
    options,
    placeholder,
    multiple,
    onChange,
    value,
}) => {
    return (
        <Select
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            options={options}
            isMultiple={multiple}
            classNames={{
                menuButton: ({ isDisabled }) => (
                    `flex text-black border-2 border-grey rounded-md shadow-sm transition-all duration-300 focus:outline-none ${isDisabled
                        ? "bg-grey"
                        : "bg-white focus:border-black"
                    }`
                ),
                menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-black",
                listItem: ({ isSelected }) => (
                    `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${isSelected
                        ? `text-white bg-lightRed`
                        : `text-black hover:bg-mustard`
                    }`
                )
            }}
        />
    );
};

export default CustomSelect;