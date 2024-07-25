import { useEffect } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

FloatingNotification.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};

export default function FloatingNotification({ isVisible, setIsVisible }) {
    // const 
  useEffect(() => {

    // Initialize AOS
    AOS.init({
        duration: 1000,
    });
    // Set the notification to disappear after 5 seconds (5000 milliseconds)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Adjust time as needed

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [setIsVisible]);

  // Tailwind classes for animation
  const visibilityClass = isVisible ? 'opacity-100' : 'opacity-0';
  const transitionClass = 'transition-opacity duration-1000 ease-in-out';

  return (
    <div className={`${visibilityClass} ${transitionClass} fixed top-20 right-5 bg-slate-100 bg-opacity-70 text-white px-4 p-4 shadow-2xl rounded-md z-50 border-t-8 border-green-500`} data-aos="fade-left">
      <div className='font-ams text-black'>
        This is a floating notification
      </div>
    </div>
  );
}


