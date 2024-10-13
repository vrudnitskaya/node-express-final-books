import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import HeaderNavbar from './HeaderNavbar';
import Logo from '../../assets/logo.jpg';
import { logout } from '../../utils/DBRequests';
import { useAuth } from '../../AuthProvider';

const Header = () => {
    const [isLoginBtn, setIsLoginBtn] = useState(true);
    const [isJoinBtn, setIsJoinBtn] = useState(true);
    const [logoutError, setLogoutError] = useState({});
    const { clearUserSession} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        location.pathname === '/login' ? setIsLoginBtn(false) : setIsLoginBtn(true);
        location.pathname === '/register' ? setIsJoinBtn(false) : setIsJoinBtn(true);
    }, [location.pathname]);
    
    const handleLogout = async () => {
        try {
            const result = await logout();
            if (result.status === 200) {
                clearUserSession();
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            setLogoutError({
                ...logoutError,
                message: `Something went wrong. You're still logged in.`,
            });
        }
    };

    return (
        <header className="h-20 w-full flex items-center justify-between shrink-0">
            <div className='flex items-center ml-1 sm:ml-8'>
                <img src={Logo} className='h-8 sm:h-14' />
                <Link to='/'>
                    <h2 className="font-alex font-semibold text-lg sm:text-3xl text-black tracking-wider">My Beloved Library</h2>
                </Link>
            </div>
            <HeaderNavbar isLogin={isLoginBtn} isJoin={isJoinBtn} onLogOut={handleLogout}/>
        </header>
    )
};

export default Header;