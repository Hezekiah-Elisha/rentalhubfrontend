import { Outlet, useNavigate } from "react-router-dom"
import DashboardHeader from "../components/DashboardHeader";
import SideNav from "../components/SideNav";


export default function DashboardPage() {
    const navigation = useNavigate();


    return (
        <div className="flex flex-col items-center justify-center">
            <DashboardHeader />
            <div className="flex flex-row w-full">
                <SideNav />
                { navigation.state === 'loading' && "Loading..."}
                <Outlet />
            </div>
        </div>
    )
}
