import { ChartPieIcon, UserPlusIcon, UsersIcon, BanknotesIcon } from "@heroicons/react/24/solid";
import { 
    ChartPieIcon as ChatPieIconOutline,
    UserPlusIcon as UserPlusIconOutline,
    UsersIcon as UsersIconOutline,
    BanknotesIcon as BanknotesIconOutline
} from "@heroicons/react/24/outline";


import { Link, useLocation } from "react-router-dom";

export default function SideNav() {
    const location = useLocation()
    // console.log("Current location is:", location.pathname); // Example usage of location
    const isActive = (path) => location.pathname === path;

    return (
        <div className="bg-blue-950 text-white h-screen w-64 flex flex-col fixed -z-10">
            <div className="p-4">
                {/* <h1 className="text-2xl font-bold"></h1> */}
            </div>
            <ul className="flex flex-col flex-grow p-2 gap-2 text-lg">
                <Link to="/dashboard" className={`p-2 ${isActive('/dashboard') ? 'bg-slate-700' : 'hover:bg-slate-500'} rounded-xl hover:cursor-pointer flex flex-row gap-2`}>
                    {isActive('/dashboard') ? <ChartPieIcon className="size-6" /> : <ChatPieIconOutline className="size-6" />}
                    Dashboard
                </Link>
                <Link to='/dashboard/profile' className={`p-2 ${isActive('/dashboard/profile') ? 'bg-slate-700' : 'hover:bg-slate-500'} rounded-xl hover:cursor-pointer flex flex-row gap-2`}>
                    {isActive('/dashboard/profile') ? <UsersIcon className="size-6" /> : <UsersIconOutline className="size-6" />}
                    profile
                </Link>         
                <Link to='/dashboard/accounts' className={`p-2 ${isActive('/dashboard/accounts') ? 'bg-slate-700' : 'hover:bg-slate-500'} rounded-xl hover:cursor-pointer flex flex-row gap-2`}>
                    {isActive('/dashboard/postproperty') ? <BanknotesIcon className="size-6" /> : <BanknotesIconOutline className="size-6" />}
                    Post Property
                </Link>            
                <Link to='/dashboard/transactions' className={`p-2 ${isActive('/dashboard/transactions') ? 'bg-slate-700' : 'hover:bg-slate-500'} rounded-xl hover:cursor-pointer flex flex-row gap-2`}>
                    {isActive('/dashboard/transactions') ? <UserPlusIcon className="size-6" /> : <UserPlusIconOutline className="size-6" />}
                    Transactions
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
