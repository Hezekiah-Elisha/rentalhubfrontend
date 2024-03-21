import { BrowserRouter } from 'react-router-dom';
import MainComponent from './components/MainComponent';

export default function App() {
  return (
    <BrowserRouter>
      <MainComponent/>
    </BrowserRouter>
  )
}