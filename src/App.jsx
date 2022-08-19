import './App.css';
import { useState, createContext } from "react"
import  Navbar  from './Companenta/Navbar/Navbar';
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Login from "./Pages/Login/Login";
import { Routes, Route } from "react-router-dom"
import Savatcha from './Pages/Savatcha/Savatcha';
import GameDatail from './Pages/GameDetail/GameDetail';
export const StateContext = createContext()
function App() {
  const [savatcha, setSavatcha] = useState([])
  return (
    <StateContext.Provider value={{ savatcha,setSavatcha }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/savat' element={<Savatcha />} />
          <Route path='/gameDetail/:id' element={<GameDatail />} />
        </Routes>
      </div>
    </StateContext.Provider>
  );
}

export default App;
