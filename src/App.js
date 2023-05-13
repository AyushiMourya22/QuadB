import './App.css';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Movie } from './components/Movie';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Shows } from './components/Shows';
function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shows' element={<Shows/>}></Route>
        <Route path='/:id' element={<Movie/>}></Route>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
