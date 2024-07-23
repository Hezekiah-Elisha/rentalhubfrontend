import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import SideNav from '../components/SideNav'

export default function DashboardPage() {
    return (
        <>
            <Header/>
            <div className='flex flex-row'>
                <SideNav/>
                <div className='w-full p-4 h-screen ml-64 mt-16'>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}
