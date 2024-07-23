import { ChartPieIcon, UserPlusIcon, UsersIcon, BanknotesIcon, TagIcon } from "@heroicons/react/24/solid";
import { 
    ChartPieIcon as ChatPieIconOutline,
    UserPlusIcon as UserPlusIconOutline,
    UsersIcon as UsersIconOutline,
    BanknotesIcon as BanknotesIconOutline,
    TagIcon as TagIconOutline
} from "@heroicons/react/24/outline";


import { Link, useLocation } from "react-router-dom";

export default function SideNav() {
    const location = useLocation()
    // console.log("Current location is:", location.pathname); // Example usage of location
    const isActive = (path) => location.pathname === path;

    return (
        <div className="bg-white text-blue-950 h-screen w-64 flex flex-col fixed z-10 mt-16 shadow-lg">
            <div className="p-4">
                {/* <h1 className="text-2xl font-bold"></h1> */}
            </div>
            <ul className="flex flex-col flex-grow p-2 gap-2 text-md">
                <Link to="/dashboard" className={`p-2 ${isActive('/dashboard') ? 'bg-green-500' : 'hover:bg-slate-200'} rounded-xl hover:cursor-pointer flex flex-row gap-2`}>
                    {isActive('/dashboard') ? <ChartPieIcon className="size-6" /> : <ChatPieIconOutline className="size-6 text-gray-500" />}
                    Dashboard
                </Link>
                <Link to='/dashboard/profile' className={`p-2 ${isActive('/dashboard/profile') ? 'bg-green-500' : 'hover:bg-slate-200'} rounded-xl hover:cursor-pointer flex flex-row gap-2`}>
                    {isActive('/dashboard/profile') ? <UsersIcon className="size-6" /> : <UsersIconOutline className="size-6" />}
                    profile
                </Link>         
                <Link to='/dashboard/postproperty' className={`p-2 ${isActive('/dashboard/postproperty') ? 'bg-green-500' : 'hover:bg-slate-200'} rounded-xl hover:cursor-pointer flex flex-row gap-2`}>
                    {isActive('/dashboard/postproperty') ? <BanknotesIcon className="size-6" /> : <BanknotesIconOutline className="size-6" />}
                    Post Property
                </Link>            
                <Link to='/dashboard/categories' className={`p-2 ${isActive('/dashboard/categories') ? 'bg-green-500' : 'hover:bg-slate-200'} rounded-xl hover:cursor-pointer flex flex-row gap-2`}>
                    {isActive('/dashboard/categories') ? <TagIcon className="size-6" /> : <TagIconOutline className="size-6" />}
                    Categories
                </Link>                
            </ul>
            <div className="p-4 flex flex-row w-full justify-between">
                <button className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded">
                    Profile
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                    Logout
                </button>
            </div>
        </div>
    );
}
