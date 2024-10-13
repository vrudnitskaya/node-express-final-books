import { Link } from "react-router-dom";
import mainImg from '../../assets/mainImg.jpg';
import { useAuth } from "../../AuthProvider";

const Home = () => {
    const { isLoggedIn } = useAuth();
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-8">
            <Link to='/login' className="w-11/12 md:w-1/2 xl:w-1/3"><img src={mainImg} alt="girl reading a book" className="w-full" /></Link>
            {
                isLoggedIn
                    ? <div></div>
                    : <Link to='/login' className="w-full md:w-1/2 xl:w-1/3 text-center">
                        <button className="w-1/2 md:w-1/3 h-10 text-xl bg-lightRed font-spartan font-semibold uppercase text-pureWhite rounded-md transition duration-300 ease-in hover:bg-red-500">
                            Get Started
                        </button>
                    </Link>
            }
        </div>
    )
};

export default Home;
