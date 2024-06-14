import { Outlet, useNavigate } from "react-router-dom"
import DashboardHeader from "../components/DashboardHeader";
import SideNav from "../components/SideNav";
import { useEffect } from "react";


export default function DashboardPage() {
    const navigation = useNavigate();

    useEffect(() => {
        // Redirects to /dashboard/home immediately when this component mounts
        navigation('/dashboard/home');
    }, [navigation]); // Dependency array with navigate to ensure effect is run once

    return (
        <div className="flex flex-col h-screen">
            <DashboardHeader />
            <div className="flex flex-row w-full h-full">
                <SideNav />
                { navigation.state === 'loading' && "Loading..."}
                <Outlet className="font-poppins" />
            </div>
        </div>
    )
}
