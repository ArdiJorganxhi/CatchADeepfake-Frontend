import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Upload from './pages/upload';
import Result from './pages/result';
import { AnimatePresence } from 'framer-motion';



function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <AnimatePresence>
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/upload' element={<Upload />}></Route>
      <Route exact path='/result' element={<Result />}></Route>
    </Routes>
    </AnimatePresence>
    </BrowserRouter>
    </div>
  );
}

export default App;
