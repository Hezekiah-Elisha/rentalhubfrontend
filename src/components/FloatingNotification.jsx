import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

FloatingNotification.propTypes = {
  myInfo: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default function FloatingNotification({ myInfo, icon }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
    });

    // Set the notification to disappear after 3 seconds (3000 milliseconds)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Adjust time as needed

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  // Tailwind classes for animation
  const className = `${
    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
  } transition-all duration-1000 ease-in-out fixed top-20 right-5 bg-slate-100 bg-opacity-70 text-white px-4 p-4 shadow-2xl rounded-md z-50 border-t-8 border-green-500`;

  return (
    <div className={className} data-aos="fade-left">
      <div className="flex items-center gap-2">
        <div>{icon}</div>
        <div className="flex items-center justify-center bg-green-500 rounded-full p-2">
          {myInfo}
        </div>
      </div>
    </div>
  );
}
