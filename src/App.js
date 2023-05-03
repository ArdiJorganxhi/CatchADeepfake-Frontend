import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Upload from './pages/upload';
import Result from './pages/result';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/upload' element={<Upload />}></Route>
      <Route path='/result' element={<Result />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
