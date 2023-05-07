import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/home';
import Upload from './pages/upload';
import Result from './pages/result';



function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/upload' element={<Upload />}></Route>
      <Route exact path='/result' element={<Result />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
