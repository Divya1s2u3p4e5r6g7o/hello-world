import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes } from 'react-router-dom';
import React,{useState} from 'react'
import Home from './components/Home'
import About from './components/About';
import Navbar from './components/Navbar';
import Login1 from './header/Login1';
import Teaching1 from './LandingScreen/Teaching';
import Sidebar from './LandingScreen/Sidebar';





function App() {
  const[sidebar,setSidebar] =useState(false);

  const toggleSidebar =() =>{
    setSidebar((prevState)=>!prevState)
  }
  return (
    <div className="App">

<Navbar/>

<Routes>
  <Route exact path='/home' element={<Home/>}></Route>
  <Route exact path='/about' element={<About/>}></Route>
  <Route exact path='/login' element={<Login1/>}></Route>

  <Route exact path='/landingscreen' element={<Teaching1 sidebar={sidebar} openSidebar={toggleSidebar}/>}></Route>

</Routes>


     
      
    </div>
  );
}

export default App;
