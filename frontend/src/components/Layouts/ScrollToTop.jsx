import { useEffect, useState } from 'react';

import ArrowUp from '../../assets/icons/arrow-up.png';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        const scrollYInVh = (window.scrollY / window.innerHeight) * 100;
        if (scrollYInVh > 15) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    className="fixed bottom-3 sm:bottom-20 right-1 sm:right-3 bg-lightRed rounded-full sm:w-12 sm:h-12 flex items-center justify-center shadow-lg hover:bg-red"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    <img src={ArrowUp} alt="Arrow Up" />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;