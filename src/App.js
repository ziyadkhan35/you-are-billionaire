import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Basket from './components/Basket';
import Header from './components/Header';
import { Route, Routes } from 'react-router';
import Footer from './components/Footer';
import Home from './pages/home';
import About from './pages/about-us';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="basket" element={<Basket />} />
        <Route path="about-us" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
