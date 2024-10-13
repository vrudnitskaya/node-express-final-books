import { Link } from 'react-router-dom';
import img from '../../assets/404.jpg';

const NotFound = () => {
    return (
        <div className="bg-pureWhite w-full flex flex-col gap-7 items-center mt-4">
            <h1 className="text-mustard font-bold text-2xl sm:text-4xl font-spartan uppercase">
                Page not found
            </h1>
            <img src={img} alt="Error 404" className="w-4/5 md:w-1/4 rounded-full" />
            <Link
                className="text-black font-medium text-xl sm:text-2xl font-spartan mb-4 hover:underline"
                to="/"
            >
                Back to main page
            </Link>
        </div>
    );
};

export default NotFound;