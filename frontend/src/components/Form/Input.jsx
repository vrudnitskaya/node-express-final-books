const Input = ({
    id,
    type,
    name,
    value,
    onChange,
    placeholder,
    disabled,
    children,
    min,
    max,
    error,
    className,
    pattern
}) => {
    return (
        <div className='w-full flex flex-col gap-2 mb-2'>
            <label htmlFor={id} className='text-black'>{children}</label>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={`border-2 border-grey rounded-md p-2 ${className}`}
                min={min}
                max={max}
                pattern={pattern}
            />
            {error && <p className='text-red'>{error}</p>}
        </div>
    )
};

export default Input;