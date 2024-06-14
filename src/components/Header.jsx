import { Link } from "react-router-dom";
import { MagnifyingGlassIcon, Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { logout } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";


export default function Header() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  // console.log(currentUser.user.name);

  const tologout = () => {
    dispatch(logout())
  }



  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const loginLinks = <div className="flex gap-2">
          <Link to="/signin" className="hover:underline">
            Login
          </Link>
          <Link to="/signup" className="hover:underline">
            Sign Up
          </Link>
        </div>

  const loggedInLinks = <div className="flex gap-2">
          <Link to="/dashboard/home" className="hover:underline">
            Dashboard
          </Link>
          <p onClick={tologout} className="hover:cursor-pointer hover:underline">
            Logout
          </p>
        </div>

  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className={`bg-blue-950 text-green-700 p-4 text-xl font-bold flex flex-row justify-between w-full align-baseline ${isScrolled ? "fixed top-0" : ""}`}>
      <Link to="/" className="font-ams hover:underline">
        The Rental Hub
      </Link>
      <div className="flex bg-green-700 p-2 rounded-full">
        <input
          type="text"
          className="rounded-full border-none outline-none bg-green-700 px-4 text-white placeholder:text-white placeholder:text-sm placeholder:font-thin placeholder:font-poppins font-poppins text-sm"
          placeholder="Search house here"
        />
        <MagnifyingGlassIcon className="h-6 w-6 text-white hover:cursor-pointer" />
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XMarkIcon className="h-6 w-6 text-white" /> : <Bars3BottomRightIcon className="h-6 w-6 text-white" />}
        </button>
      </div>
      <div className={`${!isOpen ? "block" : "hidden"}`}>
        {isOpen ? (
          null
        ) : 
            <div className="flex lg:flex flex-row justify-center items-center h-full gap-2 sm:hidden ">
              <Link to="/about" className="hover:underline">
                About
              </Link>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
              {currentUser ? (
                loggedInLinks
              ) : (
                loginLinks
              )}
            </div>
      }
      </div>
      <div className={`flex lg:flex-col font-poppins flex-row justify-between w-1/2 ${isOpen ? "block" : "hidden"}`}>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
        {currentUser ? (
          loggedInLinks
        ) : (
          loginLinks
        )}
      </div>
    </div>
  );

  // return (
  //   <div className={`bg-blue-950 text-green-700 p-4 text-xl font-bold flex flex-row justify-between w-full align-baseline ${
  //     isScrolled ? "fixed top-0" : ""
  //   }`}>
  //       <Link to='/' className='font-ams hover:underline'>The Rental Hub</Link>
  //       <div className="flex bg-green-700 p-2 rounded-full">
  //           <input type="text" className='rounded-full bg-green-700 px-4 text-white placeholder:text-white text-xl' placeholder='Search house here' />
  //           <MagnifyingGlassIcon className='h-6 w-6 text-white' />
  //       </div>
  //       <div className="font-poppins">
  //           <a href="">Logout</a>
  //       </div>
  //   </div>
  // )
}
