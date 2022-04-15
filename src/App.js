import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import About from './Components/About/About';
import Navbar from './Components/Sheard/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Cars from './Components/Cars/Cars';
import Home from './Components/Home/Home';
import Car from './Components/Car/Car';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/cars" element={<Cars></Cars>} />
        <Route path="/car" element={<Car></Car>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
