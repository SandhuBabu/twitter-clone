import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <Routes>
      <Route path='/' element={true?<HomePage /> : <Auth />}></Route>
    </Routes>
  )
}

export default App;
