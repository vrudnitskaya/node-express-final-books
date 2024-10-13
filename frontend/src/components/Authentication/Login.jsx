import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';

import ShowPassword from '../Layouts/ShowPassword';
import { login } from '../../utils/DBRequests';
import { useAuth } from '../../AuthProvider';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState({});
    const { isLoggedIn, setUserSession } = useAuth();
    const passwordInputRef = useRef(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: '', form: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.email || !form.password) {
            setError({
                ...error,
                email: !form.email ? 'Email is required' : null,
                password: !form.password ? 'Password is required' : null,
            });
            return;
        }
        try {
            const result = await login(form);
            if (result.status === 200) {
                setUserSession(true, result.data);
                navigate('/dashboard');

                setForm({ email: '', password: '' });
                setError('');
            }
        } catch (error) {
            console.log(error);
            setError({
                ...error,
                form: 'Invalid email or password',
            });
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/dashboard');
        }
    }, [isLoggedIn]);

    return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <h2 className='font-alex font-semibold text-3xl md:text-5xl text-black'>Log In</h2>
            <form onSubmit={handleSubmit} className='w-10/12 md:w-1/3 2xl:w-1/4 flex flex-col'>
                <div className='w-full flex flex-col gap-2 mb-6'>
                    <label htmlFor="email" className='text-black'>Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                        className='border-2 border-grey rounded-md p-2'
                    />
                    {error.email && <p className='text-red'>{error.email}</p>}
                </div>
                <div className="w-full flex flex-col gap-2 mb-6 relative">
                    <label htmlFor="password" className="text-black">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        ref={passwordInputRef}
                        value={form.password}
                        onChange={handleChange}
                        className="border-2 border-grey rounded-md p-2"
                    />
                    <ShowPassword inputRef={passwordInputRef} /> 
                    {error.password && <p className="text-red">{error.password}</p>}
                </div>
                <button type="submit" className='w-full bg-lightRed text-pureWhite uppercase font-semibold tracking-wide rounded-md p-2 hover:bg-red transition duration-300 easy-in mb-2'>
                    Login
                </button>
                <p className='text-black'>Don't have an account? <Link to='/register' className='underline'>Sign up</Link></p>
                {error.form && <p className='text-red'>{error.form}</p>}
            </form>
        </div>
    );
};

export default Login;