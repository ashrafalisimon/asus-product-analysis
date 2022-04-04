import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import NotFoundpage from './components/404page/NotFoundpage';

function App() {
  return (
    <div className='bg-gray-100'>
      <div className='bg-green-200'>
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFoundpage></NotFoundpage>}></Route>
      </Routes>
      <div className='bg-black py-4'>
          <p className='text-center text-white'><small> Copyright © 2022 Asus TuF Gaming</small></p>
      </div>
    </div>
  );
}

export default App;
