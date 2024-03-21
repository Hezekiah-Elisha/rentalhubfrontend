import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NotFound from '../pages/NotFound'
import PropertyPage from '../pages/PropertyPage'
import LoginPage from '../pages/LoginPage'
import Footer from './Footer'
import Header from './Header'
import SignupPage from '../pages/SignupPage'
import DashboardPage from '../pages/DashboardPage'

export default function MainComponent() {
    const location = useLocation()
    // const isDashboard = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/signin');
    const isSignin = location.pathname.startsWith('/signin') || 
        location.pathname.startsWith('/signup') || 
        location.pathname.startsWith('/forgot-password') || 
        location.pathname.startsWith('/reset-password') ||
        location.pathname.startsWith('/verify-email') || 
        location.pathname.startsWith('/dashboard');

    return (
        <>
            {!isSignin && <Header/>}
            <Routes>
                <Route path='*' element={<NotFound/>}/>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/property/:id' element={<PropertyPage/>}/>
                <Route path='/property/:id/:slug' element={<PropertyPage/>}/>
                <Route path='/signin' element={<LoginPage/>}/>
                <Route path='/signup' element={<SignupPage/>}/>
                <Route path='/dashboard' element={<DashboardPage/>}>
                    <Route path='*' element={<NotFound/>}/>
                </Route>
            </Routes>
            {!isSignin && <Footer/>}
        </>
    )
}
