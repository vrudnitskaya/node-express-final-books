import React, { useRef, useState } from 'react';

import Modal from '../Layouts/ModalWithOneButton';
import ShowPassword from '../Layouts/ShowPassword';
import { register } from '../../utils/DBRequests';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState({});
    const [isModalOpen, setModalOpen] = useState(false);
    const passwordInputRef = useRef(null);

    const navigate = useNavigate();

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        setError({ ...error, [name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !form.firstName ||
            !form.lastName ||
            !form.email ||
            !form.password ||
            form.password.length < 6
        ) {
            setError({
                firstName: !form.firstName ? 'Please provide your first name' : '',
                lastName: !form.lastName ? 'Please provide your last name' : '',
                email: !form.email ? 'Please provide your email' : '',
                password: (!form.password ? 'Password is required.' : (form.password.length < 6 ? 'Password must be at least 6 characters long.' : ''))
            });
            return;
        }

        try {
            const result = await register(form);
            if (result.status === 201) {
                setForm({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                });
                setError({});
                openModal();

                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            }
        } catch (error) {
            console.error(error);
            setError({ form: error.message });
        }
    };

    return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <h2 className='font-alex font-semibold text-3xl md:text-5xl text-black'>Sign up</h2>
            <form onSubmit={handleSubmit} className='w-10/12 md:w-1/3 2xl:w-1/4 flex flex-col text-black'>
                <div className='w-full flex flex-col gap-2 mb-2 md:mb-6'>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        className='border-2 border-grey rounded-md p-2'
                    />
                    {error.firstName && <p className='text-red'>{error.firstName}</p>}
                </div>
                <div className='w-full flex flex-col gap-2 mb-2 md:mb-6'>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        className='border-2 border-grey rounded-md p-2'
                    />
                    {error.lastName && <p className='text-red'>{error.lastName}</p>}
                </div>
                <div className='w-full flex flex-col gap-2 mb-2 md:mb-6'>
                    <label htmlFor="email">Email:</label>
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
                <button type="submit" className='w-full bg-lightRed text-pureWhite uppercase font-semibold tracking-wider rounded-md p-2 hover:bg-red transition duration-300 easy-in mb-2'>
                    Submit
                </button>
                {error.form && <p>{error.form}</p>}
            </form>
            <Modal isOpen={isModalOpen} onClose={closeModal} title="Registration complete!">
                <p>You have successfully registered.</p>
            </Modal>
        </div>
    );
};

export default Register;