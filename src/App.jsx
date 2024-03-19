import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import PropertyPage from './pages/PropertyPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/property/:id' element={<PropertyPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}