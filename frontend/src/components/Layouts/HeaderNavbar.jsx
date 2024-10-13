import DashboardNavbar from './DashboardNavbar';
import { Link } from 'react-router-dom';
import logOutIcon from '../../assets/icons/logout.png';
import loginIcon from '../../assets/icons/login.png';
import registerIcon from '../../assets/icons/register.png';
import { useAuth } from '../../AuthProvider';

const HeaderNavbar = ({ isLogin, isJoin, onLogOut }) => {
    const { isLoggedIn } = useAuth();
    return (
        <nav className='flex gap-4 mr-1 sm:mr-8 font-spartan font-semibold text-xl'>
            {isLoggedIn
                ?
                <DashboardNavbar onLogOut={onLogOut}/>
                :
                <>
                    {isJoin &&
                        <Link to='/register' className='flex'>
                            <button className='bg-green w-24 h-8 border-2 border-green rounded-md text-pureWhite hover:bg-pureWhite hover:text-green hidden sm:block'>
                                Join
                            </button>
                            <button aria-label="Register" className='block sm:hidden'>
                                <img src={registerIcon} className='w-6' alt="join icon" />
                            </button>
                        </Link>}
                    {isLogin &&
                        <Link to='/login' className='flex'>
                            <button className='bg-pureWhite text-green w-24 h-8 border-2 border-green rounded-md hover:text-white hover:bg-green hidden sm:block'>
                                Log In
                            </button>
                            <button aria-label="Login" className='block sm:hidden'>
                                <img src={loginIcon} className='w-6' alt="login icon" />
                            </button>
                        </Link>}
                </>
            }
        </nav>
    );
};

export default HeaderNavbar;