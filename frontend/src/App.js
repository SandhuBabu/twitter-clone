import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Auth from './components/Auth/Auth';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from './Store/Auth/Action';

function App() {

  const dispath = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector(store => store.auth)

  useEffect(() => {
    if (jwt) {
      dispath(getUserProfile(jwt))
      navigate("/", {replace: true})
    }
  }, [auth?.jwt])

  return (
    <Routes>
      <Route path="/*" element={auth?.user ? <HomePage /> : <Auth />} />
    </Routes>
  )
}

export default App;
