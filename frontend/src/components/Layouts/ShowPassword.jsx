import React, { useState } from 'react';

import HideIcon from '../../assets/icons/hide-password.png';
import ShowIcon from '../../assets/icons/show-password.png';

const ShowPassword = ({ inputRef }) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setIsShowPassword(!isShowPassword);
        if (inputRef.current) {
            inputRef.current.type = isShowPassword ? 'password' : 'text'; 
        }
    };

    return (
        <button
            type="button"
            alt="show password"
            onClick={togglePasswordVisibility}
            className="absolute right-5 top-10"
        >
            <img src={isShowPassword ? HideIcon : ShowIcon} alt="toggle password visibility" className='h-6'/>
        </button>
    );
};

export default ShowPassword;