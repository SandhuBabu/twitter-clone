import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Auth from './components/Auth/Auth';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/*" element={false?<HomePage /> : <Auth />}></Route>
    </Routes>
  )
}

export default App;
