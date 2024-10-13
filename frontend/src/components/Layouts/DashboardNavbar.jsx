import { NavLink } from "react-router-dom";
import logOutIcon from '../../assets/icons/logout.png';
import { useAuth } from "../../AuthProvider";

const DashboardNavbar = ({onLogOut}) => {
    const {userData} = useAuth();
    return (
        <nav className="flex gap-4 bg-pureWhite text-black rounded-md">
                <NavLink
                    to='/dashboard'
                    className={({ isActive }) =>
                        isActive
                            ? 'flex gap-2 font-spartan text-sm md:text-xl font-semibold'
                            : 'flex gap-2 font-spartan text-sm md:text-xl font-medium  opacity-60 hover:opacity-100'
                    }
                >
                    {`${userData.firstName}'s Library`}
                </NavLink>
            <div className='flex' onClick={onLogOut}>
                    <button className='bg-pureWhite text-green w-24 h-8 border-2 border-green rounded-md hover:text-white hover:bg-green hidden sm:block'>
                        Log Out
                    </button>
                    <button aria-label="Log out" className='block sm:hidden'>
                        <img src={logOutIcon} className='w-6' alt="logout icon" />
                    </button>
                </div>
        </nav>
    );
};

export default DashboardNavbar;